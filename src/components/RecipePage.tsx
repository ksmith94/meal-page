import React, { /*useEffect, useState*/ } from 'react';
// import { useParams } from 'react-router-dom';
import styled from 'styled-components';
// import recipes from '../DemoData/DemoRecipes';
// import Recipe from '../types/Recipe';
// import RecipeCard from './RecipeCard';


function RecipePage() {
  // const [recipe, setRecipe] = useState();
  // const { id } = useParams();


  // function getRecipe(idString: string | undefined, recipes: Recipe[]): Recipe {
  //   if (!idString) return recipes[0];
  //   const recipeId = parseInt(idString);
  //   for (const recipe of recipes) {
  //     if (recipe.id === recipeId) return recipe;
  //   }
  //   return recipes[0];
  // }

  // const currentRecipe = getRecipe(id, recipes);

  // async function fetchRecipe(id?: string) {
  //     const res = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`);
  //     const json = await res.json();
  
  //     setRecipe(json);
  // }

  // useEffect(() => {
  //   fetchRecipe(id);
  // }), [id];

  // console.log(recipe);

  return (
    <Wrapper>
      {/* {
        id ?
        <RecipeCard {...currentRecipe} /> :
        <p>Invalid recipe ID</p>
      } */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 112px;
`

export default RecipePage;
