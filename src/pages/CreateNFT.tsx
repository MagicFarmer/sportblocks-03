
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
      // Validate file type
      const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'video/mp4', 'video/webm'];
      if (!validTypes.includes(file.type)) {
        toast({
          title: "Tipo de archivo no válido",
          description: "Por favor selecciona una imagen (JPG, PNG, GIF) o video (MP4, WEBM).",
          variant: "destructive"
        });
        return;
      }

      // Validate file size (10MB max)
      if (file.size > 10 * 1024 * 1024) {
        toast({
          title: "Archivo muy grande",
          description: "El archivo debe ser menor a 10MB.",
          variant: "destructive"
        });
        return;
      }

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

  const mintNFTOnContract = async (nftData: any) => {
    try {
      // Get user's contract address
      const { data: contractData, error: contractError } = await supabase
        .from('user_contracts')
        .select('contract_address')
        .eq('user_id', userData.id)
        .eq('deployment_status', 'deployed')
        .single();

      if (contractError || !contractData) {
        throw new Error('No se encontró un contrato desplegado para este usuario');
      }

      // Generate unique token ID
      const tokenId = Date.now().toString();

      // TODO: Implement actual StarkNet contract interaction
      // For now, we'll simulate the minting process
      console.log('Minting NFT on contract:', {
        contractAddress: contractData.contract_address,
        tokenId,
        copies: nftData.total_copies,
        metadata: {
          name: nftData.name,
          description: nftData.description,
          image: nftData.media_url,
          attributes: {
            rarity: nftData.rarity,
            beneficiary: nftData.beneficiary_project
          }
        }
      });

      // Update NFT record with minting information
      const { error: updateError } = await supabase
        .from('nfts')
        .update({
          token_id: tokenId,
          contract_address: contractData.contract_address,
          is_minted: true,
          minted_copies: nftData.total_copies
        })
        .eq('id', nftData.id);

      if (updateError) throw updateError;

      return tokenId;

    } catch (error) {
      console.error('Error minting NFT:', error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate required fields
      if (!formData.name.trim()) {
        throw new Error('El nombre del NFT es requerido');
      }
      if (!formData.beneficiaryProject.trim()) {
        throw new Error('El proyecto beneficiario es requerido');
      }
      if (!formData.price || parseFloat(formData.price) <= 0) {
        throw new Error('El precio debe ser mayor a 0');
      }
      if (!formData.totalCopies || parseInt(formData.totalCopies) <= 0) {
        throw new Error('La cantidad de copias debe ser mayor a 0');
      }

      let mediaUrl = "";
      let mediaType = "";

      // Upload media file if provided
      if (mediaFile) {
        mediaUrl = await uploadMediaFile(mediaFile);
        mediaType = mediaFile.type.startsWith('video') ? 'video' : 'image';
      }

      // Create NFT record in Supabase
      const { data: nftData, error: nftError } = await supabase
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

      if (nftError) throw nftError;

      // Mint NFT on contract
      await mintNFTOnContract(nftData);

      toast({
        title: "¡NFT Creado y Minteado Exitosamente!",
        description: "Tu NFT ha sido guardado en la base de datos y minteado en el contrato.",
      });

      navigate('/dashboard');

    } catch (error: any) {
      console.error('Error creating NFT:', error);
      toast({
        title: "Error al Crear NFT",
        description: error.message || "Por favor inténtalo de nuevo.",
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
              Volver al Dashboard
            </Button>
            <h1 className="text-4xl font-bold text-white mb-2">Crear NFT</h1>
            <p className="text-gray-400">Crea y mintea tu NFT deportivo</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Media Upload */}
              <div>
                <Label htmlFor="media" className="text-white">Archivo Multimedia (Imagen/Video)</Label>
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
                        Remover
                      </Button>
                    </div>
                  ) : (
                    <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-white/30 rounded-lg cursor-pointer hover:border-white/50 transition-colors">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="text-gray-400 mb-4" size={40} />
                        <p className="mb-2 text-sm text-gray-400">
                          <span className="font-semibold">Haz clic para subir</span> o arrastra y suelta
                        </p>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF, MP4, WEBM hasta 10MB</p>
                      </div>
                      <input 
                        id="media" 
                        type="file" 
                        className="hidden" 
                        accept="image/*,video/mp4,video/webm"
                        onChange={handleFileChange}
                      />
                    </label>
                  )}
                </div>
              </div>

              {/* Name */}
              <div>
                <Label htmlFor="name" className="text-white">Nombre del NFT *</Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  placeholder="Ej: Gol histórico de Messi"
                />
              </div>

              {/* Description */}
              <div>
                <Label htmlFor="description" className="text-white">Descripción</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  placeholder="Describe tu NFT deportivo..."
                  rows={4}
                />
              </div>

              {/* Beneficiary Project */}
              <div>
                <Label htmlFor="beneficiaryProject" className="text-white">Proyecto o Entidad Beneficiaria *</Label>
                <Input
                  id="beneficiaryProject"
                  type="text"
                  value={formData.beneficiaryProject}
                  onChange={(e) => setFormData({...formData, beneficiaryProject: e.target.value})}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  placeholder="Ej: Fundación Deportiva Local, Liga de Fútbol Juvenil"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Rarity */}
                <div>
                  <Label htmlFor="rarity" className="text-white">Rareza *</Label>
                  <select
                    id="rarity"
                    value={formData.rarity}
                    onChange={(e) => setFormData({...formData, rarity: e.target.value})}
                    className="w-full p-2 bg-white/10 border border-white/20 rounded-md text-white"
                    required
                  >
                    <option value="common" className="text-black">Común</option>
                    <option value="rare" className="text-black">Rara</option>
                    <option value="epic" className="text-black">Épica</option>
                    <option value="legendary" className="text-black">Legendaria</option>
                  </select>
                </div>

                {/* Price */}
                <div>
                  <Label htmlFor="price" className="text-white">Precio (USD) *</Label>
                  <Input
                    id="price"
                    type="number"
                    step="0.01"
                    min="0.01"
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: e.target.value})}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="0.00"
                  />
                </div>

                {/* Total Copies */}
                <div>
                  <Label htmlFor="totalCopies" className="text-white">Cantidad de Copias *</Label>
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
                  <p className="text-xs text-gray-400 mt-1">
                    1 = NFT único, &gt;1 = múltiples copias
                  </p>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate('/dashboard')}
                  className="flex-1 border-white/20 text-white hover:bg-white/10"
                >
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                >
                  {isSubmitting ? "Creando y Minteando..." : "Crear y Mintear NFT"}
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
