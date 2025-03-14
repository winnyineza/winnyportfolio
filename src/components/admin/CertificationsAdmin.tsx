
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Edit, Trash2, Plus, ImagePlus, Calendar, Link2 } from "lucide-react";

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date_issued: string | null;
  expiry_date: string | null;
  credential_id: string | null;
  credential_url: string | null;
  image_url: string | null;
}

const CertificationsAdmin = () => {
  const { toast } = useToast();
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentCert, setCurrentCert] = useState<Certification | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  
  // Form state
  const [title, setTitle] = useState("");
  const [issuer, setIssuer] = useState("");
  const [dateIssued, setDateIssued] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [credentialId, setCredentialId] = useState("");
  const [credentialUrl, setCredentialUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

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
      toast({
        variant: "destructive",
        title: "Error fetching certifications",
        description: error.message
      });
    } finally {
      setLoading(false);
    }
  };

  const clearForm = () => {
    setTitle("");
    setIssuer("");
    setDateIssued("");
    setExpiryDate("");
    setCredentialId("");
    setCredentialUrl("");
    setImageUrl("");
    setImageFile(null);
    setImagePreview(null);
    setCurrentCert(null);
  };

  const handleOpenDialog = (cert?: Certification) => {
    if (cert) {
      setTitle(cert.title);
      setIssuer(cert.issuer);
      setDateIssued(cert.date_issued || "");
      setExpiryDate(cert.expiry_date || "");
      setCredentialId(cert.credential_id || "");
      setCredentialUrl(cert.credential_url || "");
      setImageUrl(cert.image_url || "");
      setCurrentCert(cert);
      setIsCreating(false);
      if (cert.image_url) {
        setImagePreview(cert.image_url);
      }
    } else {
      clearForm();
      setIsCreating(true);
    }
    setOpenDialog(true);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageFile(file);
    
    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const uploadImage = async (file: File) => {
    const fileName = `certifications/${Date.now()}-${file.name}`;
    const { data, error } = await supabase.storage
      .from("portfolio-images")
      .upload(fileName, file);

    if (error) throw error;

    const { data: urlData } = supabase.storage
      .from("portfolio-images")
      .getPublicUrl(fileName);

    return urlData.publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      let finalImageUrl = imageUrl;
      
      // Upload image if a new file is selected
      if (imageFile) {
        finalImageUrl = await uploadImage(imageFile);
      }
      
      const certData = {
        title,
        issuer,
        date_issued: dateIssued || null,
        expiry_date: expiryDate || null,
        credential_id: credentialId || null,
        credential_url: credentialUrl || null,
        image_url: finalImageUrl || null
      };
      
      if (isCreating) {
        // Create new certification
        const { error } = await supabase
          .from("certifications")
          .insert([certData]);
          
        if (error) throw error;
        
        toast({
          title: "Certification created successfully",
        });
      } else if (currentCert) {
        // Update existing certification
        const { error } = await supabase
          .from("certifications")
          .update(certData)
          .eq("id", currentCert.id);
          
        if (error) throw error;
        
        toast({
          title: "Certification updated successfully",
        });
      }
      
      // Refresh certifications list
      fetchCertifications();
      setOpenDialog(false);
      clearForm();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error saving certification",
        description: error.message
      });
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this certification?")) return;
    
    try {
      const { error } = await supabase
        .from("certifications")
        .delete()
        .eq("id", id);
        
      if (error) throw error;
      
      toast({
        title: "Certification deleted successfully",
      });
      
      // Refresh certifications list
      fetchCertifications();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error deleting certification",
        description: error.message
      });
    }
  };

  // Helper function to format dates for display
  const formatDate = (dateString: string | null) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short'
    });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Manage Certifications</h2>
        <Button onClick={() => handleOpenDialog()} className="bg-purple-600 hover:bg-purple-700">
          <Plus className="mr-2 h-4 w-4" /> Add New Certification
        </Button>
      </div>
      
      {loading ? (
        <div className="py-8 text-center">
          <div className="animate-spin h-8 w-8 border-4 border-purple-500 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p>Loading certifications...</p>
        </div>
      ) : certifications.length === 0 ? (
        <div className="py-12 text-center">
          <p className="text-gray-400 mb-4">No certifications found. Add your first certification!</p>
          <Button onClick={() => handleOpenDialog()} className="bg-purple-600 hover:bg-purple-700">
            <Plus className="mr-2 h-4 w-4" /> Add New Certification
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div key={cert.id} className="bg-black border border-gray-800 rounded-lg overflow-hidden">
              {cert.image_url ? (
                <div className="aspect-[4/3] relative">
                  <img 
                    src={cert.image_url} 
                    alt={cert.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="aspect-[4/3] bg-gray-800 flex items-center justify-center">
                  <p className="text-gray-400">No image</p>
                </div>
              )}
              <div className="p-4">
                <div className="mb-1 text-sm text-purple-400">
                  {cert.issuer}
                </div>
                <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
                <div className="flex items-center mb-4 text-sm text-gray-400">
                  <Calendar className="h-4 w-4 mr-1" />
                  {formatDate(cert.date_issued)}
                  {cert.expiry_date && ` - ${formatDate(cert.expiry_date)}`}
                </div>
                <div className="flex space-x-2">
                  <Button 
                    onClick={() => handleOpenDialog(cert)} 
                    size="sm" 
                    variant="outline"
                  >
                    <Edit className="h-4 w-4 mr-1" /> Edit
                  </Button>
                  <Button 
                    onClick={() => handleDelete(cert.id)} 
                    size="sm" 
                    variant="outline"
                    className="border-red-500 text-red-500 hover:bg-red-500/10"
                  >
                    <Trash2 className="h-4 w-4 mr-1" /> Delete
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="sm:max-w-[600px] bg-[#111] border-gray-800 text-white">
          <DialogHeader>
            <DialogTitle>{isCreating ? "Add New Certification" : "Edit Certification"}</DialogTitle>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title*</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="bg-black border-gray-700"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="issuer">Issuing Organization*</Label>
                <Input
                  id="issuer"
                  value={issuer}
                  onChange={(e) => setIssuer(e.target.value)}
                  required
                  className="bg-black border-gray-700"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date-issued">Date Issued</Label>
                  <Input
                    id="date-issued"
                    type="date"
                    value={dateIssued}
                    onChange={(e) => setDateIssued(e.target.value)}
                    className="bg-black border-gray-700"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="expiry-date">Expiry Date (if applicable)</Label>
                  <Input
                    id="expiry-date"
                    type="date"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    className="bg-black border-gray-700"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="credential-id">Credential ID</Label>
                <Input
                  id="credential-id"
                  value={credentialId}
                  onChange={(e) => setCredentialId(e.target.value)}
                  className="bg-black border-gray-700"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="credential-url">Credential URL</Label>
                <Input
                  id="credential-url"
                  value={credentialUrl}
                  onChange={(e) => setCredentialUrl(e.target.value)}
                  placeholder="https://..."
                  className="bg-black border-gray-700"
                />
              </div>
              
              <div className="space-y-2">
                <Label>Certificate Image</Label>
                {imagePreview && (
                  <div className="mb-2 aspect-[4/3] relative rounded overflow-hidden">
                    <img 
                      src={imagePreview} 
                      alt="Preview" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="flex items-center gap-4">
                  <Label 
                    htmlFor="image-upload" 
                    className="bg-black border border-gray-700 rounded-md py-2 px-4 cursor-pointer flex items-center justify-center hover:bg-gray-900 transition-colors"
                  >
                    <ImagePlus className="h-5 w-5 mr-2" />
                    Select Image
                  </Label>
                  <Input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                  {!imageFile && (
                    <div className="flex-1">
                      <Input
                        placeholder="Or enter image URL"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        className="bg-black border-gray-700"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="flex justify-end gap-2 pt-4">
              <Button 
                type="button" 
                onClick={() => setOpenDialog(false)} 
                variant="outline"
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                className="bg-purple-600 hover:bg-purple-700"
              >
                {isCreating ? "Create" : "Update"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CertificationsAdmin;
