
import React from "react";
import { Facebook, Twitter, Instagram, Phone, Github, Linkedin } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const SocialLinks = () => {
  return (
    <AnimatedSection animation="fade-in" delay={0.3}>
      <h2 className="text-2xl font-bold mb-6">SOCIAL INFO</h2>
      <div className="grid grid-cols-3 gap-4">
        <a href="#" className="social-icon">
          <Facebook className="h-5 w-5" />
        </a>
        <a href="#" className="social-icon">
          <Twitter className="h-5 w-5" />
        </a>
        <a href="#" className="social-icon">
          <Instagram className="h-5 w-5" />
        </a>
        <a href="#" className="social-icon">
          <Phone className="h-5 w-5" />
        </a>
        <a href="#" className="social-icon">
          <Github className="h-5 w-5" />
        </a>
        <a href="#" className="social-icon">
          <Linkedin className="h-5 w-5" />
        </a>
      </div>
    </AnimatedSection>
  );
};

export default SocialLinks;
