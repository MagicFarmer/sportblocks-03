
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStarkNet } from "@/hooks/useStarkNet";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import MediaUpload from "./MediaUpload";
import { uploadMediaFile, createNFTOnContract } from "@/utils/nftUtils";
import { supabase } from "@/integrations/supabase/client";
import { Account } from 'starknet';

const NFTForm = () => {
  const navigate = useNavigate();
  const { userData, wallet } = useStarkNet();
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

  const handleMediaChange = (file: File | null, preview: string) => {
    setMediaFile(file);
    setMediaPreview(preview);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Basic validation
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
      if (!userData?.id) {
        throw new Error('Usuario no autenticado. Por favor, conéctate primero.');
      }
      if (!wallet.account) {
        throw new Error('Wallet account not available. Please reconnect your wallet.');
      }

      let mediaUrl = "";
      let mediaType = "";

      // Upload media file if provided
      if (mediaFile) {
        try {
          mediaUrl = await uploadMediaFile(mediaFile, userData.id);
          mediaType = mediaFile.type.startsWith('video') ? 'video' : 'image';
        } catch (uploadError) {
          console.warn('Media upload failed, continuing without media:', uploadError);
          // Continue without media if upload fails
        }
      }

      // Create NFT record in database first
      const nftData = {
        user_id: userData.id,
        name: formData.name.trim(),
        description: formData.description.trim() || null,
        media_url: mediaUrl || null,
        media_type: mediaType || null,
        beneficiary_project: formData.beneficiaryProject.trim(),
        rarity: formData.rarity,
        price: parseFloat(formData.price),
        total_copies: parseInt(formData.totalCopies),
        minted_copies: 0,
        is_minted: false
      };

      console.log('Creating NFT with data:', nftData);

      // Insert NFT into database
      const { data: insertedNft, error: nftError } = await supabase
        .from('nfts')
        .insert(nftData)
        .select()
        .single();

      if (nftError) {
        console.error('Database error:', nftError);
        throw new Error(`Error al crear NFT: ${nftError.message}`);
      }

      console.log('NFT created in database:', insertedNft);

      // Create NFT on StarkNet contract
      try {
        const userAccount = wallet.account as Account;
        await createNFTOnContract(insertedNft, userAccount);
        
        toast({
          title: "¡NFT Creado Exitosamente!",
          description: "Tu NFT ha sido creado en la blockchain de StarkNet.",
        });

      } catch (contractError) {
        console.error('Contract creation failed:', contractError);
        
        toast({
          title: "NFT Guardado",
          description: "NFT guardado en la base de datos. La funcionalidad blockchain estará disponible pronto.",
        });
      }

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
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
      <form onSubmit={handleSubmit} className="space-y-6">
        <MediaUpload 
          mediaFile={mediaFile}
          mediaPreview={mediaPreview}
          onFileChange={handleMediaChange}
        />

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
            {isSubmitting ? "Creando NFT..." : "Crear NFT"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NFTForm;
