import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { client } from "../lib/sanity/client";
import { capitalizeFirstLetterOfString, getSunday } from "./utils";

type Indexable = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

function CreateMealPlan(): JSX.Element {
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

      console.log(mealPlanWithReferences)

      const newMealPlan = await client.create(mealPlanWithReferences);

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

  useEffect(() => {
    console.log(mealPlan);
  }, [mealPlan])

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

  return (
    <Wrapper>
      {
        recipes ?
        <form onSubmit={handleCreateMealPlan}>
        {
          displayDays.map((day, i) => (
            <div key={i}>
              <label>{day}</label>
              <select name='recipes' onChange={(e) => handleUpdateMeal(day.toLowerCase(), e.target.value)}>
                <option value=''>Select a Recipe</option>
                {
                  recipes.map((recipe, i) => (
                    <option key={i} value={recipe.title}>{recipe.title}</option>
                  ))
                }
              </select>
            </div>
          ))}
          <button type='submit'>Create Meal Plan</button>
      </form> :
      <p>Error loading recipes</p>
      }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 112px;
`

export default CreateMealPlan;