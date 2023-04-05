import React from 'react';
import Recipe from '../types/Recipe';


function RecipePage(recipe: Recipe) {
  return (
    <div>
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
    </div>
  );
};

export default RecipePage;
