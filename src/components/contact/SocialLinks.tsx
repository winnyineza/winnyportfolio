
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
          {/* Custom Behance icon */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 11.5C8.96875 11.5 10 10.5 10 9C10 7.5 8.96875 6.5 7.5 6.5H3V11.5H7.5ZM3 17.5H8.5C10.125 17.5 11 16.25 11 15C11 13.71875 9.96875 12.5 8.5 12.5H3V17.5ZM13 17.5H18.5V15.5H13V17.5ZM13 7H17.5V5H13V7ZM20 10.25C20 8.59375 18.65625 7.25 17 7.25H13V13.25H17C18.65625 13.25 20 11.90625 20 10.25Z" fill="currentColor"/>
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
