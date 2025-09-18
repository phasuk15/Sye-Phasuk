import Image from "next/image";

const anime = [
  { title: "Mob Psycho", cover: "/anime1.jpg", caption:"" },
  { title: "Spirited Away", cover: "/anime2.jpg", caption:"" },
];


const AnimeCard = () => {
    return (  
        <div className="bg-light-pink border-4 border-raspberry shadow-[4px_4px_0px_#412722] transition-all hover:shadow-[6px_6px_0px_#AE5969] font-pixelify">
            <div className="flex gap-1 justify-end p-1 bg-rosewood">
                <span className="w-2 h-2 bg-light-pink border border-plum-brown"></span>
                <span className="w-2 h-2 bg-raspberry border border-plum-brown"></span>
                <span className="w-2 h-2 bg-mauve-brown border border-plum-brown"></span>
            </div>
            <div className="p-3">
                <h1 className="text-lg font-bold mb-2">Anime I've Watched</h1>
            </div>

        </div>
    );
}
 
export default AnimeCard;