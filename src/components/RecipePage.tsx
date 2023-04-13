import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import recipes from '../DemoData/DemoRecipes';
import Recipe from '../types/Recipe';
import RecipeCard from './RecipeCard';


function RecipePage(recipe: Recipe) {

  const { id } = useParams();

  function getRecipe(idString: string | undefined, recipes: Recipe[]): Recipe {
    if (!idString) return recipes[0];
    const recipeId = parseInt(idString);
    for (const recipe of recipes) {
      if (recipe.id === recipeId) return recipe;
    }
    return recipes[0];
  }

  const currentRecipe = getRecipe(id, recipes);

  return (
    <Wrapper>
      <RecipeCard {...currentRecipe} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 112px;
`

export default RecipePage;
