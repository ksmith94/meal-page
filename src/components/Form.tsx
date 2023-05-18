import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";

// interface RecipeStepFormProps {
//   onStepAdd: (step: string) => void;
// }

function RecipeStepForm(): JSX.Element {
  const [steps, setSteps] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState<string>('');

  const handleAddStep = () => {
    if (currentStep !== '') {
      const updatedSteps = [...steps, currentStep];
      setSteps(updatedSteps);
      setCurrentStep('');
    }
    console.log(currentStep);
  }

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   handleAddStep();
  // }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentStep(e.target.value)
  }

  return (
    <Wrapper>
      <div>
        {steps.length === 0 ? (
          <p>No steps added yet</p>
        ) : (
          <ol>
            {steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        )}
      </div>
      <input 
        type='text' 
        value={currentStep}
        onChange={handleInputChange}
      />
      <button onClick={handleAddStep}>Add Step</button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 112px 0 0 16px;
`

export default RecipeStepForm;