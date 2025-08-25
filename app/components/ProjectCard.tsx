interface ProjectCardProps {
  title: string;
  description: string;
  skills: string[];
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, skills, image }) => {
  return (
    <div className="w-72 bg-[#EEC8CF] border-4 border-[#CE8A97] rounded-none shadow-[4px_4px_0px_#412722] hover:shadow-[6px_6px_0px_#412722] transition-all duration-200 font-jersey">
      {/* Fake "browser" top bar */}
      <div className="bg-[#CE8A97] text-[#EEC8CF] px-3 py-1 flex items-center justify-between text-xs">
        <span className="font-bold">project.html</span>
        <div className="flex gap-1">
          <span className="w-3 h-3 bg-[#AE5969] border border-[#412722]"></span>
          <span className="w-3 h-3 bg-[#634A45] border border-[#412722]"></span>
          <span className="w-3 h-3 bg-[var(--light-pink)] border border-[#412722]"></span>
        </div>
      </div>

      {/* Image */}
      <div className="h-36 overflow-hidden border-b-4 border-[#CE8A97]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover image-pixelated"
        />
      </div>

      {/* Content */}
      <div className="p-3">
        <h2 className="text-lg text-[#AE5969] font-bold">{title}</h2>
        <p className="text-xs text-[#412722] mt-2">{description}</p>

        {/* Skills */}
        <div className="flex flex-wrap gap-1 mt-3">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 text-[10px] bg-[#CE8A97] text-[#EEC8CF] border border-[#412722]"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Button */}
        <button className="mt-4 w-full bg-[#AE5969] text-[#EEC8CF] border-2 border-[#412722] px-2 py-1 text-sm hover:bg-[#634A45] active:translate-y-[2px] transition-all">
          View Project
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;