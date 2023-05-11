import React, { /*useEffect, useState*/ } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import recipes from '../DemoData/Recipes';
// import Recipe from '../types/Recipe';
import RecipeCard from './RecipeCard';


function RecipePage() {
  // const [recipe, setRecipe] = useState();
  const { id } = useParams();

  function getRecipe(id?: string) {
    if (!id) {
      return undefined;
    } else {
      const [recipe] = recipes.filter((recipe) => recipe.id === parseInt(id));
      return recipe;
    }
  }

  const recipe = getRecipe(id);

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
      {
        recipe ?
        <RecipeCard {...recipe} /> :
        <p>Invalid recipe ID</p>
      }
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 112px;
`

export default RecipePage;
