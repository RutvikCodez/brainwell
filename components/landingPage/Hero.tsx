import React from "react";
import HeroText from "./HeroText";
import HeroVisual from "./HeroVisual";

const Hero = () => {
  return (
    <section className="grid grid-cols-[7fr_3fr] min-h-[90vh] max-lg:grid-cols-1">
      <HeroText />
      <HeroVisual />
    </section>
  );
};

export default Hero;
