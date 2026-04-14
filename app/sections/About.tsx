import Button from "../components/Button";
import Image from "next/image";

const About = () => {
    return (  
        <div className="h-screen max-w-2xl mx-auto px-4 flex flex-col items-center">
            <h1 className="font-jersey font-bold text-5xl py-12">About Me</h1>
            <div className="flex flex-col justify-center leading-relaxed text-center font-pixelify gap-5">
                <p>Hi, I’m Sye! I’m a software engineer and designer who loves building creative, user-friendly digital experiences.</p>
                <p>I’m passionate about coding, design, and creating things that make people’s lives a little easier (and prettier).</p>
                <p>Find more about me in my dashboard!</p>
            </div>
            <Image src="/avatar.png" alt="avatar" width={300} height={300}/>
            <a href="/dashboard" className="flex justify-center text-center font-jersey text-2xl mt-3">
                <Button
                    text="Dashboard"
                />
            </a>
        </div>
    );
}

export default About;