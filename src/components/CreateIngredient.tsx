import React, { useState } from "react";
import { client } from "../lib/sanity/client";

function CreateIngredient() {
  const [userInput, setUserInput] = useState('');
  // const [ingredient, setIngredient] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    console.log(e);
    
    if (userInput.length === 0) {
      setError('Ingredient is a required field')
    } else {
      try {
        await client.create({
          _type: 'ingredientType',
          type: userInput.trim()
        });

        console.log('Ingredient type created successfully');
        setUserInput('');
        setError('');
      } catch (err) {
        console.log('Error creating ingredient type: ', err);
      }

      }

    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='ingredient'>Ingredient Type</label>
        <input
          type='text'
          value={userInput}
          placeholder='spaghetti'
          onChange={(e) => setUserInput(e.target.value)}
        />
      </form>
      <button type='submit'>Submit</button>
      <p>{error}</p>
    </div>
  )
}

export default CreateIngredient;