import React from "react";
import styled from "styled-components";

function NewRecipe(): JSX.Element {
  return (
    <Wrapper>
      <form>
        <SectionHeader>Recipe Title</SectionHeader>
        <RecipeTitleWrapper>
          <label htmlFor="recipetitle">Recipe Title</label>
          {/* <Description>The name of your recipe</Description> */}
          <RecipeInput type="text" id="recipetitle" placeholder="Recipe Title" />
        </RecipeTitleWrapper>
        <SectionHeader>Ingredients</SectionHeader>
        <IngredientWrapper>
          <IngredientEntries>
            <IngredientLabel htmlFor="recipeingredient">Ingredient</IngredientLabel>
            <IngredientInput type="text" id="recipeingredients" placeholder="cilantro"/>
          </IngredientEntries><br />
          <IngredientEntries>
            <IngredientLabel htmlFor="ingredientquantity">Quantity</IngredientLabel>
            <IngredientInput type="text" id="ingredientquantity" placeholder="1"/>
          </IngredientEntries><br />
          <IngredientEntries>
            <IngredientLabel htmlFor="ingredientunit">Unit</IngredientLabel>
            <IngredientInput type="text" id="ingrdientunit" placeholder="cup"/>
          </IngredientEntries><br />
          <IngredientEntries>
            <IngredientLabel htmlFor="ingredientprep">Preparation</IngredientLabel>
            <IngredientInput type="text" id="ingredientprep" placeholder="chopped"/>
          </IngredientEntries>
        </IngredientWrapper>
        <div>
          <SectionHeader>Instructions</SectionHeader>
          <label htmlFor="recipesteps">Steps</label>
          {/* <Description>Step by step instructions for your recipe</Description> */}
          <input type="text" id="recipesteps" />
        </div>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 112px;
  margin-left: 16px;
  font-family: “Lexend Deca”, “Helvetica”, sans-serif;
`

const SectionHeader = styled.h3`
  font-family: inherit;
  color: hsl(217, 40%, 20%)
`

/* const Description = styled.p`
  font-family: inherit;
  font-size: 14px;
  color: hsl(217, 20%, 40%);
  font-weight: 100;
` */

const IngredientWrapper = styled.div`
  line-height: 12px;
  margin-bottom: 24px;
  margin-top: 12px;
`

const IngredientEntries = styled.span`
  display: grid;
  grid-template-columns: 96px 128px;
`

const IngredientInput = styled.input`
  width: 128px;
  font-size: 14px;
`

const IngredientLabel = styled.label`
  width: 64px;
`

const RecipeTitleWrapper = styled.div`
  margin-bottom: 24px;
`

const RecipeInput = styled.input`
  font-size: 14px;
`

export default NewRecipe;