
import { useState } from "react";
import { Trophy, Edit3, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface SportsRecordsProps {
  userData: any;
  onUpdate: () => void;
}

const SportsRecords = ({ userData, onUpdate }: SportsRecordsProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [records, setRecords] = useState(userData.sports_records || {});
  const [newRecordKey, setNewRecordKey] = useState('');
  const [newRecordValue, setNewRecordValue] = useState('');
  const { toast } = useToast();

  const handleAddRecord = () => {
    if (newRecordKey.trim() && newRecordValue.trim()) {
      setRecords({
        ...records,
        [newRecordKey.trim()]: newRecordValue.trim()
      });
      setNewRecordKey('');
      setNewRecordValue('');
    }
  };

  const handleRemoveRecord = (key: string) => {
    const updatedRecords = { ...records };
    delete updatedRecords[key];
    setRecords(updatedRecords);
  };

  const handleSave = async () => {
    setIsUpdating(true);
    try {
      const { error } = await supabase
        .from('users')
        .update({ sports_records: records })
        .eq('id', userData.id);

      if (error) throw error;

      toast({
        title: "Récords actualizados",
        description: "Tus récords deportivos han sido actualizados correctamente.",
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

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <Trophy className="text-yellow-400" size={20} />
          Récords Deportivos
        </h3>
        {!isEditing && (
          <Button
            onClick={() => setIsEditing(true)}
            size="sm"
            className="bg-blue-500 hover:bg-blue-600"
          >
            <Edit3 size={14} />
          </Button>
        )}
      </div>

      {isEditing ? (
        <div className="space-y-4">
          {Object.entries(records).map(([key, value]) => (
            <div key={key} className="flex items-center gap-2">
              <Input
                value={key}
                onChange={(e) => {
                  const newRecords = { ...records };
                  delete newRecords[key];
                  newRecords[e.target.value] = value;
                  setRecords(newRecords);
                }}
                className="bg-white/10 border-white/20 text-white flex-1"
                placeholder="Título del récord"
              />
              <Input
                value={value}
                onChange={(e) => setRecords({ ...records, [key]: e.target.value })}
                className="bg-white/10 border-white/20 text-white flex-1"
                placeholder="Valor del récord"
              />
              <Button
                onClick={() => handleRemoveRecord(key)}
                size="sm"
                variant="outline"
                className="border-red-500 text-red-400 hover:bg-red-500/20"
              >
                <X size={16} />
              </Button>
            </div>
          ))}

          <div className="flex items-center gap-2">
            <Input
              value={newRecordKey}
              onChange={(e) => setNewRecordKey(e.target.value)}
              className="bg-white/10 border-white/20 text-white flex-1"
              placeholder="Nuevo récord (ej: Mejor tiempo 100m)"
            />
            <Input
              value={newRecordValue}
              onChange={(e) => setNewRecordValue(e.target.value)}
              className="bg-white/10 border-white/20 text-white flex-1"
              placeholder="Valor (ej: 9.58s)"
            />
            <Button
              onClick={handleAddRecord}
              size="sm"
              className="bg-green-500 hover:bg-green-600"
            >
              <Plus size={16} />
            </Button>
          </div>

          <div className="flex gap-2">
            <Button
              onClick={handleSave}
              disabled={isUpdating}
              className="flex-1 bg-green-500 hover:bg-green-600"
            >
              {isUpdating ? "Guardando..." : "Guardar"}
            </Button>
            <Button
              onClick={() => {
                setIsEditing(false);
                setRecords(userData.sports_records || {});
              }}
              variant="outline"
              className="flex-1 border-white/20 text-white hover:bg-white/10"
            >
              Cancelar
            </Button>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          {Object.keys(records).length === 0 ? (
            <p className="text-gray-400 text-sm">No hay récords registrados</p>
          ) : (
            Object.entries(records).map(([key, value]) => (
              <div key={key} className="flex justify-between">
                <span className="text-gray-400">{key}:</span>
                <span className="text-white font-medium">{value}</span>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default SportsRecords;
