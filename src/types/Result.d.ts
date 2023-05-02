import RecipeImage from "./RecipeImage"

type Result = {
  results: RecipeImage[],
  offset: Number,
  number: Number,
  totalResults: Number
};

export default Result;