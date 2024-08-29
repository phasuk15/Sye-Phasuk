import ProjectCard from "../components/ProjectCard"


const Projects = () => {
  return (
    <section className="relative w-screen h-screen bg-gradient-to-b from-wave-blue to-deep-blue padding flex flex-col justify-center items-center">
      <h3 className="font-montserrat text-white text-4xl font-bold">
        Projects
      </h3>
      <div className="mt-10 gap-10 flex flex-wrap justify-center">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>

    </section>
  )
}

export default Projects