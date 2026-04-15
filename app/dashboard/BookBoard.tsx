import Image from "next/image";
import { useState, useEffect } from "react";
import Book from "../components/Book";
import bookData from "../data/books.json"

interface BookType {
    id: number;
    title: string;
    author: string;
    cover: string;
    comment: string;
}

const books: BookType[] = bookData;

const BookBoard = () => {
    const [selectedBook, setSelectedBook] = useState<BookType | null>(null);

    return (
        <div className="w-full font-pixelify bg-light-pink border-4 border-rosewood shadow-[6px_6px_0px_#412722] transition-all hover:shadow-[8px_8px_0px_#412722]">
        {/* Titlebar */}
        <div className="flex items-center justify-between px-3 py-1.5 bg-rosewood">
            <span className="text-light-pink text-[9px] tracking-widest opacity-70">
            bookshelf.exe
            </span>
            <div className="flex gap-1.5">
            <span className="w-3 h-3 bg-light-pink border border-white/20"></span>
            <span className="w-3 h-3 bg-raspberry border border-white/20"></span>
            <span className="w-3 h-3 bg-mauve-brown border border-white/20"></span>
            </div>
        </div>

        <div className="p-5 flex flex-col gap-5">
            <p className="text-raspberry tracking-widest flex items-center gap-2">
            ✦ books read
            <span className="flex-1 h-px bg-mauve-brown opacity-30"></span>
            </p>

            {/* Shelf */}
            <div className="relative">
            <div className="flex items-end overflow-x-auto gap-1 pb-0 border-b-[6px] border-rosewood shadow-[0_4px_0px_#412722]">
                {books.map((book) => (
                <Book
                    key={book.id}
                    seed={book.id}
                    onClick={() => setSelectedBook(book)}
                />
                ))}
                <div className="flex-shrink-0 ml-auto">
                <Image src="/icons/flowerpot.png" alt="flowerpot" width={70} height={38} />
                </div>
            </div>
            <div className="h-1.5 bg-rosewood/40"></div>
            </div>

            {/* Info panel */}
            {selectedBook ? (
            <div className="bg-[#fce8f0] border-2 border-raspberry shadow-[3px_3px_0px_#c0396b] p-4 relative">
                <span className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-raspberry"></span>
                <span className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-raspberry"></span>
                <span className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-raspberry"></span>
                <span className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-raspberry"></span>

                <div className="flex flex-col md:flex-row gap-4 items-start">
                <div className="flex-shrink-0 mx-auto md:mx-0 border-2 border-mauve-brown shadow-[3px_3px_0px_#8b5c6e]">
                    <Image src={selectedBook.cover} alt="book cover" width={120} height={130} className="block" />
                </div>

                <div className="flex flex-col gap-3 flex-1">
                    <div>
                    <h3
                        className="text-lg font-bold text-rosewood leading-snug"
                        style={{ textShadow: "2px 2px 0 rgba(65,39,34,0.1)" }}
                    >
                        {selectedBook.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                        <span
                        className="text-mauve-brown text-[8px] px-2 tracking-wide"
                        style={{ borderTop: "1.5px solid #8b5c6e", borderBottom: "1.5px solid #8b5c6e" }}
                        >
                        by {selectedBook.author}
                        </span>
                    </div>
                    </div>

                    <div className="bg-[#fdf0f4] border-2 border-mauve-brown p-3 relative overflow-hidden">
                    <div
                        className="absolute top-0 left-0 right-0 h-0.5 opacity-30"
                        style={{ background: "repeating-linear-gradient(90deg, #8b5c6e 0px, #8b5c6e 4px, transparent 4px, transparent 8px)" }}
                    ></div>
                    <p className="text-raspberry text-[13px] tracking-widest mb-2 flex items-center gap-2">
                        ✦ thoughts
                        <span className="flex-1 h-px bg-mauve-brown opacity-30"></span>
                    </p>
                    <p className="text-[11px] text-[#5a3a45] leading-relaxed">{selectedBook.comment}</p>
                    </div>
                </div>
                </div>
            </div>
            ) : (
            <div className="bg-[#fdf0f4] border-2 border-mauve-brown p-5 relative overflow-hidden">
                <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-30"
                style={{ background: "repeating-linear-gradient(90deg, #8b5c6e 0px, #8b5c6e 4px, transparent 4px, transparent 8px)" }}
                ></div>
                <p className="text-[9px] text-mauve-brown text-center tracking-widest">✦ click a book to see details ✦</p>
            </div>
            )}
        </div>
        </div>
    );
};

export default BookBoard;