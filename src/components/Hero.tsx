
import { ArrowDown } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import MarqueeText from "./MarqueeText";

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
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-12">
      <div className="container max-w-6xl mx-auto">
        <AnimatedSection animation="fade-in" delay={0.2} className="mb-8 md:mb-12">
          <div className="badge bg-accent text-accent-foreground">
            Digital Solution Strategist
          </div>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-in" delay={0.4}>
          <h1 className="heading-xl max-w-4xl mb-6 md:mb-8">
            Transforming <span className="text-primary">Digital Visions</span> into Strategic Realities
          </h1>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-in" delay={0.6}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 text-balance">
            I'm a multidisciplinary professional specializing in 
            UI/UX design, web & app development, brand strategy, digital marketing, and communication solutions.
          </p>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-in" delay={0.8} className="mb-16 md:mb-24">
          <button 
            onClick={scrollToWork}
            className="flex items-center space-x-2 text-sm font-medium text-primary hover:opacity-80 transition-opacity"
          >
            <span>View my work</span>
            <ArrowDown className="h-4 w-4 animate-float" />
          </button>
        </AnimatedSection>
        
        <MarqueeText />
      </div>
    </section>
  );
};

export default Hero;
