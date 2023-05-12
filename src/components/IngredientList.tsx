import React from "react";
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

export default IngredientList;
