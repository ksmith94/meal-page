// import recipes from "../DemoData/Recipes";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RecipeListItem from "./RecipeListItem";

function MyRecipes(): JSX.Element {
  const [recipes, setRecipes] = useState([]);

  const query = encodeURIComponent(`*[_type == "recipe"]`);
  const URL = `https://${process.env.REACT_APP_SANITY_API_KEY}.api.sanity.io/v2021-10-21/data/query/${process.env.REACT_APP_SANITY_DATASET}?query=${query}`;


  useEffect(() => {
    async function fetchRecipes() {
      try {
        const res = await fetch(URL);
        const { result } = await res.json();
        setRecipes(result);
      } catch (error) {
        console.error('Error fetching recipes', error);
      }
    }

    fetchRecipes();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (  
    <Wrapper className="my-recipes">
      <RecipesDisplay className="my-recipes-display">
        {recipes.map((recipe, i) => (
          <RecipeListItem key={i} recipe={recipe} />
        ))}
      </RecipesDisplay>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 108px;
  width: 100%;
`

const RecipesDisplay = styled.div`
  display: grid;
  grid-template-columns: 18% 18% 18% 18% 18%;
  grid-template-rows: 250px 250px;
  justify-content: space-around;
  row-gap: 16px;
  width: 100%;
  margin: 0 8px;
`

export default MyRecipes;