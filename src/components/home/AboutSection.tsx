
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
                As a Digital Solution Strategist, I offer a wide range of services including UI/UX Design, Web & App Development, Graphics Design, Branding, Video Editing, and Digital Marketing. With a holistic approach to digital strategy, I focus on creating cohesive, user-centered solutions that not only look great but also perform excellently, driving tangible results for your business.
              </p>
              
              <p className="text-gray-400 mb-6">
                From designing intuitive websites and mobile apps to building strong brand identities and compelling digital content, I combine creative thinking with technical expertise to solve complex challenges. Whether you're looking to create a visually stunning user interface, develop a feature-rich mobile app, or boost your online presence with digital marketing, I help transform your ideas into impactful digital experiences.
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
