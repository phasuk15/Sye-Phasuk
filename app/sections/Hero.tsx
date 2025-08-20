import Image from "next/image";

const Hero = () => {
  return (  
    <div className="w-screen h-screen flex flex-col md:flex-row">
      {/* Left side (intro) */}
      <div className="relative h-full flex flex-col justify-end md:justify-center items-center md:items-start w-full md:w-1/3 p-6">
        <p className="text-gray-500 font-pixelify text-xl text-center md:text-left">
          Hello! I am
        </p>
        <h1 
          data-aos="fade-up" 
          data-aos-once="false" 
          className="text-gray-300 text-8xl md:text-5xl font-jersey font-bold"
        >
          Sye Phasuk
        </h1>
        <div>
          <button className="mt-5 flex flex-wrap gap-5">
            <a>
              <Image 
                  src="/linkedin.png" 
                  alt="LinkedIn"
                  width={32} height={32}
                />
            </a>
            <a>
              <Image 
                  src="/github.png" 
                  alt="LinkedIn"
                  width={32} height={32}
                />
            </a>
            <a>
              <Image 
                  src="/insta.png" 
                  alt="LinkedIn"
                  width={32} height={32}
                />
            </a>
            <a>
              <Image 
                  src="/youtube.png" 
                  alt="LinkedIn"
                  width={32} height={32}
                />
            </a>
          </button>
        </div>
      </div>

      {/* Right side (image) */}
      <div className="relative flex justify-center items-center h-1/2 md:h-full w-full md:w-2/3">
        <Image 
          src="/avatar.png" 
          alt="hero" 
          width={450} height={450}
          className="object-cover" 
        />
      </div>
    </div>
  );
}
 
export default Hero;