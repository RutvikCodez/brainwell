import { Check } from "lucide-react";
import React from "react";
import Image from "next/image";
import RecoveryGuideImage from "@/public/static/images/hero.jpg";
import { recoveryGuideData } from "@/constant";
import CustomButton from "../custom/button";
import TitleDescription from "./TitleDescription";

const RecoveryGuide = () => {
  return (
    <section className="max-w-7xl w-full mx-auto px-6 md:px-12 py-16 grid md:grid-cols-2 gap-14 items-center">
      <div className="flex flex-col gap-12 text-gray-800">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-[#1F3B2C] text-sm font-semibold uppercase tracking-wide">
              How It Helps
            </h3>
            <TitleDescription
              description="Discover your emotional focus area and receive tailored support,
              resources, and upcoming therapist matches to improve your mental
              fitness."
              title="Start Your Journey to Better Mental Well-being"
              className="text-start"
            />
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3">
            {recoveryGuideData.map((item, index) => (
              <li
                key={index}
                className="flex items-center text-sm font-medium text-zinc-700 gap-2"
              >
                <Check className="w-5 h-5 text-green-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <CustomButton link="/sign-in" value="Get Started" />
      </div>

      <div className="relative w-full h-full aspect-square bg-linear-to-br from-[#E6F1F0] via-[#F3F7F5] to-[#E6F1F0] p-4 rounded-xl shadow-inner border border-gray-200">
        <Image
          src={RecoveryGuideImage}
          alt="Recovery Journey"
          fill
          className="rounded-xl object-cover"
        />
      </div>
    </section>
  );
};

export default RecoveryGuide;
