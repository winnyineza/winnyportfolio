
import { cn } from "@/lib/utils";
import AnimatedSection from "./AnimatedSection";
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

const SkillCard = ({ title, description, icon: Icon, index }: SkillCardProps) => {
  return (
    <AnimatedSection
      animation="scale-in"
      delay={0.1 * index}
      className="bg-white rounded-xl p-6 shadow-sm border border-border hover-card"
    >
      <div className="h-12 w-12 rounded-lg bg-accent flex items-center justify-center mb-5">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </AnimatedSection>
  );
};

export default SkillCard;
