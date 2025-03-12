
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Download, Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

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
                  <h1 className="text-3xl font-bold mb-2">ABOUT ME</h1>
                  <div className="h-1 w-12 bg-white mx-auto md:mx-0"></div>
                </div>
                
                <div className="card-border bg-[#111] p-6 text-center mb-6">
                  <div className="rounded-xl overflow-hidden max-w-[160px] mx-auto mb-6">
                    <img src={profileImage} alt="Winny Didine Ineza" className="w-full" />
                  </div>
                  
                  <h2 className="text-xl font-bold mb-4">Winny Didine Ineza</h2>
                  
                  <div className="flex justify-center space-x-3 mb-6">
                    <a href="https://www.linkedin.com/in/winny-didine-ineza" target="_blank" className="social-icon">
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a href="#" className="social-icon">
                      <Twitter className="h-4 w-4" />
                    </a>
                    <a href="#" className="social-icon">
                      <Instagram className="h-4 w-4" />
                    </a>
                    <a href="#" className="social-icon">
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                  
                  <a 
                    href="#"
                    className="inline-flex items-center justify-center gap-2 bg-zinc-800 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-zinc-700 transition-all duration-300 w-full"
                  >
                    <Download className="h-4 w-4" />
                    Download CV
                  </a>
                </div>
              </AnimatedSection>
            </div>
            
            <div className="md:col-span-8">
              <AnimatedSection animation="fade-in" delay={0.3}>
                <p className="text-gray-300 mb-6">
                  Passionate about leveraging the power of digital marketing to drive business growth and enhance customer engagement, I possess a strong foundation in software engineering and digital marketing strategies. With hands-on experience in creating and implementing successful marketing campaigns, I strive to stay ahead of emerging trends in the digital landscape.
                </p>
                
                <p className="text-gray-300 mb-10">
                  Currently pursuing a Bachelor of Software Engineering at African Leadership University, I am motivated by challenges, continually aiming to refine my skills and contribute meaningfully to any organization's marketing success.
                </p>
                
                <h2 className="text-2xl font-bold mb-6">EXPERIENCE</h2>
                
                <div className="space-y-10">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-semibold">Operations Assistant</h3>
                      <span className="text-blue-500">2023 - Present</span>
                    </div>
                    <div className="text-sm text-gray-400 mb-3">Job In Rwanda</div>
                    <p className="text-gray-300 text-sm">
                      Spearhead the timely posting and optimization of ads on the JiR website, collaborate with clients for error-free advertisements, prepare Proforma invoices, and provide excellent customer support.
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-semibold">Jr. Sales Officer</h3>
                      <span className="text-blue-500">2021 - 2023</span>
                    </div>
                    <div className="text-sm text-gray-400 mb-3">Water Access Rwanda</div>
                    <p className="text-gray-300 text-sm">
                      Managed company sales, developed marketing strategies, prepared promotional materials, and handled customer relations while maintaining detailed records of sales, warranties, and project documentation.
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-semibold">IT Assistant</h3>
                      <span className="text-blue-500">2020</span>
                    </div>
                    <div className="text-sm text-gray-400 mb-3">Réseau Des Femmes</div>
                    <p className="text-gray-300 text-sm">
                      Responsible for configuring hardware and software, setting up peripherals, and handling installation, operation, and maintenance of computer systems.
                    </p>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h2 className="text-2xl font-bold mb-6">EDUCATION</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xl font-semibold">BSc, Software Engineering</h3>
                        <span className="text-blue-500">2022 - Present</span>
                      </div>
                      <div className="text-sm text-gray-400">African Leadership University</div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xl font-semibold">IBM Data Science Professional Certificate</h3>
                        <span className="text-blue-500">2024</span>
                      </div>
                      <div className="text-sm text-gray-400">IBM</div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xl font-semibold">Network Automation Engineering</h3>
                        <span className="text-blue-500">2024</span>
                      </div>
                      <div className="text-sm text-gray-400">Cisco</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 grid grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-xl font-bold mb-4">SKILLS</h2>
                    <div className="space-y-2">
                      <div className="text-gray-300">Digital Marketing</div>
                      <div className="text-gray-300">Software Engineering</div>
                      <div className="text-gray-300">Project Management</div>
                      <div className="text-gray-300">Customer Relations</div>
                      <div className="text-gray-300">Technical Support</div>
                      <div className="text-gray-300">Sales Management</div>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-bold mb-4">LANGUAGES</h2>
                    <div className="space-y-2">
                      <div className="text-gray-300">Kinyarwanda (Native)</div>
                      <div className="text-gray-300">English (Fluent)</div>
                      <div className="text-gray-300">French (Good)</div>
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
