type Recipe = {
    id: number,
    title: string,
    description: string,
    image?: string,
    baseServings: number,
    time: number,
    instructionsId: number
  }

  type Instructions = {
    id: number,
    instructions: string[]
  }
  
  type RecipeIngredient = {
    recipeId: number,
    ingredientId: number,
    quantityId: number,
    unitId?: number,
    preparationId?: number
  }
  
  type Ingredient = {
    id: number,
    name: string,
    typeId: number
  }
  
  type Quantity = {
    quantityId: number,
    quantity: string,
  }
  
  type Unit = {
    unitId: number,
    unit: string,
  }
  
  type Preparation = {
    preparationId: number,
    preparation: string
  }
  
  type IngredientType = {
    id: number,
    type: string
  }