import { footerData } from "@/constant";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1F3B2C] text-white px-6 md:px-12 py-16 flex flex-col gap-12">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-5">
        <div className="md:col-span-1 flex flex-col gap-4">
          <h3 className="text-2xl font-bold tracking-wide">
            Brain<span className="text-[#A4E4C0]">Well</span>
          </h3>
          <p className="text-sm text-gray-300 max-w-xs">
            Empowering your mental well-being with guided care and support.
          </p>
        </div>

        {/* Links */}
        <div className="md:col-span-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {footerData.map(({ title, items }, index) => (
            <div key={index} className="flex flex-col gap-4">
              <h4 className="text-lg font-semibold">{title}</h4>
              <ul className="flex flex-col gap-2 text-sm text-gray-300">
                {items.map((listItem, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200"
                      aria-label={listItem}
                    >
                      {listItem}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} BrainWell. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
