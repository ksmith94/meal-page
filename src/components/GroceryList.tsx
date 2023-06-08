import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GroceryListDisplay from "./GroceryListDisplay";
import { getSunday } from "./utils";

function GroceryList(): JSX.Element {
  const [ingredients, setIngredients] = useState();
  const week = getSunday();

  const query = encodeURIComponent(
    `
    *[_type == 'weeklyPlan' && week == '${week}']{
      sunday->{
        'ingredients': *[_type == 'recipeIngredient' && references(^._id)]{
          'ingredient': ingredient->name,
          'quantity': quantity->quantity,
          'unit': unit->unit
        }
      },
      monday->{
        'ingredients': *[_type == 'recipeIngredient' && references(^._id)]{
          'ingredient': ingredient->name,
          'quantity': quantity->quantity,
          'unit': unit->unit
        }
      },
      tuesday->{
        'ingredients': *[_type == 'recipeIngredient' && references(^._id)]{
          'ingredient': ingredient->name,
          'quantity': quantity->quantity,
          'unit': unit->unit
        }
      },
      wednesday->{
        'ingredients': *[_type == 'recipeIngredient' && references(^._id)]{
          'ingredient': ingredient->name,
          'quantity': quantity->quantity,
          'unit': unit->unit
        }
      },
      thursday->{
        'ingredients': *[_type == 'recipeIngredient' && references(^._id)]{
          'ingredient': ingredient->name,
          'quantity': quantity->quantity,
          'unit': unit->unit
        }
      },
      friday->{
        'ingredients': *[_type == 'recipeIngredient' && references(^._id)]{
          'ingredient': ingredient->name,
          'quantity': quantity->quantity,
          'unit': unit->unit
        }
      },
      saturday->{
        'ingredients': *[_type == 'recipeIngredient' && references(^._id)]{
          'ingredient': ingredient->name,
          'quantity': quantity->quantity,
          'unit': unit->unit
        }
      }
    }
    `
  );
  
  const URL = `https://${process.env.REACT_APP_SANITY_API_KEY}.api.sanity.io/v2021-10-21/data/query/${process.env.REACT_APP_SANITY_DATASET}?query=${query}`;

  useEffect(() => {
    async function fetchIngredients() {
      try {
        const res = await fetch(URL);
        const { result } = await res.json();

        const [ allIngredients ] = result;

        setIngredients(allIngredients);
      } catch (err) {
        console.error(err);
      }
    }

    fetchIngredients();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <Wrapper>
      <h3>Grocery List</h3>
      {
        ingredients ?
        <GroceryListDisplay data={ingredients} />:
        <p>No ingredients to buy</p>
      }
    </Wrapper>
  )
}

export default GroceryList;

const Wrapper = styled.div`
  width: fit-content;
  margin: auto;
  margin-top: 112px;
  font-size: 18px;
  background-color: hsl(205, 70%, 92%);
  color: hsl(217, 40%, 20%);
  border-radius: 8px;
  border: hsl(217, 40%, 20%) solid;
  font-family: “Lexend Deca”, “Helvetica”, sans-serif;
  padding: 16px 32px;
`