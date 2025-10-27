import { Button } from "@/components/ui/button";
import { useOrder } from "@/components/OrderContext";
import { MenuCard } from "@/components/MenuCard";
import { ProgressBar } from "@/components/ProgressBar";
import { sides } from "@/data/menuItems";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "sonner";

const Sides = () => {
  const { orderData, updateOrderData, setCurrentStep, currentStep } = useOrder();

  const toggleSide = (id: string) => {
    const newSides = orderData.sides.includes(id)
      ? orderData.sides.filter((s) => s !== id)
      : orderData.sides.length < 2
      ? [...orderData.sides, id]
      : orderData.sides;

    if (orderData.sides.length >= 2 && !orderData.sides.includes(id)) {
      toast.error("You can select up to 2 sides only");
      return;
    }

    updateOrderData({ sides: newSides });
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <ProgressBar currentStep={currentStep} />
        
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Add Some Sides</h1>
          <p className="text-muted-foreground">Select up to 2 options (optional)</p>
          <div className="mt-2 text-sm text-primary font-medium">
            {orderData.sides.length} / 2 selected
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {sides.map((item) => (
            <MenuCard
              key={item.id}
              {...item}
              selected={orderData.sides.includes(item.id)}
              onClick={() => toggleSide(item.id)}
              className="side-option-card"
            />
          ))}
        </div>

        <div className="flex justify-between gap-4 max-w-2xl mx-auto">
          <Button
            variant="outline"
            size="lg"
            onClick={() => setCurrentStep('mainCourse')}
          >
            <ChevronLeft className="mr-2" />
            Back
          </Button>
          <Button
            size="lg"
            onClick={() => setCurrentStep('drinks')}
          >
            Next: Drinks
            <ChevronRight className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sides;
