import Recipe from "../types/Recipe";
import React from "react";
import { Details } from "./RecipePreview";
import styled from "styled-components";
import { Link } from "react-router-dom";

function RecipeListItem(props: Recipe): JSX.Element {
  return (
    <Preview className="recipes-list-item">
      <Link to={`/recipe/${props.id}`}>
        {props.image ? <ImageDisplay src={props.image} alt={props.title}/> : <p>No image :(</p>}
      </Link>
      <div>
        <TitleLink to={`/recipe/${props.id}`}><Title>{props.title}</Title></TitleLink>
        <Details className='recipe-preview-servings'>Servings: {props.servings}</Details>
        <Details className='recipe-preview-time'>Total Time: {props.prepTime + props.cookTime} minutes</Details>
      </div>
    </Preview>
  )
}

export default RecipeListItem;

const Preview = styled.div`
  background: hsl(0, 0%, 83%);
  color: black;
  padding-bottom: 8px;
  border-radius: 10px;
  display: grid;
  grid-template-rows: [image] 67% [words] auto;
`

const ImageDisplay = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 10px 10px 0 0;
`

const Title = styled.h3`
  padding-left: 8px;
  margin: 4px 0;
`

const TitleLink = styled(Link)`
  color: black;
  text-decoration: none;
  line-height: 1.2rem;
`