type Recipe = {
  id: number;
  title: string;
  description: string
  image?: string;
  baseServings: number;
  time: number;
  instructionsId: number
};

export default Recipe;