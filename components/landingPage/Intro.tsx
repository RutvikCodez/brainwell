import React from "react";
import Image from "next/image";
import TherapyRoom from "@/public/static/images/therapyRoom.jpg";
import IntroText from "./IntroText";

const Intro = () => {
  return (
    <section className="w-full max-w-7xl mx-auto py-12 grid grid-cols-1 xl:grid-cols-2 gap-12 items-start max-xl:px-5">
      <div className="w-full h-full aspect-video relative rounded-xl overflow-hidden shadow-lg max-xl:hidden">
        <Image
          alt="Therapy Room"
          src={TherapyRoom}
          fill
          className="object-cover"
          priority
        />
      </div>
      <IntroText />
    </section>
  );
};

export default Intro;
