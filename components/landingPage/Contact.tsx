import React from "react";
import CustomButton from "../custom/button";
import TitleDescription from "./TitleDescription";

const Contact = () => {
  return (
    <section className="max-w-7xl w-full mx-auto px-6 md:px-12 py-16 bg-[#FDF2E9] rounded-3xl flex flex-col items-center text-center gap-12 lg:shadow-xl mb-12 max-lg:bg-transparent">
      <TitleDescription description="Have questions or need guidance? We&apos;re here to help you take the
          first step toward a healthier mind." title=" Let&apos;s Talk About Your Specific Needs" titleTextColor="#1F3B2C" />
      <div className="flex flex-wrap justify-center gap-4">
        <CustomButton
          link="/contact"
          value="Get Support"
          className="px-10 py-3 font-semibold border border-[#1F3B2C] text-green-800 bg-transparent rounded-xl shadow-sm hover:shadow-md hover:bg-green-50 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-600"
        />
        <CustomButton
          link="/sign-in"
          value="Join Now"
          className="px-10 py-3 font-semibold text-white bg-[#1F3B2C] rounded-xl shadow-md hover:shadow-xl hover:bg-green-900 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-600"
          backgoundColor="#1F3B2C"
        />
      </div>
    </section>
  );
};

export default Contact;
