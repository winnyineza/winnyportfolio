
import React from "react";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <AnimatedSection animation="fade-in" delay={0.1}>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <div className="mb-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="inline-flex items-center">
                    <span className="text-xs mr-2">✦</span>
                    About me
                    <span className="text-xs ml-2">✦</span>
                  </span>
                </h2>
              </div>
              
              <p className="text-gray-400 mb-6">
                I am a Frontend Developer and UI/UX Designer with a passion for creating digital experiences that are both visually appealing and functional. With a strong emphasis on user-centered design principles, I strive to bridge the gap between user needs and business goals.
              </p>
              
              <p className="text-gray-400 mb-6">
                My approach combines creative design thinking with technical expertise, allowing me to translate complex requirements into clean, maintainable code and intuitive interfaces. I believe that attention to detail and a deep understanding of the user journey are essential for creating meaningful digital products.
              </p>
              
              <p className="text-gray-400 mb-8">
                When I'm not designing or coding, you'll find me exploring new technologies, contributing to open-source projects, or sketching UI concepts for fun. I'm always eager to take on new challenges and expand my skills.
              </p>
              
              <a 
                href="/about" 
                className="border border-white/30 backdrop-blur-sm px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 hover:bg-white/10 transition-colors"
              >
                More about me
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
            
            <div className="md:w-1/2 card-border bg-[#111] p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-6">About My Approach</h3>
              
              <div className="space-y-6">
                <p className="text-gray-400">
                  I believe in a collaborative approach to digital projects. By understanding your business goals and target audience, I can create solutions that not only look good but also deliver results.
                </p>
                
                <p className="text-gray-400">
                  My process is iterative and transparent, ensuring that we're always aligned on the vision and direction of your project. I prioritize clear communication and regular updates throughout our collaboration.
                </p>
                
                <p className="text-gray-400">
                  Each project is unique, and I tailor my approach to meet your specific needs, whether that's a complete digital transformation or a targeted enhancement to your existing digital presence.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;
