import React from "react";
import styled from "styled-components";

interface AddIngredientProps {
  ingredients: string[],
  handleIngredientChange: (event: React.ChangeEvent<HTMLInputElement>, index: number) => void,
  quantities: string[],
  handleQuantityChange: (event: React.ChangeEvent<HTMLInputElement>, index: number) => void,
  units: string[],
  handleUnitChange: (event: React.ChangeEvent<HTMLInputElement>, index: number) => void,
  preps: string[],
  handlePrepChange: (event: React.ChangeEvent<HTMLInputElement>, index: number) => void,
  handleAddIngredient: () => void,
}

function AddIngredient(props: AddIngredientProps): JSX.Element {
  

  const {
    ingredients, 
    handleIngredientChange,
    quantities,
    handleQuantityChange,
    units,
    handleUnitChange,
    preps,
    handlePrepChange,
    handleAddIngredient
  } = props;



  return (
    <Wrapper>
      <label htmlFor="ingredient">Ingredient</label>
      {
        ingredients.map((ingredient, i) => (
          <input
            type='text'
            key={i}
            value={ingredient}
            onChange={(e) => handleIngredientChange(e, i)}
          />
        ))
      }
      
      <label htmlFor="quantity">Quantity</label>
      {
        quantities.map((quantity, i) => (
          <input
            type='text'
            key={i}
            value={quantity}
            onChange={(e) => handleQuantityChange(e, i)}
          />
        ))
      }
      <label htmlFor="unit">Unit</label>
      {
        units.map((unit, i) => (
          <input 
            type='text'
            key={i}
            value={unit}
            onChange={(e) => handleUnitChange(e, i)}
          />
        ))
      }
      <label htmlFor="prep">Preparation</label>
      {
        preps.map((prep, i) => (
          <input 
            type='text'
            key={i}
            value={prep}
            onChange={(e) => handlePrepChange(e, i)}
          />
        ))
      }
      <button type='button' onClick={handleAddIngredient}>
        Add Ingredient
      </button>
    </Wrapper>

  )
}

export default AddIngredient;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`