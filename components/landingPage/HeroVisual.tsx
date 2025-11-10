import React from "react";
import { highlightsData } from "@/constant";
import HighlightCard from "./HighlightCard";


const HeroVisual = () => {
  return (
    <div className="bg-[#1F3B2C] text-white flex flex-col gap-8 rounded-br-xl shadow-2xl h-full justify-center px-12 max-xl:px-5 max-lg:py-24">
      <ul className="flex flex-col gap-6 list-none">
        {highlightsData.map((item, index) => (
          <li key={index}>
            <HighlightCard {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeroVisual;
