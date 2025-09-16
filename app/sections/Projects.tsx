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
          <a href="https://github.com/Rimichu/Smart-Environment-Toolkit" target="_blank" rel="noopener noreferrer">
            <ProjectCard
              title="IoT Airport System"
              description="A playful and responsive portfolio built with Next.js and Tailwind CSS."
              skills={["Next.js", "React", "Tailwind CSS"]}
              image="/herbandspice.jpg"
              git="https://github.com/Rimichu/Smart-Environment-Toolkit"
              yt="https://www.youtube.com/watch?v=fzZrk8lb2D8"
            />
          </a>
          <a href="https://grp4-smart-system.vercel.app" target="_blank" rel="noopener noreferrer">
            <ProjectCard
              title="IoT Smart System"
              description="A full-stack IoT smart system using Raspberry Pi devices to monitor the environemnt, users, devices and others in the lab."
              skills={["Next.js", "MongoDB", "Tailwind", "Raspberry Pico"]}
              image="lovelace_liverpool.jpg"
              git="https://github.com/Colley-A/SCC_330_SLS"
              yt="https://www.youtube.com/watch?v=SPUiCte_qtw"
            />
          </a>
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