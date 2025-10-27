import { OrderStep } from "@/types/order";

interface ProgressBarProps {
  currentStep: OrderStep;
}

const steps: OrderStep[] = ['welcome', 'mainCourse', 'sides', 'drinks', 'dessert', 'details', 'review'];

export const ProgressBar = ({ currentStep }: ProgressBarProps) => {
  const currentIndex = steps.indexOf(currentStep);
  const progress = ((currentIndex + 1) / steps.length) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="flex justify-between mt-2 text-xs text-muted-foreground">
        <span>Start</span>
        <span>{Math.round(progress)}% Complete</span>
        <span>Finish</span>
      </div>
    </div>
  );
};
