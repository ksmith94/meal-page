import React from "react";
import styled from "styled-components";
import Recipe from "../types/Recipe";
import recipeIngredients from "../DemoData/RecipeIngredients";
import ingredients from "../DemoData/Ingredients";
import Instructions from "../types/Instructions";
import Ingredient from "../types/Ingredient";
import instructions from "../DemoData/Instructions";
import IngredientList from "./IngredientList";

function RecipeCard(recipe: Recipe): JSX.Element {

  const recipeId = recipe.id;
  console.log(recipeId)
  const ingredientList = getIngredients(recipeId, recipeIngredients, ingredients);
  const instructionList = getInstructions(recipeId, instructions);


  return (
    <Wrapper>
      <StyledHeader>{recipe.title}</StyledHeader>
      <StyledSpan>
        <StyledImage src={recipe.image} alt={recipe.title} />
        <StyledDiv>
          <StyledParagraph>Servings: {recipe.baseServings}</StyledParagraph>
          <StyledParagraph>Prep Time: {recipe.time} minutes</StyledParagraph>
        </StyledDiv>
      </StyledSpan>
        <StyledParagraph>Ingredients:</StyledParagraph>
        <IngredientList {...recipe.id}>
          {/* {ingredientList.map((ingredient, i) => (
            <li key={i}>
              {ingredient.name}
            </li>
          ))} */}
        </IngredientList>
        <StyledParagraph>Steps:</StyledParagraph>
        <Steps>
          {instructionList.map((instruction, i) => (
            <li key={i}>
              {instruction}
            </li>
          ))}
        </Steps>
    </Wrapper>
  )
};

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

function getInstructions(recipeId: number, instructions: Instructions[]): string[] {
  for (const instruction of instructions) {
    if (recipeId === instruction.id) {
      return instruction.instructions;
    }
  }

  return ['Invalid recipe ID – no instructions available'];
}

const Wrapper = styled.div`
  margin: 16px;
  margin-top: 0px;
  padding: 8px;
  border: 2px solid black;
  border-radius: 5px;
  background-color: hsl(0 0% 91%)
`;

const StyledImage = styled.img`
  width: 40%;
  padding-bottom: 4px;
`;

const StyledHeader = styled.h3`
  padding-bottom: 4px;
  font-family: Arial, Helvetica, sans-serif;
`

const StyledParagraph = styled.p`
  padding-bottom: 4px;
  font-family: Arial, Helvetica, sans-serif;
`

const StyledSpan = styled.span`
  display: inline;
`

const StyledDiv = styled.div`
  margin: 8px;
`

/* const IngredientList = styled.ul`
  font-family: Arial, Helvetica, sans-serif;
  padding-bottom: 4px;
` */

const Steps = styled.ol`
  font-family: Arial, Helvetica, sans-serif;
  padding-bottom: 4px;
`

export default RecipeCard;
