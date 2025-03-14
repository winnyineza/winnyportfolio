
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WorksAdmin from "@/components/admin/WorksAdmin";
import CertificationsAdmin from "@/components/admin/CertificationsAdmin";
import { AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAdminStatus = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        
        if (!session) {
          setIsAdmin(false);
          setIsLoading(false);
          return;
        }

        // Check if user is in admin_users table
        const { data, error } = await supabase
          .from('admin_users')
          .select('id')
          .eq('id', session.user.id)
          .single();

        if (error || !data) {
          console.error("Admin check error:", error);
          setIsAdmin(false);
        } else {
          setIsAdmin(true);
        }
      } catch (error) {
        console.error("Admin check failed:", error);
        setIsAdmin(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAdminStatus();
  }, []);

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin + '/admin'
      }
    });
    
    if (error) {
      toast({
        variant: "destructive",
        title: "Authentication failed",
        description: error.message
      });
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsAdmin(false);
    toast({
      title: "Logged out successfully",
    });
  };

  if (isLoading) {
    return (
      <div className="flex flex-col min-h-screen bg-black text-white">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="p-8 text-center">
            <div className="animate-spin h-12 w-12 border-4 border-purple-500 border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-lg">Loading admin panel...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (isAdmin === false) {
    return (
      <div className="flex flex-col min-h-screen bg-black text-white">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="p-8 max-w-md w-full text-center">
            <div className="bg-[#111] p-8 rounded-xl border border-gray-800">
              <AlertCircle className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
              <h1 className="text-2xl font-bold mb-4">Admin Access Required</h1>
              <p className="mb-6 text-gray-400">You need to log in with an admin account to access this page.</p>
              <Button onClick={handleLogin} className="bg-purple-600 hover:bg-purple-700">
                Login with Google
              </Button>
              <p className="mt-4 text-sm text-gray-500">If you're not an admin, please contact the site owner.</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto py-8 px-4">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <Button onClick={handleLogout} variant="outline" className="border-red-500 text-red-500 hover:bg-red-500/10">
              Logout
            </Button>
          </div>
          
          <Tabs defaultValue="works" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="works">Works</TabsTrigger>
              <TabsTrigger value="certifications">Certifications</TabsTrigger>
            </TabsList>
            
            <TabsContent value="works" className="bg-[#111] rounded-xl p-6 border border-gray-800">
              <WorksAdmin />
            </TabsContent>
            
            <TabsContent value="certifications" className="bg-[#111] rounded-xl p-6 border border-gray-800">
              <CertificationsAdmin />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Admin;
