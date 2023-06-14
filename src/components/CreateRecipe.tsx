import React, { useState } from "react";
import styled from "styled-components";
import AddIngredients from "./AddIngredients";
import AddInstructions from "./AddInstructions";
import AddRecipeDetails from "./AddRecipeDetails";
// import { client } from "../lib/sanity/client";

export interface Ingredient {
  name: string,
  quantity: string,
  unit?: string,
  display: string
}

export interface Instructions {
  recipe: Recipe,
  instructions: string[]
}

export interface Recipe {
  title: string,
  description: string,
  image: string,
  baseServings: number,
  time: number,
  ingredients: Ingredient[] | never[],
  instructions: Instructions | never[]
}


function CreateRecipe(): JSX.Element {
  const [step, setStep] = useState(1);
  const [recipeData, setRecipeData] = useState<Recipe>({
    title: '',
    description: '',
    image: '',
    baseServings: 0,
    time: 0,
    ingredients: [],
    instructions: []
  })

  const handleRecipeDetailSubmit = (data: Partial<Recipe>) => {
    setRecipeData((prevData) => ({
       ...prevData, 
       ...data,
       ingredients: data.ingredients || prevData.ingredients,
       instructions: data.instructions || prevData.instructions
      }));

    setStep((prevStep) => prevStep + 1);
  }

  const handleIngredientSubmit = (ingredients: Ingredient[]) => {
    setRecipeData((prevData) => ({
      ...prevData,
      ingredients
    }))

    setStep((prevStep) => prevStep + 1);
  }

  const handleInstructionSubmit = (instructions: Instructions) => {
    setRecipeData((prevData) => ({
      ...prevData,
      instructions
    }))

    setStep((prevStep) => prevStep + 1);
  }

  const handleRecipeSubmit = () => {
    console.log(recipeData)
  }

  return (
    <Wrapper>
      <h3>Create a Recipe!</h3>
      {step === 1 && <AddRecipeDetails onSubmit={handleRecipeDetailSubmit} />}
      {step === 2 && <AddIngredients onSubmit={handleIngredientSubmit} />}
      {step === 3 && <AddInstructions onSubmit={handleInstructionSubmit} recipe={recipeData}/>}
      {step === 4 && 
        <div>
          <h3>Recipe Summary</h3>
          <p>Title: {recipeData.title}</p>
          <p>Description: {recipeData.description}</p>
          <button onClick={handleRecipeSubmit}>Submit Recipe</button>
        </div> 
      }
    </Wrapper>
  )
}

export default CreateRecipe;

const Wrapper = styled.div`
  margin-top: 112px;
`