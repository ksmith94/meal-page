import React from "react";
import styled from "styled-components";
import { 
    chickenSoup,
    pastaBurroAlici,
    riceAndBeans,
    shakshuka,
    macAndCheese
  } from "../DemoData/DemoRecipes";
import Recipe from "../types/Recipe";
import RecipePreview from "./RecipePreview";

function WeeklyMealPlan(): JSX.Element {
  const days: [string, Recipe][] = [
    ['Sunday', macAndCheese], 
    ['Monday', chickenSoup], 
    ['Tuesday', pastaBurroAlici], 
    ['Wednesday', riceAndBeans], 
    ['Thursday', riceAndBeans], 
    ['Friday', shakshuka], 
    ['Saturday', shakshuka]
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
      <h2>Your meals for the week of {week}</h2>
      <WeekCal className="weekly-plan">
        {
          days.map((day, index) => (
            <Weekday className="weekday" key={index}>
              <Day>{day[0]}</Day>
              <RecipePreview {...day[1]} />
            </Weekday>
          ))
        }
      </WeekCal>
    </div>
  )
}

export default WeeklyMealPlan;

const WeekCal = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 16px;
  width: 97%;
  overflow: auto;
`

const Weekday = styled.div`
  padding-left: 8px;
`

const Day = styled.h3`
  font-size: 20px;
  color: hsl(0, 0%, 25%);
`