const ToggleSwitch = ({
  label,
  checked,
  onChange,
}) => {
  return (
    <div className="flex items-center gap-3">

      <label className="text-sm font-medium">
        {label}
      </label>

      <button
        type="button"
        onClick={onChange}
        className={`w-14 h-7 rounded-full transition ${
          checked
            ? "bg-primary"
            : "bg-gray-300"
        }`}
      >
        <div
          className={`w-6 h-6 bg-white rounded-full mt-[2px] transition ${
            checked
              ? "translate-x-7"
              : "translate-x-1"
          }`}
        ></div>
      </button>
    </div>
  );
};

export default ToggleSwitch;