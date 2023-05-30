import React from "react";
// import styled from "styled-components";
import { parseIngredients } from "./utils";

export interface IngredientListProps {
  ingredient: string,
  quantity: string,
  unit: string,
  preparation: string
}

function IngredientList({ ingredients }: {ingredients: IngredientListProps[]}): JSX.Element {

  return (
    <div>
      <h3>Ingredients</h3>
      <ul>
        {
          ingredients.map((ingredient, i) => (
            <li key={i}>{parseIngredients(ingredient)}</li>
          ))
        }
      </ul>
    </div>
  )
}

// function getRecipeIngredients(recipeId: number, recipeIngredients: RecipeIngredient[][]) {
//   for (let i = 0; i < recipeIngredients.length; i++) {
//     if (recipeId === recipeIngredients[i][0].recipeId) {
//       return recipeIngredients[i];
//     }
//   }
// }

// const Ingredients = styled.h3`
//   padding-left: 16px;
// `

export default IngredientList;
