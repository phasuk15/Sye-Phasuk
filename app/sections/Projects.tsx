import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div className="min-h-screen max-w-5xl mx-auto px-4 flex flex-col items-center">
        <h1 className="font-jersey font-bold text-5xl py-12">Projects</h1>
        <p className="leading-relaxed text-center font-pixelify">
            A little collection of projects I've been building, designing and tinkering with ✨💫
        </p>
    
        {/*Project Cards*/}
        <div className="mt-12 flex flex-wrap gap-10 justify-center">
            <ProjectCard
            title="My Portfolio Website"
            description="A playful and responsive portfolio built with Next.js and Tailwind CSS."
            skills={["Next.js", "React", "Tailwind CSS"]}
            image="/herbandspice.jpg"
            />
            <ProjectCard
            title="IoT Alert System"
            description="Emergency alert system built with Arduino, MQTT, and real-time server integration."
            skills={["Arduino", "MQTT", "Python"]}
            image="lovelace_liverpool.jpg"
            />
        </div>
        <a href="/projects"
        className="font-jersey text-2xl mt-10 uppercase tracking-widest text-white 
        bg-gradient-to-b from-pink-200 via-pink-300 to-pink-200 
        border-4 border-pink-400 
        px-6 py-3 
        shadow-[4px_4px_0px_#ec4899] 
        hover:shadow-[2px_2px_0px_#ec4899] 
        active:shadow-none active:translate-x-1 active:translate-y-1 
        transition-all duration-100 cursor-pointer">
            See more projects
        </a>
    </div>
  );
};

export default Projects;