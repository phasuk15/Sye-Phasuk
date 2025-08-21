const ProjectCard = () => {
  return (
    <div className="w-[350px] rounded-2xl shadow-lg overflow-hidden border border-gray-200 bg-white">
      {/* Browser-like header */}
      <div className="flex items-center justify-between bg-pink-200 px-3 py-2">
        <div className="flex gap-1">
          <span className="w-3 h-3 rounded-full bg-pink-400"></span>
          <span className="w-3 h-3 rounded-full bg-pink-300"></span>
          <span className="w-3 h-3 rounded-full bg-pink-500"></span>
        </div>
        <p className="text-xs text-gray-600">2025-08-21-project.html</p>
      </div>

      {/* Image preview */}
      <img
        src="/example.jpg"
        alt="Project preview"
        className="w-full h-40 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-bold text-pink-600">Possimus</h2>
        <p className="text-sm text-gray-600 mt-1">
          Officia sit numquam fugiat sit molestiae id. Est modi est at debitis
          dolorem. Ut voluptate quod rem dolores sit molestiae maiores.
        </p>

        <button className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition">
          View Project
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;