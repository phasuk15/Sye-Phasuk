"use client";

import React from "react";
import Forward from "../components/icons/Forward";
import Backward from "../components/icons/Backward";
import Play from "../components/icons/Play";

interface MusicPlayerProps {
  title: string;
  artist: string;
  albumArt: string;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ title, artist, albumArt }) => {
  return (
    <div className="w-50 bg-light-pink border-4 border-rosewood rounded-sm shadow-[4px_4px_0px_#412722] font-pixelify">
        <div className="flex gap-1 justify-end p-1 bg-rosewood">
            <span className="w-2 h-2 bg-light-pink border border-plum-brown"></span>
            <span className="w-2 h-2 bg-raspberry border border-plum-brown"></span>
            <span className="w-2 h-2 bg-mauve-brown border border-plum-brown"></span>
        </div>
        <div className="p-3">
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

            {/* Progress Bar */}
            <div className="mt-2 h-3 w-full border-2 border-plum-brown bg-rosewood relative">
                <div className="h-full bg-raspberry" style={{ width: "40%" }}></div>
            </div>

            {/* Button controls */}
            <div className="flex justify-center gap-3 items-center mt-3">
                <Backward/>
                <Play url="https://youtu.be/RuXa_yxZMGI?si=KL1ezMZpqlJYN9ew"/>
                <Forward/>
            </div>

        </div>
    </div>
  );
};

export default MusicPlayer;