import React from "react";
// import instructions from "../DemoData/Instructions";
// import { getInstructions } from "./utils";

interface InstructionsDisplayProps {
  steps: string[]
}

function InstructionsDisplay(instructions: InstructionsDisplayProps): JSX.Element {

  // const instructionsList = getInstructions(instructionsId, instructions);


  return (
    <div>
      {
      instructions.steps ?
      <ol>
        {instructions.steps.map((instruction, i) => (
          <li key={i}>{instruction}</li>
        ))}
      </ol> :
      <p>No instructions found :(</p>
      }
    </div>
  )
}



export default InstructionsDisplay;