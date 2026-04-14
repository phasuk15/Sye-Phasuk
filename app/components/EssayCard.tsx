interface EssayCardProps {
  title: string;
  description: string;
  fileLabel?: string;
  href?: string;
}

const EssayCard = ({
  title,
  description,
  fileLabel = "essay.txt",
  href,
}: EssayCardProps) => {
  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper
      {...(href ? { href } : {})}
      className="group block w-full font-pixelify bg-light-pink border-4 border-rosewood
        shadow-[4px_4px_0px_#412722] hover:shadow-[7px_7px_0px_#412722]
        hover:-translate-y-1 transition-all duration-200 cursor-pointer"
    >
      {/* Titlebar */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-rosewood">
        <span className="text-light-pink text-[8px] tracking-widest opacity-70">
          {fileLabel}
        </span>
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 bg-raspberry border border-white/20"></span>
          <span className="w-2.5 h-2.5 bg-mauve-brown border border-white/20"></span>
          <span className="w-2.5 h-2.5 bg-light-pink border border-white/20"></span>
        </div>
      </div>

      <div className="px-4 pt-3 pb-2 flex flex-col gap-2">

        {/* Title */}
        <h2
          className="text-lg font-bold text-rosewood leading-snug group-hover:text-raspberry transition-colors duration-200"
          style={{ textShadow: "2px 2px 0 rgba(65,39,34,0.08)" }}
        >
          {title}
        </h2>

        {/* Description */}
        <div className="bg-[#fdf0f4] border-2 border-mauve-brown p-3 relative overflow-hidden">
          <div
            className="absolute top-0 left-0 right-0 h-0.5 opacity-30"
            style={{
              background:
                "repeating-linear-gradient(90deg, #8b5c6e 0px, #8b5c6e 4px, transparent 4px, transparent 8px)",
            }}
          />
          <p className="text-raspberry text-[11px] tracking-widest mb-2 flex items-center gap-2">
            ✦ about
            <span className="flex-1 h-px bg-mauve-brown opacity-30"></span>
          </p>
          <p className="text-[10px] text-[#5a3a45] leading-relaxed">{description}</p>
        </div>

        {/* Read hint */}
        <p className="text-[8px] text-mauve-brown tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-right">
          read ›
        </p>

      </div>
    </Wrapper>
  );
};

export default EssayCard;