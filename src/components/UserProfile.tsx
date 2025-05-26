
import { User } from "lucide-react";

interface UserProfileProps {
  userData: {
    name: string;
    email: string;
    user_type: string;
    sport: string;
    country: string;
    category: string;
    wallet_address: string;
  };
  onDisconnect: () => void;
}

const UserProfile = ({ userData, onDisconnect }: UserProfileProps) => {
  return (
    <div className="max-w-md mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <User className="text-white" size={32} />
        </div>
        <h2 className="text-2xl font-bold text-white">Welcome Back!</h2>
        <p className="text-gray-300">{userData.name}</p>
      </div>

      <div className="space-y-3 text-white">
        <div className="flex justify-between">
          <span className="text-gray-400">Type:</span>
          <span className="capitalize">{userData.user_type}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Sport:</span>
          <span>{userData.sport}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Country:</span>
          <span>{userData.country}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Category:</span>
          <span>{userData.category}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Wallet:</span>
          <span className="text-sm font-mono">
            {userData.wallet_address.slice(0, 6)}...{userData.wallet_address.slice(-4)}
          </span>
        </div>
      </div>

      <button
        onClick={onDisconnect}
        className="w-full mt-6 px-4 py-2 bg-red-500/20 text-red-400 border border-red-500/30 rounded-xl hover:bg-red-500/30 transition-all duration-200"
      >
        Disconnect Wallet
      </button>
    </div>
  );
};

export default UserProfile;
