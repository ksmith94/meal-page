import IngredientDisplayItem from "../types/IngredientDisplayItem";

export function parseIngredients(ingredient: IngredientDisplayItem): string {
  let output = '';

  if (ingredient.preparation && ingredient.unit) {
    output = `${ingredient.quantity} ${ingredient.unit}s ${ingredient.ingredient}, ${ingredient.preparation}`;
  } else if (ingredient.preparation && !ingredient.unit) {
    output = `${ingredient.quantity} ${ingredient.ingredient}, ${ingredient.preparation}`;
  } else if (!ingredient.preparation && ingredient.unit) {
    output = `${ingredient.quantity} ${ingredient.unit} ${ingredient.ingredient}`
  } else {
    output = `${ingredient.ingredient}, ${ingredient.quantity}`;
  }
  
  return output;
}

/**
 * Helper function that returns an object with an ingredient for a specific recipe. The object contains the ingredient name, the quantity 
 * needed for the recipe, the unit (if applicable), and the preparation (if applicable).
 * 
 * @param quantities 
 * @param ingredients 
 * @param units 
 * @param preparations 
 * @param recipeIngredients 
 * @returns 
 */
export function getIngredientsForDisplay(
  quantities: Quantity[], 
  ingredients: Ingredient[], 
  units: Unit[], 
  preparations: Preparation[], 
  recipeIngredients?: RecipeIngredient[]
): IngredientDisplayItem[] {
  const result: IngredientDisplayItem[] = [];

  if (!recipeIngredients) return result;
  
  for (const recipeIngredient of recipeIngredients) {
    const item: IngredientDisplayItem = {};
    const quantity = getQuantity(quantities, recipeIngredient.quantityId);
    item.quantity = quantity;

    const ingredient = getIngredient(ingredients, recipeIngredient.ingredientId);
    item.ingredient = ingredient;

    if (recipeIngredient.unitId !== undefined) {
      const unit = getUnit(units, recipeIngredient.unitId);
      item.unit = unit;
    }

    if (recipeIngredient.preparationId !== undefined) {
      const preparation = getPreparation(preparations, recipeIngredient.preparationId);
      item.preparation = preparation;
    }

    result.push(item);
  }

  return result;
}

/**
 * Helper function that returns a quantity as a string, given the id and the list of all quantities.
 * 
 * @param quantities 
 * @param quantityId 
 * @returns 
 */
function getQuantity(quantities: Quantity[], quantityId: number) {
  for (const quantity of quantities) {
    if (quantity.quantityId === quantityId) {
      return quantity.quantity;
    }
  }
}
  
/**
 * Helper function that returns an ingredient as a string, given the id and the list of all ingredients.
 * 
 * @param ingredients 
 * @param ingredientId 
 * @returns 
 */
function getIngredient(ingredients: Ingredient[], ingredientId: number) {
  for (const ingredient of ingredients) {
    if (ingredient.id === ingredientId) {
      return ingredient.name;
    }
  }
} 
  
/**
 * Helper function that returns a unit as a string, given the id and the list of all units.
 * 
 * @param units 
 * @param unitId 
 * @returns 
 */
function getUnit(units: Unit[], unitId: number) {
  for (const unit of units) {
    if (unit.unitId === unitId) {
      return unit.unit;
    }
  }
}
  
/**
 * Helper function that returns a preparation as a string, given the id and the list of all preparations.
 * 
 * @param preparations 
 * @param preparationId 
 * @returns 
 */
function getPreparation(preparations: Preparation[], preparationId: number) {
  for (const preparation of preparations) {
    if (preparation.preparationId === preparationId) {
      return preparation.preparation;
    }
  }
}

/**
 * Helper function that returns an array of recipe instructions, given the id and list off al instructions
 * 
 * @param id 
 * @param instructions 
 * @returns 
 */
export function getInstructions(id: number, instructions: Instructions[]) {
  for (const instruction of instructions) {
    if (id === instruction.id) {
      return instruction.instructions;
    }
  }
}

/**
 * Helper function to capitalize the first letter of a given string
 * 
 * @param string 
 * @returns 
 */
export function capitalizeFirstLetterOfString(string: string) {
  return string.charAt(0)?.toUpperCase() + string.slice(1);
}

/**
 * Helper function that gets the date for the beginning (Sunday) of the current week
 * 
 * @returns 
 */
export function getSunday() {
  const curr = new Date(); // get current date
  const first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
  
  const firstday = new Date(curr.setDate(first)).toUTCString().slice(0, 17);
  return firstday;
}

/**
 * Helper function to display the date of the current week
 * 
 * @returns 
 */
export function getWeek() {
  const sundayDate = new Date();
  const saturdayDate = new Date();
  const day = sundayDate.getDay();
  const sundayDiff = sundayDate.getDate() - day;
  const saturdayDiff = saturdayDate.getDate() + 7 - day;
  const sunday = new Date(sundayDate.setDate(sundayDiff)).toLocaleDateString('us-EN', {month: 'long', day: 'numeric'});
  const saturday = new Date(saturdayDate.setDate(saturdayDiff)).toLocaleDateString('us-EN', {month: 'long', day: 'numeric'});
  return sunday + ' – ' + saturday;
}