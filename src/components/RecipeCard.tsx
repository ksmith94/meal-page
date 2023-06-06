import React from "react";
import styled from "styled-components";
import IngredientList from "./IngredientList";
import InstructionsDisplay from "./InstructionsDisplay";

export interface RecipeCardProps {
  title: string,
  image: string,
  description: string,
  baseServings: number,
  time: number,
  ingredients: Ingredients[],
  instructions: {
    steps: string[]
  }
}

interface Ingredients {
  ingredient: string,
  unit: string,
  quantity: string,
  display: string
}

function RecipeCard({
  title,
  image,
  baseServings,
  time,
  ingredients,
  instructions
}: RecipeCardProps): JSX.Element {

  return (
    <Wrapper>
      <StyledHeader>{title}</StyledHeader>
      <StyledSpan>
        <StyledDiv>
          <StyledImage src={image} alt={title} />
          <StyledParagraph>{baseServings} Servings</StyledParagraph>
          <StyledParagraph>{time} minutes</StyledParagraph>
        </StyledDiv>
        <IngredientList ingredients={ingredients} />
      </StyledSpan>
        <StyledParagraph>Steps:</StyledParagraph>
        <InstructionsDisplay {...instructions} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0 auto;
  margin-top: 0px;
  padding: 8px;
  border: 2px solid black;
  border-radius: 5px;
  background-color: hsl(217, 30%, 90%);
  width: 67%;
  color: hsl(217, 70%, 25%);
  font-family: “Lexend Deca”, “Helvetica”, sans-serif;
`;

const StyledImage = styled.img`
  width: 100%;
  padding-bottom: 4px;
`;

const StyledHeader = styled.h3`
  padding-bottom: 4px;
`

const StyledParagraph = styled.p`
  padding-bottom: 4px;
`

const StyledSpan = styled.div`
  display: flex;
`

const StyledDiv = styled.div`
  margin: 8px;
  width: fit-content;
  max-width: 60%;
`

/* const IngredientList = styled.ul`
  font-family: Arial, Helvetica, sans-serif;
  padding-bottom: 4px;
` */

/* const Steps = styled.ol`
  font-family: Arial, Helvetica, sans-serif;
  padding-bottom: 4px;
` */

export default RecipeCard;
