import { featuresData } from "@/constant";
import React from "react";
import TitleDescription from "./TitleDescription";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <section className="max-w-7xl mx-auto w-full px-6 py-16 md:px-12 flex flex-col gap-14">
      <TitleDescription
        description="A curated list of powerful features designed to elevate your
          experience."
        title=" What You'll Get"
      />
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuresData.map((item, index) => (
          <li
            key={index}
            className="transition duration-300 transform hover:-translate-y-1 h-full"
          >
            <FeatureCard {...item} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Features;
