const Badge = ({ children, variant = "primary" }) => {
  const variants = {
    primary: "bg-primary/20 text-primary",
    success: "bg-green-500/20 text-green-400",
    warning: "bg-yellow-500/20 text-yellow-400",
    danger: "bg-red-500/20 text-red-400",
    gray: "bg-gray-700 text-gray-300",
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${variants[variant]}`}>
      {children}
    </span>
  );
};

export default Badge;
