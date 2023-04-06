import React from 'react';
import Ingredient from '../types/Ingredient';
import Recipe from '../types/Recipe';
import './DailyRecipe.css';
import styled from 'styled-components/macro';

function DailyRecipe(props: Recipe): JSX.Element | null {
  const date: Date = new Date();

  function getDateDisplay(date: Date, locale: string = 'us-EN') {
    return date.toLocaleDateString(locale, { weekday: 'long', month: 'long', day: 'numeric' })
  }

  function parseIngredient(ingredient: Ingredient) {
    let output = '';
    if (ingredient.preparation && ingredient.unit) {
      output = `${ingredient.amount} ${ingredient.unit} ${ingredient.name}, ${ingredient.preparation}`;
    } else if (ingredient.preparation && !ingredient.unit) {
      output = `${ingredient.amount} ${ingredient.name}, ${ingredient.preparation}`;
    } else if (!ingredient.preparation && ingredient.unit) {
      output = `${ingredient.amount} ${ingredient.unit} ${ingredient.name}`
    } else {
      output = `${ingredient.name}, ${ingredient.amount}`;
    }

    if (ingredient.optional) output += ' (optional)';
    return output;
  }

  return (
    <Wrapper>
      <h2 className='daily-recipe-date'>Your recipe for {getDateDisplay(date)}</h2>
      <RecipePreview>
        <img src={props.image} alt={props.title} />
        <h3 className='daily-recipe-name'>{props.title}</h3>
        <p className='daily-recipe-servings'>Servings: {props.servings}</p>
        <p className='daily-recipe-time'>Total Time: {props.prepTime + props.cookTime} minutes</p>
        <p className='daily-recipe-ingrdients'>
          Ingredients
          <ul className='daily-recipe-ingredient-list'>
            {props.ingredients.map((ingredient) => (
              <li className='daily-recipe-ingredient'>{parseIngredient(ingredient)}</li>
            ))}
          </ul>
        </p>
        <p className='daily-recipe-steps'>
          Steps
          <ol className='daily-recipe-step-list'>
            {props.instructions.map((instruction) => (
              <li className='daily-recipe-step'>{instruction}</li>
            ))}
          </ol>
        </p>
      </RecipePreview>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 24px;
  width: 640px;
  height: 60px;
`

const RecipePreview = styled.div`
  background: hsl(239deg 79% 39%);
  color: white;
  padding: 16px;
  border-radius: 10px;
  height: 480px;
`

export default DailyRecipe;