interface ButtonProps {
  text: string;
  onClick?: () => void;
  size?: "sm" | "md" | "lg"; // optional size
  className?: string; // extra Tailwind classes
}

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  size = "md",
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative bg-pink-300 border-4 border-pink-500 shadow-[4px_4px_0px_#ec4899] 
        hover:translate-x-1 hover:translate-y-1 transition-transform duration-100 
        font-['Press_Start_2P'] text-pink-900 ${sizeClasses[size]} ${className}`}
    >
      {text}

      {/* Optional small pixel sparkles */}
      <span className="absolute top-1 left-1 w-1 h-1 bg-pink-500"></span>
      <span className="absolute bottom-1 right-2 w-1 h-1 bg-pink-400"></span>
    </button>
  );
};

export default Button;