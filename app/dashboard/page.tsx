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
    <div className="min-h-screen max-w-4xl mx-auto px-4 flex flex-col items-center ">
        
        <h1 className="font-jersey font-bold text-5xl pt-24 pb-6">Dashbaord</h1>

        {/* Introduction */}
        <div className="font-pixelify bg-light-pink border-4 border-rosewood shadow-[4px_4px_0px_#412722]">
            <div className="flex gap-1 justify-end p-1 bg-rosewood">
                <span className="w-2 h-2 bg-light-pink border border-plum-brown"></span>
                <span className="w-2 h-2 bg-raspberry border border-plum-brown"></span>
                <span className="w-2 h-2 bg-mauve-brown border border-plum-brown"></span>
            </div>
            <div className="elative w-full flex flex-col md:flex-row h-auto md:h-[380px] justify-start ">
                <div className="md:-mt-16 flex-shrink-0">
                    <Image
                    src="/persona.png"
                    alt="sye"
                    width={380}
                    height={400}
                    className="z-10 mx-auto md:mx-0 "
                    />
                </div>

                {/* Text */}
                <div className="mt-4 md:mt-0 md:ml-6 flex flex-col justify-center text-center md:text-left">
                    <h1 className="text-3xl font-bold">SYE | ทราย</h1>
                    <div className="flex items-center gap-2 font-pixelify justify-center md:justify-start">
                        <span className="text-gray-700">Sagittarius</span>
                        <span className="text-mauve-brown">❖</span>
                        <span className="text-pink-900 italic">Thai</span>
                        <span className="text-mauve-brown">❖</span>
                        <span className="text-gray-700">21</span>
                        <span className="text-mauve-brown">❖</span>
                        <span className="text-pink-900 italic">Artist</span>
                        <span className="text-mauve-brown">❖</span>
                        <span className="text-gray-700">UK</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2 font-pixelify text-center md:text-left">
                        {/* Goals */}
                        <div className="p-4 ">
                            <p className="text-raspberry font-bold mb-2">Goals</p>
                            <ul className=" text-gray-700"> 
                                <li>✦ Do one pullup</li>
                                <li>✦ Complete V5 routes</li>
                                <li>✦ Learn Romantic flight on piano</li>
                            </ul>
                        </div>

                        {/* Likes */}
                        <div className="">
                            <h3 className="text-raspberry font-bold mb-2 text-center pt-4">❤️</h3>
                            <ul className=" text-gray-700">
                                <li>✦ Volleyball</li>
                                <li>✦ Bouldering</li>
                                <li>✦ Cats</li>
                                <li>✦ Thailand</li>
                                <li>✦ Being creative</li>
                            </ul>
                        </div>

                        {/* Dislikes */}
                        <div className=" ">
                            <h3 className="text-raspberry font-bold mb-2 text-center pt-4">❤️‍🩹</h3>
                            <ul className=" text-gray-700 ">
                                <li>✦ Artblocks</li>
                                <li>✦ Mess and clutter</li>
                                <li>✦ Cliffhangers</li>
                                <li>✦ Being late</li>
                            </ul>
                        </div>

                    </div>
                </div>  
            </div>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-12">

            <BookBoard/>

            <AnimeCard/>

            <GameCard/>

            <MusicPlayer title="Nod Krai Theme" artist="Aurora" albumArt="/aurora.avif"/>

            </div>
    </div>
  );
};

export default Dashboard;