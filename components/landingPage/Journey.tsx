import React from "react";
import { journeySteps } from "@/constant";
import journeyImage from "@/public/static/images/journeyImage.jpg";
import Image from "next/image";
import CustomButton from "../custom/button";
import TitleDescription from "./TitleDescription";
import JourneyCard from "./JourneyCard";

const Journey = () => {
  return (
    <section className="max-w-7xl mx-auto w-full px-6 py-12 md:px-12 md:py-20 bg-linear-to-br from-[#1F3B2C] to-[#264d3a] text-white rounded-3xl shadow-2xl flex flex-col gap-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <TitleDescription
          description="A guided flow to understand you better and build a tailored support
            path."
          title=" Your Personalized Wellness Journey"
          titleTextColor="#ffffff"
          descriptionTextColor="#d1d5db"
          className="text-start"
        />
        <CustomButton link="/sign-in" value="Start Your Journey" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <ul className="flex flex-col gap-6 list-none">
          {journeySteps.map((item, index) => (
            <li
              key={index}
              tabIndex={0}
              className="focus:outline-none focus:ring-2 focus:ring-white rounded-xl transition-all duration-300"
            >
              <JourneyCard {...item} />
            </li>
          ))}
        </ul>
        <div className="relative w-full h-full aspect-auto rounded-xl overflow-hidden shadow-lg">
          <Image
            src={journeyImage}
            alt="Visual representation of wellness journey"
            fill
            className="object-cover rounded-xl transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default Journey;
