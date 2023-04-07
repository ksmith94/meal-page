import React from 'react';
import styled from 'styled-components';
import Recipe from '../types/Recipe';
import RecipeCard from './RecipeCard';


function RecipePage(recipe: Recipe) {
  return (
    <Wrapper>
      <RecipeCard {...recipe} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 112px;
`

export default RecipePage;
