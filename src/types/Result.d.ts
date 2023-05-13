import RecipeImage from "./RecipeImage"

type Result = {
  results: RecipeImage[],
  offset: number,
  number: number,
  totalResults: number
};

export default Result;