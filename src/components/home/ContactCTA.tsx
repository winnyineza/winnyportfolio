
import React from "react";
import { Mail, ExternalLink } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const ContactCTA = () => {
  return (
    <section id="contact-cta" className="py-20 px-4 bg-[#0A0A0A]">
      <div className="container mx-auto">
        <AnimatedSection animation="fade-in" delay={0.1}>
          <div className="card-border bg-[#111] p-8 md:p-12 relative overflow-hidden card-hover">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 max-w-2xl">
                Have a project in mind? Let's bring it to life.
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl">
                I'm currently available for freelance work. If you have a project that needs some creative direction, I'd love to hear about it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/contact" 
                  className="bg-white text-black px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  Get in touch
                </a>
                <a 
                  href="#works" 
                  className="border border-white/30 backdrop-blur-sm px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                >
                  View my work
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div className="absolute right-0 bottom-0 pointer-events-none">
              <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="150" cy="150" r="100" stroke="white" strokeWidth="1" strokeOpacity="0.1" />
                <circle cx="150" cy="150" r="150" stroke="white" strokeWidth="1" strokeOpacity="0.05" />
              </svg>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactCTA;
