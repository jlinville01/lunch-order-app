import { Button } from "@/components/ui/button";
import { useOrder } from "@/components/OrderContext";
import { MenuCard } from "@/components/MenuCard";
import { ProgressBar } from "@/components/ProgressBar";
import { mainCourses } from "@/data/menuItems";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "sonner";

const MainCourse = () => {
  const { orderData, updateOrderData, setCurrentStep, currentStep } = useOrder();

  const handleNext = () => {
    if (!orderData.mainCourse) {
      toast.error("Please select a main course");
      return;
    }
    setCurrentStep('sides');
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <ProgressBar currentStep={currentStep} />
        
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Choose Your Main Course</h1>
          <p className="text-muted-foreground">Select one delicious option</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {mainCourses.map((item) => (
            <MenuCard
              key={item.id}
              {...item}
              selected={orderData.mainCourse === item.id}
              onClick={() => updateOrderData({ mainCourse: item.id })}
              className="main-course-option-card"
            />
          ))}
        </div>

        <div className="flex justify-between gap-4 max-w-2xl mx-auto">
          <Button
            variant="outline"
            size="lg"
            onClick={() => setCurrentStep('welcome')}
          >
            <ChevronLeft className="mr-2" />
            Back
          </Button>
          <Button
            size="lg"
            onClick={handleNext}
          >
            Next: Sides
            <ChevronRight className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MainCourse;
