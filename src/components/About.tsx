
import AnimatedSection from "./AnimatedSection";

const About = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fade-in-right">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent rounded-lg -z-10"></div>
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1587&auto=format&fit=crop"
                  alt="Portrait"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-lg -z-10"></div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-left">
            <span className="badge bg-accent text-accent-foreground mb-4">About Me</span>
            <h2 className="heading-md mb-6">
              Passionate about creating <span className="text-primary">meaningful</span> digital experiences
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a multidisciplinary designer and developer with over 8 years of experience working at the 
                intersection of design and technology. My approach is centered on creating simple, 
                intuitive, and beautiful digital experiences that solve real problems.
              </p>
              <p>
                With expertise spanning UI/UX design, web & app development, identity design, and social 
                media management, I bring a comprehensive understanding to every project. I believe in 
                the power of thoughtful design to transform businesses and enhance people's lives.
              </p>
              <p>
                When I'm not designing or coding, you can find me exploring new design trends, experimenting 
                with emerging technologies, or seeking inspiration through travel and photography.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
