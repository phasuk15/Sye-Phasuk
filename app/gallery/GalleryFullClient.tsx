"use client";

import GalleryCard from "../components/GalleryCard";

interface Artwork {
  src: string;
  caption: string;
}

export default function GalleryFullClient({ artworks }: { artworks: Artwork[] }) {
  return (
    <div className="min-h-screen max-w-6xl mx-auto px-4 flex flex-col items-center pb-24">
      
      <div className="max-w-2xl pb-12 text-center">
        <h1 className="font-jersey font-bold text-5xl pt-24 pb-6">
          Gallery
        </h1>
        <p className="font-pixelify text-mauve-brown">
          Welcome to my art gallery! Creating artwork has been a passionate hobby of mine for as long as I can remember. 
          I’ve always enjoyed exploring different styles and various mediums — now including pixel art! 
          (I drew all the images on this webpage hehe) 🌷✨
        </p>
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 md:columns-3 gap-4">
        {artworks.map((art) => (
          <div key={art.src} className="mb-6 break-inside-avoid">
            <GalleryCard image={art.src} caption={art.caption} />
          </div>
        ))}
      </div>
    </div>
  );
}