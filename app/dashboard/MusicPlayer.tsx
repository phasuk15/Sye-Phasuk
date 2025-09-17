"use client";

import React from "react";

interface MusicPlayerProps {
  title: string;
  artist: string;
  albumArt: string;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ title, artist, albumArt }) => {
  return (
    <div className="w-50 bg-light-pink border-4 border-rosewood rounded-sm shadow-[4px_4px_0px_#412722] font-pixelify p-4">
      {/* Album Art */}
      <div className="w-full h-40 border-2 border-plum-brown overflow-hidden mb-3">
        <img
          src={albumArt}
          alt={`${title} album cover`}
          className="w-full h-full object-cover image-pixelated"
        />
      </div>

      {/* Song Info */}
      <div className="text-plum-brown">
        <h3 className="text-lg font-bold truncate">{title}</h3>
        <p className="text-sm">{artist}</p>
      </div>

      {/* Player Controls */}
      <div className="flex justify-between items-center mt-3">
        <button className="px-3 py-1 border-2 border-plum-brown bg-rosewood hover:bg-raspberry transition-all shadow-[2px_2px_0px_#412722]">
          ⏮
        </button>
        <button className="px-4 py-1 border-2 border-plum-brown bg-raspberry hover:bg-mauve-brown transition-all shadow-[2px_2px_0px_#412722]">
          ▶
        </button>
        <button className="px-3 py-1 border-2 border-plum-brown bg-rosewood hover:bg-raspberry transition-all shadow-[2px_2px_0px_#412722]">
          ⏭
        </button>
      </div>

      {/* Progress Bar */}
      <div className="mt-3 h-3 w-full border-2 border-plum-brown bg-rosewood relative">
        <div className="h-full bg-raspberry" style={{ width: "40%" }}></div>
      </div>
    </div>
  );
};

export default MusicPlayer;