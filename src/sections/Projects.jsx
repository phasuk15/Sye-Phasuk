
import ProjectCard from "../components/ProjectCard"
import image from "../assets/images/poppy field.jpg"
import herbandspice from "../assets/images/herbandspice.jpg"
import sportmate from "../assets/images/sportmate.png"


const Projects = () => {

  const HBskills = [
    "React", "Tailwind CSS"
  ]
  const SportmateSkills = [
    "Flutter", "Dart"
  ]

  return (
    <section className="relative bg-gradient-to-b from-wave-blue to-deep-blue pt-16 items-center flex flex-col">
      <h3 className="font-montserrat text-white text-4xl font-bold pt-10">
        Projects
      </h3>
      <p className="text-gray-200 mt-5 font-inter padding-x text-lg">
        Take a look at what I've been working on!
      </p>
      <div className="pt-16 gap-8 flex flex-wrap justify-center">
        <a>
          <ProjectCard 
            title="Herb and Spice"
            description="A website for my family Thai restaurant. It's not done yet tho >.<. Will be coming soon!!" 
            skills={HBskills} 
            img={herbandspice}
            link="https://github.com/phasuk15/Herb-and-Spice.git"
          />
        </a>
        <a 
          href="https://www.canva.com/design/DAF-2sI0oL8/YFMzvymPyv-KfGSXrw6FAw/view?utm_content=DAF-2sI0oL8&utm_campaign=designshare&utm_medium=link&utm_source=editor"
          target="_blank" 
          rel="noopener noreferrer" 
        >
          <ProjectCard 
            title="SportMate"
            description="A platform designed to bring sport players together by introducing matchmaking and tournament style systems to make finding sport partners easier. "
            skills={SportmateSkills}
            img={sportmate}
            link="https://github.com/stasnowaczyk/sportmate_flutter.git"
          />
        </a>
        
      </div>
      {/* <p className="flex justify-center text-gray-400 font-archivo mt-3 text-lg">
        Check out more projects
      </p> */}
    </section>
  )
}

export default Projects