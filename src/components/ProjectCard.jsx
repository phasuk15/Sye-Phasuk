
import Ripple from "./Ripple"
import GithubIcon from "./icons/GithubIcon"

const ProjectCard = ({img, title, description, skills=[]}) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-lg shadow-3xl px-10 py-16 border-boxShadow hover:border-blue-900 group group-hover:bg-gray-900/50 transition-colors duration-300">      
      <img
        src={img}

      />
      <p className="font-fira font-bold text-base text-white mt-5">
        {title}
      </p>
      <p className="text-gray-400 font-archivo mt-5">
        {description}
      </p>

    <p className="flex flex-row gap-3 justify-start flex-wrap mt-3">
      {skills.map((skill, index) => (
        <div key={index}>
          <span className="text-xs border rounded-md text-gray-500 px-1 py-1 border-gray-600">
            #{skill}
          </span>
        </div>
      ))}
    </p>
    <div className="mt-5">
      <GithubIcon/>
    </div>
    </div>
  )
}

export default ProjectCard