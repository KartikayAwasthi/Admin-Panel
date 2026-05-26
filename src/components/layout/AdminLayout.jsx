import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex bg-darkBg min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-8 bg-darkBg min-h-screen">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;