
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Download, Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

// Use the profile image uploaded
const profileImage = "/lovable-uploads/39882d61-5404-43a2-b518-2a1cdc246b7d.png";

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
                    <img src={profileImage} alt="Oyedokun Kehinde" className="w-full" />
                  </div>
                  
                  <h2 className="text-xl font-bold mb-4">Oyedokun Kehinde</h2>
                  
                  <div className="flex justify-center space-x-3 mb-6">
                    <a href="#" className="social-icon">
                      <Facebook className="h-4 w-4" />
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
                  I am a dedicated Frontend Developer & experienced Graphics Designer based in Akure, Nigeria. I have a strong eye for detail and a commitment to creating pixel-perfect websites, graphic designs, and brand identities that help businesses stand out in their markets. I am passionate about turning ideas into beautiful digital experiences.
                </p>
                
                <p className="text-gray-300 mb-6">
                  With expertise in both development and design, I bring a unique perspective to every project. My versatile skill set allows me to seamlessly handle both the technical implementation and creative aspects of digital products, ensuring cohesive and impactful end results.
                </p>
                
                <p className="text-gray-300 mb-10">
                  I am detail-oriented, organized, and disciplined in my approach to work. I believe in the power of effective communication and collaboration, which enables me to translate client visions into tangible products that exceed expectations and deliver real business value.
                </p>
                
                <h2 className="text-2xl font-bold mb-6">EXPERIENCE</h2>
                
                <div className="space-y-10">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-semibold">Senior Developer</h3>
                      <span className="text-blue-500">2022 - Present</span>
                    </div>
                    <div className="text-sm text-gray-400 mb-3">Decima Digital</div>
                    <p className="text-gray-300 text-sm">
                      As the Senior Developer for Decimal Digital, I oversee Frontend Development, collaborate with project managers and designers to transform concepts into responsive websites, creating innovative solutions for clients.
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-semibold">Frontend Developer</h3>
                      <span className="text-blue-500">2019 - 2022</span>
                    </div>
                    <div className="text-sm text-gray-400 mb-3">WebLine Studios</div>
                    <p className="text-gray-300 text-sm">
                      At WebLine Studios, I developed responsive layouts and user interfaces for client websites using HTML, CSS, JavaScript, and React. I collaborated with the UI/UX design team to implement pixel-perfect designs for various business verticals.
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-semibold">UI Designer</h3>
                      <span className="text-blue-500">2018 - 2019</span>
                    </div>
                    <div className="text-sm text-gray-400 mb-3">Digital Artisans</div>
                    <p className="text-gray-300 text-sm">
                      At Digital Artisans in Ibadan, I worked as a Junior UI Designer creating wireframes and prototypes for web applications, collaborating with the development team to ensure consistent design implementation.
                    </p>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h2 className="text-2xl font-bold mb-6">EDUCATION</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xl font-semibold">BSc, Computer Science</h3>
                        <span className="text-blue-500">2015 - 2019</span>
                      </div>
                      <div className="text-sm text-gray-400">Federal University of Technology, Akure</div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xl font-semibold">Web Development Certification</h3>
                        <span className="text-blue-500">2017</span>
                      </div>
                      <div className="text-sm text-gray-400">Udemy</div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xl font-semibold">Design & Animation</h3>
                        <span className="text-blue-500">2016</span>
                      </div>
                      <div className="text-sm text-gray-400">Coursera</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 grid grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-xl font-bold mb-4">SKILLS</h2>
                    <div className="space-y-2">
                      <div className="text-gray-300">HTML5</div>
                      <div className="text-gray-300">CSS3</div>
                      <div className="text-gray-300">JavaScript</div>
                      <div className="text-gray-300">React</div>
                      <div className="text-gray-300">TailwindCSS</div>
                      <div className="text-gray-300">Figma</div>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-bold mb-4">TOOLS</h2>
                    <div className="space-y-2">
                      <div className="text-gray-300">VS Code</div>
                      <div className="text-gray-300">Git</div>
                      <div className="text-gray-300">Adobe XD</div>
                      <div className="text-gray-300">Photoshop</div>
                      <div className="text-gray-300">Illustrator</div>
                      <div className="text-gray-300">Blender</div>
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
