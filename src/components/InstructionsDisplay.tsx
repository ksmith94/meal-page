import React from "react";
import instructions from "../DemoData/Instructions";
import { getInstructions } from "./utils";

function InstructionsDisplay(recipe: Recipe): JSX.Element {

  const instructionsId = recipe.instructionsId;
  const instructionsList = getInstructions(instructionsId, instructions);


  return (
    <div>
      {
      instructionsList ?
      <ol>
        {instructionsList.map((instruction, i) => (
          <li key={i}>{instruction}</li>
        ))}
      </ol> :
      <p>No instructions found :(</p>
      }
    </div>
  )
}



export default InstructionsDisplay;