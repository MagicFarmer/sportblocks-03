
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface UserRegistrationFormProps {
  walletAddress: string;
  onRegistrationComplete: (userData: any) => void;
}

const UserRegistrationForm = ({ walletAddress, onRegistrationComplete }: UserRegistrationFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    userType: "fan",
    sport: "",
    country: "",
    category: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Insert user data
      const { data: userData, error: userError } = await supabase
        .from('users')
        .insert({
          wallet_address: walletAddress,
          name: formData.name,
          email: formData.email,
          user_type: formData.userType,
          sport: formData.sport,
          country: formData.country,
          category: formData.category
        })
        .select()
        .single();

      if (userError) throw userError;

      // Create smart contract via edge function
      const { data: contractData, error: contractError } = await supabase.functions.invoke('create-user-contract', {
        body: { userId: userData.id, walletAddress }
      });

      if (contractError) {
        console.warn('Contract creation failed:', contractError);
        // Continue even if contract creation fails
      }

      toast({
        title: "Registration Successful!",
        description: "Welcome to SportBlocks! Your profile has been created.",
      });

      onRegistrationComplete(userData);
    } catch (error: any) {
      console.error('Registration error:', error);
      toast({
        title: "Registration Failed",
        description: error.message || "Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">
        Complete Your Profile
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name" className="text-white">Name</Label>
          <Input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <Label htmlFor="email" className="text-white">Email</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <Label htmlFor="userType" className="text-white">User Type</Label>
          <select
            id="userType"
            value={formData.userType}
            onChange={(e) => setFormData({...formData, userType: e.target.value})}
            className="w-full p-2 bg-white/10 border border-white/20 rounded-md text-white"
          >
            <option value="fan" className="text-black">Fan</option>
            <option value="athlete" className="text-black">Athlete</option>
          </select>
        </div>

        <div>
          <Label htmlFor="sport" className="text-white">Sport</Label>
          <Input
            id="sport"
            type="text"
            value={formData.sport}
            onChange={(e) => setFormData({...formData, sport: e.target.value})}
            required
            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            placeholder="e.g., Football, Basketball, Tennis"
          />
        </div>

        <div>
          <Label htmlFor="country" className="text-white">Country</Label>
          <Input
            id="country"
            type="text"
            value={formData.country}
            onChange={(e) => setFormData({...formData, country: e.target.value})}
            required
            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            placeholder="Enter your country"
          />
        </div>

        <div>
          <Label htmlFor="category" className="text-white">Category</Label>
          <Input
            id="category"
            type="text"
            value={formData.category}
            onChange={(e) => setFormData({...formData, category: e.target.value})}
            required
            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            placeholder="e.g., Professional, Amateur, Youth"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
        >
          {isSubmitting ? "Creating Profile..." : "Complete Registration"}
        </Button>
      </form>
    </div>
  );
};

export default UserRegistrationForm;
