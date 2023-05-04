import { recipes } from "../DemoData/DemoRecipes";
import React from "react";
import styled from "styled-components";
import RecipeListItem from "./RecipeListItem";
import RecipePreview from "./RecipePreview";

function MyRecipes(): JSX.Element {

  return (
    <Wrapper className="my-recipes">
      <h2 className="my-recipes-title">My Recipes</h2>
      <RecipesDisplay className="my-recipes-display">
        {recipes.map((recipe, i) => (
          <RecipePreview key={i} {...recipe} />
          //  <PreviewWrapper><RecipeListItem {...recipe} /></PreviewWrapper>
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
  width: 100%;
  margin: 0 8px;
  overflow: auto;
`

const PreviewWrapper = styled.div`
  width: 30%;
`

export default MyRecipes;