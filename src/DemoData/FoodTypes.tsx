import IngredientType from "../types/IngredientType"

const pasta: IngredientType = {
  id: 0,
  type: 'pasta'
}

const dairy: IngredientType = {
  id: 1,
  type: 'dairy'
}

const poultry: IngredientType = {
  id: 2,
  type: 'poultry'
}

const fat: IngredientType = {
  id: 3,
  type: 'fat/oil'
}

const produce: IngredientType = {
  id: 4,
  type: 'produce'
}

const pantryStaples: IngredientType = {
  id: 5,
  type: 'pantry staples'
}

const spices: IngredientType = {
  id: 6,
  type: 'spices'
}

const beansLegumes: IngredientType = {
  id: 7,
  type: 'beans/legumes'
}

const foodTypes: IngredientType[] = [
  pasta,
  dairy,
  poultry,
  fat,
  produce,
  pantryStaples,
  spices,
  beansLegumes
]