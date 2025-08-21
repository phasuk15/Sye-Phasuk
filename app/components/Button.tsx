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
      className={`font-jersey text-2xl mt-10 uppercase tracking-widest text-white 
        bg-gradient-to-b from-pink-200 via-pink-300 to-pink-200 
        border-4 border-pink-400 
        px-6 py-3 
        shadow-[4px_4px_0px_#ec4899] 
        hover:shadow-[2px_2px_0px_#ec4899] 
        active:shadow-none active:translate-x-1 active:translate-y-1 
        transition-all duration-100 cursor-pointer ${sizeClasses[size]} ${className}`}
    >
      {text}

      {/* Optional small pixel sparkles */}
      <span className="absolute top-1 left-1 w-1 h-1 bg-pink-500"></span>
      <span className="absolute bottom-1 right-2 w-1 h-1 bg-pink-400"></span>
    </button>
  );
};

export default Button;