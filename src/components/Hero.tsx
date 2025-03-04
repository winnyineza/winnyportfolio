
import { ArrowDown } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Hero = () => {
  const scrollToWork = () => {
    const workSection = document.querySelector("#work");
    if (workSection) {
      window.scrollTo({
        top: workSection.getBoundingClientRect().top + window.scrollY - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-1/3 -left-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>
      
      <div className="container-tight text-center">
        <AnimatedSection animation="fade-in" delay={0.2}>
          <span className="inline-block text-sm font-medium tracking-wider px-3 py-1 mb-6 rounded-full bg-secondary text-muted-foreground">
            UI/UX Designer & Developer
          </span>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-in" delay={0.4}>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight text-balance">
            Crafting Digital Experiences with Precision & Purpose
          </h1>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-in" delay={0.6}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 text-balance">
            I'm a multidisciplinary designer and developer specializing in 
            UI/UX design, web & app development, identity design, and social media management.
          </p>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-in" delay={0.8}>
          <button 
            onClick={scrollToWork}
            className="flex items-center space-x-2 mx-auto text-sm font-medium text-primary hover:opacity-80 transition-opacity"
          >
            <span>View my work</span>
            <ArrowDown className="h-4 w-4 animate-float" />
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Hero;
