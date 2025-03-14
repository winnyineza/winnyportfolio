
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Download, Github, Linkedin, Phone, Palmtree } from "lucide-react";

// Use the profile image uploaded
const profileImage = "/lovable-uploads/c50f855e-d8b5-45cd-8fa8-9105aeb8ee8a.png";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <AnimatedSection animation="fade-in" delay={0.1}>
                <div className="text-center md:text-left mb-6">
                  <h1 className="text-3xl font-bold mb-2">MY STORY</h1>
                  <div className="h-1 w-12 bg-white mx-auto md:mx-0"></div>
                </div>
                
                <div className="card-border bg-[#111] p-6 text-center mb-6">
                  <div className="rounded-xl overflow-hidden max-w-[160px] mx-auto mb-6">
                    <img src={profileImage} alt="Winny Didine Ineza" className="w-full" />
                  </div>
                  
                  <h2 className="text-xl font-bold mb-4">Winny Didine Ineza</h2>
                  
                  <div className="flex justify-center space-x-3 mb-6">
                    <a href="https://github.com/winny-ineza" target="_blank" rel="noopener noreferrer" className="social-icon">
                      <Github className="h-4 w-4" />
                    </a>
                    <a href="https://behance.net/winny-ineza" target="_blank" rel="noopener noreferrer" className="social-icon">
                      <Palmtree className="h-4 w-4" />
                    </a>
                    <a href="tel:+250788000000" className="social-icon">
                      <Phone className="h-4 w-4" />
                    </a>
                    <a href="https://linkedin.com/in/winny-didine-ineza" target="_blank" rel="noopener noreferrer" className="social-icon">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                  
                  <a 
                    href="#"
                    className="inline-flex items-center justify-center gap-2 bg-purple-700 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-purple-600 transition-all duration-300 w-full"
                  >
                    <Download className="h-4 w-4" />
                    View Resume
                  </a>
                </div>
              </AnimatedSection>
            </div>
            
            <div className="md:col-span-8">
              <AnimatedSection animation="fade-in" delay={0.3}>
                <p className="text-gray-300 mb-6">
                  At the intersection of technology and market dynamics, I craft innovative digital marketing strategies that transform business visibility and customer connection. With a robust foundation in software engineering and a keen eye for emerging digital trends, I specialize in creating campaigns that resonate with target audiences while driving measurable growth.
                </p>
                
                <p className="text-gray-300 mb-10">
                  Currently advancing my expertise with a Software Engineering degree at African Leadership University, I thrive when faced with complex challenges. My adaptable approach and continuous learning mindset enable me to deliver solutions that exceed client expectations and establish lasting brand presence in competitive markets.
                </p>
                
                <h2 className="text-2xl font-bold mb-6">PROFESSIONAL JOURNEY</h2>
                
                <div className="space-y-10">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-semibold">Operations Assistant</h3>
                      <span className="text-purple-500">2023 - Present</span>
                    </div>
                    <div className="text-sm text-gray-400 mb-3">Job In Rwanda</div>
                    <p className="text-gray-300 text-sm">
                      Orchestrating strategic placement and enhancement of digital advertisements to maximize engagement metrics. Facilitating seamless client communication to ensure precise ad deployment, managing financial documentation, and delivering exceptional support services for platform users.
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-semibold">Jr. Sales & Marketing Officer</h3>
                      <span className="text-purple-500">2021 - 2023</span>
                    </div>
                    <div className="text-sm text-gray-400 mb-3">Water Access Rwanda</div>
                    <p className="text-gray-300 text-sm">
                      Directed comprehensive sales operations while developing innovative market penetration approaches. Created compelling promotional assets across multiple formats, maintained meticulous records of transactions and client interactions, and established quality assurance protocols for completed projects.
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-semibold">Technical Support Specialist</h3>
                      <span className="text-purple-500">2020</span>
                    </div>
                    <div className="text-sm text-gray-400 mb-3">Réseau Des Femmes</div>
                    <p className="text-gray-300 text-sm">
                      Engineered hardware and software infrastructure solutions, implemented peripheral systems, and ensured optimal performance of technological resources through proactive maintenance and troubleshooting protocols.
                    </p>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h2 className="text-2xl font-bold mb-6">ACADEMIC CREDENTIALS</h2>
                  
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-semibold">BSc, Software Engineering</h3>
                      <span className="text-purple-500">2022 - Present</span>
                    </div>
                    <div className="text-sm text-gray-400">African Leadership University</div>
                  </div>
                  
                  <div className="mt-12 grid grid-cols-2 gap-8">
                    <div>
                      <h2 className="text-xl font-bold mb-4">CORE COMPETENCIES</h2>
                      <div className="space-y-2">
                        <div className="text-gray-300">Digital Marketing Architecture</div>
                        <div className="text-gray-300">Software Development</div>
                        <div className="text-gray-300">Strategic Initiative Management</div>
                        <div className="text-gray-300">Client Experience Optimization</div>
                        <div className="text-gray-300">Technical Infrastructure Support</div>
                        <div className="text-gray-300">Revenue Growth Strategies</div>
                      </div>
                    </div>
                    
                    <div>
                      <h2 className="text-xl font-bold mb-4">LANGUAGE PROFICIENCY</h2>
                      <div className="space-y-2">
                        <div className="text-gray-300">Kinyarwanda (Native Fluency)</div>
                        <div className="text-gray-300">English (Professional Fluency)</div>
                        <div className="text-gray-300">French (Professional Working Proficiency)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
