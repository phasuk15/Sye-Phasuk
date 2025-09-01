import EssayCard from "../components/EssayCard";
import Button from "../components/Button";

const Essays = () => {
    return (  
        <div className="h-screen max-w-2xl mx-auto px-4 flex flex-col items-center">
            <h1 className="font-jersey font-bold text-5xl py-12">Essays</h1>
            <p className="font-pixelify text-center leading-relaxed pb-7">Little windows into my thoughts — essays on things I find fascinating or worth pondering 💭🌸</p>
            <EssayCard
                date="3 April 2025"
                title="AI and Sustainability"
                description="Exploring the complications of ."
            />
            <a href="/essays">
                <Button text="See more essays"/>
            </a>
        </div>
    );
}
 
export default Essays;