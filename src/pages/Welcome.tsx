import { Button } from "@/components/ui/button";
import { useOrder } from "@/components/OrderContext";
import { ChevronRight, UtensilsCrossed } from "lucide-react";

const Welcome = () => {
  const { setCurrentStep } = useOrder();

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[var(--gradient-hero)]">
      <div className="max-w-2xl w-full text-center space-y-8 animate-in fade-in duration-700">
        <div className="space-y-4">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-4">
            <UtensilsCrossed className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Welcome to Lunch Order
          </h1>
          <p className="text-xl text-muted-foreground max-w-md mx-auto">
            Create your perfect lunch order in just a few simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            { emoji: "🍽️", title: "Choose Your Meal", desc: "Select from our delicious menu" },
            { emoji: "📅", title: "Pick a Time", desc: "Schedule your order" },
            { emoji: "✅", title: "Confirm & Done", desc: "Review and submit" },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-card border border-border hover:shadow-[var(--shadow-card)] transition-all duration-300"
            >
              <div className="text-4xl mb-3">{item.emoji}</div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        <Button
          size="lg"
          onClick={() => setCurrentStep('mainCourse')}
          className="mt-8 text-lg px-8 py-6 h-auto shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)]"
        >
          Start Your Order
          <ChevronRight className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default Welcome;
