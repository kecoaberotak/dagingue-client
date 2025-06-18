"use client";

import { logout } from "@/services/auth.service";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };
  return (
    <div>
      <h1>Admin Page</h1>
      <button onClick={handleLogout} className="button">
        Logout
      </button>
    </div>
  );
}
