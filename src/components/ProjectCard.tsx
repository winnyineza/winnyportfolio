
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
        "group relative overflow-hidden border rounded-xl",
        isAlternate ? "bg-black border-gray-800" : "bg-white border-gray-200"
      )}
    >
      <div className="absolute top-4 right-4 z-10 bg-black/80 rounded-full px-3 py-1 text-xs font-bold text-white">
        {currentImageIndex + 1}/{images.length}
      </div>
      
      <div className="relative h-64 sm:h-80 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-between px-4 z-20">
          <button 
            onClick={prevImage}
            className="bg-white/10 backdrop-blur-sm p-2 rounded-full border border-white/20 transform transition-transform hover:scale-110 focus:outline-none"
            aria-label="Previous image"
          >
            <ArrowLeft className="h-5 w-5 text-white" />
          </button>
          <button 
            onClick={nextImage}
            className="bg-white/10 backdrop-blur-sm p-2 rounded-full border border-white/20 transform transition-transform hover:scale-110 focus:outline-none"
            aria-label="Next image"
          >
            <ArrowRight className="h-5 w-5 text-white" />
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
        isAlternate ? "bg-black text-white" : "bg-white text-black"
      )}>
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, i) => (
            <span
              key={i}
              className={cn(
                "px-2 py-1 text-xs font-medium rounded-full border",
                isAlternate 
                  ? "bg-gray-800 text-white border-gray-700" 
                  : "bg-gray-200 text-black border-gray-300"
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
          isAlternate ? "text-gray-300" : "text-gray-700"
        )}>
          {description}
        </p>
        
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-1 font-medium border-b-2 px-2 py-1 transition-colors",
              isAlternate 
                ? "border-gray-700 text-white hover:bg-gray-800" 
                : "border-gray-300 text-black hover:bg-gray-100"
            )}
          >
            View Project <ArrowUpRight className="h-4 w-4" />
          </a>
        )}
      </div>
    </AnimatedSection>
  );
};

export default ProjectCard;
