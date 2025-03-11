
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MarqueeText from "@/components/MarqueeText";

const Index = () => {
  useEffect(() => {
    // Add smooth scrolling behavior for the entire page
    document.documentElement.style.scrollBehavior = "smooth";
    
    // Set the background color to match the design
    document.body.style.backgroundColor = "#000000";

    return () => {
      document.documentElement.style.scrollBehavior = "";
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <MarqueeText />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
