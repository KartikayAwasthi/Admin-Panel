import { X } from "lucide-react";

const Modal = ({ isOpen, onClose, title, children, actions }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-dark">{title}</h2>
          <button onClick={onClose} className="hover:bg-gray-100 p-1 rounded-lg">
            <X size={20} />
          </button>
        </div>

        <div className="p-6">{children}</div>

        {actions && <div className="flex gap-3 p-6 border-t border-gray-200">{actions}</div>}
      </div>
    </div>
  );
};

export default Modal;
