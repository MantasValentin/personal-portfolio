import React from "react";
import Tech from "../Tech";

const About = () => {
  return (
    <section id="About" className="pt-20">
      <div className="flex flex-col w-full h-full items-center">
        <div className="flex flex-col gap-y-4 items-center text-center px-8 py-10 max-w-6xl">
          <h2 className="text-5xl font-semibold text-secondary">About Me</h2>
          {/* <h3 className="text-2xl max-sm:text-lg font-bold">
            Full-stack developer located in Lithuania
          </h3> */}
          <p className="text-lg max-sm:text-base">
            As a web developer with a strong focus on TypeScript, I possess
            extensive knowledge and proficiency in front-end and back-end
            technologies. I have expertise in frameworks like React, Next, SCSS,
            TailwindCSS, and Node, allowing me to design responsive websites
            with clean, engaging interfaces through optimized, reusable code.
            Additionally, I am skilled in creating and utilizing REST APIs and
            working with databases such as MySQL and MongoDB. With experience in
            Redis for data caching and Docker for streamlined deployment, I
            ensure efficient system performance. As a quick learner and team
            player, I thrive in collaborative environments and value receiving
            feedback to continuously improve and adapt to any project's
            requirements.
          </p>
        </div>
      </div>
      <Tech />
    </section>
  );
};

export default About;
