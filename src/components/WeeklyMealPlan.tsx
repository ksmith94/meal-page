import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import recipes from "../DemoData/Recipes";
import { client } from "../lib/sanity/client";
import AddRecipe from "./AddRecipeModal";
import RecipePreview from "./RecipePreview";
import { capitalizeFirstLetterOfString, getSunday, getWeek } from "./utils";

const weekdays = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday'
];

interface DisplayRecipe {
  title: string,
  image: string,
  description: string,
  time: number,
  baseServings: number,
  instructions: object,
  _id: string
}

interface WeeklyPlan {
  [key: string]: DisplayRecipe
}


function WeeklyMealPlan(): JSX.Element {
  const [show, setShow] = useState(false);
  const [day, setDay] = useState('');
  const [selectedRecipes, setSeletedRecipes] = useState<(Recipe | null)[]>([
    null,
    recipes[1],
    recipes[2],
    recipes[3],
    recipes[3],
    recipes[4],
    recipes[4],
  ]);
  const [mealPlan, setMealPlan] = useState<WeeklyPlan>();
  // const [weekDays, setWeekDays] = useState<string[]>([]);
  const week = getWeek();

  const handleAddRecipe = (day: string) => {
    setShow(true);
    setDay(day);
  }

  const handleRecipeSelection = (recipe: Recipe) => {
    const updatedSelectedRecipes = [...selectedRecipes];
    const dayIndex = days.findIndex((d) => d[0] === day);
    updatedSelectedRecipes[dayIndex] = recipe;
    setSeletedRecipes(updatedSelectedRecipes);
  }

  const days: [string, (Recipe | null)][] = [
    ['Sunday', null], 
    ['Monday', recipes[1]], 
    ['Tuesday', recipes[2]], 
    ['Wednesday', recipes[3]], 
    ['Thursday', recipes[3]], 
    ['Friday', recipes[4]], 
    ['Saturday', recipes[4]]
  ];

  useEffect(() => {
    const fetchMealPlan = async () => {
      const currentWeek = getSunday();
      try {
        const res = await client.fetch(
          `*[_type == "weeklyPlan" && week == $week]{
            sunday->{title, image, description, time, baseServings, instructions, _id},
            monday->{title, image, description, time, baseServings, instructions, _id},
            tuesday->{title, image, description, time, baseServings, instructions, _id},
            wednesday->{title, image, description, time, baseServings, instructions, _id},
            thursday->{title, image, description, time, baseServings, instructions, _id},
            friday->{title, image, description, time, baseServings, instructions, _id},
            saturday->{title, image, description, time, baseServings, instructions, _id}
          }`,
          { week: currentWeek}
        )
        
        setMealPlan(res[0]);
      } catch (err) {
        console.error(err);
      }
    }

    fetchMealPlan();
    // setWeekDays(Object.keys(mealPlan).filter((key) => key.includes('day')));
  }, [])

  return (
    <div>
      <Week>Your meals for the week of {week}</Week>
      <WeekCal className="weekly-plan">
        {
          mealPlan ?
          weekdays.map((day, index) => (
            <Weekday className="weekday" key={index}>
              <Day>{capitalizeFirstLetterOfString(day)}</Day>
              {
                mealPlan[day] ? (
                  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                  <RecipePreview {...mealPlan[day]} />
                ) : (
                  <NoRecipe>
                    <CreateARecipe>No recipe for today</CreateARecipe>
                    <RecipeButton onClick={() => handleAddRecipe(day[0])}>Add one!<PlusIcon icon={faPlus} /></RecipeButton>
                  </NoRecipe>
                )
              }
            </Weekday>
          )) : 
          weekdays.map((weekday, i) => (
            <Weekday className="weekday" key={i}>
              <Day>{capitalizeFirstLetterOfString(weekday)}</Day>
              <NoRecipe>
                <CreateARecipe>No recipe for today</CreateARecipe>
                <RecipeButton onClick={() => handleAddRecipe(day[0])}>Add one!<PlusIcon icon={faPlus} /></RecipeButton>
              </NoRecipe>
            </Weekday>
          ))
        }
        <AddRecipe day={day} show={show} onClose={() => setShow(false)} onRecipeSelect={handleRecipeSelection}/>
      </WeekCal>
      <Link to={`/create-meal-plan`}>Create a Meal Plan for this week!</Link>
    </div>
  )
}

export default WeeklyMealPlan;

const WeekCal = styled.div`
  display: grid;
  grid-template-columns: 180px 180px 180px 180px 180px 180px 180px;
  grid-column-gap: 16px; 
  margin: 0 16px;
  width: 97%;
  overflow: auto;
`

const Week = styled.h2`
  margin-left: 16px;
  font-size: 20px;
  font-weight: 600;
  color: hsl(217, 40%, 20%);
`

const Weekday = styled.div`
  padding-right: 8px;
`

const Day = styled.h3`
  font-size: 20px;
  color: hsl(217, 40%, 20%);
`

const NoRecipe = styled.div`
  background: hsl(217, 30%, 90%);
  color: hsl(217, 40%, 20%);
  padding-bottom: 8px;
  border-radius: 10px;
  height: 180px;
  width: 180px;
  margin-right: 8px;
  overflow: auto;
  display: grid;
  grid-template-rows: 30% 30%;
  grid-row-gap: 4px;
`

const CreateARecipe = styled.p`
  width: fit-content;
  margin: 16px auto;
  font-size: 18px;
`

const PlusIcon = styled(FontAwesomeIcon)`
  margin: 0 4px;
`

const RecipeButton = styled.button`
  justify-self: center;
  height: fit-content;
  padding: 4px 2px;
  background: hsl(210, 65%, 85%);
  border: 1px solid hsl(217, 40%, 20%);
  border-radius: 4px;

  &:hover {
    background-color: hsl(215, 60%, 75%);
    border: 2px solid hsl(217, 40%, 20%);
  }
`