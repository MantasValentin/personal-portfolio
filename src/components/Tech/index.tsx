import { technologies } from "../../constants";
import React from "react";
import BallCanvas from "./Ball";

const Tech: React.FC = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-row flex-wrap justify-center gap-6 max-w-7xl">
        {technologies.map((technology) => (
          <div
            className="flex items-center justify-center w-32 h-w-32"
            key={technology.name}
          >
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
