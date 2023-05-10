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

const pastaBurroAlici = {
  id: 2,
  title: 'Pasta Burro e Alici',
  description: 'Butter, anchovies, and starchy cooking water come together to make a super-savory, creamy pasta sauce!',
  image: 'https://www.seriouseats.com/thmb/viAOjSOtB4THfm03GQwHO7cpK50=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2021__02__20210218-burro-e-alici-sasha-marx-11-d30e7f3153414346a24169785e1ffe41.jpg',
  baseServings: 2,
  time: 35,
  instructionsId: 2
}

const shakshuka = {
  id: 3,
  title: 'Shakshuka',
  description: 'A North African one-pan egg and tomato dish that is perfect for breakfast, lunch, or dinner!',
  image: 'https://www.seriouseats.com/thmb/0N3gwBuMRvhQwe2HoTewyEsYUWw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__09__20160926-shakshuka-17-a2b1d35f5ce146d1b8f5e2851e73b487.jpg',
  baseServings: 4,
  time: 35,
  instructionsId: 3
}

const riceAndBeans = {
  id: 4,
  title: 'Rice & Beans',
  description: 'An easy and nutritious vegetarian option!',
  image: 'https://www.thespruceeats.com/thmb/tuOIk_GoUS-P5C3XmZw-5vJ6sys=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/black-beans-and-white-rice-2138039-hero-01-f36d434e0c614bcb83d37754b9686150.jpg',
  baseServings: 2,
  time: 30,
  instructionsId: 4
}

const riceAndBeansInstructions = {
  id: 4,
  instructions: [
    'Cook the rice according to the package instructrions.',
    'Heat the oil in a large skillet until shimmering. Add the onion and jalapeños and cook until just starting to brown. Add the garlic and cook until fragrant, about 30 seconds. Add the cumin, coriander, cayenne, oregano, and cinammon, and cook until fragrant, another 30 seconds or so.',
    'Add the cans of beans, liquid and all to the pan. Bring to a simmer and mash them with the back of a wooden spoon to your desired consistency. Alternatively, you could transfer to a blender and blend for a very smooth product. Add the chiles to the beans.',
    'Cook the beans until they have reduced to your desired consistency and serve over rice.'
  ]
}

const shakshukaInstructions = {
  id: 3,
  instructions: [
    'Heat the olive oil in a large skillet until shimmering. Add the onion, red bell pepper, and chile. Spread it into an even layer, and cook without moving until it begins to char. Stir, then repeat this process until the vegetables are fully softened.',
    'Add the garlic and cook until fragrant, about 30 seconds. Add the paprika and cumin and cook stirring until fragrant, another 30 seconds.',
    'Add the tomatoes and stir to combine. Bring to a simmer and let simmer for aobut 10 minutes. Season to taste with salt and pepper. Add the cilantor or parsley.',
    'Using a large spoon, make small wells throughout the shakshuka to put the eggs in. Crack the eggs directly into the sauce, and spoon a little bit of it over to slightly cover the eggs whites. Season with a little salt, cover the pan, and cook until the whites are just set and the yolks are still runny, about 5-8 minutes.'
  ]
}

const pastaBurroAliciInstructions = {
  id: 2,
  instructions: [
    'In a small skillet, combine the olive oil and breadcrumbs and cook, stirring, until the breadcrumbs are golden brown. Season lightly with salt. Meanwhile, bring a large pot of salted water to a boil.',
    'In a large skillet, melt 3 oz of the butter over medium low heat. Add the anchovies and cook stirring to break them up until they dissolve into the butter, about 4 minutes. Reduce heat to the lowest setting just to keep warm while the pasta finishes cooking',
    'Meanwhile, once the water is boiling, add the pasta and cook until just shy of al dente, about 1-2 minutes less than package instructions.',
    'When the pasta has cooked for ~5 minutes, add a cup of the pasta water to the sauce. Return the heat to high and bring to a rapid simmer, swirling the pan and stirring constantly until the water emulsifies into the sauce. Reduce the heat back to low.',
    'When the pasta is done, either transfer it to the pan with the sauce using tongs, or drain in a colander making sure to reserve 1-2 cups of cooking water.',
    'Increase the heat and cook stirring constantly until the pasta is al dente and the sauce is thickened to your desired consistency, adding pasta water as necessary.',
    'Remove the pasta from the heat, add the remaining butter, the lemon juice, and zest. Stir rapidly to incorporate, and season to taste with salt and pepper. Serve, topping with the toasted breadcrumbs.'
  ]
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

const burroAliciOliveOil = {
  recipeId: 2,
  ingredientId: 4,
  quantityId: 3,
  unitId: 3
}

const burroAliciPanko = {
  recipeId: 2,
  ingredientId: 14,
  quantityId: 1,
  unitId: 7
}

const burroAliciButter = {
  recipeId: 2,
  ingredientId: 15,
  quantityId: 4,
  unitId: 0
}

const burroAliciAnchovy = {
  recipeId: 2,
  ingredientId: 16,
  quantityId: 5
}

const burroAliciSpaghetti = {
  recipeId: 2,
  ingredientId: 17,
  quantityId: 5,
  unitId: 0
}

const burroAliciLemon = {
  recipeId: 2,
  ingredientId: 18,
  quantityId: 3,
  preparationId: 5
}

const burroAliciParsley = {
  recipeId: 2,
  ingredientId: 13,
  quantityId: 3,
  unitId: 7,
  preparationId: 4
}

const shakshukaOliveOil = {
  recipeId: 3,
  ingredientId: 4,
  quantityId: 6,
  unitId: 3
}

const shakshukaOnion = {
  recipeId: 3,
  ingredientId: 7,
  quantityId: 3,
  preparationId: 2
}

const shakshukaRedPepper = {
  recipeId: 3,
  ingredientId: 19,
  quantityId: 3,
  preparationId: 2
}

const shakshukaJalapeno = {
  recipeId: 3,
  ingredientId: 20,
  quantityId: 3,
  preparationId: 2
}

const shakshukaGarlic = {
  recipeId: 3,
  ingredientId: 9,
  quantityId: 5,
  unitId: 5,
  preparationId: 2
}

const shakshukaPaprika = {
  recipeId: 3,
  ingredientId: 21,
  quantityId: 6,
  unitId: 9
}

const shakshukaCumin = {
  recipeId: 3,
  ingredientId: 22,
  quantityId: 2,
  unitId: 9
}

const shakshukaTomatoes = {
  recipeId: 3,
  ingredientId: 23,
  quantityId: 3,
  unitId: 10,
  preparationId: 7
}

const shakshukaParsley = {
  recipeId: 3,
  ingredientId: 13,
  quantityId: 3,
  unitId: 8,
  preparationId: 4
}

const shakshukaEggs = {
  recipeId: 3,
  ingredientId: 24,
  quantityId: 5,
}

const riceBeansOil = {
  recipeId: 4,
  ingredientId: 25,
  quantityId: 3,
  unitId: 3
}

const riceBeansOnion = {
  recipeId: 4,
  ingredientId: 7,
  quantityId: 1,
  preparationId: 1
}

const riceBeansJalapeno = {
  recipeId: 4,
  ingredientId: 20,
  quantityId: 3,
  preparationId: 1
}

const riceBeansGarlic = {
  recipeId: 4,
  ingredientId: 9,
  quantityId: 2,
  unitId: 5,
  preparationId: 3
}

const riceBeansCumin = {
  recipeId: 4,
  ingredientId: 26,
  quantityId: 1,
  unitId: 3,
}

const riceBeansCoriander = {
  recipeId: 4,
  ingredientId: 27,
  quantityId: 1,
  unitId: 3,
}

const riceBeansCayenne = {
  recipeId: 4,
  ingredientId: 28,
  quantityId: 3,
  unitId: 9,
}

const riceBeansOregano = {
  recipeId: 4,
  ingredientId: 29,
  quantityId: 3,
  unitId: 9,
}

const riceBeansCinnamon = {
  recipeId: 4,
  ingredientId: 30,
  quantityId: 7,
  unitId: 9,
}

const riceBeansBeans = {
  recipeId: 4,
  ingredientId: 31,
  quantityId: 3,
  unitId: 11
}

const riceBeansRice = {
  recipeId: 4,
  ingredientId: 32,
  quantityId: 1,
  unitId: 7,
  preparationId: 8
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

const panko = {
  id: 14,
  name: 'Panko breadcrumbs',
  typeId: 5
}

const butter = {
  id: 15,
  name: 'butter',
  typeId: 1
}

const anchoyFilets = {
  id: 16,
  name: 'anchovy fillets',
  typeId: 5
}

const spaghetti = {
  id: 17,
  name: 'spaghetti',
  typeId: 0
}

const lemon = {
  id: 18,
  name: 'lemon',
  typeId: 4
}

const redBellPepper = {
  id: 19,
  name: 'red bell pepper',
  typeId: 4
}

const jalapeno = {
  id: 20,
  name: 'jalapeño pepper',
  typeId: 4
}

const paprika = {
  id: 21,
  name: 'paprika',
  typeId: 6
}

const cuminSeed = {
  id: 22,
  name: 'whole cumin seeds',
  typeId: 6
}

const wholePeeledCannedTomatoes = {
  id: 23,
  name: 'whole peeled canned tomatoes',
  typeId: 5
}

const largeEggs = {
  id: 24,
  name: 'large eggs',
  typeId: 2
}

const neutralOil = {
  id: 25,
  name: 'neutral oil, such as canola or vegetable',
  typeId: 3
}

const groundCumin = {
  id: 26,
  name: 'ground cumin',
  typeId: 6
}

const groundCoriander = {
  id: 27,
  name: 'ground coriander',
  typeId: 6
}

const cayenne = {
  id: 28,
  name: 'cayenne',
  typeId: 6
}

const driedOregano = {
  id: 29,
  name: 'dried oregano',
  typeId: 6
}

const groundCinnamon = {
  id: 30,
  name: 'ground cinnamon',
  typeId: 6
}

const pintoBeans = {
  id: 31,
  name: 'pinto beans',
  typeId: 7
}

const rice = {
  id: 31,
  name: 'rice',
  typeId: 5
}

const quarter = {
  quantityId: 7,
  quantity: '1/4'
}

const oneAndAHalf = {
  quantityId: 6,
  quantity: '1 1/2'
}

const three = {
  quantityId: 5,
  quantity: '3'
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

const can = {
  unitId: 11,
  unit: '14.5 oz can'
}

const largeCan = {
  unitId: 10,
  unit: '28 oz can'
}

const teaspoon = {
  unitId: 9,
  unit: 'tsp'
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

const cooked = {
  preparationId: 8,
  preparation: 'cooked'
}

const crushed = {
  preparationId: 7,
  preparation: 'crushed'
}

const zested = {
  preparationId: 6,
  preparation: 'zested'
}

const juiced = {
  preparationId: 5,
  preparation: 'juiced'
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

const spices = {
  id: 6,
  type: 'spices'
}

const beansLegumes = {
  id: 7,
  type: 'beans/legumes'
}