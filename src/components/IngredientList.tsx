import React, { useState } from "react";
import { macAndCheese, chickenSoup, pastaBurroAlici, riceAndBeans, shakshuka } from "../DemoData/DemoRecipes";


function IngredientList(): JSX.Element {
  const recipes = [macAndCheese, chickenSoup, pastaBurroAlici, riceAndBeans, shakshuka];
  const ingredients: string[] = [];
  recipes.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient) => ingredients.push(ingredient));
  })

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
          ingredients.map((ingredient, i) => (
            <li key={i}>
              <label>
                <input
                  type='checkbox'
                  checked={checkedItems[i]}
                  onChange={() => toggleCheck(i)}
                />
                <span style={{textDecoration: checkedItems[i] ? 'line-through' : 'none'}}>
                  {ingredient}
                </span>
              </label>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default IngredientList;