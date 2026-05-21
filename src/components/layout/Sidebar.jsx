import {
  LayoutDashboard,
  FileText,
  PlusCircle,
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
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 min-h-screen p-5">

      <div className="space-y-3 mt-10">
        {menus.map((menu) => (
          <Link
            key={menu.name}
            to={menu.path}
            className={`flex items-center gap-3 p-4 rounded-xl font-medium transition-all duration-300
              
              ${
                location.pathname === menu.path
                  ? "bg-primary text-white shadow-lg"
                  : "hover:bg-gray-100 text-dark"
              }
            `}
          >
            {menu.icon}
            {menu.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;