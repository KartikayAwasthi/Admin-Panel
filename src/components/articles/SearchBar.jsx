import { Search, X } from "lucide-react";
import { useState } from "react";

const SearchBar = ({ onSearch, placeholder = "Search articles..." }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const val = e.target.value;
    setValue(val);
    onSearch(val);
  };

  return (
    <div className="relative flex-1">
      <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="w-full pl-12 pr-10 py-3 rounded-lg border border-gray-300 outline-none focus:border-primary"
      />
      {value && (
        <button
          onClick={() => {
            setValue("");
            onSearch("");
          }}
          className="absolute right-3 top-1/2 -translate-y-1/2 hover:bg-gray-100 p-1 rounded"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
