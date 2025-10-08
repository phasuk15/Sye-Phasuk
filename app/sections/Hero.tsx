import Github from "../components/icons/Github";
import Youtube from "../components/icons/Youtube";
import Insta from "../components/icons/Insta";
import Linkedin from "../components/icons/Linkedin";

const Hero = () => {
  return (  
    <div className="w-screen h-screen flex flex-col md:flex-row">
      <div className="relative h-full flex flex-col justify-center items-center px-12 w-full">
        <p className="text-gray-500 font-pixelify text-xl md:text-2xl">
          Hello! I am
        </p>
        <h1 
          data-aos="fade-up" 
          data-aos-once="false" 
          className="text-raspberry text-8xl font-jersey font-bold text-center md:text-right md:text-9xl"
        >
          Sye Phasuk
        </h1>
        <div>
          <button className="mt-5 flex flex-wrap gap-5">
              <Linkedin/>
              <Github/>
              <Youtube url="https://www.youtube.com/@dianas15"/>
              <Insta/>
          </button>
        </div>
      </div>
    </div>
  );
}
 
export default Hero;