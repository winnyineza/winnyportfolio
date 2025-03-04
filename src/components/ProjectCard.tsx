
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  index: number;
}

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  link,
  index,
}: ProjectCardProps) => {
  return (
    <AnimatedSection 
      animation="fade-in" 
      delay={0.1 * index}
      className="group"
    >
      <div className="rounded-lg overflow-hidden hover-card">
        <div className="relative h-64 sm:h-80 overflow-hidden">
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full text-primary hover:scale-110 transition-transform duration-300"
                aria-label={`View ${title} project`}
              >
                <ArrowUpRight className="h-5 w-5" />
              </a>
            )}
          </div>
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="p-6 bg-white">
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-1 bg-secondary text-xs font-medium rounded-full text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ProjectCard;
