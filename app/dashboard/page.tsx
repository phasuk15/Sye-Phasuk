"use client";

import React from "react";
import MusicPlayer from "./MusicPlayer";
import BookBoard from "./BookBoard";
import GameCard from "./GameCard";
import AnimeCard from "./AnimeCard";
import Recommend from "./Recommend";
import Image from "next/image";
import FilmBoard from "./FilmBoard";

const Dashboard = () => {
  return (
    <div className="min-h-screen max-w-2xl mx-auto px-4 flex flex-col items-center pb-16">
      <h1 className="font-jersey font-bold text-5xl pt-24 pb-6">Dashbaord</h1>

      {/* Introduction */}
      <div className="w-full font-pixelify bg-light-pink border-4 border-rosewood shadow-[6px_6px_0px_#412722]">

        {/* Titlebar */}
        <div className="flex items-center justify-between px-3 py-1 bg-rosewood">
          <span className="text-light-pink text-[9px] tracking-widest opacity-70">
            profile.exe
          </span>
          <div className="flex gap-1.5">
            <span className="w-3 h-3 bg-light-pink border border-white/20"></span>
            <span className="w-3 h-3 bg-raspberry border border-white/20"></span>
            <span className="w-3 h-3 bg-mauve-brown border border-white/20"></span>
          </div>
        </div>

        <div className="p-6 flex flex-col gap-6">

          {/* Top row: avatar + name/tags */}
          <div className="flex flex-col md:flex-row gap-6 items-start">

            {/* Avatar frame */}
            <div className="flex-shrink-0 mx-auto md:mx-0 border-4 border-mauve-brown shadow-[4px_4px_0px_#8b5c6e] relative py-5">
              <Image
                src="/persona.png"
                alt="sye"
                width={280}
                height={300}
                className="block"
              />
              <div className="absolute -bottom-[13px] left-1/2 -translate-x-1/2 bg-raspberry border border-rosewood px-3 py-[3px] text-white text-[7px] tracking-wider whitespace-nowrap">
                [ persona.png ]
              </div>
            </div>

            {/* Name + identity */}
            <div className="flex-1 min-w-[200px] pt-2 flex flex-col gap-4">

              <div>
                <h1
                  className="text-4xl font-bold text-rosewood leading-snug mb-3"
                  style={{ textShadow: "3px 3px 0 rgba(65,39,34,0.12)" }}
                >
                  SYE | ทราย
                </h1>

                {/* Stat chips */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Sagittarius", "Thai", "21", "UK"].map((s) => (
                    <span
                      key={s}
                      className="text-mauve-brown text-[11px] px-3 py-0.5 tracking-wide"
                      style={{
                        borderTop: "1.5px solid #8b5c6e",
                        borderBottom: "1.5px solid #8b5c6e",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Online badge */}
                <div className="inline-flex items-center gap-2 bg-raspberry border-2 border-rosewood shadow-[2px_2px_0px_#412722] px-3 py-1.5">
                  <span className="w-2 h-2 bg-green-300 border border-white/40 animate-pulse"></span>
                  <span className="text-white text-[8px] tracking-widest">online</span>
                </div>
              </div>

              {/* Like tags */}
              <div className="flex flex-wrap gap-2">
                {[
                  { emoji: "🏅", label: "sports" },
                  { emoji: "🎮", label: "gaming" },
                  { emoji: "🖋️", label: "journal" },
                  { emoji: "🎓", label: "student" },
                  { emoji: "🎨", label: "arts" },
                ].map(({ emoji, label }) => (
                  <span
                    key={label}
                    className="text-[9px] text-plum-brown bg-light-pink border border-mauve-brown px-3 py-1 tracking-wide"
                  >
                    {emoji} {label}
                  </span>
                ))}
              </div>

              {/* Likes / Dislikes inline on wider screens */}
              <div className="flex gap-3">
                {/* Likes */}
                <div className="flex-1 bg-[#fdf0f4] border-2 border-mauve-brown p-3 relative overflow-hidden">
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5 opacity-30"
                    style={{
                      background:
                        "repeating-linear-gradient(90deg, #8b5c6e 0px, #8b5c6e 4px, transparent 4px, transparent 8px)",
                    }}
                  ></div>
                  <p className="text-raspberry tracking-widest mb-3 flex items-center gap-2">
                    ❤️ likes
                    <span className="flex-1 h-px bg-mauve-brown opacity-30"></span>
                  </p>
                  <ul className="flex flex-col gap-2">
                    {["Volleyball", "Bouldering", "Cats", "THAILAND", "Old Barbie films"].map((item) => (
                      <li key={item} className="text-[11px] text-[#5a3a45] flex gap-2">
                        <span className="text-raspberry">✦</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Dislikes */}
                <div className="flex-1 bg-[#fdf0f4] border-2 border-mauve-brown p-3 relative overflow-hidden">
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5 opacity-30"
                    style={{
                      background:
                        "repeating-linear-gradient(90deg, #8b5c6e 0px, #8b5c6e 4px, transparent 4px, transparent 8px)",
                    }}
                  ></div>
                  <p className="text-mauve-brown tracking-widest mb-3 flex items-center gap-2">
                    ❤️‍🩹 dislikes
                    <span className="flex-1 h-px bg-mauve-brown opacity-30"></span>
                  </p>
                  <ul className="flex flex-col gap-2">
                    {["UK weather", "Dubbed anime", "All nighters", "Unfinished WIPs"].map((item) => (
                      <li key={item} className="text-[11px] text-[#5a3a45] flex gap-2">
                        <span className="text-mauve-brown">✦</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>

          {/* Goals card — full width below */}
          <div className="bg-[#fce8f0] border-2 border-raspberry shadow-[3px_3px_0px_#c0396b] p-5 relative">
            {/* Corner accents */}
            <span className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-raspberry"></span>
            <span className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-raspberry"></span>
            <span className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-raspberry"></span>
            <span className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-raspberry"></span>

            <p className="text-raspberry tracking-widest mb-4 flex items-center gap-2">
              ✦ current goals
              <span className="flex-1 h-px bg-mauve-brown opacity-30"></span>
            </p>

            <div className="flex flex-col gap-4">
              {[
                { label: "Do one pullup", pct: 50 },
                { label: "Learn V-sit to handstand", pct: 25 },
                { label: "Become verified VGEN artist", pct: 30 },
              ].map(({ label, pct }) => (
                <div key={label}>
                  <div className="flex justify-between items-center mb-1.5">
                    <p className="text-[11px] text-[#5a3a45]">✦ {label}</p>
                    <p className="text-[10px] text-mauve-brown">{pct}%</p>
                  </div>
                  <div
                    className="h-2 border border-mauve-brown"
                    style={{ background: "rgba(139,92,110,0.15)" }}
                  >
                    <div
                      className="h-full"
                      style={{
                        width: `${pct}%`,
                        background:
                          "repeating-linear-gradient(90deg, #c0396b 0px, #c0396b 4px, #d96e8e 4px, #d96e8e 8px)",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 w-full mt-12">
        <BookBoard />
        <AnimeCard />
        <FilmBoard />
        <MusicPlayer />
        {/* <GameCard /> */}
        <Recommend />
      </div>
    </div>
  );
};

export default Dashboard;