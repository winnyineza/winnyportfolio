import React, { useEffect, useState } from "react";
import { ArrowRight, Mail, MoveRight, ExternalLink, MousePointer } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoveringHero, setIsHoveringHero] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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
    <div className="relative overflow-x-hidden bg-black text-white">
      <div 
        className="cursor-dot fixed z-50 pointer-events-none" 
        style={{ 
          transform: `translate(${mousePosition.x - 8}px, ${mousePosition.y - 8}px)`,
          width: isHoveringHero ? '80px' : '16px',
          height: isHoveringHero ? '80px' : '16px',
          background: isHoveringHero ? 'rgba(255, 255, 255, 0.2)' : 'white',
          borderRadius: '50%',
          transition: 'width 0.3s, height 0.3s, background 0.3s',
          opacity: 0.7
        }}
      />
      
      <Header />
      
      {/* Hero Section */}
      <section 
        id="hero" 
        className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
        onMouseEnter={() => setIsHoveringHero(true)}
        onMouseLeave={() => setIsHoveringHero(false)}
      >
        <div className="container mx-auto text-center relative z-10">
          <AnimatedSection animation="fade-in" delay={0.1}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Creative Developer & <br />UI/UX Designer
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              I specialize in creating elegant, user-friendly websites and applications that deliver exceptional user experiences.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <a 
                href="#contact" 
                className="bg-white text-black px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors w-full md:w-auto"
              >
                <Mail className="h-5 w-5" />
                Get in touch
              </a>
              <a 
                href="#works" 
                className="border border-white/30 backdrop-blur-sm px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-white/10 transition-colors w-full md:w-auto"
              >
                Explore work
                <MoveRight className="h-5 w-5" />
              </a>
            </div>
          </AnimatedSection>
          
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/50 via-black to-black -z-10"></div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <span className="text-sm text-gray-400 mb-2">Scroll down</span>
          <div className="h-12 w-6 border border-gray-700 rounded-full flex items-start justify-center p-1">
            <div className="h-2 w-2 bg-white rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
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
                  I am a Frontend Developer and UI/UX Designer with a passion for creating digital experiences that are both visually appealing and functional. With a strong emphasis on user-centered design principles, I strive to bridge the gap between user needs and business goals.
                </p>
                
                <p className="text-gray-400 mb-6">
                  My approach combines creative design thinking with technical expertise, allowing me to translate complex requirements into clean, maintainable code and intuitive interfaces. I believe that attention to detail and a deep understanding of the user journey are essential for creating meaningful digital products.
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
      
      {/* Services Section */}
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
      
      {/* Projects Section */}
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
      
      {/* Contact CTA Section */}
      <section id="contact-cta" className="py-20 px-4 bg-[#0A0A0A]">
        <div className="container mx-auto">
          <AnimatedSection animation="fade-in" delay={0.1}>
            <div className="card-border bg-[#111] p-8 md:p-12 relative overflow-hidden card-hover">
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 max-w-2xl">
                  Have a project in mind? Let's bring it to life.
                </h2>
                <p className="text-gray-400 mb-8 max-w-xl">
                  I'm currently available for freelance work. If you have a project that needs some creative direction, I'd love to hear about it.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="/contact" 
                    className="bg-white text-black px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    Get in touch
                  </a>
                  <a 
                    href="#works" 
                    className="border border-white/30 backdrop-blur-sm px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                  >
                    View my work
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>
              
              <div className="absolute right-0 bottom-0 pointer-events-none">
                <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="150" cy="150" r="100" stroke="white" strokeWidth="1" strokeOpacity="0.1" />
                  <circle cx="150" cy="150" r="150" stroke="white" strokeWidth="1" strokeOpacity="0.05" />
                </svg>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
