import React from "react";
import Blob from "./Blob";
import StarsCanvas from "./StarsCanvas";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-full">
      <div className="flex flex-col justify-center items-center absolute w-full h-full px-10 text-4xl max-md:text-3xl max-xs:text-xl bg-transparent z-10 select-none text-center">
        <h1 className="">
          Hello There, I'm <span className="text-black">Mantas</span>
        </h1>
        <p className="">Front End Developer</p>
      </div>
      <div className="relative w-full h-full z-0">
        <StarsCanvas />
        <Blob />
      </div>
    </section>
  );
};

export default Hero;