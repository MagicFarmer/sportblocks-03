
import { useState } from "react";
import { User, Edit3, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface UserProfileInfoProps {
  userData: any;
  onUpdate: () => void;
}

const UserProfileInfo = ({ userData, onUpdate }: UserProfileInfoProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [formData, setFormData] = useState({
    name: userData?.name || '',
    email: userData?.email || '',
    sport: userData?.sport || '',
    country: userData?.country || '',
    category: userData?.category || ''
  });
  const { toast } = useToast();

  const handleUpdate = async () => {
    setIsUpdating(true);
    try {
      const { error } = await supabase
        .from('users')
        .update({
          name: formData.name,
          email: formData.email,
          sport: formData.sport,
          country: formData.country,
          category: formData.category,
          updated_at: new Date().toISOString()
        } as any)
        .eq('id', userData.id);

      if (error) throw error;

      toast({
        title: "Perfil actualizado",
        description: "Tu información ha sido actualizada correctamente.",
      });

      setIsEditing(false);
      onUpdate();
    } catch (error: any) {
      toast({
        title: "Error al actualizar",
        description: error.message || "Por favor inténtalo de nuevo.",
        variant: "destructive"
      });
    } finally {
      setIsUpdating(false);
    }
  };

  const handleAvatarUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      // Upload file to storage (we'll handle this without the storage bucket for now)
      // For now, we'll just show a message that the feature is coming soon
      toast({
        title: "Función próximamente",
        description: "La subida de avatares estará disponible pronto.",
      });
    } catch (error: any) {
      toast({
        title: "Error al subir imagen",
        description: error.message || "Por favor inténtalo de nuevo.",
        variant: "destructive"
      });
    }
  };

  if (!userData) {
    return (
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
        <p className="text-gray-400">Cargando información del perfil...</p>
      </div>
    );
  }

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
      <div className="text-center mb-6">
        <div className="relative inline-block">
          <Avatar className="w-24 h-24 mx-auto mb-4">
            <AvatarImage src={userData?.avatar_url} alt={userData?.name} />
            <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xl">
              {userData?.name?.charAt(0)?.toUpperCase() || <User size={32} />}
            </AvatarFallback>
          </Avatar>
          <label htmlFor="avatar-upload" className="absolute bottom-0 right-0 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full cursor-pointer transition-colors">
            <Camera size={16} />
            <input
              id="avatar-upload"
              type="file"
              accept="image/*"
              onChange={handleAvatarUpload}
              className="hidden"
            />
          </label>
        </div>
        
        <h2 className="text-xl font-bold text-white">{userData?.name}</h2>
        <p className="text-gray-300 capitalize">{userData?.user_type}</p>
      </div>

      {isEditing ? (
        <div className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-white">Nombre</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="bg-white/10 border-white/20 text-white"
            />
          </div>
          
          <div>
            <Label htmlFor="email" className="text-white">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="bg-white/10 border-white/20 text-white"
            />
          </div>
          
          <div>
            <Label htmlFor="sport" className="text-white">Deporte</Label>
            <Input
              id="sport"
              value={formData.sport}
              onChange={(e) => setFormData({...formData, sport: e.target.value})}
              className="bg-white/10 border-white/20 text-white"
            />
          </div>
          
          <div>
            <Label htmlFor="country" className="text-white">País</Label>
            <Input
              id="country"
              value={formData.country}
              onChange={(e) => setFormData({...formData, country: e.target.value})}
              className="bg-white/10 border-white/20 text-white"
            />
          </div>
          
          <div>
            <Label htmlFor="category" className="text-white">Categoría</Label>
            <Input
              id="category"
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
              className="bg-white/10 border-white/20 text-white"
            />
          </div>

          <div className="flex gap-2">
            <Button
              onClick={handleUpdate}
              disabled={isUpdating}
              className="flex-1 bg-green-500 hover:bg-green-600"
            >
              {isUpdating ? "Guardando..." : "Guardar"}
            </Button>
            <Button
              onClick={() => setIsEditing(false)}
              variant="outline"
              className="flex-1 border-white/20 text-white hover:bg-white/10"
            >
              Cancelar
            </Button>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-400">Email:</span>
            <span className="text-white">{userData?.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Deporte:</span>
            <span className="text-white">{userData?.sport}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">País:</span>
            <span className="text-white">{userData?.country}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Categoría:</span>
            <span className="text-white">{userData?.category}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Wallet:</span>
            <span className="text-white text-sm font-mono">
              {userData?.wallet_address?.slice(0, 6)}...{userData?.wallet_address?.slice(-4)}
            </span>
          </div>

          <Button
            onClick={() => setIsEditing(true)}
            className="w-full mt-4 bg-blue-500 hover:bg-blue-600"
          >
            <Edit3 className="mr-2" size={16} />
            Editar Perfil
          </Button>
        </div>
      )}
    </div>
  );
};

export default UserProfileInfo;
