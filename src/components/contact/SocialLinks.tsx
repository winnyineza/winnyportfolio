
import React from "react";
import { Phone, Github, Linkedin } from "lucide-react";
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
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide">
            <path d="M8 15H2V9h6a3 3 0 0 1 0 6zm14-6h-8v2h8zm0 4h-8v2h8zm-8-8h6V3h-6zm-6 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
          </svg>
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
