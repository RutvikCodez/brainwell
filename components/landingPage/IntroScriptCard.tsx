import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const IntroScriptCard = ({ Icon, subtitle, title }: ServiceCardPropsType) => {
  return (
    <Card
      tabIndex={0}
      className="group relative rounded-3xl border-2 border-transparent bg-[#FDF2E9]/60 backdrop-blur-md shadow-sm hover:shadow-2xl transition-all duration-500 ease-in-out hover:scale-[1.06] focus:outline-none focus:ring-4 focus:ring-[#1F3B2C]/60 focus:ring-offset-2 overflow-hidden cursor-default"
    >
      <span className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-br from-[#E6F1F0] via-[#F3F7F5] to-[#E6F1F0] opacity-0 group-hover:opacity-100 transition-all duration-[3000ms] ease-in-out group-hover:scale-105 blur-[6px] z-0"></span>
      <CardContent className="relative z-10 flex items-start gap-5 p-7">
        <Icon className="w-8 h-8 text-[#1F3B2C] transition-colors duration-500 ease-in-out drop-shadow-md group-hover:drop-shadow-lg" />
        <div className="flex flex-col gap-1">
          <p className="text-lg font-extrabold tracking-tight text-gray-900">
            {title}
          </p>
          <div className="relative h-0">
            <div className="absolute top-full left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out text-sm text-gray-700 leading-relaxed">
              {subtitle}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default IntroScriptCard;
