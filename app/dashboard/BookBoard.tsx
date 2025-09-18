import Image from "next/image";

const books = [
  { title: "The Seven Husbands of Evelyn Hugo", cover: "/book1.jpg" },
  { title: "The Secret Garden", cover: "/book2.jpg" },
];


const BookBoard = () => {
    return (  
        <div className="bg-light-pink border-4 border-raspberry shadow-[4px_4px_0px_#412722] transition-all hover:shadow-[6px_6px_0px_#AE5969] font-pixelify">
            <div className="flex gap-1 justify-end p-1 bg-rosewood">
                <span className="w-2 h-2 bg-light-pink border border-plum-brown"></span>
                <span className="w-2 h-2 bg-raspberry border border-plum-brown"></span>
                <span className="w-2 h-2 bg-mauve-brown border border-plum-brown"></span>
            </div>
            <div className="p-3">
                <h1 className="text-lg font-bold mb-2">Books I've Read</h1>
            </div>

        </div>
    );
}
 
export default BookBoard;