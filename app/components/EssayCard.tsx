interface EssayCardProps {
  date: string;
  title: string;
  description: string;
}

const EssayCard: React.FC<EssayCardProps> = ({ date, title, description }) => {
  return (
    <div className="mb-8 p-3 border-4 border-[#AE5969] bg-[#EEC8CF] shadow-[4px_4px_0px_#412722] font-pixelify">
      <p className="text-xs text-[#634A45]">{date}</p>
      <h2 className="text-lg font-bold text-[#412722] mt-1">{title}</h2>
      <p className="text-sm text-[#634A45] mt-2">{description}</p>
    </div>
  );
};

export default EssayCard;