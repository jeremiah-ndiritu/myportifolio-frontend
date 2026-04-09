import React from "react";
interface HoverCardProps {
  title: string;
  description: string;
}

const HoverCard: React.FC<HoverCardProps> = ({
  title,
  description,
}) => {
  return (
    <div className="relative bg-slate-200 shadow-lg rounded-lg overflow-hidden group cursor-pointer h-full">
      {/* Text Content */}
      <div className="p-4 relative z-10">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default HoverCard;
