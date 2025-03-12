
import React, { useState } from "react";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Github, Linkedin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
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
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <AnimatedSection animation="fade-in" delay={0.1} className="mb-10">
                <h2 className="text-2xl font-bold mb-8">GET IN TOUCH</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="mt-1">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <div>
                      <h3 className="text-gray-400 text-sm mb-2">EMAIL</h3>
                      <a href="mailto:oyedokunken@gmail.com" className="block text-white hover:underline">oyedokunken@gmail.com</a>
                      <a href="mailto:decimaltechgmails.com" className="block text-white hover:underline">decimaltech@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="mt-1">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <div>
                      <h3 className="text-gray-400 text-sm mb-2">CONTACT</h3>
                      <a href="tel:+2348028134942" className="block text-white hover:underline">+234 8028134942</a>
                      <a href="tel:+2348144745225" className="block text-white hover:underline">+234 8144745225</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="mt-1">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <div>
                      <h3 className="text-gray-400 text-sm mb-2">ADDRESS</h3>
                      <p className="text-white">1507, Peace Avenue, FUTA South Gate, Akure, Ondo State</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              
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
            </div>
            
            <div className="md:col-span-8">
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
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
