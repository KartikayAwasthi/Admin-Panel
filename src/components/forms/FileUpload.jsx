import { Upload } from "lucide-react";
import { useRef } from "react";

const FileUpload = ({ onChange, accept = "image/*", label = "Upload Image" }) => {
  const inputRef = useRef(null);

  const handleChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      onChange(file);
    }
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        onChange={handleChange}
        className="hidden"
      />

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="w-full flex items-center justify-center gap-2 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary transition"
      >
        <Upload size={20} className="text-gray-500" />
        <span className="text-gray-600">{label}</span>
      </button>
    </div>
  );
};

export default FileUpload;
