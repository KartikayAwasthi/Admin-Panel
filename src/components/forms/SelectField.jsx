const SelectField = ({
  register,
  name,
  options,
}) => {
  return (
    <select
      {...register(name)}
      className="w-full p-4 rounded-xl border border-gray-300 outline-none bg-white"
    >
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectField;