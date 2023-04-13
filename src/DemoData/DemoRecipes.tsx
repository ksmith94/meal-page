import Recipe from "../types/Recipe";

const spaghettiCarbonara: Recipe = {
  id: 1,
  title: 'Spaghetti Carbonara',
  image: 'https://www.seriouseats.com/thmb/5aKCalIkNFzVMKs-dFYlEkkCnR8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__02__20151118-spaghetti-carbonara-vicky-wasik-27-5ed8e4c860c945f0a3c4315a25a7001b.jpg',
  ingredients: [
    { name: 'spaghetti', amount: 8, unit: 'oz' },
    { name: 'guanciale', amount: 4, unit: 'oz', preparation: 'diced' },
    { name: 'eggs', amount: 2, unit: 'large' },
    { name: 'Parmesan cheese', amount: 1, unit: 'cup' },
    { name: 'black pepper', amount: 1, unit: 'tsp' },
  ],
  servings: 2,
  prepTime: 10,
  cookTime: 15,
  instructions: ['Cook spaghetti according to package directions. Reserve 1 cup of the pasta cooking water.', 'While spaghetti is cooking, cook bacon in a large skillet over medium heat until crisp. Remove from skillet and crumble.', 'In a bowl, whisk together eggs, Parmesan cheese, and black pepper.', 'Drain spaghetti and add to the skillet with the bacon. Toss to combine. Remove skillet from heat and let cool for 1 minute.', 'Add the egg mixture to the skillet and toss to coat the spaghetti. If the mixture seems dry, add some of the reserved pasta cooking water. Serve immediately.']
};

const spicyGoatCheesePasta: Recipe = {
  id: 0,
  title: 'Spicy Goat Cheese Pasta w/ Peas',
  ingredients: [
    { name: 'olive oil', amount: 'as needed' },
    { name: 'shallots', amount: 2, preparation: 'diced' },
    { name: 'garlic', amount: 3, unit: 'cloves', preparation: 'minced' },
    { name: 'hot italian sausage', amount: 1, unit: 'lb' },
    { name: 'tomato paste', amount: 2, unit: 'tbsp' },
    { name: 'calabrian chiles', amount: 2, unit: 'tbsp' },
    { name: 'white wine or chicken stock', amount: 1 / 2, unit: 'cup' },
    { name: 'orecchiette', amount: 1, unit: 'lb' },
    { name: 'goat cheese', amount: 4, unit: 'oz' },
    { name: 'heavy cream', amount: 1 / 4, unit: 'cup', optional: true },
    { name: 'parmesan', amount: 4, unit: 'oz' },
    { name: 'peas, fresh or frozen', amount: 8, unit: 'oz' },
  ],
  servings: 4,
  prepTime: 5,
  cookTime: 25,
  instructions: [
    'Heat the olive oil in a large pan. Add the sausage to the pan and break it up. Brown it a bit. Meanwhile, bring a large pot of water to a boil.',
    'Add the shallots and garlic to the pan with the sausage and cook until they start to sweat',
    'Add tomato paste and combine. Continue to cook until the oil is dyed red from the tomato paste. Add the Calabrian chiles and stir to combine.',
    'Add the white wine and deglaze. Bring to a simmer and let it reduce by half.',
    'Cook the orecchiette to the water and cook until just shy of al dente, about 2 minutes less than package instructions.',
    'Add the goat cheese to the sauce and stir to combine. Add the cream as well.',
    'Bring the sauce to a light simmer. Just before the pasta is done cooking, add the parmesan to the sauce.',
    'Transfer the pasta to the sauce, reserving a cup of pasta water. Add the peas as well. Cook until you reach your desired consistency and the peas have warmed through. Serve with additional parmesan at the table.'
  ]
};

const foulMdammas: Recipe = {
  id: 2,
  title: 'Foul Mdammas',
  image: 'https://www.themediterraneandish.com/wp-content/uploads/2020/01/foul-mudammas-recipe-10.jpg',
  ingredients: [
    {name: 'olive oil', amount: 2, unit: 'tbsp', preparation: 'plus more as needed'},
    {name: 'yellow onion', amount: 1, preparation: 'chopped'},
    {name: 'jalapenos', amount: 2, preparation: 'chopped'},
    {name: 'garlic', amount: 2, unit: 'cloves', preparation: 'minced'},
    {name: 'Roma tomato', amount: 1, preparation: 'chopped'},
    {name: 'fava beans', amount: 1, unit: 'can', preparation: 'drained'},
    {name: 'cumin', amount: 1, unit: 'tsp'},
    {name: 'salt/pepper', amount: 'as needed'},
    {name: 'lemon juice', amount: 1, unit: 'tbsp'},
    {name: 'pita bread or fresh veggies', amount: 'to serve as a side:'}
  ],
  servings: 2,
  prepTime: 10,
  cookTime: 10,
  instructions: [
    'Heat the olive oil in a pan. When it is hot, add the onion and jalapenos and sweat until they are transluscent.',
    'Add the minced garlic and saute until fragrant, about 30 seconds.',
    'Add the Roma tomatoes and fava beans. Heat until they are warmed through. Using the side of a wooden spoon, mash all of this together into a chunky paste.',
    'Add the cumin and lemon juice and stir to combine. Season to taste with salt and pepper.',
    'To serve, pour a large glug of olive oil over the top and serve with pita or fresh, crunchy veggies for dipping. Top with additional fresh tomato, jalapeno, and parsley if desired.'
  ]
};

const recipes = [spaghettiCarbonara, spicyGoatCheesePasta, foulMdammas];
export default recipes;