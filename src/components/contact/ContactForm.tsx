
import React, { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { toast } from "@/hooks/use-toast";

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
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <AnimatedSection animation="fade-in" delay={0.5} className="card-border bg-[#111] p-6 md:p-8 card-hover">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">
          Let's work <span className="text-gradient-blue">together.</span>
        </h2>
        <div className="hidden md:block">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeOpacity="0.5" strokeWidth="2"/>
            <path d="M12 17L17 12L12 7" stroke="white" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 12H17" stroke="white" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name *"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-[#1A1A1A] border border-[#333] rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
          />
        </div>
        
        <div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email *"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-[#1A1A1A] border border-[#333] rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
          />
        </div>
        
        <div>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Your Subject *"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full bg-[#1A1A1A] border border-[#333] rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
          />
        </div>
        
        <div>
          <textarea
            name="message"
            id="message"
            rows={6}
            placeholder="Your Message *"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-[#1A1A1A] border border-[#333] rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
          ></textarea>
        </div>
        
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#1A1A1A] hover:bg-[#333] border border-[#333] rounded-md py-3 text-white font-medium transition-colors duration-300"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </AnimatedSection>
  );
};

export default ContactForm;
