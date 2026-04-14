"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Forward from "../components/icons/Forward";
import Backward from "../components/icons/Backward";
import Play from "../components/icons/Play";

const songs = [
    {
        title: "Nod Krai Theme",
        artist: "Aurora",
        url: "https://youtu.be/RuXa_yxZMGI?si=KL1ezMZpqlJYN9ew",
        cover: "/covers/music/aurora.avif",
    },
    {
        title: "My Way",
        artist: "KATSEYE",
        url: "https://youtu.be/1P8BbTY8gWo?si=_GPfk2cFmIXiAT7C",
        cover: "/covers/music/katseye.jpg",
    },
    {
        title: "Forbidden Friendship",
        artist: "John Powell",
        url: "https://youtu.be/96NgGuKQcmo?si=UHYxF9EAiPZa2p_h",
        cover: "/covers/music/httyd.jpg",
    },
];

const MusicPlayer = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => setCurrentIndex((prev) => (prev + 1) % songs.length);
    const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + songs.length) % songs.length);

    const currentSong = songs[currentIndex];

    return (
        <div className="w-full font-pixelify bg-light-pink border-4 border-rosewood shadow-[6px_6px_0px_#412722] transition-all hover:shadow-[8px_8px_0px_#412722]">

        {/* Titlebar */}
        <div className="flex items-center justify-between px-3 py-1.5 bg-rosewood">
            <span className="text-light-pink text-[8px] tracking-widest opacity-70">
            music.exe
            </span>
            <div className="flex gap-1.5">
            <span className="w-3 h-3 bg-light-pink border border-white/20"></span>
            <span className="w-3 h-3 bg-raspberry border border-white/20"></span>
            <span className="w-3 h-3 bg-mauve-brown border border-white/20"></span>
            </div>
        </div>

        {/* 
            Mobile: stacked vertically (flex-col)
            Desktop: side by side (md:flex-row)
        */}
        <div className="flex flex-col md:flex-row">

            {/* ── Player panel ── */}
            <div className="flex-1 p-5 flex flex-col gap-4 min-w-0">

            <p className="text-raspberry tracking-widest flex items-center gap-2">
                ✦ now playing
                <span className="flex-1 h-px bg-mauve-brown opacity-30"></span>
            </p>

            {/* Cover + song info row */}
            <div className="flex gap-4 items-center">

                {/* Album art — bigger on mobile since it has room */}
                <div className="flex-shrink-0 border-2 border-mauve-brown shadow-[3px_3px_0px_#8b5c6e] overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                    key={currentSong.title}
                    initial={{ x: 40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -40, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    >
                    <Image
                        src={currentSong.cover}
                        alt={currentSong.title}
                        width={110}
                        height={110}
                        className="block object-cover"
                        style={{ width: 110, height: 110 }}
                    />
                    </motion.div>
                </AnimatePresence>
                </div>

                {/* Title + artist */}
                <AnimatePresence mode="wait">
                <motion.div
                    key={currentSong.title + "-info"}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col gap-2 min-w-0"
                >
                    <div>
                    <p
                        className="text-sm font-bold text-rosewood leading-snug text-[18px] "
                    >
                        {currentSong.title}
                    </p>
                    <p className="text-[11px] text-mauve-brown mt-1">
                        {currentSong.artist}
                    </p>
                    </div>
                    <span
                    className="text-mauve-brown text-[9px] px-2 self-start tracking-wide whitespace-nowrap"
                    style={{
                        borderTop: "1.5px solid #8b5c6e",
                        borderBottom: "1.5px solid #8b5c6e",
                    }}
                    >
                    on repeat
                    </span>
                </motion.div>
                </AnimatePresence>
            </div>

            {/* Progress bar */}
            <div
                className="h-2 border border-mauve-brown"
                style={{ background: "rgba(139,92,110,0.15)" }}
            >
                <div
                className="h-full"
                style={{
                    width: "40%",
                    background:
                    "repeating-linear-gradient(90deg, #c0396b 0px, #c0396b 4px, #d96e8e 4px, #d96e8e 8px)",
                }}
                />
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3">
                <button
                onClick={handlePrev}
                className="p-2 hover:border-raspberry hover:bg-[#fce8f0] active:scale-95 transition-all focus:outline-none"
                >
                <Backward />
                </button>
                <div className="">
                <Play url={currentSong.url} />
                </div>
                <button
                onClick={handleNext}
                className="p-2 hover:border-raspberry hover:bg-[#fce8f0] active:scale-95 transition-all focus:outline-none"
                >
                <Forward />
                </button>
            </div>
            </div>

            {/* 
            Divider:
            - Mobile: horizontal dashed line
            - Desktop: vertical dashed line
            */}
            <div
            className="md:hidden h-px mx-5"
            style={{
                background:
                "repeating-linear-gradient(90deg, #8b5c6e 0px, #8b5c6e 4px, transparent 4px, transparent 8px)",
                opacity: 0.3,
            }}
            />
            <div
            className="hidden md:block w-px self-stretch flex-shrink-0"
            style={{
                background:
                "repeating-linear-gradient(180deg, #8b5c6e 0px, #8b5c6e 4px, transparent 4px, transparent 8px)",
                opacity: 0.3,
            }}
            />

            {/* ── Queue panel ── */}
            <div className="md:w-44 flex-shrink-0 p-5 flex flex-col gap-3">

            <p className="text-raspberry text-[12px] tracking-widest flex items-center gap-2">
                ✦ queue
                <span className="flex-1 h-px bg-mauve-brown opacity-30"></span>
            </p>

            {/* 
                Mobile: horizontal scrolling row of queue items
                Desktop: vertical stacked list
            */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-x-visible pb-1 md:pb-0">
                {songs.map((song, i) => {
                const isActive = i === currentIndex;
                return (
                    <button
                    key={song.title}
                    onClick={() => setCurrentIndex(i)}
                    className={`flex md:flex-row gap-2.5 items-center p-2 border-2 text-left
                                transition-all focus:outline-none active:scale-95
                                flex-shrink-0 md:flex-shrink md:w-full
                                flex-col w-20
                                ${isActive
                                    ? "bg-[#fce8f0] border-raspberry shadow-[2px_2px_0px_#c0396b]"
                                    : "bg-[#fdf0f4] border-mauve-brown opacity-50 hover:opacity-80 hover:border-raspberry"
                                }`}
                    >
                    {/* Mini cover */}
                    <div className="flex-shrink-0 border border-mauve-brown overflow-hidden">
                        <Image
                        src={song.cover}
                        alt={song.title}
                        width={32}
                        height={32}
                        className="block object-cover"
                        style={{ width: 32, height: 32 }}
                        />
                    </div>

                    {/* Info — hidden on mobile to keep cards compact, shown on desktop */}
                    <div className="min-w-0 flex-1 hidden md:block">
                        <p className="text-[10px] text-[#5a3a45] leading-snug truncate">
                        {song.title}
                        </p>
                        <p className="text-[9px] text-mauve-brown mt-0.5 truncate">
                        {song.artist}
                        </p>
                        {isActive && (
                        <p className="text-[9px] text-raspberry mt-0.5 tracking-wide">
                            ▶ playing
                        </p>
                        )}
                    </div>

                    {/* Mobile: just show title truncated below the cover */}
                    <p className="md:hidden text-[6px] text-[#5a3a45] text-center leading-snug w-full truncate">
                        {song.title}
                    </p>
                    </button>
                );
                })}
            </div>
            </div>
        </div>
        </div>
    );
};

export default MusicPlayer;