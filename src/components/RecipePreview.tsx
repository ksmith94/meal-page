import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Ingredient from "../types/Ingredient";
import Recipe from "../types/Recipe";

function RecipePreview(props: Recipe): JSX.Element {

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
    <Preview>
      <h3 className='recipe-preview-name'><RecipeLink to={`/recipe/${props.id}`}>{props.title}</RecipeLink></h3>
      <Details className="preview-details">
        <ImageLink className="recipe-image-link" to={`/recipe/${props.id}`}><ImagePreview className="preview-image" src={props.image} alt={props.title} /></ImageLink>
        <p className='recipe-preview-ingrdients'>
          Ingredients
          <IngredientList className='recipe-preview-ingredient-list'>
            {props.ingredients.map((ingredient) => (
              <li className='recipe-preview-ingredient'>{parseIngredient(ingredient)}</li>
            ))}
          </IngredientList>
        </p>
      </Details>
      <Stats className="recipe-preview-stats">
        <p className='recipe-preview-servings'>Servings: {props.servings}</p>
        <p className='recipe-preview-time'>Total Time: {props.prepTime + props.cookTime} minutes</p>
      </Stats>
    </Preview>
  )
}

const Preview = styled.div`
  background: rgb(21, 24, 178);
  color: white;
  padding: 16px;
  border-radius: 10px;
  max-height: 480px;
  max-width: 480px;
`

const RecipeLink = styled(Link)`
color: white;
    text-decoration: none;
`

const Details = styled.div`
display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
`

const ImageLink = styled(Link)`
  display: flex;
`

const ImagePreview = styled.img`
  width: 128px;
  align-self: center;
`

const IngredientList = styled.ul`
  margin-left: -16px;
`

const Stats = styled.span`
  margin-top: 8px;
  border-top: 1px solid white;
  display: flex;
  justify-content: space-around;
`

export default RecipePreview;