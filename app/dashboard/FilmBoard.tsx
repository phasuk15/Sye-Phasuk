'use client'

import Image from "next/image";
import { useState } from "react";
import Star from "../components/icons/Star";
import filmsData from "../data/films.json";

interface FilmType {
    id: number;
    title: string;
    genre: string;
    cover: string;
    rating: number;
}

const films: FilmType[] = filmsData;
const allGenres = ["all", ...Array.from(new Set(films.map((f) => f.genre))).sort()];

const FilmBoard = () => {
    const [activeGenre, setActiveGenre] = useState("all");
    const [activeIndex, setActiveIndex] = useState(0);

    const filtered = activeGenre === "all"
        ? films
        : films.filter((f) => f.genre === activeGenre);

    // Reset index when filter changes
    const handleGenre = (genre: string) => {
        setActiveGenre(genre);
        setActiveIndex(0);
    };

    const prev = () => setActiveIndex((i) => Math.max(0, i - 1));
    const next = () => setActiveIndex((i) => Math.min(filtered.length - 1, i + 1));

    const getStyle = (i: number): React.CSSProperties => {
        const offset = i - activeIndex;
        const absOffset = Math.abs(offset);

        // Only render up to 2 neighbours each side
        if (absOffset > 2) return { display: "none" };

        const rotateY = offset * -40;
        const translateX = offset * 65;
        const translateZ = absOffset === 0 ? 1 : absOffset === 1 ? -80 : -160;
        const scale = absOffset === 0 ? 1 : absOffset === 1 ? 0.78 : 0.6;
        const opacity = absOffset === 0 ? 1 : absOffset === 1 ? 0.75 : 0.45;
        const zIndex = 10 - absOffset;

        return {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: `
            translateX(-50%) translateY(-50%)
            translateX(${translateX}%)
            translateZ(${translateZ}px)
            rotateY(${rotateY}deg)
            scale(${scale})
        `,
        opacity,
        zIndex,
        transition: "all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        cursor: offset !== 0 ? "pointer" : "default",
        };
    };

    return (
        <div className="w-full font-pixelify bg-light-pink border-4 border-rosewood shadow-[6px_6px_0px_#412722] transition-all hover:shadow-[8px_8px_0px_#412722]">

        {/* Titlebar */}
        <div className="flex items-center justify-between px-3 py-1.5 bg-rosewood">
            <span className="text-light-pink text-[9px] tracking-widest opacity-70">
            films.exe
            </span>
            <div className="flex gap-1.5">
            <span className="w-3 h-3 bg-light-pink border border-white/20"></span>
            <span className="w-3 h-3 bg-raspberry border border-white/20"></span>
            <span className="w-3 h-3 bg-mauve-brown border border-white/20"></span>
            </div>
        </div>

        <div className="p-5 flex flex-col gap-5">

            {/* Section label */}
            <p className="text-raspberry tracking-widest flex items-center gap-2">
            ✦ films watched
            <span className="flex-1 h-px bg-mauve-brown opacity-30"></span>
            </p>

            {/* Genre filters */}
            <div className="flex flex-wrap gap-2">
            {allGenres.map((genre) => {
                const isActive = genre === activeGenre;
                return (
                <button
                    key={genre}
                    onClick={() => handleGenre(genre)}
                    className={`text-[8px] tracking-wide px-3 py-1 border-2 transition-all focus:outline-none active:scale-95
                    ${isActive
                        ? "bg-raspberry border-rosewood text-light-pink shadow-[2px_2px_0px_#412722]"
                        : "bg-[#fdf0f4] border-mauve-brown text-[#5a3a45] hover:border-raspberry hover:bg-[#fce8f0]"
                    }`}
                >
                    {genre}
                </button>
                );
            })}
            </div>

            {filtered.length === 0 ? (
            <div className="bg-[#fdf0f4] border-2 border-mauve-brown p-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 opacity-30"
                style={{ background: "repeating-linear-gradient(90deg, #8b5c6e 0px, #8b5c6e 4px, transparent 4px, transparent 8px)" }}
                />
                <p className="text-[9px] text-mauve-brown text-center tracking-widest">
                ✦ no films in this genre yet ✦
                </p>
            </div>
            ) : (
            <>
                {/* Coverflow stage */}
                <div className="relative" style={{ perspective: "600px", height: 260 }}>

                {/* Left arrow */}
                <button
                    onClick={prev}
                    disabled={activeIndex === 0}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-20
                            w-8 h-8 flex items-center justify-center
                            bg-rosewood border-2 border-rosewood text-light-pink
                            text-base font-bold shadow-[2px_2px_0px_#412722]
                            hover:bg-raspberry transition-colors
                            disabled:opacity-30 disabled:cursor-not-allowed
                            focus:outline-none"
                >
                    ‹
                </button>

                {/* Right arrow */}
                <button
                    onClick={next}
                    disabled={activeIndex === filtered.length - 1}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-20
                            w-8 h-8 flex items-center justify-center
                            bg-rosewood border-2 border-rosewood text-light-pink
                            text-base font-bold shadow-[2px_2px_0px_#412722]
                            hover:bg-raspberry transition-colors
                            disabled:opacity-30 disabled:cursor-not-allowed
                            focus:outline-none"
                >
                    ›
                </button>

                {/* Posters */}
                <div className="absolute inset-0 mx-10" style={{ transformStyle: "preserve-3d" }}>
                    {filtered.map((film, i) => (
                    <div
                        key={film.id}
                        style={getStyle(i)}
                        onClick={() => i !== activeIndex && setActiveIndex(i)}
                    >
                        <div
                        className={`border-2 overflow-hidden transition-all
                            ${i === activeIndex
                            ? "border-raspberry shadow-[4px_4px_0px_#c0396b]"
                            : "border-mauve-brown"
                            }`}
                        style={{ width: 150, height: 210, willChange: "transform", backfaceVisibility: "hidden" }}
                        >
                        <Image
                            src={film.cover}
                            alt={film.title}
                            width={300}
                            height={420}
                            className="block object-cover"
                            style={{ width: 150, height: 210 }}
                            sizes="150px"
                            />          
                        </div>
                    </div>
                    ))}
                </div>
                </div>

                {/* Active film info */}
                {filtered[activeIndex] && (
                <div className="flex flex-col items-center gap-2 text-center">
                    <p
                    className="text-sm font-bold text-rosewood leading-snug"
                    style={{ textShadow: "2px 2px 0 rgba(65,39,34,0.1)" }}
                    >
                    {filtered[activeIndex].title}
                    </p>
                    <div className="flex items-center gap-2">
                    <span
                        className="text-mauve-brown text-[8px] px-2 tracking-wide"
                        style={{
                        borderTop: "1.5px solid #8b5c6e",
                        borderBottom: "1.5px solid #8b5c6e",
                        }}
                    >
                        {filtered[activeIndex].genre}
                    </span>
                    </div>
                    <Star value={filtered[activeIndex].rating} />
                </div>
                )}

                {/* Dot indicators */}
                <div className="flex justify-center gap-2">
                {filtered.map((_, i) => (
                    <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`transition-all focus:outline-none
                        ${i === activeIndex
                        ? "w-3 h-3 bg-raspberry border border-rosewood"
                        : "w-2 h-2 bg-mauve-brown/40 border border-mauve-brown hover:bg-mauve-brown/70"
                        }`}
                    />
                ))}
                </div>
            </>
            )}

        </div>
        </div>
    );
};

export default FilmBoard;