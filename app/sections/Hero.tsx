import Image from "next/image";
import Github from "../components/icons/Github";
import Youtube from "../components/icons/Youtube";
import Insta from "../components/icons/Insta";
import Linkedin from "../components/icons/Linkedin";
import Link from "next/link";

const Hero = () => {
  return (  
    <div className="w-screen h-screen flex flex-col md:flex-row">
      <div className="relative h-full flex flex-col justify-end md:justify-center items-center md:items-start px-12 w-full md:w-1/3 p-6">
        <p className="text-gray-500 font-pixelify text-xl md:text-left md:text-2xl">
          Hello! I am
        </p>
        <h1 
          data-aos="fade-up" 
          data-aos-once="false" 
          className="text-gray-300 text-8xl font-jersey font-bold text-center md:text-left md:text-9xl"
        >
          Sye Phasuk
        </h1>
        <div>
          <button className="mt-5 flex flex-wrap gap-5">
              <Linkedin/>
              <Github/>
              <Youtube/>
              <Insta/>
          </button>
        </div>
      </div>

      {/* Right side (image) */}
      <div className="relative flex justify-center items-center h-1/2 md:h-full w-full md:w-2/3 mt-8">
        <Image 
          src="/avatar.png" 
          alt="hero" 
          width={450} height={450}
          className="object-cover md:h-xl md:w-xl" 
        />
      </div>
    </div>
  );
}
 
export default Hero;