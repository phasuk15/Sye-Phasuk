import { useState } from "react";
import Image from "next/image";

interface GalleryCardProps {
  image: string;
  caption?: string;
  className?: string;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ image, caption, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <div
        onClick={() => setIsOpen(true)}
        className={`group cursor-pointer font-pixelify bg-light-pink border-4 border-rosewood
          shadow-[4px_4px_0px_#412722] hover:shadow-[7px_7px_0px_#412722]
          hover:-translate-y-1 transition-all duration-200 ${className}`}
      >
        {/* Titlebar */}
        <div className="bg-rosewood text-light-pink px-3 py-1 flex items-center justify-between">
          <span className="text-[8px] tracking-widest opacity-70">gallery.png</span>
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 bg-raspberry border border-white/20"></span>
            <span className="w-2.5 h-2.5 bg-mauve-brown border border-white/20"></span>
            <span className="w-2.5 h-2.5 bg-light-pink border border-white/20"></span>
          </div>
        </div>

        {/* Image */}
        <div className="border-b-4 border-rosewood overflow-hidden">
          <Image
            src={image}
            alt={caption || "Artwork"}
            width={400}
            height={500}
            className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Caption */}
        {caption && (
          <div className="px-3 py-2 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 right-0 h-0.5 opacity-30"
              style={{
                background:
                  "repeating-linear-gradient(90deg, #8b5c6e 0px, #8b5c6e 4px, transparent 4px, transparent 8px)",
              }}
            />
            <p className="text-[8px] text-[#5a3a45] tracking-wide">✦ {caption}</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 font-pixelify p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative bg-light-pink border-4 border-rosewood shadow-[8px_8px_0px_#412722]
              max-w-[90vw] max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal titlebar */}
            <div className="flex items-center justify-between px-3 py-1.5 bg-rosewood flex-shrink-0">
              <span className="text-light-pink text-[8px] tracking-widest opacity-70">
                fullsize.png
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="w-5 h-5 flex items-center justify-center
                           bg-raspberry border-2 border-rosewood text-light-pink
                           text-[8px] hover:bg-mauve-brown transition-colors focus:outline-none"
              >
                ✕
              </button>
            </div>

            {/* Full image */}
            <div className="p-4 flex flex-col gap-3 overflow-auto">
              <div className="border-2 border-mauve-brown shadow-[3px_3px_0px_#8b5c6e] relative">
                {/* Corner accents */}
                <span className="absolute top-1.5 left-1.5 w-3 h-3 border-t-2 border-l-2 border-raspberry z-10"></span>
                <span className="absolute top-1.5 right-1.5 w-3 h-3 border-t-2 border-r-2 border-raspberry z-10"></span>
                <span className="absolute bottom-1.5 left-1.5 w-3 h-3 border-b-2 border-l-2 border-raspberry z-10"></span>
                <span className="absolute bottom-1.5 right-1.5 w-3 h-3 border-b-2 border-r-2 border-raspberry z-10"></span>
                <Image
                  src={image}
                  alt={caption || "Full Artwork"}
                  width={800}
                  height={800}
                  className="block max-w-full max-h-[70vh] object-contain"
                />
              </div>

              {/* Caption in modal */}
              {caption && (
                <div className="bg-[#fce8f0] border-2 border-raspberry p-3 relative overflow-hidden">
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5 opacity-30"
                    style={{
                      background:
                        "repeating-linear-gradient(90deg, #8b5c6e 0px, #8b5c6e 4px, transparent 4px, transparent 8px)",
                    }}
                  />
                  <p className="text-raspberry text-[8px] tracking-widest flex items-center gap-2">
                    ✦ {caption}
                    <span className="flex-1 h-px bg-mauve-brown opacity-30"></span>
                  </p>
                </div>
              )}

              {/* Click outside hint */}
              <p className="text-[7px] text-mauve-brown text-center tracking-widest opacity-60">
                click outside to close
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryCard;