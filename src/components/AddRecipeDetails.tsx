import React, { useState } from "react";

interface RecipeDetails {
  title: string,
  description: string,
  image: string,
  servings: number,
  time: number
}

type SubmitHandler = (recipeDetails: RecipeDetails) => void;

interface AddRecipeDetailsProps {
  onSubmit: SubmitHandler
}

function AddRecipeDetails({ onSubmit }: AddRecipeDetailsProps): JSX.Element {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [servings, setServings] = useState(0);
  const [time, setTime] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const recipeDetails = {
      title,
      description,
      image,
      servings,
      time,
    };

    onSubmit(recipeDetails);
  }

  return (
    <div>
      <h4>Step 1: Add Recipe Details</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type='text'
          id='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="description">Description</label>
        <input 
          type='text'
          id='description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="image">Image</label>
        <input 
          type='text'
          id='image'
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <label htmlFor="servings">Servings</label>
        <input 
          type='number'
          id='servings'
          value={servings}
          onChange={(e) => setServings(parseInt(e.target.value, 10))}
        />
        <label htmlFor="time">Time</label>
        <input 
          type='number'
          id='time'
          value={time}
          onChange={(e) => setTime(parseInt(e.target.value, 10))}
        />
        <button type='submit'>Next</button>
      </form>
    </div>
  )
}

export default AddRecipeDetails;