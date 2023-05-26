import React, { useState } from "react";
import { Combobox } from '@headlessui/react'
import recipes from "../DemoData/Recipes";
import styled from "styled-components";

interface MyComboboxProps {
  onRecipeSelect: (recipe: Recipe) => void;
}

function MyCombobox(props: MyComboboxProps): JSX.Element {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe>();
  const [query, setQuery] = useState('');

  const filteredRecipes = 
    query === ''
      ? recipes
      : recipes.filter((recipe) => {
        return recipe.title.toLowerCase().includes(query.toLowerCase());
      });

  return (
    <div>
      <Combobox value={selectedRecipe} onChange={setSelectedRecipe}>
        <Combobox.Input 
          onChange={(e) => setQuery(e.target.value)}
          displayValue={(selectedRecipe: Recipe) => selectedRecipe.title}
        />
        <Options>
          {filteredRecipes.map((recipe, i) => (
            <Combobox.Option 
              key={i} 
              value={recipe}
              onClick={() => props.onRecipeSelect(recipe)}
            >
                {recipe.title}
              </Combobox.Option>
          ))}
        </Options>
      </Combobox>
    </div>
  )
}

export default MyCombobox;

const Options = styled(Combobox.Options)`
  list-style: none;
  padding: 0;
  margin-left: 4px;
`