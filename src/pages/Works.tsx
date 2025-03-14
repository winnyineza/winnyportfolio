
import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

// Define category types
type CategoryType = "All" | "UI/UX" | "Web Development" | "Graphics" | "Branding" | "Video" | "Marketing";

interface Work {
  id: string;
  title: string;
  description: string;
  image_url: string | null;
  project_url: string | null;
  category: string | null;
}

const Works = () => {
  const { toast } = useToast();
  const [activeCategory, setActiveCategory] = useState<CategoryType>("All");
  const [works, setWorks] = useState<Work[]>([]);
  const [loading, setLoading] = useState(true);
  
  const categories: CategoryType[] = [
    "All", 
    "UI/UX", 
    "Web Development", 
    "Graphics", 
    "Branding", 
    "Video", 
    "Marketing"
  ];
  
  useEffect(() => {
    fetchWorks();
  }, []);

  const fetchWorks = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("works")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setWorks(data || []);
    } catch (error: any) {
      console.error("Error fetching works:", error);
      toast({
        variant: "destructive",
        title: "Error loading works",
        description: "Could not load works from the database."
      });
      // Fallback to empty array
      setWorks([]);
    } finally {
      setLoading(false);
    }
  };
  
  const filteredWorks = activeCategory === "All" 
    ? works 
    : works.filter(work => work.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto py-12">
          <AnimatedSection animation="fade-in" delay={0.1} className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">
              <span className="inline-flex items-center">
                <span className="text-xs mr-2">✦</span>
                All Projects
                <span className="text-xs ml-2">✦</span>
              </span>
            </h1>
          </AnimatedSection>
          
          {/* Category Filter */}
          <div className="mb-12 overflow-x-auto">
            <div className="flex space-x-4 min-w-max p-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap
                    ${activeCategory === category 
                      ? "bg-purple-600 text-white" 
                      : "bg-[#1A1A1A] text-white/70 hover:bg-[#333]"}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin h-12 w-12 border-4 border-purple-500 border-t-transparent rounded-full"></div>
            </div>
          ) : filteredWorks.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400">No projects found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredWorks.map((work, index) => (
                <AnimatedSection 
                  key={work.id}
                  animation="fade-in" 
                  delay={0.1 * (index + 1)} 
                  className="card-border card-hover overflow-hidden relative group"
                >
                  <div className="relative aspect-video">
                    <img 
                      src={work.image_url || "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&auto=format"} 
                      alt={work.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white text-center px-4">
                        <div className="flex flex-wrap gap-2 justify-center mb-2">
                          <span className="text-xs px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full">
                            {work.category || "Uncategorized"}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold">{work.title}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold">{work.title}</h3>
                    {work.project_url ? (
                      <a 
                        href={work.project_url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="circular-btn"
                      >
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    ) : (
                      <div className="circular-btn">
                        <ArrowRight className="h-4 w-4" />
                      </div>
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

export default Works;
