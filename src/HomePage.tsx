import React from 'react';
import styled from 'styled-components';
import DailyRecipe from './components/DailyRecipe';
// import RecipePreview from './components/RecipePreview';
import recipes from './DemoData/DemoRecipes';

function Home(): JSX.Element {
  return (
    <Wrapper>
      <Para>Get inspired and find new recipes to try at home.</Para>
      <DailyRecipe {...recipes[0]} />
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
