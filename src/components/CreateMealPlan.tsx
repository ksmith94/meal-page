import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { client } from "../lib/sanity/client";
import { capitalizeFirstLetterOfString, getSunday, getWeek } from "./utils";

type Indexable = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

function CreateMealPlan(): JSX.Element {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState<(Recipe[] | null)>([]);
  const [mealPlan, setMealPlan] = useState<Indexable>({
    sunday: null,
    monday: null,
    tuesday: null,
    wednesday: null,
    thursday: null,
    friday: null,
    saturday: null
  });

  const handleCreateMealPlan = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const recipeFetchPromises = days.map(async (day) => {
        const recipe: Recipe = mealPlan[day];
        if (recipe) {
          const res = await client.fetch(
            `*[_type == "recipe" && title == $title][0]._id`,
            { title: recipe.title }
          );
          return { [day]: { _ref: res, _type: "reference" } };
        }

        return { [day]: null };
      })

      const resolvedReferences = await Promise.all(recipeFetchPromises);

      const updatedMealPlan = resolvedReferences.reduce(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (result: { [x: string]: {_ref: any; _type: string;} | null }, reference) => ( { ... result, ...reference} ),
        {}
      );

      const mealPlanWithReferences = {
        _type: 'weeklyPlan',
        week: getSunday(),
        sunday: updatedMealPlan.sunday,
        monday: updatedMealPlan.monday,
        tuesday: updatedMealPlan.tuesday,
        wednesday: updatedMealPlan.wednesday,
        thursday: updatedMealPlan.thursday,
        friday: updatedMealPlan.friday,
        saturday: updatedMealPlan.saturday,
      };


      const newMealPlan = await client.create(mealPlanWithReferences);

      navigate(`/your-meal-plan/${newMealPlan._id}`)

      console.log('Weekly plan created successfully!', newMealPlan);
    } catch (err) {
      console.error(err);
    }
  }

  const handleUpdateMeal = (day: string, recipeTitle: string) => {
    const selectedRecipe = recipes?.find((recipe) => recipe.title === recipeTitle)

    const updatedMealPlan = JSON.parse(JSON.stringify(mealPlan));
    updatedMealPlan[day] = selectedRecipe;

    setMealPlan(updatedMealPlan);
  }

  const days = Object.keys(mealPlan);
  const displayDays = days.map(day => capitalizeFirstLetterOfString(day));

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await client.fetch(`
          *[_type == 'recipe']{
            _id,
            title
          }
        `)
      
        setRecipes(res);
      } catch (err) {
        console.error(err);
      }
    }

    fetchRecipes();
  }, []);

  // useEffect(() => {
  //   let timer: NodeJS.Timeout;

  //   if (showSuccessMessage) {
  //     timer = setTimeout(() => {
  //       setShowSuccessMessage(false);
  //     }, 3000)
  //   }

  //   return () => {
  //     clearTimeout(timer);
  //   }
  // }, [showSuccessMessage])

  return (
    <Wrapper>
      <CreateRecipeHeader>{`Create a meal plan for the week of ${getWeek()}`}</CreateRecipeHeader>
      <SubHeader>For each day, select a recipe to make. When you&apos;re finished, click the &ldquo;Create Meal Plan&ldquo; button to submit it.</SubHeader>
      {
        recipes ?
        <CreateRecipeForm onSubmit={handleCreateMealPlan}>
        {
          displayDays.map((day, i) => (
            <Weekday key={i}>
              <label>{day}</label>
              <RecipeSelect name='recipes' onChange={(e) => handleUpdateMeal(day.toLowerCase(), e.target.value)}>
                <option value=''>Select a Recipe</option>
                {
                  recipes.map((recipe, i) => (
                    <option key={i} value={recipe.title}>{recipe.title}</option>
                  ))
                }
              </RecipeSelect>
            </Weekday>
          ))
        }
        <CreateRecipeButton type='submit'>Create Meal Plan</CreateRecipeButton>
      </CreateRecipeForm> :
      <p>Error loading recipes</p>
      }
      {/* {showSuccessMessage && <p>Meal Plan Created!</p>} */}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: auto;
  margin-top: 112px;
  width: 60%;
  background-color: hsl(217, 40%, 80%);
  padding: 24px;
  border-radius: 8px;
  border: 2px solid hsl(217, 40%, 20%);
  color: hsl(217, 40%, 20%);
  font-family: “Lexend Deca”, “Helvetica”, sans-serif;
`

const CreateRecipeHeader = styled.h3`
  margin: auto;
  margin-bottom: 8px;
  width: fit-content;
  font-size: 20px;
`

const SubHeader = styled.p`
  width: 80%;
  margin: auto;
  margin-bottom: 16px;
`

const CreateRecipeForm = styled.form`
  width: 80%;
  margin: auto;
  display: grid;
`

const Weekday = styled.div`
  width: fit-content;
  margin: 8px auto;
  display: grid;
  grid-template-columns: 100px auto;
`

const RecipeSelect = styled.select`
  width: fit-content;
  background: hsl(217, 30%, 90%);
  color: hsl(217, 40%, 20%);
`

const CreateRecipeButton = styled.button`
  margin-top: 12px;
  justify-self: end;
`

export default CreateMealPlan;