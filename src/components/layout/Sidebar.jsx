import {
  LayoutDashboard,
  FileText,
  PlusCircle,
  Settings,
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const menus = [
    {
      name: "Dashboard",
      path: "/",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "Articles",
      path: "/articles",
      icon: <FileText size={20} />,
    },
    {
      name: "Create Article",
      path: "/articles/create",
      icon: <PlusCircle size={20} />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <Settings size={20} />,
    },
  ];

  return (
    <div className="w-64 bg-secondaryDark border-r border-gray-800 min-h-screen p-5 sticky top-0">
      <div className="flex justify-center mb-8">
        <img src="/logo.png" alt="logo" className="h-10 object-contain" />
      </div>

      <div className="space-y-3">
        {menus.map((menu) => (
          <Link
            key={menu.name}
            to={menu.path}
            className={`flex items-center gap-3 p-4 rounded-xl font-medium transition-all duration-300 ${
              location.pathname === menu.path
                ? "bg-primary text-white shadow-lg shadow-red-500/50"
                : "text-gray-300 hover:bg-gray-800 hover:text-white"
            }`}
          >
            {menu.icon}
            {menu.name}
          </Link>
        ))}
      </div>

      <div className="mt-8 pt-8 border-t border-gray-800">
        <p className="text-xs text-gray-500 px-4">
          © 2024 TechPolarity. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;