import { introScriptsData } from "@/constant";
import React from "react";
import IntroScriptCard from "./IntroScriptCard";


const IntroText = () => {
  return (
    <div className="flex flex-col gap-8 xl:max-w-4xl xl:mx-auto py-12 max-xl:w-full">
      <div className="flex flex-col gap-3">
        <h2 className="text-4xl xl:text-5xl max-md:text-3xl font-extrabold text-gray-900 leading-snug drop-shadow-sm">
          We care for your mind, we guide your growth
        </h2>
        <p className="text-lg sm:text-xl text-gray-600">
          BrainWell empowers you to understand and elevate your mental wellness
          using AI-powered assessments, mood tracking, and calming exercises
          designed for personal growth.
        </p>
      </div>
      <ul className="flex flex-col gap-6 list-none">
        {introScriptsData.map((item, index) => (
          <li key={index}>
            <IntroScriptCard {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IntroText;
