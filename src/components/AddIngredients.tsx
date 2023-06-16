import React, { useEffect, useState } from "react";
import { client } from "../lib/sanity/client";
import CreateIngredient from "./CreateIngredient";
import { Ingredient } from './CreateRecipe'

interface AddIngredientsProps {
  onSubmit: (data: Ingredient[]) => void,
}

function AddIngredients({ onSubmit }: AddIngredientsProps): JSX.Element {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('');
  const [display, setDisplay] = useState('');
  const [recipeIngredients, setRecipeIngredients] = useState<Ingredient[]>([]);
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const res = await client.fetch(`
          *[_type == 'ingredient']{
            name
          }
        `);

        setIngredients(res);
      } catch (err) {
        console.error(err);
      }
    }

    fetchIngredients()
  }, []);

  const handleAddIngredient = () => {
    const newIngredient = {
      name,
      quantity,
      display,
      unit
    }
    console.log(newIngredient);
    
    const updatedIngredients = [...recipeIngredients, newIngredient];
    setRecipeIngredients(updatedIngredients);
    setName(''), setQuantity(''), setUnit(''), setDisplay('');
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(recipeIngredients);
  }
  
  return (
    <div>
      <h4>Add Ingredients</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Ingredient</label>
          <select name='ingredients'>
            <option value=''>Select an Ingredient</option>
            {
              ingredients.map((ingredient, i) => (
                <option key={i} value={ingredient.name}>{ingredient.name}</option>
              ))
            }
          </select>
          <span>Don&apos;t see the ingredient you want?</span>
      <button type='button' onClick={() => setShow(true)}>Add it!</button>
        </div>
        <div>
          <label htmlFor="quantity">Quantity</label>
          <input 
            type='text'
            id='quantity'
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="unit">Unit</label>
          <input 
            type='text'
            id='unit'
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="display">Display</label>
          <input 
            type='text'
            id='display'
            value={display}
            onChange={(e) => setDisplay(e.target.value)}
          />
        </div>
        <button type='button' onClick={handleAddIngredient}>
          Add Ingredient
        </button>
        <button type='submit'>Next</button>
      </form>
      <ul>
        {
          recipeIngredients.map((ingredient, i) => (
            <li key={i}>{ingredient.display}</li>
          ))
        }
      </ul>
      <CreateIngredient show={show} onClose={() => setShow(false)}/>
    </div>
  )
}

export default AddIngredients;