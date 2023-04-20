import Recipe from "../types/Recipe";
import React from "react";
import styled from "styled-components";
import RecipeListItem from "./RecipeListItem";

function MyRecipes(recipes: Recipe[]): JSX.Element {
  const recipeList = [recipes[0], recipes[1], recipes[2]];
  return (
    <Wrapper className="my-recipes">
      <h2 className="my-recipes-title">My Recipes</h2>
      <RecipesDisplay className="my-recipes-display">
        {recipeList.map((recipe) => (
           <PreviewWrapper><RecipeListItem {...recipe} /></PreviewWrapper>
        ))}
      </RecipesDisplay>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 108px;
  width: 100%;
`

const RecipesDisplay = styled.div`
  display: flex;
  justify-content: space-between;
`

const PreviewWrapper = styled.div`
  width: 30%;
`

export default MyRecipes;