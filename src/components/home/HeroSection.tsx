
import React from "react";
import { Mail, MoveRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

interface HeroSectionProps {
  setIsHoveringHero: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeroSection = ({ setIsHoveringHero }: HeroSectionProps) => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
      onMouseEnter={() => setIsHoveringHero(true)}
      onMouseLeave={() => setIsHoveringHero(false)}
    >
      <div className="container mx-auto text-center relative z-10">
        <AnimatedSection animation="fade-in" delay={0.1}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Digital Solution Strategist
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            I specialize in creating elegant, user-friendly websites and applications that deliver exceptional user experiences.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a 
              href="#contact" 
              className="bg-white text-black px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors w-full md:w-auto"
            >
              <Mail className="h-5 w-5" />
              Get in touch
            </a>
            <a 
              href="#works" 
              className="border border-white/30 backdrop-blur-sm px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-white/10 transition-colors w-full md:w-auto"
            >
              Explore work
              <MoveRight className="h-5 w-5" />
            </a>
          </div>
        </AnimatedSection>
        
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/50 via-black to-black -z-10"></div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-gray-400 mb-2">Scroll down</span>
        <div className="h-12 w-6 border border-gray-700 rounded-full flex items-start justify-center p-1">
          <div className="h-2 w-2 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
