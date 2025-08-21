import ProjectCard from "../components/ProjectCard";
import Button from "../components/Button";

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
          className="mt-10">
          <Button
            text="See more projects"
          />
        </a>
    </div>
  );
};

export default Projects;