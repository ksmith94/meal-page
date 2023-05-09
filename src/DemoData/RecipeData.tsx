const macAndCheese = {
  id: 0,
  title: 'Stovetop Mac & Cheese',
  description: 'A quick and simple mac and cheese recipe to make right on your stovetop!',
  baseServings: 2,
  time: 10,
  instructions_id: 0
}

const chickenNoodleSoup = {
  id: 1,
  title: 'Chicken Noodle Soup',
  description: 'A hearty comforting soup for any time of year!',
  baseServings: 4,
  time: 55,
  instructionsId: 1
}

const chickenNoodleSoupInstructions = {
  id: 1,
  instructions: [
    'Heat the olive oil in a large pot or dutch oven over medium heat until shimmering. Add the chicken thighs, skin side down and cook until golden brown. Remove and put to the side, leaving any rendered fat in the pot.',
    'Add the celery, leeks, onion, and fennel to the pot and cook until transluscent, about 5-7 minutes. Add the garlic and ginger and sauté until aromatic, about 30 seconds to a minute.',
    'Add the chicken stock to the pot and bring to a boil. Reduce heat to low to maintain a simmer. While the stock is heating, remove the skin from the chicken thighs. Add the thighs back to the stock and simmer until they are cooked through, about 5-10 minutes. Remove the chicken thighs, and once they have cooled, pick the meat from the bones. Add the picked meat back to the soup.',
    'If you are serving the soup immediately, add the pasta to the soup and cook according to the pasta directions until the pasta is al dente. Stir in the parsley. Season to taste with salt and pepepr. If you are not serving immediately, you can cook the pasta as needed in boiling water and add it to reheated soup so the pasta does not absord the stock.',
  ]
}

const mAndCInstructions = {
  id: 0,
  instructions: [
    'Put the macaroni in a large skillet and add water to just cover the pasta. Bring to a boil over medium heat and cook according to package instructions, adding more water as necessary if pan dries out.',
    'When the pasta is just shy of finished, add the evaporated milk and stir to combine. Add the grated cheese and stir until you have a gooey cheese suace. Continue cooking until the pasta is done and the sauce is at your desired consistency. If it reduces too much and starts to tighten up, add more evaporated milk to loosen it.'
  ]
}

const macAndCheeseMacaroni = {
  recipeId: 0,
  ingredientId: 0,
  quantityId: 0,
  unitId: 0,
}

const macAndCheeseCheese = {
  recipeId: 0,
  ingredientId: 1,
  quantityId: 0,
  unitId: 0,
  preparationId: 0
}

const macAndCheeseMilk = {
  recipeId: 0,
  ingredientId: 2,
  quantityId: 0,
  unitId: 0
}

const chickenSoupChickenThighs = {
  recipeId: 1,
  ingredientId: 3,
  quantityId: 3,
  unitId: 1
}

const chickenSoupOliveOil = {
  recipeId: 1,
  ingredientId: 4,
  quantityId: 2,
  unitId: 3
}

const chickenSoupCelery = {
  recipeId: 1,
  ingredientId: 5,
  quantityId: 2,
  unitId: 2,
  preparationId: 1
}

const chickenSoupLeeks = {
  recipeId: 1,
  ingredientId: 6,
  quantityId: 2,
  preparationId: 1
}

const chickenSoupOnion = {
  recipeId: 1,
  ingredientId: 7,
  quantityId: 3,
  preparationId: 1
}

const chickenSoupFennel = {
  recipeId: 1,
  ingredientId: 8,
  quantityId: 3,
  unitId: 4,
  preparationId: 2
}

const chickenSoupGarlic = {
  recipeId: 1,
  ingredientId: 9,
  quantityId: 4,
  unitId: 5,
  preparationId: 3
}

const chickenSoupGinger = {
  recipeId: 1,
  ingredientId: 10,
  quantityId: 3,
  unitId: 6,
  preparationId: 3
}

const chickenSoupChickenStock = {
  recipeId: 1,
  ingredientId: 11,
  quantityId: 5,
  unitId: 7
}

const chickenSoupNoodles = {
  recipeId: 1,
  ingredientId: 12,
  quantityId: 3,
  unitId: 1
}

const chickenSoupParsley = {
  recipeId: 1,
  ingredientId: 13,
  quantityId: 1,
  unitId: 8,
  preparationId: 4
}

const macaroni = {
  id: 0,
  name: 'macaroni',
  typeId: 0
}

const cheddarCheese = {
  id: 1,
  name: 'Cheddar cheese',
  typeId: 1
}

const evaporatedMilk = {
  id: 2,
  name: 'evaporated milk',
  typeId: 'dairy'
}

const chickenThighs = {
  id: 3,
  name: 'bone in, skin on chicken thighs',
  typeId: 2
}

const oliveOil = {
  id: 4,
  name: 'olive oil',
  typeId: 3
}

const celery = {
  id: 5,
  name: 'celery',
  typeId: 4
}

const leeks = {
  id: 6,
  name: 'leek',
  typeId: 4
}

const yellowOnion = {
  id: 7,
  name: 'yellow onion',
  typeId: 4
}

const fennel = {
  id: 8,
  name: 'fennel',
  typeId: 4
}

const garlic = {
  id: 9,
  name: 'garlic',
  typeId: 4
}

const ginger = {
  id: 10,
  name: 'ginger',
  typeId: 4
}

const chickenStock = {
  id: 11,
  name: 'chicken stock',
  typeId: 5
}

const orecchiette = {
  id: 12,
  name: 'orecchiette',
  typeId: 0
}

const parsley = {
  id: 13,
  name: 'parsley',
  typeId: 4
}

const six = {
  quantityId: 5,
  quantity: '6'
}

const four = {
  quantityId: 4,
  quantity: '4'
}

const one = {
  quantityId: 3,
  quantity: '1'
}

const ten = {
  quantityId: 0,
  quantity: '10'
}

const half = {
  quantityId: 1,
  quantity: '1/2'
}

const two = {
  quantityId: 2,
  quantity: '2'
}

const bunch = {
  unitId: 8,
  unit: 'bunch'
}

const cup = {
  unitId: 7,
  unit: 'cup'
}

const inch = {
  unitId: 6,
  unit: 'inch'
}

const clove = {
  unitId: 5,
  unit: 'clove'
}

const bulb = {
  unitId: 4,
  unit: 'bulb'
}

const stalks = {
  unitId: 2,
  unit: 'stalks'
}

const tablespoon = {
  unitId: 3,
  unit: 'tbsp'
}

const pounds = {
  unitId: 1,
  unit: 'lb'
}

const ounces = {
  unitId: 0,
  unit: 'oz'
}

const shredded = {
  preparationId: 0,
  preparation: 'shredded'
}

const chopped = {
  preparationId: 4,
  preparation: 'chopped'
}

const minced = {
  preparationId: 3,
  preparation: 'minced'
}

const thinSliced = {
  preparationId: 2,
  preparation: 'thinly sliced'
}

const diced = {
  preparationId: 1,
  preparation: 'diced'
}

const pasta = {
  id: 0,
  type: 'pasta'
}

const dairy = {
  id: 1,
  type: 'dairy'
}

const poultry = {
  id: 2,
  type: 'poultry'
}

const fat = {
  id: 3,
  type: 'fat/oil'
}

const produce = {
  id: 4,
  type: 'produce'
}

const pantryStaples = {
  id: 5,
  type: 'pantry staples'
}