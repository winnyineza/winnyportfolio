
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type AnimationType = "fade-in" | "fade-in-right" | "fade-in-left" | "scale-in" | "blur-in" | "bounce-in" | "rotate-in";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: AnimationType;
  delay?: number;
  threshold?: number;
  as?: React.ElementType;
}

const AnimatedSection = ({
  children,
  className,
  animation = "fade-in",
  delay = 0,
  threshold = 0.3,
  as: Component = "div",
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, [threshold]);

  const getAnimationClass = () => {
    switch (animation) {
      case "fade-in":
        return "animate-fade-in";
      case "fade-in-right":
        return "animate-fade-in-right";
      case "fade-in-left":
        return "animate-fade-in-left";
      case "scale-in":
        return "animate-scale-in";
      case "blur-in":
        return "animate-blur-in";
      case "bounce-in":
        return "animate-bounce-in";
      case "rotate-in":
        return "animate-rotate-in";
      default:
        return "animate-fade-in";
    }
  };

  return (
    <Component
      ref={sectionRef}
      className={cn(
        "opacity-0",
        isVisible && getAnimationClass(),
        className
      )}
      style={{
        animationDelay: `${delay}s`,
        animationFillMode: "forwards",
      }}
    >
      {children}
    </Component>
  );
};

export default AnimatedSection;
