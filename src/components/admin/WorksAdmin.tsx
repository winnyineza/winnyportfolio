
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Edit, Trash2, Plus, ImagePlus } from "lucide-react";

interface Work {
  id: string;
  title: string;
  description: string;
  image_url: string | null;
  project_url: string | null;
  category: string | null;
}

const WorksAdmin = () => {
  const { toast } = useToast();
  const [works, setWorks] = useState<Work[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentWork, setCurrentWork] = useState<Work | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  
  // Form state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [projectUrl, setProjectUrl] = useState("");
  const [category, setCategory] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

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
      toast({
        variant: "destructive",
        title: "Error fetching works",
        description: error.message
      });
    } finally {
      setLoading(false);
    }
  };

  const clearForm = () => {
    setTitle("");
    setDescription("");
    setImageUrl("");
    setProjectUrl("");
    setCategory("");
    setImageFile(null);
    setImagePreview(null);
    setCurrentWork(null);
  };

  const handleOpenDialog = (work?: Work) => {
    if (work) {
      setTitle(work.title);
      setDescription(work.description);
      setImageUrl(work.image_url || "");
      setProjectUrl(work.project_url || "");
      setCategory(work.category || "");
      setCurrentWork(work);
      setIsCreating(false);
      if (work.image_url) {
        setImagePreview(work.image_url);
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
    const fileName = `${Date.now()}-${file.name}`;
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
      
      const workData = {
        title,
        description,
        image_url: finalImageUrl,
        project_url: projectUrl,
        category
      };
      
      if (isCreating) {
        // Create new work
        const { error } = await supabase
          .from("works")
          .insert([workData]);
          
        if (error) throw error;
        
        toast({
          title: "Work created successfully",
        });
      } else if (currentWork) {
        // Update existing work
        const { error } = await supabase
          .from("works")
          .update(workData)
          .eq("id", currentWork.id);
          
        if (error) throw error;
        
        toast({
          title: "Work updated successfully",
        });
      }
      
      // Refresh works list
      fetchWorks();
      setOpenDialog(false);
      clearForm();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error saving work",
        description: error.message
      });
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this work?")) return;
    
    try {
      const { error } = await supabase
        .from("works")
        .delete()
        .eq("id", id);
        
      if (error) throw error;
      
      toast({
        title: "Work deleted successfully",
      });
      
      // Refresh works list
      fetchWorks();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error deleting work",
        description: error.message
      });
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Manage Works</h2>
        <Button onClick={() => handleOpenDialog()} className="bg-purple-600 hover:bg-purple-700">
          <Plus className="mr-2 h-4 w-4" /> Add New Work
        </Button>
      </div>
      
      {loading ? (
        <div className="py-8 text-center">
          <div className="animate-spin h-8 w-8 border-4 border-purple-500 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p>Loading works...</p>
        </div>
      ) : works.length === 0 ? (
        <div className="py-12 text-center">
          <p className="text-gray-400 mb-4">No works found. Add your first project!</p>
          <Button onClick={() => handleOpenDialog()} className="bg-purple-600 hover:bg-purple-700">
            <Plus className="mr-2 h-4 w-4" /> Add New Work
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {works.map((work) => (
            <div key={work.id} className="bg-black border border-gray-800 rounded-lg overflow-hidden">
              {work.image_url ? (
                <div className="aspect-video relative">
                  <img 
                    src={work.image_url} 
                    alt={work.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="aspect-video bg-gray-800 flex items-center justify-center">
                  <p className="text-gray-400">No image</p>
                </div>
              )}
              <div className="p-4">
                <div className="mb-1 text-sm text-purple-400">
                  {work.category || "Uncategorized"}
                </div>
                <h3 className="text-lg font-bold mb-2">{work.title}</h3>
                <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                  {work.description}
                </p>
                <div className="flex space-x-2">
                  <Button 
                    onClick={() => handleOpenDialog(work)} 
                    size="sm" 
                    variant="outline"
                  >
                    <Edit className="h-4 w-4 mr-1" /> Edit
                  </Button>
                  <Button 
                    onClick={() => handleDelete(work.id)} 
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
            <DialogTitle>{isCreating ? "Add New Work" : "Edit Work"}</DialogTitle>
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
                <Label htmlFor="description">Description*</Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  rows={4}
                  className="bg-black border-gray-700"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Input
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="e.g., Web Development, UI/UX, etc."
                  className="bg-black border-gray-700"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="project-url">Project URL</Label>
                <Input
                  id="project-url"
                  value={projectUrl}
                  onChange={(e) => setProjectUrl(e.target.value)}
                  placeholder="https://..."
                  className="bg-black border-gray-700"
                />
              </div>
              
              <div className="space-y-2">
                <Label>Image</Label>
                {imagePreview && (
                  <div className="mb-2 aspect-video relative rounded overflow-hidden">
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

export default WorksAdmin;
