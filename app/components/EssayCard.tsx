interface EssayCardProps {
  date: string;
  title: string;
  description: string;
}

const EssayCard: React.FC<EssayCardProps> = ({ date, title, description }) => {
  return (
    <div className="p-5 border-4 border-raspberrybg-white shadow-[6px_6px_0px_#412722] hover:shadow-[8px_8px_0px_#AE5969]transition-all duration-200 cursor-pointer">
      <p className="text-xs text-mauve-brown">{date}</p>
      <h2 className="text-lg font-bold text-mauve-brown mt-1">{title}</h2>
      <p className="text-sm text-mauve-brown mt-2">{description}</p>
    </div>
  );
};

export default EssayCard;