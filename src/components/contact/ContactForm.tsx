
import React, { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { toast } from "@/hooks/use-toast";
import { Info } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message delivered!",
        description: "Your message has been successfully sent. I'll be in touch shortly.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <AnimatedSection animation="fade-in" delay={0.5} className="card-border bg-[#111] p-6 md:p-8 card-hover">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">
          Start a <span className="text-gradient-blue">conversation.</span>
        </h2>
        <div className="hidden md:block">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeOpacity="0.5" strokeWidth="2"/>
            <path d="M12 17L17 12L12 7" stroke="white" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 12H17" stroke="white" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      
      <div className="bg-purple-900/20 border border-purple-800/30 rounded-md px-4 py-3 mb-6 flex">
        <Info className="h-5 w-5 text-purple-400 mr-3 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-gray-300">
          <p>Currently, form submissions are for demonstration purposes only. When implemented on a production server, you would receive these messages via email or in a database that you can access through a dashboard.</p>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name *"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-[#1A1A1A] border border-[#333] rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
          />
        </div>
        
        <div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address *"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-[#1A1A1A] border border-[#333] rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
          />
        </div>
        
        <div>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Project Topic *"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full bg-[#1A1A1A] border border-[#333] rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
          />
        </div>
        
        <div>
          <textarea
            name="message"
            id="message"
            rows={6}
            placeholder="Share Your Thoughts *"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-[#1A1A1A] border border-[#333] rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
          ></textarea>
        </div>
        
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-purple-700 hover:bg-purple-600 border border-purple-600 rounded-md py-3 text-white font-medium transition-colors duration-300"
          >
            {isSubmitting ? "Connecting..." : "Initiate Contact"}
          </button>
        </div>
      </form>
    </AnimatedSection>
  );
};

export default ContactForm;
