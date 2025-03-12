
import React, { useEffect } from "react";
import { ArrowRight, Download, Facebook, Twitter, Instagram, Github, Linkedin, Phone, Mail, MapPin, Heart } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Import profile image
const profileImage = "/lovable-uploads/39882d61-5404-43a2-b518-2a1cdc246b7d.png";

const Index = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.style.backgroundColor = "#000000";

    return () => {
      document.documentElement.style.scrollBehavior = "";
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="container mx-auto py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Welcome Message */}
            <div className="lg:col-span-12 mb-6">
              <AnimatedSection animation="fade-in" delay={0.1} className="p-4 rounded-xl bg-[#111] inline-block">
                <p className="text-sm">Howdy, welcome to my portfolio! Take a look around, feel at home and let's do business! 👋</p>
              </AnimatedSection>
            </div>

            {/* Profile Card */}
            <div className="lg:col-span-5">
              <AnimatedSection animation="fade-in" delay={0.2} className="card-border bg-[#111] p-6 card-hover">
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                  <div className="w-32 h-32 rounded-xl overflow-hidden">
                    <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Frontend Engineer</div>
                    <h1 className="text-2xl font-bold mb-2">Oyedokun Kehinde</h1>
                    <p className="text-sm text-gray-300 mb-4">
                      I am a Frontend Engineer and Graphics Designer in Akure, Nigeria.
                    </p>
                    <div className="circular-btn">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Skills & Projects Cards */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <AnimatedSection animation="fade-in" delay={0.3} className="card-border bg-[#111] p-6 relative card-hover">
                  <div className="mb-4">
                    <div className="text-xs text-gray-400">MORE ABOUT ME</div>
                    <h3 className="text-lg font-semibold">Credentials</h3>
                  </div>
                  <div className="text-4xl font-bold italic mb-2 opacity-75">
                    Oyedokun
                  </div>
                  <div className="circular-btn">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fade-in" delay={0.4} className="card-border bg-[#111] p-6 relative card-hover">
                  <div className="mb-4">
                    <div className="text-xs text-gray-400">SHOWCASE</div>
                    <h3 className="text-lg font-semibold">Projects</h3>
                  </div>
                  <div className="h-12 w-12 bg-white text-black rounded-md flex items-center justify-center mb-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M9 7H7v2h2V7Z" />
                      <path d="M9 13H7v2h2v-2Z" />
                      <path d="M9 19H7v2h2v-2Z" />
                      <path d="M15 7h-2v2h2V7Z" />
                      <path d="M15 13h-2v2h2v-2Z" />
                      <path d="M15 19h-2v2h2v-2Z" />
                    </svg>
                  </div>
                  <div className="circular-btn">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </AnimatedSection>
              </div>
            </div>

            {/* Blog & Services */}
            <div className="lg:col-span-4">
              <AnimatedSection animation="fade-in" delay={0.5} className="card-border bg-[#111] p-6 relative h-full card-hover">
                <div className="mb-4">
                  <div className="text-xs text-gray-400">BLOG</div>
                  <h3 className="text-lg font-semibold">Tech Writings</h3>
                </div>
                <div className="h-16 w-16 mb-4">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <path d="M10 13L8 17L12 17L14 13" />
                  </svg>
                </div>
                <div className="circular-btn">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </AnimatedSection>
            </div>

            {/* Services */}
            <div className="lg:col-span-8">
              <AnimatedSection animation="fade-in" delay={0.6} className="card-border bg-[#111] p-6 relative card-hover">
                <div className="mb-6">
                  <div className="text-xs text-gray-400">SPECIALIZATION</div>
                  <h3 className="text-lg font-semibold">Services I Offer</h3>
                </div>
                <div className="flex justify-center space-x-8 mb-4">
                  <div className="flex flex-col items-center">
                    <div className="h-10 w-10 rounded-full bg-[#1A1A1A] flex items-center justify-center mb-2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="2" y1="12" x2="22" y2="12" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="h-10 w-10 rounded-full bg-[#1A1A1A] flex items-center justify-center mb-2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5" />
                        <path d="M2 12l10 5 10-5" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="h-10 w-10 rounded-full bg-[#1A1A1A] flex items-center justify-center mb-2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="18" cy="18" r="3" />
                        <circle cx="6" cy="6" r="3" />
                        <path d="M6 21V9a9 9 0 0 0 9 9" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="h-10 w-10 rounded-full bg-[#1A1A1A] flex items-center justify-center mb-2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
                        <line x1="7" y1="2" x2="7" y2="22" />
                        <line x1="17" y1="2" x2="17" y2="22" />
                        <line x1="2" y1="12" x2="22" y2="12" />
                        <line x1="2" y1="7" x2="7" y2="7" />
                        <line x1="2" y1="17" x2="7" y2="17" />
                        <line x1="17" y1="17" x2="22" y2="17" />
                        <line x1="17" y1="7" x2="22" y2="7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="circular-btn">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </AnimatedSection>
            </div>

            {/* Social Media */}
            <div className="lg:col-span-4">
              <AnimatedSection animation="fade-in" delay={0.7} className="card-border bg-[#111] p-6 relative h-full card-hover">
                <div className="mb-4">
                  <div className="text-xs text-gray-400">GET SOCIAL WITH ME</div>
                  <h3 className="text-lg font-semibold">Profiles</h3>
                </div>
                <div className="flex space-x-4 mb-4">
                  <a href="#" className="social-icon">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="social-icon">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
                <div className="circular-btn">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </AnimatedSection>
            </div>

            {/* Stats */}
            <div className="lg:col-span-8">
              <AnimatedSection animation="fade-in" delay={0.8} className="card-border bg-[#111] p-6 card-hover">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">03</div>
                    <div className="text-xs text-gray-400 uppercase">
                      YEARS<br />EXPERIENCE
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">60+</div>
                    <div className="text-xs text-gray-400 uppercase">
                      CLIENTS<br />SATISFIED
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">100+</div>
                    <div className="text-xs text-gray-400 uppercase">
                      PROJECTS<br />COMPLETED
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Let's Work Together */}
            <div className="lg:col-span-4">
              <AnimatedSection animation="fade-in" delay={0.9} className="card-border bg-[#111] p-6 relative h-full card-hover">
                <div className="flex items-center mb-4">
                  <div className="text-2xl font-bold">
                    Let's <span className="text-gradient-blue">work</span> <br />together!
                  </div>
                  <div className="ml-auto">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z" />
                      <path d="m12 8 4 4-4 4" />
                      <path d="M8 12h8" />
                    </svg>
                  </div>
                </div>
                <div className="circular-btn">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
