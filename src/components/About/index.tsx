import React from "react";
import Tech from "../Tech";

const About = () => {
  return (
    <section id="About" className="pt-20">
      <div className="flex flex-col w-full h-full items-center">
        <div className="flex flex-col gap-y-4 items-center text-center px-8 py-10 max-w-6xl">
          <h2 className="text-5xl font-semibold text-secondary">About Me</h2>
          <h3 className="text-2xl max-sm:text-lg font-bold">
            Beginner front-end developer located in Lithuania
          </h3>
          <p className="text-lg max-sm:text-base">
            As a web developer I bring a wealth of knowledge to the table with a
            focus on TypeScript, as well as experience in frameworks such as
            React, Next, SCSS, TailwindCSS, and Node. My passion lies in
            designing and maintaining responsive websites that offer seamless
            user experiences, and I take pride in crafting clean, engaging
            interfaces through optimized, reusable code. With my ability to
            create and utilize REST APIs and work with popular databases like
            MySQL and MongoDB, I offer a versatile skill set that can adapt to
            any project. As a quick learner and a team player who doesn't fear
            pushing himself and asking for help, I thrive in group
            environments where I can learn from others and receive valuable
            feedback on my work.
          </p>
        </div>
      </div>
      <Tech />
    </section>
  );
};

export default About;
