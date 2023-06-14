import React, { useState } from "react";
import styled from "styled-components";
import { Instructions, Recipe } from "./CreateRecipe";

interface AddInstructionsProps {
  onSubmit: (instructions: Instructions) => void,
  recipe: Recipe
}

function AddInstructions({ onSubmit, recipe }: AddInstructionsProps) {
  const [instructions, setInstructions] = useState<Instructions>({
    recipe,
    instructions: [],
  });
  const [currentInstruction, setCurrentInstruction] = useState('');

  const handleAddInstruction = () => {
    const updatedInstructions = [...instructions.instructions, currentInstruction];
    setInstructions({
      ...instructions,
      instructions: updatedInstructions
    });
    setCurrentInstruction('');
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(instructions);
  }

  return (
    <Wrapper>
      <h4>Add Instructions</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="instruction">Instruction</label>
        <input 
          type='text'
          id='instruction'
          value={currentInstruction}
          onChange={(e) => setCurrentInstruction(e.target.value)}
        />
        <button type='button' onClick={handleAddInstruction}>
          Add Instruction
        </button>
        <button type='submit'>Next</button>
      </form>
      <ul>
        {
          instructions.instructions.map((instruction, i) => (
            <li key={i}>{instruction}</li>
          ))
        }
      </ul>
    </Wrapper>
  )
}

export default AddInstructions;

const Wrapper = styled.div`
  margin-top: 112px;
`