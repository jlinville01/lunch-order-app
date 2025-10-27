import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useOrder } from "@/components/OrderContext";
import { mainCourses, sides, drinks, desserts } from "@/data/menuItems";
import { CheckCircle, Home } from "lucide-react";
import { format } from "date-fns";
import { useEffect } from "react";

const Success = () => {
  const { orderData, resetOrder } = useOrder();

  useEffect(() => {
    // Confetti effect or celebration animation could go here
  }, []);

  const getItemName = (id: string, items: typeof mainCourses) => {
    return items.find((item) => item.id === id)?.name || id;
  };

  const handleNewOrder = () => {
    resetOrder();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[var(--gradient-hero)]">
      <Card className="max-w-2xl w-full p-8 md:p-12 text-center space-y-6 shadow-[var(--shadow-card-hover)] animate-in fade-in zoom-in duration-500">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mb-4">
          <CheckCircle className="w-12 h-12 text-accent" />
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-3">Order Confirmed!</h1>
          <p className="text-xl text-muted-foreground">
            Thank you, {orderData.customerName}! Your lunch is on its way.
          </p>
        </div>

        <div className="bg-muted/50 rounded-lg p-6 text-left space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Delivery Details</p>
            <p className="font-semibold">
              {orderData.date ? format(orderData.date, "PPPP") : ""} at {orderData.time}
            </p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-2">Your Order</p>
            <div className="space-y-2 text-sm">
              {orderData.mainCourse && (
                <div className="flex items-center gap-2">
                  <span className="text-primary">•</span>
                  <span>{getItemName(orderData.mainCourse, mainCourses)}</span>
                </div>
              )}
              {orderData.sides.map((id) => (
                <div key={id} className="flex items-center gap-2">
                  <span className="text-primary">•</span>
                  <span>{getItemName(id, sides)}</span>
                </div>
              ))}
              {orderData.drinks.map((id) => (
                <div key={id} className="flex items-center gap-2">
                  <span className="text-primary">•</span>
                  <span>{getItemName(id, drinks)}</span>
                </div>
              ))}
              {orderData.dessert && (
                <div className="flex items-center gap-2">
                  <span className="text-primary">•</span>
                  <span>{getItemName(orderData.dessert, desserts)}</span>
                </div>
              )}
            </div>
          </div>

          {orderData.notes && (
            <div>
              <p className="text-sm text-muted-foreground mb-1">Special Instructions</p>
              <p className="text-sm italic">{orderData.notes}</p>
            </div>
          )}
        </div>

        <div className="pt-4">
          <p className="text-sm text-muted-foreground mb-4">
            A confirmation email has been sent to you.
          </p>
          <Button
            size="lg"
            onClick={handleNewOrder}
            variant="outline"
            className="w-full"
          >
            <Home className="mr-2" />
            Start New Order
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Success;
