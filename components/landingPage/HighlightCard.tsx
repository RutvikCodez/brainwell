import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const HighlightCard = ({ Icon, subtitle, title }: ServiceCardPropsType) => {
  return (
    <Card
      tabIndex={0}
      className="flex items-center gap-5 bg-white/10 backdrop-blur-md rounded-xl py-4 px-6 shadow-md hover:shadow-lg transition-shadow duration-700 cursor-default group transform hover:scale-[1.05] border-none"
    >
      <CardContent className="flex items-center gap-5 p-0">
        <div className="flex justify-center items-center bg-green-600 rounded-full w-12 h-12 text-white group-hover:shadow-[0_0_15px_3px_rgba(72,187,120,0.6)] transition-shadow duration-300 lg:max-xl:hidden">
          <Icon />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-gradient font-extrabold text-lg max-xl:text-base tracking-tight bg-clip-text text-transparent from-green-300 to-green-600 bg-gradient-to-r">
            {title}
          </span>
          <span className="text-white/80 text-sm">{subtitle}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default HighlightCard;
