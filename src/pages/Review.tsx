import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useOrder } from "@/components/OrderContext";
import { ProgressBar } from "@/components/ProgressBar";
import { mainCourses, sides, drinks, desserts } from "@/data/menuItems";
import { ChevronLeft, CheckCircle2, Calendar, Clock, User, FileText } from "lucide-react";
import { format } from "date-fns";

const Review = () => {
  const { orderData, setCurrentStep, currentStep } = useOrder();

  const getItemName = (id: string, items: typeof mainCourses) => {
    return items.find((item) => item.id === id)?.name || id;
  };

  const handleSubmit = () => {
    setCurrentStep('success');
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        <ProgressBar currentStep={currentStep} />
        
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Review Your Order</h1>
          <p className="text-muted-foreground">Make sure everything looks good</p>
        </div>

        <div className="space-y-6">
          <Card className="p-6 shadow-[var(--shadow-card)]">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-3xl">🍽️</span>
              Your Selections
            </h2>
            
            <div className="space-y-4">
              <div className="pb-4 border-b">
                <h3 className="font-semibold text-lg mb-2">Main Course</h3>
                <p className="text-muted-foreground">
                  {orderData.mainCourse ? getItemName(orderData.mainCourse, mainCourses) : "None"}
                </p>
              </div>

              {orderData.sides.length > 0 && (
                <div className="pb-4 border-b">
                  <h3 className="font-semibold text-lg mb-2">Sides</h3>
                  <ul className="text-muted-foreground space-y-1">
                    {orderData.sides.map((id) => (
                      <li key={id}>• {getItemName(id, sides)}</li>
                    ))}
                  </ul>
                </div>
              )}

              {orderData.drinks.length > 0 && (
                <div className="pb-4 border-b">
                  <h3 className="font-semibold text-lg mb-2">Drinks</h3>
                  <ul className="text-muted-foreground space-y-1">
                    {orderData.drinks.map((id) => (
                      <li key={id}>• {getItemName(id, drinks)}</li>
                    ))}
                  </ul>
                </div>
              )}

              {orderData.dessert && (
                <div className="pb-4 border-b">
                  <h3 className="font-semibold text-lg mb-2">Dessert</h3>
                  <p className="text-muted-foreground">
                    {getItemName(orderData.dessert, desserts)}
                  </p>
                </div>
              )}
            </div>
          </Card>

          <Card className="p-6 shadow-[var(--shadow-card)]">
            <h2 className="text-2xl font-semibold mb-4">Delivery Details</h2>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Name</p>
                  <p className="font-medium">{orderData.customerName}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Date</p>
                  <p className="font-medium">
                    {orderData.date ? format(orderData.date, "PPPP") : "Not selected"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Time</p>
                  <p className="font-medium">{orderData.time}</p>
                </div>
              </div>

              {orderData.notes && (
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">Special Instructions</p>
                    <p className="font-medium">{orderData.notes}</p>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>

        <div className="flex justify-between gap-4 mt-8">
          <Button
            variant="outline"
            size="lg"
            onClick={() => setCurrentStep('details')}
          >
            <ChevronLeft className="mr-2" />
            Back
          </Button>
          <Button
            size="lg"
            onClick={handleSubmit}
            className="bg-accent hover:bg-accent/90"
          >
            <CheckCircle2 className="mr-2" />
            Confirm Order
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Review;
