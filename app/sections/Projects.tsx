import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div className="min-h-screen max-w-5xl mx-auto px-4 flex flex-col items-center">
      <h1 className="font-jersey font-bold text-5xl py-12">Projects</h1>
      <p className="leading-relaxed text-center font-pixelify">
        A little collection of projects I've been building, designing and tinkering with ✨💫
      </p>

      <div className="mt-12 flex flex-wrap gap-10 justify-center">
        <ProjectCard
          title="My Portfolio Website"
          description="A playful and responsive portfolio built with Next.js and Tailwind CSS."
          skills={["Next.js", "React", "Tailwind CSS"]}
          image="https://placehold.co/400x200.png"
        />
        <ProjectCard
          title="IoT Alert System"
          description="Emergency alert system built with Arduino, MQTT, and real-time server integration."
          skills={["Arduino", "MQTT", "Python"]}
          image="https://placehold.co/400x200.png"
        />
        <ProjectCard
          title="Pixel Art Gallery"
          description="A fun gallery for displaying pixel artworks, coded with custom CSS grid."
          skills={["CSS Grid", "React"]}
          image="https://placehold.co/400x200.png"
        />
      </div>
    </div>
  );
};

export default Projects;