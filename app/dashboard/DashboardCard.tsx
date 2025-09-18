import React from "react";

interface DashboardCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, children, className }) => {
  return (
    <div
      className={`bg-light-pink border-4 border-raspberry shadow-[4px_4px_0px_#412722] p-4 transition-all hover:shadow-[6px_6px_0px_#AE5969] ${className}`}
    >
      {/* Header with pixel-style buttons */}
      <div className="bg-rosewood text-light-pink px-3 py-1 flex items-center justify-end text-xs">
        <div className="flex gap-1">
          <span className="w-3 h-3 bg-raspberry border border-plum-brown"></span>
          <span className="w-3 h-3 bg-mauve-brown border border-plum-brown"></span>
          <span className="w-3 h-3 bg-light-pink border border-plum-brown"></span>
        </div>
      </div>

      {/* Title */}
      <h2 className="font-pixelify text-xl mb-3">{title}</h2>

      {/* Content */}
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
};

export default DashboardCard;