import ExplainedStepCard from '../UI/ExplainedStepCard';
import { adStepsData } from '../../data/StaticData';

export default function ProcessExplained() {
  const steps = adStepsData(); // Call the function to get the array

  return (
    <>
      {steps.map((step, index) => (
        <ExplainedStepCard
          key={index}
          imageSrc={step.imageSrc}
          stepNumber={step.stepNumber}
          title={step.title}
          description={step.description}
          bulletPoints={step.bulletPoints}
        />
      ))}
    </>
  );
}
