
import { Users as UsersIcon } from "lucide-react";

interface UsersProps {
  className?: string;
}

const Users = ({ className }: UsersProps) => {
  return <UsersIcon className={className} />;
};

export default Users;
