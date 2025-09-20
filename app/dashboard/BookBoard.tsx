import Image from "next/image";
import { useState } from "react";
import Book from "../components/Book";

interface Book {
  id: number;
  title: string;
  author: string,
  cover: string;
  comments: string;
}

const books = [
  { id: 1, title: "The Seven Husbands of Evelyn Hugo", author: "Taylor Reid Jenkins", cover: "/evelynhugo.jpg", comments: "" },
  { id: 2, title: "The Secret Garden", author: "Frances Hodgson Burnett", cover: "/secretgarden.jpg", comments: "" },
];

const BookBoard = () => {
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);
    
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

            {/* Shelf */}
            <div className="flex gap-2 overflow-x-auto p-4">
                <div className="flex w-full overflow-x-auto px-4 items-end border-b-8 border-rosewood pt-3">
                    {books.map((book) => (
                        <Book
                        key={book.id}
                        id={book.id}
                        onClick={() => setSelectedBook(book)}
                        />
                    ))}
                    <div>
                        <Image src="/flowerpot.png" alt="flowerpot" width={90} height={38}/>
                    </div>
                </div>
            </div>

            {/* Info panel (empty shelf space) */}
            <div className="mt-4 min-h-[150px] flex items-center justify-center text-center border-rosewood pt-4">
                {selectedBook ? (
                <div>
                    <Image src={selectedBook.cover} alt="book cover" width={100} height={150}/>
                    <h3 className="text-lg font-bold">{selectedBook.title}</h3>
                    <p className="italic text-rosewood">by {selectedBook.author}</p>
                    <p className="mt-2 text-gray-700">{selectedBook.comments}</p>
                </div>
                ) : (
                <p className="text-gray-500 italic">Click a book to see details...</p>
                )}
            </div>

        </div>
    );
}
 
export default BookBoard;