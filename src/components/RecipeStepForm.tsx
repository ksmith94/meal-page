// import React, { FormEvent, useState } from "react";

// interface RecipeStepFormProps {
//   onStepAdd: (step: string) => void;
// }

// function RecipeStepForm({ onStepAdd }: RecipeStepFormProps): JSX.Element {
//   const [currentStep, setCurrentStep] = useState<string>('');

//   const handleStepAdd = (e: FormEvent<HTMLInputElement> | MouseEvent<HTMLIN) => {
//     e.preventDefault();
//     if (currentStep !== '') {
//       onStepAdd(currentStep);
//       setCurrentStep('');
//     }
//   }

//   // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//   //   e.preventDefault();
//   //   handleAddStep();
//   // }

//   return (
//     <div>
//       <input 
//         type='text' 
//         value={currentStep}
//         onChange={(e) => setCurrentStep(e.target.value)}
//         onSubmit={(e) => handleStepAdd(e)}
//       />
//       <button onClick={(e) => handleStepAdd(e)}>Add Step</button>
//     </div>
//   )
// }

// export default RecipeStepForm;