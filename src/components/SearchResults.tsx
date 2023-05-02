import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Result from "../types/Result";

function SearchResults(): JSX.Element {
  const [recipes, setRecipes] = useState<Result>();
  const { term } = useParams();

  async function fetchRecipes() {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&query=${term}`
    );
    const json = await res.json();
    setRecipes(json);
  }

  useEffect(() => {
    fetchRecipes();
  }, [term]);

  console.log(recipes?.results);
  return (
    <div>
      <h2>Results for {term}</h2>
      {
        recipes ?
        recipes.results.map((recipe) => (
          <div key={recipe.title}>
            <img src={recipe.image} alt={recipe.title} />
            <p>{recipe.title}</p>
          </div>
        )) : 
        <p>No recipes for {term}</p>
      }
    </div>
  )
}

export default SearchResults;