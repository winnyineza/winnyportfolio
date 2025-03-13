
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/home/CustomCursor";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import ContactCTA from "@/components/home/ContactCTA";

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoveringHero, setIsHoveringHero] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative overflow-x-hidden bg-black text-white">
      <CustomCursor 
        mousePosition={mousePosition} 
        isHoveringHero={isHoveringHero} 
      />
      
      <Header />
      
      <HeroSection 
        setIsHoveringHero={setIsHoveringHero} 
      />
      
      <AboutSection />
      
      <ServicesSection />
      
      <ProjectsSection />
      
      <ContactCTA />
      
      <Footer />
    </div>
  );
};

export default Index;
