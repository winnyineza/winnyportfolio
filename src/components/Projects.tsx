
import AnimatedSection from "./AnimatedSection";
import ProjectCard from "./ProjectCard";

// Sample project data - you can replace this with your actual projects
const projects = [
  {
    title: "Digital Marketing Campaign",
    description: "Comprehensive digital strategy with a focus on engagement and conversion optimization.",
    image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=1740&auto=format&fit=crop",
    tags: ["Marketing", "Strategy", "Analytics"],
    link: "#"
  },
  {
    title: "Brand Identity Redesign",
    description: "Complete brand identity overhaul including logo, visual identity system, and brand guidelines.",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1740&auto=format&fit=crop",
    tags: ["Branding", "Design", "Strategy"],
    link: "#"
  },
  {
    title: "Social Media Growth Campaign",
    description: "Strategic social media campaign that increased engagement by 300% and followers by 150%.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1740&auto=format&fit=crop",
    tags: ["Social Media", "Content Strategy", "Analytics"],
    link: "#"
  },
  {
    title: "UX Research & Design",
    description: "Comprehensive user research, testing, and interface design that improved conversion rates by 45%.",
    image: "https://images.unsplash.com/photo-1640622332810-039ad9c96802?q=80&w=1740&auto=format&fit=crop",
    tags: ["UX Research", "UI Design", "Prototyping"],
    link: "#"
  }
];

const Projects = () => {
  return (
    <section id="work" className="section bg-white">
      <div className="container">
        <AnimatedSection className="mb-16">
          <span className="badge bg-accent text-accent-foreground mb-4">Selected Work</span>
          <h2 className="heading-md mb-5">
            Transforming Ideas into <span className="text-primary">Impact</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            A curated collection of my projects spanning UI/UX design, 
            web & app development, identity design, and social media management.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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
