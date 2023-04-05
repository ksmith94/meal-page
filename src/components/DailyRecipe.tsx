import React from 'react';
import Recipe from '../types/Recipe';

function DailyRecipe(props: Recipe): JSX.Element | null {
  const date: Date = new Date();

  function getDateDisplay(date: Date, locale: string = 'us-EN') {
    return date.toLocaleDateString(locale, { weekday: 'long', month: 'long', day: 'numeric' })
  }

  return (
    <div>
      <h2>Your recipe for {getDateDisplay(date)}</h2>
      <img src={props.image} alt={props.title} />
    </div>
  )
}

export default DailyRecipe;