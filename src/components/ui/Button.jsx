const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`bg-violet-600 hover:bg-violet-700 transition-all px-5 py-3 rounded-xl ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;