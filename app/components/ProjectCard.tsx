import ProjectGithub from "./icons/ProjGit";
import Youtube from "./icons/Youtube";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  skills: string[];
  image: string;
  git?: string;
  yt?: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  skills,
  image,
  git,
  yt,
  className = "",
}) => {
  return (
    <div className="group w-72 font-pixelify bg-light-pink border-4 border-rosewood shadow-[4px_4px_0px_#412722] hover:shadow-[7px_7px_0px_#412722] transition-all duration-200">

      {/* Titlebar */}
      <div className="bg-rosewood text-light-pink px-3 py-1 flex items-center justify-between">
        <span className="text-[8px] tracking-widest opacity-70">project.exe</span>
        <div className="flex gap-1">
          <span className="w-2.5 h-2.5 bg-raspberry border border-white/20"></span>
          <span className="w-2.5 h-2.5 bg-mauve-brown border border-white/20"></span>
          <span className="w-2.5 h-2.5 bg-light-pink border border-white/20"></span>
        </div>
      </div>

      {/* Image — shrinks on hover to make room for detail panel */}
      <div
        className="overflow-hidden border-b-4 border-rosewood transition-all duration-300 ease-in-out h-68 group-hover:h-24"
      >
        <Image
          src={image}
          alt={title}
          width={400}
          height={600}
          className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-110 ${className}`}
        />
      </div>

      {/* Always-visible footer: title + skills */}
      <div className="px-3 pt-3 pb-2">
        <p className="text-raspberry tracking-widest flex items-center gap-2 mb-2">
          ✦ {title}
          <span className="flex-1 h-px bg-mauve-brown opacity-30"></span>
        </p>
        <div className="flex flex-wrap gap-1">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 text-[8px] bg-rosewood text-light-pink border border-plum-brown"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Sliding detail panel — hidden at rest, revealed on hover */}
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out max-h-0 group-hover:max-h-40"
      >
        <div className="mx-3 mb-3 bg-[#fce8f0] border-2 border-raspberry shadow-[2px_2px_0px_#c0396b] p-3 relative">
          {/* Corner accents */}
          <span className="absolute top-1.5 left-1.5 w-3 h-3 border-t-2 border-l-2 border-raspberry"></span>
          <span className="absolute top-1.5 right-1.5 w-3 h-3 border-t-2 border-r-2 border-raspberry"></span>
          <span className="absolute bottom-1.5 left-1.5 w-3 h-3 border-b-2 border-l-2 border-raspberry"></span>
          <span className="absolute bottom-1.5 right-1.5 w-3 h-3 border-b-2 border-r-2 border-raspberry"></span>

          {/* Description */}
          <div className="bg-[#fdf0f4] border-2 border-mauve-brown p-2 relative overflow-hidden mb-3">
            <div
              className="absolute top-0 left-0 right-0 h-0.5 opacity-30"
              style={{
                background:
                  "repeating-linear-gradient(90deg, #8b5c6e 0px, #8b5c6e 4px, transparent 4px, transparent 8px)",
              }}
            />
            <p className="text-[8px] text-[#5a3a45] leading-relaxed">{description}</p>
          </div>

          {/* Links */}
          <div className="flex gap-2 items-center">
            {git && <ProjectGithub url={git} />}
            {yt && <Youtube url={yt} />}
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProjectCard;