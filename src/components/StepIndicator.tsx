'use client';

import { CART_STEP_TITLES, CART_STEPS } from '@/constants/cart';

interface StepIndicatorProps {
  activeStep: number;
}

const StepIndicator = ({ activeStep }: StepIndicatorProps) => {
  const steps = Object.entries(CART_STEP_TITLES).map(([id, title]) => ({
    id: parseInt(id),
    title,
  }));

  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
      {steps.map((step) => (
        <div
          key={step.id}
          className={`flex items-center gap-2 border-b-2 pb-4 ${
            step.id === activeStep ? 'step-indicator-active' : 'step-indicator-inactive'
          }`}
        >
          <div
            className={`w-6 h-6 rounded-full text-white p-4 flex items-center justify-center ${
              step.id === activeStep ? 'step-circle-active' : 'step-circle-inactive'
            }`}
          >
            {step.id}
          </div>
          <p
            className={`text-sm font-medium ${
              step.id === activeStep ? 'step-text-active' : 'step-text-inactive'
            }`}
          >
            {step.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
