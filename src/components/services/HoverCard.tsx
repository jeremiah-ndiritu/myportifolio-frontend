import React from "react";
import Card from "../ui/Card";

interface HoverCardProps {
  title: string;
  description: string;
}

const HoverCard: React.FC<HoverCardProps> = ({ title, description }) => {
  return (
    <Card
      variant="elevated"
      className="relative h-full overflow-hidden group cursor-pointer"
    >
      <div className="relative z-10 p-4">
        <h3 className="text-lg font-semibold text-fg">{title}</h3>
        <p className="mt-2 text-sm text-muted">{description}</p>
      </div>
    </Card>
  );
};

export default HoverCard;
