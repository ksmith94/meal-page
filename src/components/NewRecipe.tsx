import React, { useState } from "react";
import styled from "styled-components";
import AddIngredient from "./AddIngredient";

interface Ingredient {
  name: string,
  quantity: string,
  unit?: string,
  prep?: string
}

function NewRecipe(): JSX.Element {
  const [recipeName, setRecipeName] = useState<string>('');
  const [ingredientNames, setIngredientNames] = useState<string[]>(['']);
  const [quantities, setQuantities] = useState<string[]>(['']);
  const [units, setUnits] = useState<string[]>(['']);
  const [preps, setPreps] = useState<string[]>(['']);
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [instructions, setInstructions] = useState<string[]>(['']);
  
  const handleRecipeNameChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setRecipeName(event.target.value);
  }

  const handleIngredientNameChange = (event: React.ChangeEvent<HTMLInputElement>, i: number) => {
    const updatedIngredients = [...ingredientNames];
    updatedIngredients[i] = event.target.value;
    setIngredientNames(updatedIngredients);
  }

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>, i: number) => {
    const updatedQuantities = [...quantities];
    updatedQuantities[i] = event.target.value;
    setQuantities(updatedQuantities);
  }

  const handleUnitChange = (event: React.ChangeEvent<HTMLInputElement>, i: number) => {
    const updatedUnits = [...units];
    updatedUnits[i] = event.target.value;
    setUnits(updatedUnits);
  }

  const handlePrepChange = (event: React.ChangeEvent<HTMLInputElement>, i: number) => {
    const updatedPreps = [...preps];
    updatedPreps[i] = event.target.value;
    setPreps(updatedPreps);
  }

  const handleAddIngredient = () => {
    setIngredientNames([...ingredientNames, ""]);
    setQuantities([...quantities, ""]);
    setUnits([...units, ""]);
    setPreps([...preps, ""]);
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

    for (let i = 0; i < ingredientNames.length; i++) {
      const currentIngredient: Ingredient = {
        name: ingredientNames[i],
        quantity: quantities[i],
        unit: units[i],
        prep: preps[i]
      }

      const updatedIngredients = [...ingredients];
      updatedIngredients[i] = currentIngredient;
      setIngredients(updatedIngredients);
    }


    console.log("Recipe Name:", recipeName);
    console.log("Ingredients:", ingredients);
    console.log("Instructions:", instructions);

    setRecipeName('');
    setIngredients([]);
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
        <h3>Ingredients</h3>
        <AddIngredient 
          ingredients={ingredientNames}
          handleIngredientChange={handleIngredientNameChange}
          quantities={quantities}
          handleQuantityChange={handleQuantityChange}
          units={units}
          handleUnitChange={handleUnitChange}
          preps={preps}
          handlePrepChange={handlePrepChange}
          handleAddIngredient={handleAddIngredient}
        />
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