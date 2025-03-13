
import React from "react";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const ServicesSection = () => {
  const services = [
    { 
      id: 1, 
      title: "UI/UX Design", 
      description: "I create professional websites with clean designs and intuitive user experiences that effectively represent your brand." 
    },
    { 
      id: 2, 
      title: "Web & App Development", 
      description: "I develop custom mobile applications that combine cutting-edge technology with intuitive user experiences." 
    },
    { 
      id: 3, 
      title: "Graphics Design", 
      description: "From logos to marketing materials, I deliver high-quality graphics that communicate your message visually." 
    },
    { 
      id: 4, 
      title: "Branding", 
      description: "I develop comprehensive brand identities that help businesses stand out in their market and connect with their audience." 
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-[#0A0A0A]">
      <div className="container mx-auto">
        <AnimatedSection animation="fade-in" delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="inline-flex items-center">
                <span className="text-xs mr-2">✦</span>
                Services
                <span className="text-xs ml-2">✦</span>
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I offer a range of services to help businesses and individuals establish a strong online presence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <AnimatedSection
                key={service.id}
                animation="fade-in" 
                delay={0.1 * service.id}
                className="service-card card-hover"
              >
                <div className="icon-container mb-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-pen-tool"
                  >
                    <path d="m12 19 7-7 3 3-7 7-3-3z" />
                    <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                    <path d="m2 2 7.586 7.586" />
                    <circle cx="11" cy="11" r="2" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </AnimatedSection>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="/services" 
              className="border border-white/30 backdrop-blur-sm px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 hover:bg-white/10 transition-colors"
            >
              View all services
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesSection;
