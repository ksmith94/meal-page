import Recipe from "../types/Recipe";
import React from "react";
import { Details } from "./RecipePreview";
import styled from "styled-components";

function RecipeListItem(props: Recipe): JSX.Element {
  return (
    <Preview className="my-recipes">
      {props.image ? <img src={props.image} alt={props.title}/> : <p>No image :(</p>}
      <h3>{props.title}</h3>
      <Details className='recipe-preview-servings'>Servings: {props.servings}</Details>
      <Details className='recipe-preview-time'>Total Time: {props.prepTime + props.cookTime} minutes</Details>
    </Preview>
  )
}

export default RecipeListItem;

const Preview = styled.div`
  background: hsl(0, 0%, 83%);
  color: black;
  padding-bottom: 8px;
  border-radius: 10px;
  height: 180px;
  width: 30%;
  margin-right: 16px;
  margin-bottom: 16px;
  display: flex;
  flex-wrap: wrap;
`

// const ImageDisplay = styled.img`
//   height: 50%;
//   width: 100%;
// `