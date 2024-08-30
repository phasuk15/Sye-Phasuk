

const ProjectCard = ({img, title, }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-md shadow-3xl px-10 py-16 transition-transform bg-[#272d69] bg-gradient-to-b from-[#1a1e52] border border-transparent hover:border-current hover:glow-project">
      <p className="font-montserrat text-base text-white">
        {title}
      </p>
    </div>
  )
}

export default ProjectCard