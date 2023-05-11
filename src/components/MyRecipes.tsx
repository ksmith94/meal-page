import recipes from "../DemoData/Recipes";
import React from "react";
import styled from "styled-components";
import RecipeListItem from "./RecipeListItem";
import { Link } from "react-router-dom";

function MyRecipes(): JSX.Element {

  return (  
    <Wrapper className="my-recipes">
      <RecipesDisplay className="my-recipes-display">
        {recipes.map((recipe, i) => (
          <RecipeListItem key={i} {...recipe} />
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
  display: grid;
  grid-template-columns: 18% 18% 18% 18% 18%;
  grid-template-rows: 250px 250px;
  justify-content: space-around;
  row-gap: 16px;
  width: 100%;
  margin: 0 8px;
`

export default MyRecipes;