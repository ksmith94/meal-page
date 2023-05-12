const macAndCheese: Recipe = {
  id: 0,
  title: 'Stovetop Mac & Cheese',
  description: 'A quick and simple mac and cheese recipe to make right on your stovetop!',
  baseServings: 2,
  time: 10,
  instructionsId: 0
}

const chickenNoodleSoup: Recipe = {
  id: 1,
  title: 'Chicken Noodle Soup',
  description: 'A hearty comforting soup for any time of year!',
  baseServings: 4,
  time: 55,
  instructionsId: 1
}

const pastaBurroAlici: Recipe = {
  id: 2,
  title: 'Pasta Burro e Alici',
  description: 'Butter, anchovies, and starchy cooking water come together to make a super-savory, creamy pasta sauce!',
  image: 'https://www.seriouseats.com/thmb/viAOjSOtB4THfm03GQwHO7cpK50=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2021__02__20210218-burro-e-alici-sasha-marx-11-d30e7f3153414346a24169785e1ffe41.jpg',
  baseServings: 2,
  time: 35,
  instructionsId: 2
}

const shakshuka: Recipe = {
  id: 3,
  title: 'Shakshuka',
  description: 'A North African one-pan egg and tomato dish that is perfect for breakfast, lunch, or dinner!',
  image: 'https://www.seriouseats.com/thmb/0N3gwBuMRvhQwe2HoTewyEsYUWw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__09__20160926-shakshuka-17-a2b1d35f5ce146d1b8f5e2851e73b487.jpg',
  baseServings: 4,
  time: 35,
  instructionsId: 3
}

const riceAndBeans: Recipe = {
  id: 4,
  title: 'Rice & Beans',
  description: 'An easy and nutritious vegetarian option!',
  image: 'https://www.thespruceeats.com/thmb/tuOIk_GoUS-P5C3XmZw-5vJ6sys=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/black-beans-and-white-rice-2138039-hero-01-f36d434e0c614bcb83d37754b9686150.jpg',
  baseServings: 2,
  time: 30,
  instructionsId: 4
}

const recipes: Recipe[] = [macAndCheese, chickenNoodleSoup, pastaBurroAlici, shakshuka, riceAndBeans];

export default recipes;