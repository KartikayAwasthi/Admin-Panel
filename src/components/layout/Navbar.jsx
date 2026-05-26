import { Bell, Search } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="h-20 border-b border-zinc-800 bg-zinc-900 flex items-center justify-between px-6">
      <div className="flex items-center gap-3 bg-zinc-800 rounded-xl px-4 py-2 w-80">
        <Search size={18} />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none w-full"
        />
      </div>

      <div className="flex items-center gap-5">
        <Bell />

        <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center">
          K
        </div>
      </div>
    </header>
  );
};

export default Navbar;