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
    primary: "bg-primary text-white hover:bg-red-600 disabled:opacity-50",
    secondary: "bg-gray-200 text-dark hover:bg-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600",
    success: "bg-green-500 text-white hover:bg-green-600",
    outline: "border-2 border-primary text-primary hover:bg-red-50",
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
