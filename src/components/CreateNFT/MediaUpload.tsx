
import { Upload, X } from "lucide-react";
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
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp', 'video/mp4', 'video/webm', 'video/mov'];
      if (!validTypes.includes(file.type.toLowerCase())) {
        toast({
          title: "Tipo de archivo no válido",
          description: "Por favor selecciona una imagen (JPG, PNG, GIF, WEBP) o video (MP4, WEBM, MOV).",
          variant: "destructive"
        });
        e.target.value = ''; // Clear the input
        return;
      }

      // Validate file size (10MB max)
      const maxSize = 10 * 1024 * 1024; // 10MB in bytes
      if (file.size > maxSize) {
        toast({
          title: "Archivo muy grande",
          description: `El archivo debe ser menor a 10MB. Tu archivo es de ${(file.size / 1024 / 1024).toFixed(1)}MB.`,
          variant: "destructive"
        });
        e.target.value = ''; // Clear the input
        return;
      }

      try {
        const previewUrl = URL.createObjectURL(file);
        onFileChange(file, previewUrl);
        toast({
          title: "Archivo cargado",
          description: `${file.name} ha sido cargado exitosamente.`,
        });
      } catch (error) {
        console.error('Error creating preview:', error);
        toast({
          title: "Error al procesar archivo",
          description: "No se pudo procesar el archivo seleccionado.",
          variant: "destructive"
        });
        e.target.value = ''; // Clear the input
      }
    }
  };

  const handleRemove = () => {
    if (mediaPreview) {
      // Clean up object URL to prevent memory leaks
      URL.revokeObjectURL(mediaPreview);
    }
    onFileChange(null, "");
    // Clear file input
    const fileInput = document.getElementById('media') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      // Create a fake event to reuse existing validation logic
      const fakeEvent = {
        target: { files: [file], value: '' }
      } as React.ChangeEvent<HTMLInputElement>;
      handleFileChange(fakeEvent);
    }
  };

  return (
    <div>
      <Label htmlFor="media" className="text-white">Archivo Multimedia (Imagen/Video)</Label>
      <div className="mt-2">
        {mediaPreview ? (
          <div className="relative group">
            {mediaFile?.type.startsWith('video') ? (
              <video 
                src={mediaPreview} 
                className="w-full h-64 object-cover rounded-lg"
                controls
                preload="metadata"
              />
            ) : (
              <img 
                src={mediaPreview} 
                alt="Preview"
                className="w-full h-64 object-cover rounded-lg"
                onError={() => {
                  toast({
                    title: "Error al cargar imagen",
                    description: "No se pudo cargar la vista previa de la imagen.",
                    variant: "destructive"
                  });
                }}
              />
            )}
            <Button
              type="button"
              variant="destructive"
              size="sm"
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={handleRemove}
            >
              <X className="w-4 h-4" />
            </Button>
            <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
              {mediaFile?.name} ({(mediaFile?.size || 0 / 1024 / 1024).toFixed(1)}MB)
            </div>
          </div>
        ) : (
          <label 
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-white/30 rounded-lg cursor-pointer hover:border-white/50 transition-colors group"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors" size={40} />
              <p className="mb-2 text-sm text-gray-400">
                <span className="font-semibold">Haz clic para subir</span> o arrastra y suelta
              </p>
              <p className="text-xs text-gray-500">PNG, JPG, GIF, WEBP, MP4, WEBM, MOV</p>
              <p className="text-xs text-gray-500">Máximo 10MB</p>
            </div>
            <input 
              id="media" 
              type="file" 
              className="hidden" 
              accept="image/jpeg,image/jpg,image/png,image/gif,image/webp,video/mp4,video/webm,video/mov"
              onChange={handleFileChange}
            />
          </label>
        )}
      </div>
    </div>
  );
};

export default MediaUpload;
