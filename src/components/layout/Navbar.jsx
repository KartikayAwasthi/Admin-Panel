import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-50">

      <div className="w-32">
      </div>

      <div className="flex flex-col items-center">
        <img
          src="/logo.png"
          alt="logo"
          className="h-12 object-contain"
        />

        <h1 className="text-sm font-semibold tracking-wide text-primary">
          TECHPOLARITY ADMIN
        </h1>
      </div>

      <button
        onClick={logout}
        className="bg-primary text-white px-5 py-2 rounded-lg flex items-center gap-2 hover:scale-105 transition"
      >
        <LogOut size={18} />
        Logout
      </button>
    </div>
  );
};

export default Navbar;