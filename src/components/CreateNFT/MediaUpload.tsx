
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface MediaUploadProps {
  mediaFile: File | null;
  mediaPreview: string;
  onFileChange: (file: File | null, preview: string) => void;
}

const MediaUpload = ({ mediaFile, mediaPreview, onFileChange }: MediaUploadProps) => {
  const { toast } = useToast();

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

      const previewUrl = URL.createObjectURL(file);
      onFileChange(file, previewUrl);
    }
  };

  const handleRemove = () => {
    onFileChange(null, "");
  };

  return (
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
              onClick={handleRemove}
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
  );
};

export default MediaUpload;
