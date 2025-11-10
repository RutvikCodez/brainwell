import { mentalIssues } from "@/constant";
import React from "react";
import MentalIssueCard from "./MentalIssueCard";


const Mentalissues = () => {
  return (
    <section
      id="mental-issues"
      className="xl:max-w-7xl w-full mx-auto bg-gradient-to-br from-[#E6F1F0] via-[#F3F7F5] to-[#E6F1F0] p-12 rounded-3xl flex flex-col gap-10 shadow-xl"
    >
      <div className="text-center flex flex-col gap-2">
        <h2 className="text-3xl md:text-4xl font-extrabold text-green-800 tracking-tight relative inline-block">
          Explore Mental Health Topics
          <span className="block h-1 w-1/2 mx-auto mt-2 bg-green-600 rounded-full" />
        </h2>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
          Understand and navigate different mental health conditions through curated topics.
        </p>
      </div>
      <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {mentalIssues.map((item, index) => (
          <li key={index} className="group transition-transform hover:-translate-y-1">
            <MentalIssueCard {...item} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Mentalissues;
