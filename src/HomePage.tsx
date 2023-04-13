import React from 'react';
import styled from 'styled-components';
import DailyRecipe from './components/DailyRecipe';
import RecipePreview from './components/RecipePreview';
import recipes from './DemoData/DemoRecipes';

function Home(): JSX.Element {
  return (
    <Wrapper>
      <p>Get inspired and find new recipes to try at home.</p>
      <button>Login</button>
      <DailyRecipe {...recipes[0]} />
    </Wrapper>

  );
}

const Wrapper = styled.div`
  margin-top: 112px;
`

export default Home;
