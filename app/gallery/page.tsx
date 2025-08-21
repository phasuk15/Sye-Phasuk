import Image from "next/image";

const GalleryFull = () => {
    return (  
        <div className="max-w-2xl mx-auto px-4 flex flex-col items-center pb-24">
            <h1 className="font-jersey font-bold text-5xl pt-24 pb-6">Gallery</h1>
            <p className="font-pixelify text-center mb-12">
                Welcome to my art gallery! Creating artwork has been a passionate hobby of mine for as long as I can remember. I've always enjoyed exploring different styles and various mediums, now including pixel art! (I drew all the assets on this webpage hehe) 🌷✨
            </p>

            {/* Artwork */}
            <div className="flex flex-col gap-8 items-center">
                <Image src="/artwork10.jpg" alt="Artwork 10" width={500} height={100}/>
                <Image src="/artwork1.jpg" alt="Artwork 1" width={500} height={100}/>
                <Image src="/artwork2.jpg" alt="Artwork 2" width={500} height={100}/>
                <Image src="/artwork3.jpg" alt="Artwork 3" width={500} height={100}/>
                <Image src="/artwork4.jpg" alt="Artwork 4" width={500} height={100}/>
                <Image src="/artwork5.jpg" alt="Artwork 5" width={500} height={100}/>
                <Image src="/artwork6.jpg" alt="Artwork 6" width={500} height={100}/>
                <Image src="/artwork7.jpg" alt="Artwork 7" width={500} height={100}/>
                <Image src="/artwork8.jpg" alt="Artwork 8" width={500} height={100}/>
                <Image src="/artwork9.jpg" alt="Artwork 9" width={500} height={100}/>
            </div>
        </div>
    );
}
 
export default GalleryFull;