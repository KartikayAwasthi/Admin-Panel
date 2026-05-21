const InputField = ({
  placeholder,
  register,
  name,
  type = "text",
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      {...register(name)}
      className="w-full p-4 rounded-xl border border-gray-300 outline-none focus:border-primary bg-white"

      
    />
  );
};

export default InputField;