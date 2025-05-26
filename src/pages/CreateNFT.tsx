
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Upload, ArrowLeft } from "lucide-react";
import { useStarkNet } from "@/hooks/useStarkNet";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const CreateNFT = () => {
  const navigate = useNavigate();
  const { wallet, userData } = useStarkNet();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    beneficiaryProject: "",
    rarity: "common",
    price: "",
    totalCopies: "1"
  });
  
  const [mediaFile, setMediaFile] = useState<File | null>(null);
  const [mediaPreview, setMediaPreview] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!wallet.isConnected || !userData) {
    navigate('/');
    return null;
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setMediaFile(file);
      const previewUrl = URL.createObjectURL(file);
      setMediaPreview(previewUrl);
    }
  };

  const uploadMediaFile = async (file: File): Promise<string> => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${userData.id}/${Date.now()}.${fileExt}`;
    
    const { data, error } = await supabase.storage
      .from('nft-media')
      .upload(fileName, file);

    if (error) throw error;

    const { data: urlData } = supabase.storage
      .from('nft-media')
      .getPublicUrl(data.path);

    return urlData.publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      let mediaUrl = "";
      let mediaType = "";

      if (mediaFile) {
        mediaUrl = await uploadMediaFile(mediaFile);
        mediaType = mediaFile.type.startsWith('video') ? 'video' : 'image';
      }

      const { data, error } = await supabase
        .from('nfts')
        .insert({
          user_id: userData.id,
          name: formData.name,
          description: formData.description,
          media_url: mediaUrl,
          media_type: mediaType,
          beneficiary_project: formData.beneficiaryProject,
          rarity: formData.rarity,
          price: parseFloat(formData.price),
          total_copies: parseInt(formData.totalCopies)
        })
        .select()
        .single();

      if (error) throw error;

      toast({
        title: "NFT Created Successfully!",
        description: "Your NFT has been saved and is ready to be minted.",
      });

      navigate('/dashboard');
    } catch (error: any) {
      console.error('Error creating NFT:', error);
      toast({
        title: "Error Creating NFT",
        description: error.message || "Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/dashboard')}
              className="text-gray-400 hover:text-white mb-4"
            >
              <ArrowLeft className="mr-2" size={16} />
              Back to Dashboard
            </Button>
            <h1 className="text-4xl font-bold text-white mb-2">Create NFT</h1>
            <p className="text-gray-400">Create and mint your sports NFT</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Media Upload */}
              <div>
                <Label htmlFor="media" className="text-white">Media (Image/Video)</Label>
                <div className="mt-2">
                  {mediaPreview ? (
                    <div className="relative">
                      {mediaFile?.type.startsWith('video') ? (
                        <video 
                          src={mediaPreview} 
                          className="w-full h-64 object-cover rounded-lg"
                          controls
                        />
                      ) : (
                        <img 
                          src={mediaPreview} 
                          alt="Preview"
                          className="w-full h-64 object-cover rounded-lg"
                        />
                      )}
                      <Button
                        type="button"
                        variant="secondary"
                        size="sm"
                        className="absolute top-2 right-2"
                        onClick={() => {
                          setMediaFile(null);
                          setMediaPreview("");
                        }}
                      >
                        Remove
                      </Button>
                    </div>
                  ) : (
                    <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-white/30 rounded-lg cursor-pointer hover:border-white/50 transition-colors">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="text-gray-400 mb-4" size={40} />
                        <p className="mb-2 text-sm text-gray-400">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF, MP4 up to 10MB</p>
                      </div>
                      <input 
                        id="media" 
                        type="file" 
                        className="hidden" 
                        accept="image/*,video/*"
                        onChange={handleFileChange}
                      />
                    </label>
                  )}
                </div>
              </div>

              {/* Name */}
              <div>
                <Label htmlFor="name" className="text-white">Name *</Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  placeholder="Enter NFT name"
                />
              </div>

              {/* Description */}
              <div>
                <Label htmlFor="description" className="text-white">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  placeholder="Describe your NFT..."
                  rows={4}
                />
              </div>

              {/* Beneficiary Project */}
              <div>
                <Label htmlFor="beneficiaryProject" className="text-white">Beneficiary Project *</Label>
                <Input
                  id="beneficiaryProject"
                  type="text"
                  value={formData.beneficiaryProject}
                  onChange={(e) => setFormData({...formData, beneficiaryProject: e.target.value})}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  placeholder="e.g., Local Sports Foundation, Youth Soccer League"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Rarity */}
                <div>
                  <Label htmlFor="rarity" className="text-white">Rarity *</Label>
                  <select
                    id="rarity"
                    value={formData.rarity}
                    onChange={(e) => setFormData({...formData, rarity: e.target.value})}
                    className="w-full p-2 bg-white/10 border border-white/20 rounded-md text-white"
                    required
                  >
                    <option value="common" className="text-black">Common</option>
                    <option value="rare" className="text-black">Rare</option>
                    <option value="epic" className="text-black">Epic</option>
                    <option value="legendary" className="text-black">Legendary</option>
                  </select>
                </div>

                {/* Price */}
                <div>
                  <Label htmlFor="price" className="text-white">Price (USD) *</Label>
                  <Input
                    id="price"
                    type="number"
                    step="0.01"
                    min="0"
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: e.target.value})}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="0.00"
                  />
                </div>

                {/* Total Copies */}
                <div>
                  <Label htmlFor="totalCopies" className="text-white">Total Copies *</Label>
                  <Input
                    id="totalCopies"
                    type="number"
                    min="1"
                    value={formData.totalCopies}
                    onChange={(e) => setFormData({...formData, totalCopies: e.target.value})}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="1"
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate('/dashboard')}
                  className="flex-1 border-white/20 text-white hover:bg-white/10"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                >
                  {isSubmitting ? "Creating..." : "Create NFT"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CreateNFT;
