import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  FileText,
  PlusCircle,
  Settings,
  LogOut,
} from 'lucide-react';

const Sidebar = () => {
  const menus = [
    {
      title: 'Dashboard',
      path: '/dashboard',
      icon: LayoutDashboard,
    },
    {
      title: 'Articles',
      path: '/articles',
      icon: FileText,
    },
    {
      title: 'Create Article',
      path: '/articles/create',
      icon: PlusCircle,
    },
    {
      title: 'Settings',
      path: '/settings',
      icon: Settings,
    },
  ];

  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <aside className="w-72 bg-zinc-900 border-r border-zinc-800 p-5 hidden md:block">
      <h1 className="text-2xl font-bold mb-10">TechPolarity</h1>

      <nav className="space-y-2">
        {menus.map((menu) => {
          const Icon = menu.icon;

          return (
            <NavLink
              key={menu.path}
              to={menu.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive
                    ? 'bg-violet-600 text-white'
                    : 'hover:bg-zinc-800 text-zinc-300'
                }`
              }
            >
              <Icon size={20} />
              {menu.title}
            </NavLink>
          );
        })}
      </nav>

      <button
        onClick={logout}
        className="mt-10 flex items-center gap-3 text-red-400 hover:text-red-500"
      >
        <LogOut size={18} /> Logout
      </button>
    </aside>
  );
};

export default Sidebar;