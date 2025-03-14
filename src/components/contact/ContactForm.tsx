
import React, { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { toast } from "@/hooks/use-toast";
import { Info } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Call the edge function to send email and store the message
      const { data, error } = await supabase.functions.invoke("contact-form", {
        body: formData,
      });

      if (error) {
        throw new Error(error.message || "Failed to send message");
      }

      toast({
        title: "Message delivered!",
        description: "Your message has been successfully sent. I'll be in touch shortly.",
      });
      
      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error sending message",
        description: error.message || "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
            {isSubmitting ? "Sending..." : "Initiate Contact"}
          </button>
        </div>
      </form>
    </AnimatedSection>
  );
};

export default ContactForm;
