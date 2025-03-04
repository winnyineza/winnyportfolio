
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type AnimationType = "fade-in" | "fade-in-right" | "fade-in-left" | "scale-in" | "blur-in";

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

  return (
    <Component
      ref={sectionRef}
      className={cn(
        "opacity-0",
        isVisible && `animate-${animation}`,
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
