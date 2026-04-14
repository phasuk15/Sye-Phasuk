import Image from "next/image";
import React from "react";

interface YoutubeProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  size?: number;
  alt?: string;
  url?: string; 
}

const Youtube: React.FC<YoutubeProps> = ({
  size = 32,
  alt = "Youtube icon",
  url,
  ...props
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      <Image
        src="/icons/youtube.png"
        alt={alt}
        width={size}
        height={size}
        className="hover:opacity-30 transition"
      />
    </a>
  );
};

export default Youtube;