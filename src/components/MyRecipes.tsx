import { recipes } from "../DemoData/DemoRecipes";
import React from "react";
import styled from "styled-components";
// import RecipeListItem from "./RecipeListItem";
// import RecipePreview from "./RecipePreview";
import RecipeListItem from "./RecipeListItem";
import { Link } from "react-router-dom";

function MyRecipes(): JSX.Element {

  return (
    //   <h2 className="my-recipes-title">My Recipes</h2>
    //   <div className="recipes">
    //     <ul className="recipe-list">
    //       {recipes.map((recipe, i) => (
      //         <li className="recipe-list-item" key={i}>
      //           <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
      //         </li>
      //       ))}
      //     </ul>
      //   </div>
      // </Wrapper>
      
      
    <Wrapper className="my-recipes">
      <RecipesDisplay className="my-recipes-display">
        {recipes.map((recipe, i) => (
          <RecipeListItem key={i} {...recipe} />
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
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-template-rows: 300px 300px 300px;
  gap: 16px;
  justify-content: space-between;
  width: 100%;
  margin: 0 8px;
`

export default MyRecipes;