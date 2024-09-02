
import ProjectCard from "../components/ProjectCard"
import image from "../assets/images/poppy field.jpg"


const Projects = () => {

  const HBskills = [
    "React", "Tailwind CSS"
  ]

  return (
    <section className="relative bg-gradient-to-b from-wave-blue to-deep-blue padding-y flex flex-col">
      <h3 className="font-montserrat text-white text-4xl font-bold padding-x">
        Projects
      </h3>
      <p className="text-gray-200 mt-5 font-inter padding-x text-lg">
        Take a look at what I've been working on!
      </p>
      <div className="padding-y gap-10 flex flex-wrap justify-center hover:border-blue-900">
        <ProjectCard 
          title="Herb and Spice"
          description="A website for my family Thai restaurant." 
          skills={HBskills} 
          img={image}
          className="hover:border-blue-800"
        />
        <ProjectCard />
        <ProjectCard />
      </div>
      {/* <p className="flex justify-center text-gray-400 font-archivo mt-3 text-lg">
        Check out more projects
      </p> */}
    </section>
  )
}

export default Projects