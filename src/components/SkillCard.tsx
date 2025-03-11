
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
        "rounded-xl p-6 shadow-sm border hover-card transition-transform duration-500 hover:rotate-1",
        isAlternate ? "bg-gray-900 border-gray-800 text-white" : "bg-white border-gray-200 text-gray-900"
      )}
    >
      <div className={cn(
        "h-12 w-12 rounded-lg flex items-center justify-center mb-5",
        isAlternate ? "bg-gray-800" : "bg-gray-100"
      )}>
        <Icon className={cn("h-6 w-6", isAlternate ? "text-white" : "text-gray-900")} />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className={cn(
        isAlternate ? "text-gray-400" : "text-gray-600"
      )}>{description}</p>
    </AnimatedSection>
  );
};

export default SkillCard;
