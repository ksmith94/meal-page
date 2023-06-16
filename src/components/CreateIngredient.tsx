import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { client } from "../lib/sanity/client";

interface IngredientType {
  _id: string,
  type: string
}

interface CreateIngredientProps {
  show: boolean,
  onClose: () => void
}

function CreateIngredient({ show, onClose }: CreateIngredientProps) {
  const [userInput, setUserInput] = useState('');
  // const [ingredient, setIngredient] = useState('');
  const [error, setError] = useState('');
  const [ingredientTypes, setIngredientTypes] = useState<IngredientType[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    
    if (userInput.length === 0) {
      setError('Ingredient is a required field')
    } else {
      try {
        const formElement = e.currentTarget as HTMLFormElement
        console.log(formElement);
        
        const selectedType = ingredientTypes.find(
          (type) => type.type === formElement['ingredient-type'].value
        )

        if (selectedType) {
          await client.create({
            _type: 'ingredient',
            name: userInput.trim(),
            type: {
              _type: 'reference',
              _ref: selectedType._id
            },
          });

          console.log('Ingredient successfully created');
          setUserInput('');
          setError('');
          handleClose();
        }
      } catch (err) {
        console.log('Error creating ingredient type: ', err);
      }

      }

  }

  useEffect(() => {
    const fetchIngredientTypes = async () => {
      try {
        const res = await client.fetch(`
          *[_type == 'ingredientType']
        `);

        setIngredientTypes(res);
      } catch (err) {
        console.error(err);
      }
    }

    fetchIngredientTypes();
  }, [])

  if (!show) {
    return null;
  }

  const handleClose = () => {
    onClose()
  }

  return (
    <Modal>
      <Content>
        <form onSubmit={handleSubmit}>
          <label htmlFor='ingredient'>Ingredient</label>
          <input
            type='text'
            value={userInput}
            placeholder='spaghetti'
            onChange={(e) => setUserInput(e.target.value)}
          />
          <label htmlFor="ingredient-type">Ingredient Type</label>
          <select name='ingredient-type'>
            <option value=''>Select an Ingredient Type</option>
            {
              ingredientTypes.map((type, i) => (
                <option key={i} value={type.type}>{type.type}</option>
              ))
            }
          </select>
          <button type='submit'>Submit</button>
        </form>
        <p>{error}</p>
      </Content>
    </Modal>
  )
}

export default CreateIngredient;

const Modal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`

const Content = styled.div`
  width: fit-content;
  background-color: #fff;
  padding: 32px;
  height: 500px;
`