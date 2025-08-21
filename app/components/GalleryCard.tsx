interface PixelCardProps {
  image: string;        // URL of the artwork
  caption?: string;     // Optional caption below the image
  width?: string;       // Optional width (Tailwind class)
  height?: string;      // Optional height (Tailwind class)
}

const GalleryCard: React.FC<PixelCardProps> = ({
  image,
  caption,
  width = "w-72",
  height = "h-64",
}) => {
  return (
    <div
      className={`relative inline-block p-6 bg-pink-100 border-4 border-pink-400 shadow-[6px_6px_0px_#ec4899] ${width}`}
    >
      {/* Sparkles */}
      <div className="absolute top-2 left-2 w-3 h-3 bg-pink-300"></div>
      <div className="absolute top-6 left-12 w-2 h-2 bg-pink-400 rounded-full"></div>
      <div className="absolute top-10 right-4 w-3 h-3 bg-pink-300"></div>
      <div className="absolute bottom-4 left-6 w-2 h-2 bg-pink-400 rounded-full"></div>
      <div className="absolute bottom-2 right-2 w-3 h-3 bg-pink-300"></div>
      <div className="absolute bottom-8 right-12 w-2 h-2 bg-pink-400 rounded-full"></div>

      {/* Pixel hearts */}
      <div className="absolute top-2 right-16 w-3 h-3 bg-pink-400 rotate-45 before:content-[''] before:block before:w-3 before:h-3 before:bg-pink-400 before:rounded-full before:-translate-x-1.5 before:-translate-y-1.5"></div>
      <div className="absolute bottom-4 left-16 w-3 h-3 bg-pink-400 rotate-45 before:content-[''] before:block before:w-3 before:h-3 before:bg-pink-400 before:rounded-full before:-translate-x-1.5 before:-translate-y-1.5"></div>

      {/* Artwork */}
      <img
        src={image}
        alt={caption || "Artwork"}
        className={`block w-full ${height} object-cover border-2 border-pink-300`}
      />

      {/* Caption */}
      {caption && (
        <div className="mt-3 text-center text-sm font-['Press_Start_2P'] text-pink-600">
          {caption}
        </div>
      )}
    </div>
  );
};

export default GalleryCard;