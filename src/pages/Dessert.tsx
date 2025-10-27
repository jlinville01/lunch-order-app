import { Button } from "@/components/ui/button";
import { useOrder } from "@/components/OrderContext";
import { MenuCard } from "@/components/MenuCard";
import { ProgressBar } from "@/components/ProgressBar";
import { desserts } from "@/data/menuItems";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Dessert = () => {
  const { orderData, updateOrderData, setCurrentStep, currentStep } = useOrder();

  const toggleDessert = (id: string) => {
    updateOrderData({ 
      dessert: orderData.dessert === id ? null : id 
    });
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <ProgressBar currentStep={currentStep} />
        
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Add a Sweet Treat</h1>
          <p className="text-muted-foreground">Select one dessert (optional)</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {desserts.map((item) => (
            <MenuCard
              key={item.id}
              {...item}
              selected={orderData.dessert === item.id}
              onClick={() => toggleDessert(item.id)}
              className="dessert-option-card"
            />
          ))}
        </div>

        <div className="flex justify-between gap-4 max-w-2xl mx-auto">
          <Button
            variant="outline"
            size="lg"
            onClick={() => setCurrentStep('drinks')}
          >
            <ChevronLeft className="mr-2" />
            Back
          </Button>
          <Button
            size="lg"
            onClick={() => setCurrentStep('details')}
          >
            Next: Details
            <ChevronRight className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dessert;
