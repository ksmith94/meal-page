import React from "react";
import styled from "styled-components";
import Recipe from "../types/Recipe";

function RecipeCard(recipe: Recipe): JSX.Element {
  return (
    <Wrapper>
      <StyledHeader>{recipe.title}</StyledHeader>
      <StyledSpan>
        <StyledImage src={recipe.image} alt={recipe.title} />
        <StyledDiv>
          <StyledParagraph>Servings: {recipe.servings}</StyledParagraph>
          <StyledParagraph>Prep Time: {recipe.prepTime} minutes</StyledParagraph>
          <StyledParagraph>Cook Time: {recipe.cookTime} minutes</StyledParagraph>
        </StyledDiv>
      </StyledSpan>
        <StyledParagraph>Ingredients:</StyledParagraph>
        <IngredientList>
          {recipe.ingredients.map((ingredient) => (
            <li key={ingredient}>
              {ingredient}
            </li>
          ))}
        </IngredientList>
        <StyledParagraph>Steps:</StyledParagraph>
        <Steps>
          {recipe.instructions.map((instruction, i) => (
            <li key={i}>
              {instruction}
            </li>
          ))}
        </Steps>
    </Wrapper>
  )
};

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

const IngredientList = styled.ul`
  font-family: Arial, Helvetica, sans-serif;
  padding-bottom: 4px;
`

const Steps = styled.ol`
  font-family: Arial, Helvetica, sans-serif;
  padding-bottom: 4px;
`

export default RecipeCard;
