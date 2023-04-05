import React from 'react';

function DailyRecipe(): JSX.Element {
  const date: Date = new Date();
  function getDateDisplay(date: Date, locale: string = 'us-EN') {
    return date.toLocaleDateString(locale, { weekday: 'long', month: 'long', day: 'numeric' })
  }

  return (
    <div>
      <h2>Your recipe for {getDateDisplay(date)}</h2>
    </div>
  )
}

export default DailyRecipe;