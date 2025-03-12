
import React from "react";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

// Sample projects data
const projects = [
  {
    id: 1,
    title: "Red Rose Landscaping",
    image: "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?w=500&auto=format",
    tags: ["Web Design", "Branding"]
  },
  {
    id: 2,
    title: "Odigun Repairs",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&auto=format",
    tags: ["App Development", "UI/UX"]
  },
  {
    id: 3,
    title: "Repair Shack",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&auto=format",
    tags: ["Web Design", "Branding"]
  },
  {
    id: 4,
    title: "Digital Solutions Consults Limited",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format",
    tags: ["Web Development", "UI/UX"]
  },
  {
    id: 5,
    title: "Bongo Chauffeur",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&auto=format",
    tags: ["Web Design", "Branding"]
  },
  {
    id: 6,
    title: "Next LVL Landscaping",
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=500&auto=format",
    tags: ["Web Development", "Branding"]
  },
  {
    id: 7,
    title: "Autocan",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format",
    tags: ["Web Design", "UI/UX"]
  },
  {
    id: 8,
    title: "Seasons Landscaping LLC",
    image: "https://images.unsplash.com/photo-1585551897231-77fe523c288a?w=500&auto=format",
    tags: ["Web Development", "Branding"]
  },
  {
    id: 9,
    title: "Greenway Scrape",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=500&auto=format",
    tags: ["Web Design", "UI/UX"]
  },
];

const Works = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto py-12">
          <AnimatedSection animation="fade-in" delay={0.1} className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">
              <span className="inline-flex items-center">
                <span className="text-xs mr-2">✦</span>
                All Projects
                <span className="text-xs ml-2">✦</span>
              </span>
            </h1>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <AnimatedSection 
                key={project.id}
                animation="fade-in" 
                delay={0.1 * (index + 1)} 
                className="card-border card-hover overflow-hidden relative group"
              >
                <div className="relative aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center px-4">
                      <div className="flex flex-wrap gap-2 justify-center mb-2">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="text-xs px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-lg font-bold">{project.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold">{project.title}</h3>
                  <div className="circular-btn">
                    <ArrowRight className="h-4 w-4" />
                  </div>
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

export default Works;
