import React from 'react';
import styled from 'styled-components';
import WeeklyMealPlan from './components/WeeklyMealPlan';
// import DailyRecipe from './components/DailyRecipe';
// import RecipePreview from './components/RecipePreview';
// import { spaghettiCarbonara } from './DemoData/DemoRecipes';

function Home(): JSX.Element {
  return (
    <Wrapper>
      <Para>Get inspired and find new recipes to try at home.</Para>
      {/* <DailyRecipe {...spaghettiCarbonara} /> */}
      <WeeklyMealPlan />
    </Wrapper>

  );
}

const Wrapper = styled.div`
  margin-top: 112px;
`

const Para = styled.p`
  margin: 24px;
`

export default Home;
