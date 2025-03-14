
import React from "react";
import { ArrowRight, Laptop, PenTool, BriefcaseBusiness, Video, Smartphone, Activity } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto py-12">
          <AnimatedSection animation="fade-in" delay={0.1} className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">
              <span className="inline-flex items-center">
                <span className="text-xs mr-2">✦</span>
                Services
                <span className="text-xs ml-2">✦</span>
              </span>
            </h1>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <AnimatedSection animation="fade-in" delay={0.2} className="col-span-1">
              <div className="space-y-6">
                <div className="card-border bg-[#111] p-6 card-hover flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-full bg-[#1A1A1A] flex items-center justify-center">
                    <Laptop className="h-5 w-5" />
                  </div>
                  <span className="text-lg font-medium">UI/UX Design</span>
                </div>
                
                <div className="card-border bg-[#111] p-6 card-hover flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-full bg-[#1A1A1A] flex items-center justify-center">
                    <Smartphone className="h-5 w-5" />
                  </div>
                  <span className="text-lg font-medium">Web & App Development</span>
                </div>
                
                <div className="card-border bg-[#111] p-6 card-hover flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-full bg-[#1A1A1A] flex items-center justify-center">
                    <PenTool className="h-5 w-5" />
                  </div>
                  <span className="text-lg font-medium">Graphics Design</span>
                </div>
                
                <div className="card-border bg-[#111] p-6 card-hover flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-full bg-[#1A1A1A] flex items-center justify-center">
                    <BriefcaseBusiness className="h-5 w-5" />
                  </div>
                  <span className="text-lg font-medium">Branding</span>
                </div>
                
                <div className="card-border bg-[#111] p-6 card-hover flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-full bg-[#1A1A1A] flex items-center justify-center">
                    <Video className="h-5 w-5" />
                  </div>
                  <span className="text-lg font-medium">Video Editing</span>
                </div>

                <div className="card-border bg-[#111] p-6 card-hover flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-full bg-[#1A1A1A] flex items-center justify-center">
                    <Activity className="h-5 w-5" />
                  </div>
                  <span className="text-lg font-medium">Digital Marketing</span>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={0.3} className="col-span-1 md:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="card-border bg-[#111] p-6 card-hover">
                  <h3 className="text-lg font-bold uppercase mb-4">UI/UX Design</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    I create professional websites with clean designs and intuitive user experiences that effectively represent your brand.
                  </p>
                </div>
                
                <div className="card-border bg-[#111] p-6 card-hover">
                  <h3 className="text-lg font-bold uppercase mb-4">Web & App Development</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    I develop custom mobile applications that combine cutting-edge technology with intuitive user experiences. Whether you need an Android, iOS, or cross-platform solution, I deliver scalable, feature-rich apps that meet your business objectives while exceeding user expectations.
                  </p>
                </div>
                
                <div className="card-border bg-[#111] p-6 card-hover">
                  <h3 className="text-lg font-bold uppercase mb-4">Graphics Design</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    From logos to marketing materials, I deliver high-quality graphics that communicate your message visually.
                  </p>
                </div>
                
                <div className="card-border bg-[#111] p-6 card-hover">
                  <h3 className="text-lg font-bold uppercase mb-4">Branding</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    I develop comprehensive brand identities that help businesses stand out in their market and connect with their audience.
                  </p>
                </div>
                
                <div className="card-border bg-[#111] p-6 card-hover">
                  <h3 className="text-lg font-bold uppercase mb-4">Video Editing</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    I transform raw footage into compelling visual narratives. Whether for promotional campaigns, product showcases, or engaging content creation, I meticulously edit, enhance, and refine your videos to create impactful stories that connect with your intended audience and drive meaningful engagement.
                  </p>
                </div>
                
                <div className="card-border bg-[#111] p-6 card-hover">
                  <h3 className="text-lg font-bold uppercase mb-4">Digital Marketing</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    I craft user interfaces that are not only beautiful but functional, enhancing user engagement and satisfaction.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-12">
            <AnimatedSection animation="fade-in" delay={0.5} className="md:col-span-4">
              <div className="card-border bg-[#111] p-6 relative h-full card-hover">
                <div className="flex space-x-4 mb-4">
                  <a href="https://github.com/winnyineza" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  </a>
                  <a href=" https://www.behance.net/winnydineza1/" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <svg xmlns="https://www.iconpacks.net/icons/2/free-behance-icon-2161-thumb.png" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide">
                      <path d="M8 15H2V9h6a3 3 0 0 1 0 6zm14-6h-8v2h8zm0 4h-8v2h8zm-8-8h6V3h-6zm-6 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/winnydid/" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
                <div className="text-xs text-gray-400 mb-1">GET SOCIAL WITH ME</div>
                <h3 className="text-lg font-semibold">Profiles</h3>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={0.6} className="md:col-span-8">
              <Link to="/contact" className="block card-border bg-[#111] p-6 relative card-hover">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-4xl font-bold">
                      Let's <span className="text-gradient-blue">work</span> together.
                    </span>
                  </div>
                  <div className="text-2xl">✧</div>
                </div>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
