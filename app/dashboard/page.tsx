"use client";

import React from "react";
import MusicPlayer from "./MusicPlayer";
import BookBoard from "./BookBoard";
import DashboardCard from "./DashboardCard";
import GameCard from "./GameCard";
import AnimeCard from "./AnimeCard";
import Image from "next/image";



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
            <BookBoard/>

            <AnimeCard/>

            <GameCard/>

            <MusicPlayer title="Nod Krai Theme" artist="Aurora" albumArt="/aurora.avif"/>

            </div>
    </div>
  );
};

export default Dashboard;