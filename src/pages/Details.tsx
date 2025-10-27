import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useOrder } from "@/components/OrderContext";
import { ProgressBar } from "@/components/ProgressBar";
import { timeSlots } from "@/data/menuItems";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from "lucide-react";
import { toast } from "sonner";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const Details = () => {
  const { orderData, updateOrderData, setCurrentStep, currentStep } = useOrder();

  const handleNext = () => {
    if (!orderData.customerName.trim()) {
      toast.error("Please enter your name");
      return;
    }
    if (!orderData.date) {
      toast.error("Please select a date");
      return;
    }
    if (!orderData.time) {
      toast.error("Please select a time slot");
      return;
    }
    setCurrentStep('review');
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        <ProgressBar currentStep={currentStep} />
        
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Order Details</h1>
          <p className="text-muted-foreground">When would you like your lunch?</p>
        </div>

        <div className="space-y-6 bg-card p-6 md:p-8 rounded-xl border shadow-[var(--shadow-card)]">
          <div className="space-y-2">
            <Label htmlFor="name">Your Name *</Label>
            <Input
              id="name"
              placeholder="Enter your name"
              value={orderData.customerName}
              onChange={(e) => updateOrderData({ customerName: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label>Delivery Date *</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !orderData.date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {orderData.date ? format(orderData.date, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={orderData.date || undefined}
                  onSelect={(date) => updateOrderData({ date: date || null })}
                  disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <Label>Time Slot *</Label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {timeSlots.map((slot) => (
                <Button
                  key={slot}
                  variant={orderData.time === slot ? "default" : "outline"}
                  onClick={() => updateOrderData({ time: slot })}
                  className="w-full"
                >
                  {slot}
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Special Instructions (Optional)</Label>
            <Textarea
              id="notes"
              placeholder="Any allergies, preferences, or special requests..."
              value={orderData.notes}
              onChange={(e) => updateOrderData({ notes: e.target.value })}
              rows={4}
            />
          </div>
        </div>

        <div className="flex justify-between gap-4 mt-8">
          <Button
            variant="outline"
            size="lg"
            onClick={() => setCurrentStep('dessert')}
          >
            <ChevronLeft className="mr-2" />
            Back
          </Button>
          <Button
            size="lg"
            onClick={handleNext}
          >
            Review Order
            <ChevronRight className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Details;
