
import AnimatedSection from "./AnimatedSection";
import ProjectCard from "./ProjectCard";
import MarqueeText from "./MarqueeText";

// Sample project data with multiple images per project
const projects = [
  {
    title: "ORGANIC & PAID SOCIAL MEDIA",
    description: "Strategic social media campaign with organic content creation and paid promotion to increase engagement and reach.",
    images: [
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1740&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1740&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?q=80&w=1740&auto=format&fit=crop",
    ],
    tags: ["Social Media", "Content Strategy", "Analytics"],
    link: "#"
  },
  {
    title: "INFLUENCER MARKETING",
    description: "Comprehensive influencer marketing campaigns that connect brands with relevant audience through authentic partnerships.",
    images: [
      "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=1664&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?q=80&w=1664&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599842057874-37393e9342df?q=80&w=1664&auto=format&fit=crop",
    ],
    tags: ["Influencer", "Marketing", "Brand Partnerships"],
    link: "#"
  },
  {
    title: "MEDIA & PR OUTREACH",
    description: "Strategic media and public relations campaigns that boost brand visibility through targeted press coverage.",
    images: [
      "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1601933470096-0e34634ffcde?q=80&w=1470&auto=format&fit=crop",
    ],
    tags: ["PR", "Media Relations", "Press Coverage"],
    link: "#"
  },
  {
    title: "WEB CONTENT MANAGEMENT",
    description: "Comprehensive web content strategy and management that improves user engagement and conversion rates.",
    images: [
      "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?q=80&w=1542&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560807707-8cc77767d783?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539882770949-97082b8b9149?q=80&w=1476&auto=format&fit=crop",
    ],
    tags: ["Web Content", "UX Writing", "SEO"],
    link: "#"
  }
];

const Projects = () => {
  return (
    <section id="work" className="bg-white">
      <MarqueeText />
      
      <div className="container py-20">
        <AnimatedSection className="mb-16">
          <span className="inline-block bg-black text-white px-4 py-1 mb-4 border border-gray-800">Selected Work</span>
          <h2 className="heading-md mb-5 text-black">
            Transforming Ideas into <span className="bg-gray-200 px-2">Impact</span>
          </h2>
          <p className="text-gray-700 max-w-2xl">
            A curated collection of my projects spanning UI/UX design, 
            web & app development, identity design, and social media management.
          </p>
        </AnimatedSection>
        
        <div className="space-y-16 md:space-y-24">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              title={project.title}
              description={project.description}
              images={project.images}
              tags={project.tags}
              link={project.link}
              isAlternate={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
      
      <div className="w-full py-8 bg-black border-t border-b border-gray-800">
        <div className="container text-center">
          <a 
            href="#contact" 
            className="inline-block bg-white text-black px-8 py-3 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors duration-300 border-2 border-gray-800"
          >
            View Full Portfolio
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
