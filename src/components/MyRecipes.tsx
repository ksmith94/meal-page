import React from "react";
import styled from "styled-components";
import Recipe from "../types/Recipe";
import RecipePreview from "./RecipePreview";

function MyRecipes(recipes: Recipe[]): JSX.Element {
  const recipeList = [recipes[0], recipes[1], recipes[2]];
  return (
    <div>
      <h2>My Recipes</h2>
      <ul>
        {recipeList.map((recipe) => (
           <RecipePreview {...recipe} />
        ))}
      </ul>
    </div>
  );
}

const Wrapper = styled.div`
  
`

export default MyRecipes;