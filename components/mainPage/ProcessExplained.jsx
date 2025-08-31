import ExplainedStepCard from '../UI/ExplainedStepCard';
import { adStepsData } from '../../data/StaticData';
import { useTranslations } from 'next-intl';

export default function ProcessExplained() {
  const t = useTranslations('components.processSteps'); 
  const steps = adStepsData(t); 

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
