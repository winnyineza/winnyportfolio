
import { cn } from "@/lib/utils";
import AnimatedSection from "./AnimatedSection";
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
  isAlternate?: boolean;
}

const SkillCard = ({ title, description, icon: Icon, index, isAlternate = false }: SkillCardProps) => {
  return (
    <AnimatedSection
      animation="scale-in"
      delay={0.1 * index}
      className={cn(
        "rounded-xl p-6 shadow-sm border border-black hover-card transition-transform duration-500 hover:rotate-1",
        isAlternate ? "bg-yellow-400 text-black" : "bg-white text-black"
      )}
    >
      <div className={cn(
        "h-12 w-12 rounded-lg flex items-center justify-center mb-5",
        isAlternate ? "bg-white" : "bg-yellow-400"
      )}>
        <Icon className="h-6 w-6 text-black" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className={cn(
        isAlternate ? "text-black/80" : "text-black/70"
      )}>{description}</p>
    </AnimatedSection>
  );
};

export default SkillCard;
