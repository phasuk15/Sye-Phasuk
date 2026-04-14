'use client'

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Star from "../components/icons/Star";
import animeData from "../data/anime.json";

interface AnimeType {
    id: number;
    name: string;
    status: string;
    cover: string;
    fave_char: string;
    rating: number;
    comment: string;
}

const animeList: AnimeType[] = animeData;

const AnimeCard = () => {
    const [selected, setSelected] = useState<AnimeType | null>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        updateScrollButtons();
    }, []);

    const updateScrollButtons = () => {
        const el = scrollRef.current;
        if (!el) return;
        setCanScrollLeft(el.scrollLeft > 4);
        setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    };

    const scroll = (dir: "left" | "right") => {
        scrollRef.current?.scrollBy({ left: dir === "right" ? 300 : -300, behavior: "smooth" });
    };

    const handleSelect = (anime: AnimeType) => {
        setSelected((prev) => (prev?.id === anime.id ? null : anime));
    };

    return (
        <div className="w-full font-pixelify bg-light-pink border-4 border-rosewood shadow-[6px_6px_0px_#412722] transition-all hover:shadow-[8px_8px_0px_#412722]">

        {/* Titlebar */}
        <div className="flex items-center justify-between px-3 py-1.5 bg-rosewood">
            <span className="text-light-pink text-[9px] tracking-widest opacity-70">
            animelist.exe
            </span>
            <div className="flex gap-1.5">
            <span className="w-3 h-3 bg-light-pink border border-white/20"></span>
            <span className="w-3 h-3 bg-raspberry border border-white/20"></span>
            <span className="w-3 h-3 bg-mauve-brown border border-white/20"></span>
            </div>
        </div>

        <div className="p-5 flex flex-col gap-4">

            {/* Section label */}
            <p className="text-raspberry tracking-widest flex items-center gap-2">
            ✦ anime watched
            <span className="flex-1 h-px bg-mauve-brown opacity-30"></span>
            </p>

            {/* Scroll strip container */}
            <div className="relative">

            {/* Left fade + arrow */}
            <div
                className={`absolute left-0 top-0 bottom-0 z-10 w-14 flex items-center justify-start
                            bg-gradient-to-r from-light-pink via-light-pink/80 to-transparent
                            pointer-events-none transition-opacity duration-200
                            ${canScrollLeft ? "opacity-100" : "opacity-0"}`}
            >
                <button
                onClick={() => scroll("left")}
                className="pointer-events-auto w-8 h-8 flex items-center justify-center
                            bg-rosewood border-2 border-rosewood text-light-pink
                            text-base font-bold shadow-[2px_2px_0px_#412722]
                            hover:bg-raspberry transition-colors focus:outline-none ml-1"
                >
                ‹
                </button>
            </div>

            {/* Right fade + arrow */}
            <div
                className={`absolute right-0 top-0 bottom-0 z-10 w-14 flex items-center justify-end
                            bg-gradient-to-l from-light-pink via-light-pink/80 to-transparent
                            pointer-events-none transition-opacity duration-200
                            ${canScrollRight ? "opacity-100" : "opacity-0"}`}
            >
                <button
                onClick={() => scroll("right")}
                className="pointer-events-auto w-8 h-8 flex items-center justify-center
                            bg-rosewood border-2 border-rosewood text-light-pink
                            text-base font-bold shadow-[2px_2px_0px_#412722]
                            hover:bg-raspberry transition-colors focus:outline-none mr-1"
                >
                ›
                </button>
            </div>

            {/* Scrollable row */}
            <div
                ref={scrollRef}
                onScroll={updateScrollButtons}
                className="flex gap-3 overflow-x-auto scroll-smooth py-2 px-1"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                {animeList.map((anime) => {
                const isSelected = selected?.id === anime.id;
                return (
                    <button
                    key={anime.id}
                    onClick={() => handleSelect(anime)}
                    className="relative flex-shrink-0 focus:outline-none group/card"
                    style={{ width: 150 }}
                    >
                    <div
                        className={`relative overflow-hidden border-2 transition-all duration-200
                        ${isSelected
                            ? "border-raspberry scale-105 shadow-[0_4px_0px_#c0396b]"
                            : "border-mauve-brown group-hover/card:border-raspberry group-hover/card:scale-105 group-hover/card:shadow-[0_4px_0px_#c0396b]"
                        }`}
                        style={{ width: 150, height: 210 }}
                    >
                        <Image
                        src={anime.cover}
                        alt={anime.name}
                        width={150}
                        height={210}
                        className="block w-full h-full object-cover"
                        />

                        {/* Overlay */}
                        <div
                        className={`absolute inset-0 flex flex-col justify-end p-2.5 transition-opacity duration-200
                            ${isSelected ? "opacity-100" : "opacity-0 group-hover/card:opacity-100"}`}
                        style={{
                            background:
                            "linear-gradient(to top, rgba(65,39,34,0.95) 0%, rgba(65,39,34,0.6) 50%, transparent 100%)",
                        }}
                        >
                        <p className="text-light-pink font-bold leading-snug mb-1">
                            {anime.name}
                        </p>
                        <div
                            className="flex items-center gap-1.5 pt-1.5"
                            style={{ borderTop: "1px solid rgba(247,221,228,0.25)" }}
                        >
                            <span
                            className="text-[9px] text-light-pink/60 tracking-wide px-1.5"
                            style={{
                                borderTop: "1px solid rgba(247,221,228,0.35)",
                                borderBottom: "1px solid rgba(247,221,228,0.35)",
                            }}
                            >
                            {anime.status}
                            </span>
                        </div>
                        <div className="mt-1">
                            <Star value={anime.rating} />
                        </div>
                        </div>

                        {/* Selected pip */}
                        {isSelected && (
                        <div className="absolute top-1.5 right-1.5 w-2 h-2 bg-raspberry border border-light-pink" />
                        )}
                    </div>
                    </button>
                );
                })}
            </div>
            </div>

            {/* Detail panel */}
            {selected ? (
            <div className="bg-[#fce8f0] border-2 border-raspberry shadow-[3px_3px_0px_#c0396b] p-4 relative">
                <span className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-raspberry"></span>
                <span className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-raspberry"></span>
                <span className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-raspberry"></span>
                <span className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-raspberry"></span>

                <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-shrink-0 mx-auto md:mx-0">
                    <Image
                    src={selected.cover}
                    alt={selected.name}
                    width={150}
                    height={140}
                    className="block"
                    style={{ width: 120, height: 210, objectFit: "cover" }}
                    />
                </div>

                <div className="flex flex-col gap-3 flex-1">
                    <div>
                    <h3
                        className="text-base font-bold text-rosewood leading-snug mb-2 text-[18px]"
                        style={{ textShadow: "2px 2px 0 rgba(65,39,34,0.1)" }}
                    >
                        {selected.name}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2">
                        <span
                        className="text-mauve-brown text-[9px] px-2 tracking-wide"
                        style={{
                            borderTop: "1.5px solid #8b5c6e",
                            borderBottom: "1.5px solid #8b5c6e",
                        }}
                        >
                        {selected.status}
                        </span>
                        <span className="text-[9px] text-[#5a3a45] bg-light-pink border border-mauve-brown px-2 py-0.5">
                        fave: {selected.fave_char}
                        </span>
                    </div>
                    </div>

                    <Star value={selected.rating} />

                    <div className="bg-[#fdf0f4] border-2 border-mauve-brown p-3 relative overflow-hidden">
                    <div
                        className="absolute top-0 left-0 right-0 h-0.5 opacity-30"
                        style={{
                        background:
                            "repeating-linear-gradient(90deg, #8b5c6e 0px, #8b5c6e 4px, transparent 4px, transparent 8px)",
                        }}
                    ></div>
                    <p className="text-raspberry text-[13px] tracking-widest mb-2 flex items-center gap-2">
                        ✦ thoughts
                        <span className="flex-1 h-px bg-mauve-brown opacity-30"></span>
                    </p>
                    <p className="text-[11px] text-[#5a3a45] leading-relaxed">
                        {selected.comment}
                    </p>
                    </div>
                </div>
                </div>
            </div>
            ) : (
            <div className="bg-[#fdf0f4] border-2 border-mauve-brown p-4 relative overflow-hidden">
                <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-30"
                style={{
                    background:
                    "repeating-linear-gradient(90deg, #8b5c6e 0px, #8b5c6e 4px, transparent 4px, transparent 8px)",
                }}
                ></div>
                <p className="text-[9px] text-mauve-brown text-center tracking-widest">
                ✦ click a cover to see details ✦
                </p>
            </div>
            )}

        </div>
        </div>
    );
};

export default AnimeCard;