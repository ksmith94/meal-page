// import { client } from "../sanity/client";

// export default async function handler (req, res) {
//   let newIngredient;

//   switch (req.method) {
//     case 'POST': 
//       newIngredient = await JSON.parse(req.body);

//       try {
//         await client
//           .create({
//             _type: 'ingredientType',
//             type: newIngredient.text
//           })
//           .then((res) => {
//             console.log(`Ingredient type was created, the id is ${res._id}`)
//           });
        
//         res.status(200).json({msg: `Ingredient type created, the id is ${res._id}`});
//       } catch (err) {
//         console.error(err);
//         res.stats(500).json({msg: "Error, check console"});
//       }

//       break;
//   }
// }