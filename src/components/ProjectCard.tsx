
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

interface ProjectCardProps {
  title: string;
  description: string;
  images: string[];
  tags: string[];
  link?: string;
  index: number;
  isAlternate?: boolean;
}

const ProjectCard = ({
  title,
  description,
  images,
  tags,
  link,
  index,
  isAlternate = false,
}: ProjectCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <AnimatedSection 
      animation="fade-in" 
      delay={0.1 * index}
      className={cn(
        "group relative overflow-hidden border-2 border-black rounded-xl",
        isAlternate ? "bg-yellow-400" : "bg-white"
      )}
    >
      <div className="absolute top-4 right-4 z-10 bg-yellow-400 rounded-full px-3 py-1 text-xs font-bold border border-black">
        {currentImageIndex + 1}/{images.length}
      </div>
      
      <div className="relative h-64 sm:h-80 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-between px-4 z-20">
          <button 
            onClick={prevImage}
            className="bg-white p-2 rounded-full border border-black transform transition-transform hover:scale-110 focus:outline-none"
            aria-label="Previous image"
          >
            <ArrowLeft className="h-5 w-5 text-black" />
          </button>
          <button 
            onClick={nextImage}
            className="bg-white p-2 rounded-full border border-black transform transition-transform hover:scale-110 focus:outline-none"
            aria-label="Next image"
          >
            <ArrowRight className="h-5 w-5 text-black" />
          </button>
        </div>
        
        <div className="absolute inset-0 flex transition-transform duration-500 ease-in-out" 
             style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
          {images.map((image, i) => (
            <div key={i} className="min-w-full h-full">
              <img
                src={image}
                alt={`${title} - image ${i+1}`}
                className="h-full w-full object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>
      
      <div className={cn(
        "p-6",
        isAlternate ? "bg-yellow-400 text-black" : "bg-white text-black"
      )}>
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, i) => (
            <span
              key={i}
              className={cn(
                "px-2 py-1 text-xs font-medium rounded-full border border-black",
                isAlternate ? "bg-white text-black" : "bg-yellow-400 text-black"
              )}
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold mb-2 transition-colors duration-300">
          {title}
        </h3>
        <p className={cn(
          "mb-4",
          isAlternate ? "text-black/80" : "text-black/70"
        )}>
          {description}
        </p>
        
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium border-b-2 border-black hover:bg-black hover:text-white px-2 py-1 transition-colors"
          >
            View Project <ArrowUpRight className="h-4 w-4" />
          </a>
        )}
      </div>
    </AnimatedSection>
  );
};

export default ProjectCard;
