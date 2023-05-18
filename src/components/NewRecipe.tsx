import React, { useState } from "react";
import styled from "styled-components";

function NewRecipe(): JSX.Element {
  const [recipeName, setRecipeName] = useState<string>('');
  const [ingredients, setIngredients] = useState<string[]>(['']);
  const [instructions, setInstructions] = useState<string[]>(['']);

  const handleRecipeNameChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setRecipeName(event.target.value);
  }

  const handleIngredientChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index] = event.target.value;
    setIngredients(updatedIngredients);
  }

  const handleAddIngredient = () => {
    setIngredients([...ingredients, ""]);
  }

  const handleInstructionChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedInstructions = [...instructions];
    updatedInstructions[index] = event.target.value;
    setInstructions(updatedInstructions);
  }

  const handleAddInstructions = () => {
    setInstructions([...instructions, ''])
  }

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    console.log("Recipe Name:", recipeName);
    console.log("Ingredients:", ingredients);
    console.log("Instructions:", instructions);

    setRecipeName('');
    setIngredients(['']);
    setInstructions(['']);
  }

  return (
    <Wrapper>
      <h3>Create a recipe!</h3>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="recipeName">Recipe Name</label>
          <input
            type="text"
            id="recipeName"
            value={recipeName}
            onChange={handleRecipeNameChange}
          />
        </div>
        <div>
          <label htmlFor="ingredients">Ingredients</label>
          {
            ingredients.map((ingredient, i) => (
              <input 
                type="text"
                key={i}
                value={ingredient}
                onChange={(e) => handleIngredientChange(e, i)}
              />
            ))
          }
          <button type="button" onClick={handleAddIngredient}>Add Ingredient</button>
        </div>
        <div>
          <label htmlFor="instructions">Instructions</label>
          {
            instructions.map((instruction, i) => (
              <input 
                type="text"
                key={i}
                value={instruction}
                onChange={(e) => handleInstructionChange(e, i)}
              />
            ))
          }
          <button type="button" onClick={handleAddInstructions}>Add Instruction</button>
        </div>

        <button type="button" onClick={handleFormSubmit}>Create Recipe!</button>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: auto;
  width: 480px;
  margin-top: 112px;
  background: hsl(205, 70%, 90%);
  border-radius: 8px;
  padding: 12px;
  border: 2px solid hsl(217, 30%, 30%);
  font-family: “Lexend Deca”, “Helvetica”, sans-serif;
  color: hsl(217, 30%, 30%);
`

export default NewRecipe;