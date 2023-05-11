import React from "react";
import ingredients from "../DemoData/Ingredients";
import preparations from "../DemoData/Preparations";
import quantities from "../DemoData/Quantities";
// import quantities from "../DemoData/Quantities";
import recipeIngredients from "../DemoData/RecipeIngredients";
import units from "../DemoData/Units";
import IngredientDisplayItem from "../types/IngredientDisplayItem";
import { getIngredientsForDisplay, parseIngredients } from "./utils";
// import RecipeIngredient from "../types/RecipeIngredient";

function IngredientList(recipe: Recipe): JSX.Element {
  // console.log(recipe);
  const recipeId = recipe.id;
  // const ingredientsList = getIngredients(recipeId, recipeIngredients, ingredients);
  const recipeIngredientList = getRecipeIngredients(recipeId, recipeIngredients);
  const ingredientDisplay = getIngredientsForDisplay(quantities, ingredients, units, preparations, recipeIngredientList);
  // console.log(ingredientsList);
  console.log(ingredientDisplay);

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
