import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

interface MenuCardProps {
  icon: string;
  name: string;
  description: string;
  selected: boolean;
  onClick: () => void;
}

export const MenuCard = ({ icon, name, description, selected, onClick }: MenuCardProps) => {
  return (
    <Card
      onClick={onClick}
      className={cn(
        "cursor-pointer p-6 transition-all duration-300 hover:scale-105",
        "border-2 hover:shadow-[var(--shadow-card-hover)]",
        selected
          ? "border-primary bg-primary/5 shadow-[var(--shadow-card)]"
          : "border-border hover:border-primary/50"
      )}
    >
      <div className="flex flex-col items-center text-center gap-3">
        <div className="text-5xl mb-2">{icon}</div>
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </Card>
  );
};
