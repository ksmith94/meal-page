import React, { useState } from "react";
import ingredients from "../DemoData/Ingredients";
import recipeIngredients from "../DemoData/RecipeIngredients";
import GroceryList from "../types/GroceryList";

function IngredientList(): JSX.Element {

  const groceryList: GroceryList = {};

  for (let i = 0; i < recipeIngredients.length; i++) {
    for (let j = 0; j < recipeIngredients[i].length; j++) {
      const ingredientId = recipeIngredients[i][j].ingredientId;
      const ingredient = getIngredient(ingredientId, ingredients);

      if (ingredient === undefined) {
        continue;
      }

      if (ingredient in groceryList) {
        groceryList[ingredient]++;
      } else {
        groceryList[ingredient] = 1;
      }
    }
  }

  const [checkedItems, setChecked] = useState(new Array(ingredients.length).fill(false));

  function toggleCheck(index: number) {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setChecked(newCheckedItems);
  }

  return (
    <div>
      <ul>
        {
          Object.keys(groceryList).map((ingredient, i) => (
            <li key={i}>
              <label>
                <input
                  type='checkbox'
                  checked={checkedItems[i]}
                  onChange={() => toggleCheck(i)}
                />
                <span style={{textDecoration: checkedItems[i] ? 'line-through' : 'none'}}>
                  {`${groceryList[ingredient]} ${ingredient}`}
                </span>
              </label>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

function getIngredient(id: number, ingredients: Ingredient[]) {
  for (const ingredient of ingredients) {
    if (ingredient.id === id) {
      return ingredient.name;
    }
  }
}

export default IngredientList;