
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { ExternalLink } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date_issued: string | null;
  credential_url: string | null;
  image_url: string | null;
}

const Certifications = () => {
  const { toast } = useToast();
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCertifications();
  }, []);

  const fetchCertifications = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("certifications")
        .select("*")
        .order("date_issued", { ascending: false });

      if (error) throw error;
      setCertifications(data || []);
    } catch (error: any) {
      console.error("Error fetching certifications:", error);
      toast({
        variant: "destructive",
        title: "Error loading certifications",
        description: "Could not load certifications from the database."
      });
      // Fallback to empty array
      setCertifications([]);
    } finally {
      setLoading(false);
    }
  };

  // Format year from date
  const getYear = (dateString: string | null) => {
    if (!dateString) return "N/A";
    return new Date(dateString).getFullYear().toString();
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto py-12 px-4">
          <AnimatedSection animation="fade-in" delay={0.1} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="inline-flex items-center justify-center w-full">
                <span className="text-xl mr-3">✦</span>
                CERTIFICATES
                <span className="text-xl ml-3">✦</span>
              </span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A collection of professional certifications and achievements that highlight my expertise and continuous learning journey.
            </p>
          </AnimatedSection>
          
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin h-12 w-12 border-4 border-purple-500 border-t-transparent rounded-full"></div>
            </div>
          ) : certifications.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400">No certifications found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {certifications.map((cert, index) => (
                <AnimatedSection 
                  key={cert.id} 
                  animation="fade-in" 
                  delay={0.1 * (index + 1)}
                  className="bg-[#111] rounded-lg overflow-hidden card-border card-hover"
                >
                  <div className="aspect-[4/3] relative">
                    <img 
                      src={cert.image_url || "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?w=500&auto=format"} 
                      alt={cert.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-0 right-0 bg-purple-600 text-white px-3 py-1 text-sm font-medium">
                      {getYear(cert.date_issued)}
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <div className="text-sm text-purple-400 font-medium mb-2">
                      {cert.issuer}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{cert.title}</h3>
                    
                    {cert.credential_url && (
                      <a 
                        href={cert.credential_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
                      >
                        View Certificate <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Certifications;
