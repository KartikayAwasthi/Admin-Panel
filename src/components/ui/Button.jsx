import { cn } from "../../utils/helpers";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  className,
  ...props
}) => {
  const baseStyles =
    "font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2";

  const variants = {
    primary: "bg-primary text-white hover:bg-red-600 disabled:opacity-50 shadow-lg shadow-red-500/50 hover:shadow-red-500/70",
    secondary: "bg-gray-800 text-gray-200 hover:bg-gray-700 border border-gray-700",
    danger: "bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-600/50",
    success: "bg-green-600 text-white hover:bg-green-700",
    outline: "border-2 border-primary text-primary hover:bg-primary/10",
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
