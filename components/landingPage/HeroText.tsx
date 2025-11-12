import { servicesData } from "@/constant";
import React from "react";
import ServiceCard from "./ServiceCard";


const HeroText = () => {
  return (
    <div className="bg-linear-to-br from-[#E6F1F0] via-[#F3F7F5] to-[#E6F1F0] rounded-bl-xl shadow-lg flex flex-col gap-8 h-full justify-center px-12 max-lg:py-24 max-md:px-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-6xl font-extrabold text-gray-900 tracking-tight leading-tight drop-shadow-md max-xl:text-5xl max-md:text-3xl">
          Let&apos;s Find What You Need
        </h1>
        <p className="text-gray-700 text-xl font-medium tracking-wide max-xl:text-lg">
          Start with a short quiz to unlock your personalized mental health plan
        </p>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 list-none">
        {servicesData.map((item, index) => (
          <li key={index}>
            <ServiceCard {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeroText;
