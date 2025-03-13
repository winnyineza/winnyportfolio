
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const ContactInfo = () => {
  return (
    <AnimatedSection animation="fade-in" delay={0.1} className="mb-10">
      <h2 className="text-2xl font-bold mb-8">GET IN TOUCH</h2>
      
      <div className="space-y-8">
        <div className="flex items-start space-x-4">
          <div className="mt-1">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <div>
            <h3 className="text-gray-400 text-sm mb-2">EMAIL</h3>
            <a href="mailto:oyedokunken@gmail.com" className="block text-white hover:underline">nezawinnie@gmail.com</a>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <div className="mt-1">
            <Phone className="h-5 w-5 text-gray-400" />
          </div>
          <div>
            <h3 className="text-gray-400 text-sm mb-2">CONTACT</h3>
            <a href="tel:+250784258883" className="block text-white hover:underline">+250 784 258 883</a>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <div className="mt-1">
            <MapPin className="h-5 w-5 text-gray-400" />
          </div>
          <div>
            <h3 className="text-gray-400 text-sm mb-2">ADDRESS</h3>
            <p className="text-white">Kigali, Rwanda</p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ContactInfo;
