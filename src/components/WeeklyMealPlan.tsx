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

  return (
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

const Day = styled.h2`
  font-size: 20px;
  color: hsl(0, 0%, 25%);
`