
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactInfo from "@/components/contact/ContactInfo";
import SocialLinks from "@/components/contact/SocialLinks";
import ContactForm from "@/components/contact/ContactForm";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <ContactInfo />
              <SocialLinks />
            </div>
            
            <div className="md:col-span-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
