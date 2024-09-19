
import ProjectGithub from "./icons/ProjectGithub"

const ProjectCard = ({img, title, description, link, skills=[]}) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-lg border border-blue-purple hover-tilt px-3 py-3">      
      <img
        src={img}
        className="rounded-lg"
      />
      <div className="px-5">
        </div>
        <p className="font-fira font-bold text-xl text-gray-300 mt-5">
          {title}
        </p>
        <p className="text-gray-400 font-archivo mt-2">
          {description}
        </p>

        <p className="flex flex-row gap-3 justify-start flex-wrap mt-8">
          {skills.map((skill, index) => (
            <div key={index}>
              <span className="text-xs border rounded-md text-gray-500 px-1 py-1 border-gray-600">
                #{skill}
              </span>
            </div>
          ))}
        </p>
        <div className="mt-7 pb-5">
          <a 
            href={link}
            target="_blank" 
            rel="noopener noreferrer"
          >
            <ProjectGithub size={30} fill={"gray"} />
          </a>

        </div>
        
    </div>
  )
}

export default ProjectCard