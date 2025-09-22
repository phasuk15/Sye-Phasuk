'use client'

import Image from "next/image";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useEffect } from "react";
import { ChevronRight } from "lucide-react";

interface AnimeType {
  id: number;
  name: string;
  status: string;
  cover: string;
  fave_char: string;
  rating: number;
  comment: string;
}


const AnimeCard = () => {

    const [expanded, setExpanded] = useState<number | null>(null);
    const [animeList, setAnimeList] = useState<AnimeType[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAnime = async () => {
        const { data, error } = await supabase
            .schema("SyePhasuk")
            .from("AnimeList")
            .select("*");

        if (error) {
            console.error("Error fetching anime:", error);
        } else {
            setAnimeList(data || []);
        }
        setLoading(false);
        };

        fetchAnime();
    }, []);

    const toggle = (id: number) => {
        setExpanded(expanded === id ? null : id);
    };

    if (loading) {
        return <p className="text-center text-gray-500">Loading anime...</p>;
    }


    return (  
        <div className="bg-light-pink border-4 border-raspberry shadow-[4px_4px_0px_#412722] transition-all hover:shadow-[6px_6px_0px_#AE5969] font-pixelify">
            <div className="flex gap-1 justify-end p-1 bg-rosewood">
                <span className="w-2 h-2 bg-light-pink border border-plum-brown"></span>
                <span className="w-2 h-2 bg-raspberry border border-plum-brown"></span>
                <span className="w-2 h-2 bg-mauve-brown border border-plum-brown"></span>
            </div>
            <div className="p-3">
                <h1 className="text-lg font-bold mb-4">Anime I've Watched</h1>
                {animeList.map((anime) => (
                <div key={anime.id} className="border-b border-rosewood last:border-b-0">
                    {/* Accordion Header */}
                    <button
                        onClick={() => toggle(anime.id)}
                        className={`flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium 
                        focus:outline-none transition-colors border-2
                        ${expanded === anime.id ? "bg-rosewood/30" : "bg-rosewood/10 hover:bg-rosewood/50"}
                        border-x border-rosewood
                        ${expanded === anime.id ? "border-b-0" : ""}`}
                    >
                        <span>{anime.name}</span>
                        <ChevronRight
                        className={`h-4 w-4 transition-transform ${
                            expanded === anime.id ? "rotate-90" : ""
                        }`}
                        />
                    </button>

                    {/* Accordion Content */}
                    {expanded === anime.id && (
                        <div className="px-4 py-3 text-sm text-gray-700 bg-rosewood/30 border-x border-b border-rosewood grid grid-cols-2">
                            <div className="border-2 border-raspberry">
                                <Image src={anime.cover} alt={anime.cover} width={100} height={200}/>
                            </div>
                            <div>
                                
                            </div>
                            
                        </div>
                    )}
                </div>
                ))}
            </div>

        </div>
    );
}
 
export default AnimeCard;