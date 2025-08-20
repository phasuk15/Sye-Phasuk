import ScrollLink from "../components/ScrollLink";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-light-pink text-white p-4 flex justify-between items-center shadow-lg z-50">
      <a href="/" className="text-2xl font-bold font-pixelify text-black">Sye Phasuk</a>
      <div className="space-x-5 flex flex-row">
        <ScrollLink href="#about">
            <Image src="/home.png" alt="Me" width={32} height={32} />
        </ScrollLink>
        <ScrollLink href="#projects">
            <Image src="/home.png" alt="Me" width={32} height={32} />
        </ScrollLink>
        <ScrollLink href="#gallery">
            <Image src="/home.png" alt="Me" width={32} height={32} />
        </ScrollLink>
        <ScrollLink href="#essays">
            <Image src="/home.png" alt="Me" width={32} height={32} />
        </ScrollLink>
        <ScrollLink href="#contact">
            <Image src="/home.png" alt="Me" width={32} height={32} />
        </ScrollLink>
      </div>
    </nav>
  );
}