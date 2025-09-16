import Image from "next/image";
import Github from "../components/icons/Github";
import Youtube from "../components/icons/Youtube";
import Insta from "../components/icons/Insta";
import Linkedin from "../components/icons/Linkedin";

const Contact = () => {
    return (  
        <div className="max-w-2xl mx-auto px-4 flex flex-col items-center pb-32">
            <h1 className="font-jersey font-bold text-5xl py-12">Contact Me</h1>
            <p className="font-pixelify text-center leading-relaxed">Say hello! I love connecting with new people and hearing fresh ideas, whether it’s about tech, art, or anything in between. Don’t hesitate to reach out 💖🥰</p>
            <button className="mt-12 flex flex-wrap gap-5">
                <Linkedin/>
                <Github/>
                <Youtube/>
                <Insta/>
            </button>
        </div>
    );
}
 
export default Contact;