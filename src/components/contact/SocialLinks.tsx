
import React from "react";
import { Phone, Github, Linkedin, Palmtree } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const SocialLinks = () => {
  return (
    <AnimatedSection animation="fade-in" delay={0.3}>
      <h2 className="text-2xl font-bold mb-6">SOCIAL INFO</h2>
      <div className="grid grid-cols-4 gap-4">
        <a href="https://github.com/winny-ineza" target="_blank" rel="noopener noreferrer" className="social-icon">
          <Github className="h-5 w-5" />
        </a>
        <a href="https://behance.net/winny-ineza" target="_blank" rel="noopener noreferrer" className="social-icon">
          <Palmtree className="h-5 w-5" /> {/* Using Palmtree as a substitute for Behance since it's not in lucide */}
        </a>
        <a href="tel:+250788000000" className="social-icon">
          <Phone className="h-5 w-5" />
        </a>
        <a href="https://linkedin.com/in/winny-didine-ineza" target="_blank" rel="noopener noreferrer" className="social-icon">
          <Linkedin className="h-5 w-5" />
        </a>
      </div>
    </AnimatedSection>
  );
};

export default SocialLinks;
