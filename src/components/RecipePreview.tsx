import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import Recipe from "../types/Recipe";

function RecipePreview(props: Recipe): JSX.Element {

  // function parseIngredient(ingredient: Ingredient) {
  //   let output = '';
  //   if (ingredient.preparation && ingredient.unit) {
  //     output = `${ingredient.amount} ${ingredient.unit} ${ingredient.name}, ${ingredient.preparation}`;
  //   } else if (ingredient.preparation && !ingredient.unit) {
  //     output = `${ingredient.amount} ${ingredient.name}, ${ingredient.preparation}`;
  //   } else if (!ingredient.preparation && ingredient.unit) {
  //     output = `${ingredient.amount} ${ingredient.unit} ${ingredient.name}`
  //   } else {
  //     output = `${ingredient.name}, ${ingredient.amount}`;
  //   }

  //   if (ingredient.optional) output += ' (optional)';
  //   return output;
  // }

  return (
    <Preview>
      <Image src={props.image} alt={props.title} />
      <Title>{props.title}</Title>
      <Details>{props.prepTime + props.cookTime}</Details>
      <Details>{props.servings === 1 ? props.servings + ' serving' : props.servings + ' servings'}</Details>
    </Preview>
    // <Preview>
    //   <h3 className='recipe-preview-name'><RecipeLink to={`/recipe/${props.id}`}>{props.title}</RecipeLink></h3>
    //   <Details className="preview-details">
    //     <ImageLink className="recipe-image-link" to={`/recipe/${props.id}`}><ImagePreview className="preview-image" src={props.image} alt={props.title} /></ImageLink>
    //     <div className='recipe-preview-ingrdients'>
    //       Ingredients
    //       <IngredientList className='recipe-preview-ingredient-list'>
    //         {props.ingredients.map((ingredient, index) => (
    //           <li className='recipe-preview-ingredient' key={index}>{ingredient}</li>
    //         ))}
    //       </IngredientList>
    //     </div>
    //   </Details>
    //   <Stats className="recipe-preview-stats">
    //     <p className='recipe-preview-servings'>Servings: {props.servings}</p>
    //     <p className='recipe-preview-time'>Total Time: {props.prepTime + props.cookTime} minutes</p>
    //   </Stats>
    // </Preview>
  )
}

const Preview = styled.div`
  background: hsl(0, 0%, 70%);
  color: black;
  padding-bottom: 8px;
  border-radius: 10px;
  height: fit-content;
  max-width: 240px;
`

// const RecipeLink = styled(Link)`
//   color: white;
//   text-decoration: none;
// `

const Title = styled.h3`
  padding-left: 8px;
`

// const Details = styled.div`
// display: flex;
//     -webkit-box-pack: justify;
//     justify-content: space-between;
// `

const Details = styled.p`
  padding-left: 8px;
  margin-top: -4px;
`

const Image = styled.img`
  border-radius: 10px 10px 0 0;
`

// const ImageLink = styled(Link)`
//   display: flex;
// `

// const ImagePreview = styled.img`
//   width: 128px;
//   align-self: center;
// `

// const IngredientList = styled.ul`
//   margin-left: -16px;
// `

export const Stats = styled.span`
  margin-top: 8px;
  border-top: 1px solid white;
  display: flex;
  justify-content: space-around;
`

export default RecipePreview;