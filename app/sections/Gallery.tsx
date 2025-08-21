const Gallery = () => {
    return (  
        <div className="h-screen max-w-2xl mx-auto px-4 flex flex-col items-center">
            <h1 className="font-jersey font-bold text-5xl py-12">Gallery</h1>
            <p className="font-pixelify text-center leading-relaxed">Take a peek into a cozy little gallery of my creations! 🖌️🎨</p>
            <a
                href="/gallery"
                className="flex justify-center text-center font-jersey text-2xl mt-10"
            >
                See full gallery
            </a>
        </div>
    );
}
 
export default Gallery;