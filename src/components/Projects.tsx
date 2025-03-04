
import AnimatedSection from "./AnimatedSection";
import ProjectCard from "./ProjectCard";

// Sample project data - you can replace this with your actual projects
const projects = [
  {
    title: "Modern E-commerce App",
    description: "A comprehensive e-commerce platform with seamless user experience and innovative UI design.",
    image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=1740&auto=format&fit=crop",
    tags: ["UI/UX Design", "Web Development", "E-commerce"],
    link: "#"
  },
  {
    title: "Creative Agency Rebrand",
    description: "Complete brand identity redesign for a digital creative agency, including logo, website, and social media.",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1740&auto=format&fit=crop",
    tags: ["Identity Design", "Branding", "Web Design"],
    link: "#"
  },
  {
    title: "Social Media Campaign",
    description: "Strategic social media campaign that increased engagement by 300% for a lifestyle brand.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1740&auto=format&fit=crop",
    tags: ["Social Media", "Content Strategy", "Analytics"],
    link: "#"
  },
  {
    title: "Fitness Mobile App",
    description: "User-centered mobile application designed to track workouts and provide personalized fitness plans.",
    image: "https://images.unsplash.com/photo-1640622332810-039ad9c96802?q=80&w=1740&auto=format&fit=crop",
    tags: ["App Development", "UI/UX Design", "Fitness"],
    link: "#"
  }
];

const Projects = () => {
  return (
    <section id="work" className="section bg-secondary">
      <div className="container">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 tracking-tight">
            Selected Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A curated collection of my projects spanning UI/UX design, 
            web & app development, identity design, and social media management.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
