
import React from "react";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const ProjectsSection = () => {
  const featuredProjects = [
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
      title: "Next LVL Landscaping",
      image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=500&auto=format",
      tags: ["Web Development", "Branding"]
    }
  ];

  return (
    <section id="works" className="py-20 px-4">
      <div className="container mx-auto">
        <AnimatedSection animation="fade-in" delay={0.1}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="inline-flex items-center">
                  <span className="text-xs mr-2">✦</span>
                  Selected Works
                  <span className="text-xs ml-2">✦</span>
                </span>
              </h2>
              <p className="text-gray-400 max-w-xl">
                A collection of my recent projects and collaborations.
              </p>
            </div>
            <a 
              href="/works" 
              className="mt-4 md:mt-0 border border-white/30 backdrop-blur-sm px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 hover:bg-white/10 transition-colors"
            >
              View all projects
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
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
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProjectsSection;
