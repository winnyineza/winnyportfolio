
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { ExternalLink } from "lucide-react";

const certifications = [
  {
    id: 1,
    title: "Data Science Professional Certification",
    provider: "IBM",
    year: "2024",
    image: "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?w=500&auto=format",
    link: "#"
  },
  {
    id: 2,
    title: "Network Automation Engineering",
    provider: "Cisco",
    year: "2024",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=500&auto=format",
    link: "#"
  },
  {
    id: 3,
    title: "Full Stack Web Development",
    provider: "ALX Africa",
    year: "2023",
    image: "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?w=500&auto=format",
    link: "#"
  },
  {
    id: 4,
    title: "User Experience Design",
    provider: "Google",
    year: "2023",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=500&auto=format", 
    link: "#"
  },
  {
    id: 5,
    title: "Digital Marketing Specialization",
    provider: "Meta",
    year: "2022",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&auto=format",
    link: "#"
  },
  {
    id: 6,
    title: "Cloud Computing Foundations",
    provider: "AWS",
    year: "2022",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&auto=format",
    link: "#"
  }
];

const Certifications = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto py-12 px-4">
          <AnimatedSection animation="fade-in" delay={0.1} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="inline-flex items-center justify-center w-full">
                <span className="text-xl mr-3">✦</span>
                CERTIFICATES
                <span className="text-xl ml-3">✦</span>
              </span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A collection of professional certifications and achievements that highlight my expertise and continuous learning journey.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {certifications.map((cert, index) => (
              <AnimatedSection 
                key={cert.id} 
                animation="fade-in" 
                delay={0.1 * (index + 1)}
                className="bg-[#111] rounded-lg overflow-hidden card-border card-hover"
              >
                <div className="aspect-[4/3] relative">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-purple-600 text-white px-3 py-1 text-sm font-medium">
                    {cert.year}
                  </div>
                </div>
                
                <div className="p-5">
                  <div className="text-sm text-purple-400 font-medium mb-2">
                    {cert.provider}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{cert.title}</h3>
                  
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
                  >
                    View Certificate <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Certifications;
