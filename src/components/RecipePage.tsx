import React from 'react';
import styled from 'styled-components';
import Recipe from '../types/Recipe';


function RecipePage(recipe: Recipe) {
  return (
    <Wrapper>
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} />
      <p>Servings: {recipe.servings}</p>
      <p>Prep Time: {recipe.prepTime} minutes</p>
      <p>Cook Time: {recipe.cookTime} minutes</p>
      <p>Instructions:
        <ul>
          {recipe.ingredients.map((ingredient) => (
            <li key={ingredient.name}>
              {
                ingredient.preparation ? `${ingredient.amount} ${ingredient.unit} ${ingredient.name}, ${ingredient.preparation}` : `${ingredient.amount} ${ingredient.unit} ${ingredient.name}`
              }

            </li>
          ))}
        </ul>
        <ol>
          {recipe.instructions.map((instruction, i) => (
            <li key={i}>
              {instruction}
            </li>
          ))}
        </ol>
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 112px;
`

export default RecipePage;
