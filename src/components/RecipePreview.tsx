import { faCameraAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
    <Preview className="recipe-preview">
      <Link to={`/recipe/${props.id}`}>
        {
          props.image ? 
          <Image src={props.image} alt={props.title} className="recipe-image" /> :
          <StyledIcon icon={faCameraAlt} />
        }
      </Link>
      <TitleLink to={`/recipe/${props.id}`}>
        <Title className="recipe-title">{props.title}</Title>
      </TitleLink>
      <Details className="recipe-time">{props.time} minutes</Details>
      <Details className="recipe-servings">{props.baseServings === 1 ? props.baseServings + ' serving' : props.baseServings + ' servings'}</Details>
    </Preview>
  )
}

const Preview = styled.div`
  background: hsl(217, 30%, 90%);
  color: hsl(217, 40%, 20%);
  padding-bottom: 8px;
  border-radius: 10px;
  height: 180px;
  width: 180px;
  margin-right: 8px;
  overflow: auto;
`

const StyledIcon = styled(FontAwesomeIcon)`
  border-radius: 10px 10px 0 0;
  width: 80%;
  height: 67%;
`

const Title = styled.h3`
  padding-left: 8px;
  font-size: 20px;
  line-height: 1.2rem;
  margin-bottom: 4px;
  color: hsl(217, 40%, 20%);
`

const Image = styled.img`
  border-radius: 10px 10px 0 0;
  width: 100%;
  height: 67%;
`

const TitleLink = styled(Link)`
  text-decoration: none;
  color: hsl(217, 40%, 20%);

  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 1.5px;
  }
`

// const Details = styled.div`
// display: flex;
//     -webkit-box-pack: justify;
//     justify-content: space-between;
// `

export const Details = styled.p`
  padding-left: 8px;
  margin-top: -4px;
  color: hsl(217, 30%, 30%);
  font-size: 12px;
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

// export const Stats = styled.span`
//   margin-top: 8px;
//   border-top: 1px solid white;
//   display: flex;
//   justify-content: space-around;
// `

export default RecipePreview;