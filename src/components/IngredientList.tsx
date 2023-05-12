import React from "react";
import styled from "styled-components";
import ingredients from "../DemoData/Ingredients";
import preparations from "../DemoData/Preparations";
import quantities from "../DemoData/Quantities";
import recipeIngredients from "../DemoData/RecipeIngredients";
import units from "../DemoData/Units";
import { getIngredientsForDisplay, parseIngredients } from "./utils";

function IngredientList(recipe: Recipe): JSX.Element {
  const recipeId = recipe.id;
  const recipeIngredientList = getRecipeIngredients(recipeId, recipeIngredients);
  const ingredientDisplay = getIngredientsForDisplay(quantities, ingredients, units, preparations, recipeIngredientList);

  return (
    <div>
      <h3>Ingredients</h3>
      <ul>
        {
          ingredientDisplay.map((ingredient, i) => (
            <li key={i}>{parseIngredients(ingredient)}</li>
          ))
        }
      </ul>
    </div>
  )
}

function getRecipeIngredients(recipeId: number, recipeIngredients: RecipeIngredient[][]) {
  for (let i = 0; i < recipeIngredients.length; i++) {
    if (recipeId === recipeIngredients[i][0].recipeId) {
      return recipeIngredients[i];
    }
  }
}

const Ingredients = styled.h3`
  padding-left: 16px;
`

export default IngredientList;
