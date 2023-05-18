import React/*, { useState }*/ from "react";
import styled from "styled-components";

function RecipeIngredientForm(): JSX.Element {
  return (

    <IngredientWrapper>
      <div>

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
      </div>
      <div className="ingredient-list">
        <ul>
          <li>1 cup cilantro, chopped</li>
          <li>1 lb chicken thighs</li>
          <li>2 tbsp olive oil</li>
          <li>4 cloves garlic, minced</li>
          <li>1 yellow onion, chopped</li>
          <li>1 jalapeño, chopped</li>
          <li>1 cup rice, cooked</li>
        </ul>
      </div>
    </IngredientWrapper>
  )
}

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

export default RecipeIngredientForm;