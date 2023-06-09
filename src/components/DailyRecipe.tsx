import React from 'react';
// import Ingredient from '../types/Ingredient';
import './DailyRecipe.css';
import styled from 'styled-components/macro';

// function DailyRecipe(props: Recipe): JSX.Element | null {
//   const date: Date = new Date();

  

//   return (
//     <Wrapper className='daily-recipe'>
//       <h2 className='daily-recipe-date'>Your recipe for {getDateDisplay(date)}</h2>
//       <RecipePreview {...props} />
//     </Wrapper>
//   )
// }

const Wrapper = styled.div`
  margin: 24px;
  width: 360px;
  height: 270px;
`

// const RecipePreview = styled.div`
//   background: hsl(239deg 79% 39%);
//   color: white;
//   padding: 16px;
//   border-radius: 10px;
//   max-height: 480px;
// `

// export default DailyRecipe;

export function DailyRecipe() {
  const date = new Date();
  
  function getDateDisplay(date: Date, locale = 'us-EN') {
    return date.toLocaleDateString(locale, { weekday: 'long', month: 'long', day: 'numeric' })
  }

  return (
    <Wrapper className='daily-recipe'>
       <h2 className='daily-recipe-date'>Your recipe for {getDateDisplay(date)}</h2>
       <p>Recipe goes here</p>
   </Wrapper>
  )
}