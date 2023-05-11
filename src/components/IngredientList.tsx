import React from "react";
import ingredients from "../DemoData/Ingredients";
import recipeIngredients from "../DemoData/RecipeIngredients";
import RecipeIngredient from "../types/RecipeIngredient";

function IngredientList(recipeId: number): JSX.Element {
  console.log(recipeId)
  const ingredientsList = getIngredients(recipeId, recipeIngredients, ingredients);
  const recipeIngredientList = getRecipeIngredients(recipeId, recipeIngredients);

  console.log(recipeIngredientList);
  console.log(ingredientsList)

  return (
    <div>
      <ul>
        {
          ingredientsList.map((ingredient, i) => (
            <li key={i}>{ingredient.name}</li>
          ))
        }
      </ul>
    </div>
  )
}

function getIngredients(recipeId: number, recipeIngredients: RecipeIngredient[][], ingredients: Ingredient[]): Ingredient[] {
  let recipe: RecipeIngredient[] = []
  const ingredientList = [];

  for (const recipeIngredient of recipeIngredients) {
    if (recipeIngredient[0].recipeId === recipeId) {
      recipe = [...recipeIngredient];
    }
  }

  for (const recipeIngredient of recipe) {
    const ingredientId = recipeIngredient.ingredientId;
    for (const ingredient of ingredients) {
      if (ingredient.id === ingredientId) ingredientList.push(ingredient);
    }
  }

  return ingredientList;
}

function getRecipeIngredients(recipeId: number, recipeIngredients: RecipeIngredient[][]) {
  for (let i = 0; i < recipeIngredients.length; i++) {
    if (recipeId === recipeIngredients[i][0].recipeId) {
      return recipeIngredients[i];
    }
  }
}

function getQuantitiesAndUnits(recipeId: number, ingredients: Ingredient[], recipeIngredients: RecipeIngredient[]) {

}


export default IngredientList;