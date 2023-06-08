import { useState } from "react";
import styled from "styled-components";

interface Ingredient {
  ingredient: string;
  unit?: string;
  quantity: string;
}

interface Day {
  ingredients: Ingredient[];
}

interface GroceryListDisplayProps {
  data: Record<string, Day>;
}

function GroceryListDisplay({ data }: GroceryListDisplayProps) {
  const uniqueIngredients = new Set<string>();
  
  function toggleCheck(index: number) {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setChecked(newCheckedItems);
  }
  
  Object.values(data).forEach((day) => {
    day.ingredients.forEach((ingredient) => {
      uniqueIngredients.add(ingredient.ingredient);
    });
  });
  
  const ingredientArray = Array.from(uniqueIngredients);
  const [checkedItems, setChecked] = useState(new Array(ingredientArray.length).fill(false));

  return (
    <IngredientList>
      {
        ingredientArray.map((ingredient, i) => (
          <GroceryItem key={i}>
          <label>
            <Checkbox
              type='checkbox'
              checked={checkedItems[i]}
              onChange={() => toggleCheck(i)}
            />
            <span style={{textDecoration: checkedItems[i] ? 'line-through' : 'none'}}>
              {ingredient}
            </span>
          </label>
          </GroceryItem>
        ))
      }
    </IngredientList>
  )
}

export default GroceryListDisplay;

const IngredientList = styled.ul`
  list-style: none;
  padding-left: 12px;
`

const Checkbox = styled.input`
  margin-right: 4px;
`

const GroceryItem = styled.li`
  margin: 4px 0;
`