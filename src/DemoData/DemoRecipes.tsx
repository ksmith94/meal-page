import Recipe from "../types/Recipe";

export const spaghettiCarbonara: Recipe = {
  id: 1,
  title: 'Spaghetti Carbonara',
  image: 'https://www.simplyrecipes.com/thmb/UyCGRk8-N9J1PJYN2sb7VZGtH2Q=/1920x1280/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2004__08__spaghetti-carbonara-horiz-a-1600-4a4a7f722c3448b3a3d3afcb3ee76327.jpg',
  ingredients: [
    { name: 'spaghetti', amount: 8, unit: 'oz' },
    { name: 'guanciale', amount: 4, unit: 'oz', preparation: 'diced' },
    { name: 'eggs', amount: 2, unit: 'large' },
    { name: 'Parmesan cheese', amount: 1, unit: 'cup' },
    { name: 'black pepper', amount: 1, unit: 'tsp' },
  ],
  servings: 4,
  prepTime: 10,
  cookTime: 15,
  instructions: ['Cook spaghetti according to package directions. Reserve 1 cup of the pasta cooking water.', 'While spaghetti is cooking, cook bacon in a large skillet over medium heat until crisp. Remove from skillet and crumble.', 'In a bowl, whisk together eggs, Parmesan cheese, and black pepper.', 'Drain spaghetti and add to the skillet with the bacon. Toss to combine. Remove skillet from heat and let cool for 1 minute.', 'Add the egg mixture to the skillet and toss to coat the spaghetti. If the mixture seems dry, add some of the reserved pasta cooking water. Serve immediately.']
};