import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";
import recipes from "../DemoData/Recipes";
import AddRecipe from "./AddRecipeModal";
import RecipePreview from "./RecipePreview";

function WeeklyMealPlan(): JSX.Element {
  const [show, setShow] = useState(false);
  const [day, setDay] = useState('');

  const handleAddRecipe = (day: string) => {
    setShow(true);
    setDay(day);
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

  function getWeek() {
    const sundayDate = new Date();
    const saturdayDate = new Date();
    const day = sundayDate.getDay();
    const sundayDiff = sundayDate.getDate() - day;
    const saturdayDiff = saturdayDate.getDate() + 7 - day;
    const sunday = new Date(sundayDate.setDate(sundayDiff)).toLocaleDateString('us-EN', {month: 'long', day: 'numeric'});
    const saturday = new Date(saturdayDate.setDate(saturdayDiff)).toLocaleDateString('us-EN', {month: 'long', day: 'numeric'});
    return sunday + ' – ' + saturday;
  }

  const week = getWeek();

  return (
    <div>
      <Week>Your meals for the week of {week}</Week>
      <WeekCal className="weekly-plan">
        {
          days.map((day, index) => (
            <Weekday className="weekday" key={index}>
              <Day>{day[0]}</Day>
              {
                day[1] ? (
                  <RecipePreview {...day[1]} />
                ) : (
                  <NoRecipe>
                    <CreateARecipe>No recipe for today</CreateARecipe>
                    <RecipeButton onClick={() => handleAddRecipe(day[0])}>Add one!<PlusIcon icon={faPlus} /></RecipeButton>
                  </NoRecipe>
                )
              }
            </Weekday>
          ))
        }
        <AddRecipe day={day} show={show} onClose={() => setShow(false)}/>
      </WeekCal>
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