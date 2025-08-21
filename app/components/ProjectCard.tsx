interface ProjectCardProps {
  title: string;
  description: string;
  skills: string[];
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, skills, image }) => {
  return (
    <div className="w-72 bg-white border-4 border-pink-500 rounded-none shadow-[4px_4px_0px_rgba(0,0,0,0.7)] hover:shadow-[6px_6px_0px_rgba(0,0,0,0.7)] transition-all duration-200 font-pixelify">
      {/* Fake "browser" top bar */}
      <div className="bg-pink-500 text-white px-3 py-1 flex items-center justify-between text-xs">
        <span className="font-bold">project.html</span>
        <div className="flex gap-1">
          <span className="w-3 h-3 bg-red-400 border border-black"></span>
          <span className="w-3 h-3 bg-yellow-400 border border-black"></span>
          <span className="w-3 h-3 bg-green-400 border border-black"></span>
        </div>
      </div>

      {/* Image */}
      <div className="h-36 overflow-hidden border-b-4 border-pink-500">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover image-pixelated"
        />
      </div>

      {/* Content */}
      <div className="p-3">
        <h2 className="text-lg text-pink-600 font-bold">{title}</h2>
        <p className="text-xs text-gray-800 mt-2">{description}</p>

        {/* Skills */}
        <div className="flex flex-wrap gap-1 mt-3">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 text-[10px] bg-pink-200 text-pink-900 border border-pink-600"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Button */}
        <button className="mt-4 w-full bg-pink-500 text-white border-2 border-black px-2 py-1 text-sm hover:bg-pink-600 active:translate-y-[2px] transition-all">
          View Project
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;