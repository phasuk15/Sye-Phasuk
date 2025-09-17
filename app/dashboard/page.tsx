"use client";

import React from "react";
import MusicPlayer from "./MusicPlayer";
import Image from "next/image";

// Sample data
const books = [
  { title: "The Seven Husbands of Evelyn Hugo", cover: "/book1.jpg" },
  { title: "The Secret Garden", cover: "/book2.jpg" },

];

const anime = [
  { title: "Fullmetal Alchemist", cover: "/anime1.jpg" },
  { title: "Spirited Away", cover: "/anime2.jpg" },
];

const games = [
  { title: "Zelda: BOTW", cover: "/game1.jpg" },
  { title: "Hollow Knight", cover: "/game2.jpg" },
];

const DashboardCard: React.FC<{
  title: string;
  children: React.ReactNode;
  className?: string;
}> = ({ title, children, className }) => {
  return (
    <div
      className={`bg-light-pink border-4 border-raspberry shadow-[4px_4px_0px_#412722] p-4 rounded-sm transition-all hover:shadow-[6px_6px_0px_#AE5969] ${className}`}
    >
        <div className="bg-rosewood text-light-pink px-3 py-1 flex items-center justify-end text-xs">
            <div className="flex gap-1">
            <span className="w-3 h-3 bg-raspberry border border-plum-brown"></span>
            <span className="w-3 h-3 bg-mauve-brown border border-plum-brown"></span>
            <span className="w-3 h-3 bg-light-pink border border-plum-brown"></span>
            </div>
        </div>
        <h2 className="font-pixelify text-xl mb-3">{title}</h2>
        <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
};

const MediaCard: React.FC<{ image: string; label: string }> = ({
  image,
  label,
}) => {
  return (
    <div className="w-24 h-32 border-2 border-rosewood shadow-[2px_2px_0px_#412722] hover:shadow-[4px_4px_0px_#AE5969] cursor-pointer overflow-hidden">
      <img
        src={image}
        alt={label}
        className="w-full h-full object-cover object-top"
      />
      <p className="text-xs font-pixelify text-rosewood text-center mt-1">
        {label}
      </p>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="min-h-screen max-w-6xl mx-auto px-4 flex flex-col items-center pb-2">
        <h1 className="font-jersey font-bold text-5xl pt-24 pb-6">Dashbaord</h1>
        <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
                <Image src="/persona.png" alt="sye" width={300} height={400}/>
            </div>
            {/* Books Section */}
            <DashboardCard title="Books I've Read" className="md:col-span-2">
                {books.map((b, i) => (
                <MediaCard key={i} image={b.cover} label={b.title} />
                ))}
            </DashboardCard>

            {/* Anime Section */}
            <DashboardCard title="Anime Watched">
                {anime.map((a, i) => (
                <MediaCard key={i} image={a.cover} label={a.title} />
                ))}
            </DashboardCard>

            {/* Games Section */}
            <DashboardCard title="Games Played">
                {games.map((g, i) => (
                <MediaCard key={i} image={g.cover} label={g.title} />
                ))}
            </DashboardCard>
            <MusicPlayer title="My Way" artist="KATSEYE" albumArt="/aurora.avif"/>

            </div>
    </div>
  );
};

export default Dashboard;