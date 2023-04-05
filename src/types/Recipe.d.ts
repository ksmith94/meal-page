import Ingredient from './Ingredient';

type Recipe = {
  id: number;
  title: string;
  image: string;
  ingredients: Ingredient[];
  servings: number;
  prepTime: number;
  cookTime: number;
  instructions: string[];
};

export default Recipe;