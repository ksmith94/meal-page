import React from 'react';
import DailyRecipe from './components/DailyRecipe';
import { spaghettiCarbonara } from './DemoData/DemoRecipes';

function Home(): JSX.Element {
  return (
    <div>
      <p>Get inspired and find new recipes to try at home.</p>
      <form>
        <input type="text" placeholder="Search for a recipe..." />
        <button type="submit">Search</button>
      </form>
      <button>Login</button>
      <DailyRecipe {...spaghettiCarbonara} />
    </div>
  );
}

export default Home;
