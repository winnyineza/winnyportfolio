
import React from "react";
import { ArrowRight, Laptop, PenTool, BriefcaseBusiness, Video, Smartphone, Activity } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

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
                    I craft distinctive and functional websites that adapt seamlessly to all devices, prioritizing user experience and intuitive navigation. From initial concept to final implementation, I transform your vision into a dynamic online presence that captivates and engages your audience.
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
                    My graphic design services span a diverse creative spectrum. From distinctive logo creation and compelling marketing materials to captivating illustrations and scroll-stopping social media visuals, I blend artistic innovation with strategic thinking to make your brand visually unforgettable.
                  </p>
                </div>
                
                <div className="card-border bg-[#111] p-6 card-hover">
                  <h3 className="text-lg font-bold uppercase mb-4">Branding</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    A compelling brand forms the cornerstone of business success. My branding services focus on crafting a distinctive identity that resonates with your audience. I delve into your core values, mission, and target audience to develop a cohesive brand strategy and visual guidelines that tell your unique story.
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
                    I implement strategic digital marketing campaigns that drive meaningful results. Leveraging SEO, content marketing, social media management, and analytics, I help your business increase online visibility, attract qualified leads, and convert prospects into loyal customers through data-driven approaches.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-12">
            <AnimatedSection animation="fade-in" delay={0.5} className="md:col-span-4">
              <div className="card-border bg-[#111] p-6 relative h-full card-hover">
                <div className="flex space-x-4 mb-4">
                  <a href="#" className="social-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="social-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                </div>
                <div className="text-xs text-gray-400 mb-1">GET SOCIAL WITH ME</div>
                <h3 className="text-lg font-semibold">Profiles</h3>
                <div className="circular-btn">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={0.6} className="md:col-span-8">
              <div className="card-border bg-[#111] p-6 relative card-hover">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-4xl font-bold">
                      Let's <span className="text-gradient-blue">work</span> together.
                    </span>
                  </div>
                  <div className="text-2xl">✧</div>
                </div>
                <div className="circular-btn">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
