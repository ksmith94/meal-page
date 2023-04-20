import Recipe from "../types/Recipe";
import React from "react";
import { Stats } from "./RecipePreview";

function RecipeListItem(props: Recipe): JSX.Element {
  return (
    <div>
      <h3>{props.title}</h3>
      {props.image ? <img src={props.image} /> : <p>No image :(</p>}
      <Stats>
        <p className='recipe-preview-servings'>Servings: {props.servings}</p>
        <p className='recipe-preview-time'>Total Time: {props.prepTime + props.cookTime} minutes</p>
      </Stats>
    </div>
  )
}

export default RecipeListItem;