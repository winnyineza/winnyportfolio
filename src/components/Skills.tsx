
import AnimatedSection from "./AnimatedSection";
import SkillCard from "./SkillCard";
import { Paintbrush, Code, Layout, MessageSquare } from "lucide-react";

const skills = [
  {
    title: "UI/UX Design",
    description: "Creating intuitive, accessible, and visually appealing interfaces that enhance user experience and engagement.",
    icon: Paintbrush
  },
  {
    title: "Web & App Development",
    description: "Building robust, responsive web applications and mobile apps with modern frameworks and best practices.",
    icon: Code
  },
  {
    title: "Identity Design",
    description: "Developing memorable brand identities through thoughtful logo design, typography, and visual systems.",
    icon: Layout
  },
  {
    title: "Social Media Management",
    description: "Strategic planning, content creation, and analytics for effective social media presence and community building.",
    icon: MessageSquare
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 tracking-tight">
            Areas of Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My multidisciplinary skill set allows me to approach projects 
            holistically, from concept to execution.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              index={index}
              title={skill.title}
              description={skill.description}
              icon={skill.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
