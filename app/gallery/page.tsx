'use client';

import GalleryCard from "../components/GalleryCard";

const GalleryFull = () => {
  const artworks = [
    { src: "/artwork10.jpg", caption: "Artwork 10" },
    { src: "/artwork11.jpg", caption: "Artwork 11" },
    { src: "/artwork12.jpg", caption: "Artwork 12" },
    { src: "/artwork13.jpg", caption: "Artwork 13" },
    { src: "/artwork1.jpg", caption: "Artwork 1" },
    { src: "/artwork2.jpg", caption: "Artwork 2" },
    { src: "/artwork3.jpg", caption: "Artwork 3" },
    { src: "/artwork4.jpg", caption: "Artwork 4" },
    { src: "/artwork5.jpg", caption: "Artwork 5" },
    { src: "/artwork6.jpg", caption: "Artwork 6" },
    { src: "/artwork9.jpg", caption: "Artwork 9" },
    { src: "/artwork7.jpg", caption: "Artwork 7" },
    { src: "/artwork8.jpg", caption: "Artwork 8" },
  ];

  return (
    <div className="min-h-screen max-w-6xl mx-auto px-4 flex flex-col items-center pb-24">
        <div className="max-w-2xl pb-12 text-center">
            <h1 className="font-jersey font-bold text-5xl pt-24 pb-6">Gallery</h1>
            <p className="font-pixelify text-mauve-brown">
                Welcome to my art gallery! Creating artwork has been a passionate hobby of mine for as long as I can remember. 
                I’ve always enjoyed exploring different styles and various mediums — now including pixel art! 
                (I drew all the images on this webpage hehe) 🌷✨
            </p>
        </div>

      {/* Artwork Grid */}
      <div className="columns-1 md:columns-3 gap-4 gap-">
        {artworks.map((art) => (
          <div key={art.src} className="mb-6 break-inside-avoid">
            <GalleryCard image={art.src} caption={art.caption} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryFull;