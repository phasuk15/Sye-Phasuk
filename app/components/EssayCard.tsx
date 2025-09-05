interface EssayCardProps {
  date: string;
  title: string;
  description: string;
}

const EssayCard: React.FC<EssayCardProps> = ({ date, title, description }) => {
  return (
    <div className="mb-8 p-3 border-4 border-raspberry bg-light-pink shadow-[4px_4px_0px_plum-brown] font-pixelify">
      <p className="text-xs text-mauve-brown">{date}</p>
      <h2 className="text-lg font-bold text-mauve-brown mt-1">{title}</h2>
      <p className="text-sm text-mauve-brown mt-2">{description}</p>
    </div>
  );
};

export default EssayCard;