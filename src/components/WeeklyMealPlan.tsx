import React from "react";
import styled from "styled-components";
import recipes from "../DemoData/Recipes";
import RecipePreview from "./RecipePreview";

function WeeklyMealPlan(): JSX.Element {
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
                  <div>
                    <p>No recipe for today</p>
                  </div>
                )
              }
            </Weekday>
          ))
        }
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