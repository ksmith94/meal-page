import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import RecipeCard, { RecipeCardProps } from './RecipeCard';


function RecipePage() {
  const [recipe, setRecipe] = useState<RecipeCardProps | undefined>();
  
  const { id } = useParams();

  const query = encodeURIComponent(
    `*[_type == 'recipe' && _id == '${id}']{
      title,
      description,
      image,
      baseServings,
      time,
      instructions->{steps},
      "ingredients": *[_type == 'recipeIngredient' && references(^._id)]{
        "ingredient": ingredient->name,
        "quantity": quantity->quantity,
        "unit": unit->unit,
        "display": ingredientDisplay
      }
    }`
  );

  const URL = `https://${process.env.REACT_APP_SANITY_API_KEY}.api.sanity.io/v2021-10-21/data/query/${process.env.REACT_APP_SANITY_DATASET}?query=${query}`;

  // function getRecipe(id?: string) {
  //   if (!id) {
  //     return undefined;
  //   } else {
  //     const [recipe] = recipes.filter((recipe) => recipe.id === parseInt(id));
  //     return recipe;
  //   }
  // }

  // const recipe = getRecipe(id);

  useEffect(() => {
    async function fetchRecipe() {
      try {
        const res = await fetch(URL);
        const { result } = await res.json();

        const [fullRecipe] = result;
        // const { 
        //   baseServings, 
        //   description, 
        //   image, 
        //   ingredients, 
        //   instructions, 
        //   time, 
        //   title 
        // } = fullRecipe;

        // const recipe = {title, description, image, baseServings, time};
        // console.log(recipe, ingredients, instructions);
        setRecipe(fullRecipe);
        // setIngredients(ingredients);
        // setInstructions(instructions);

      } catch (error) {
        console.error('Error fetching recipe: ', error);
      }
    }

    fetchRecipe();
    // console.log(recipe);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(recipe);
  return (
    <Wrapper>
      {
        recipe ?
        <RecipeCard 
          title={recipe.title}
          description={recipe.description}
          image={recipe.image}
          baseServings={recipe.baseServings}
          time={recipe.time}
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}
        /> :
        <p>Invalid recipe ID</p>
      }
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 112px;
`

export default RecipePage;
