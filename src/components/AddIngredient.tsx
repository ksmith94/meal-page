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
  // const [ingredients, setIngredients] = useState<string[]>(['']);
  // const [quantities, setQuantities] = useState<string[]>(['']);
  // const [units, setUnits] = useState<string[]>(['']);
  // const [preps, setPreps] = useState<string[]>(['']);

  // const handleIngredientChange = (event: React.ChangeEvent<HTMLInputElement>, i: number) => {
  //   const updatedIngredients = [...ingredients];
  //   updatedIngredients[i] = event.target.value;
  //   setIngredients(updatedIngredients);
  // }

  // const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>, i: number) => {
  //   const updatedQuantities = [...quantities];
  //   updatedQuantities[i] = event.target.value;
  //   setQuantities(updatedQuantities);
  // }

  // const handleUnitChange = (event: React.ChangeEvent<HTMLInputElement>, i: number) => {
  //   const updatedUnits = [...units];
  //   updatedUnits[i] = event.target.value;
  //   setUnits(updatedUnits);
  // }

  // const handlePrepChange = (event: React.ChangeEvent<HTMLInputElement>, i: number) => {
  //   const updatedPreps = [...preps];
  //   updatedPreps[i] = event.target.value;
  //   setPreps(updatedPreps);
  // }

  // const handleAddIngredient = () => {
  //   setIngredients([...ingredients, ""]);
  //   setQuantities([...quantities, ""]);
  //   setUnits([...units, ""]);
  //   setPreps([...preps, ""]);
  // }

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