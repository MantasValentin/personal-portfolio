import { github } from "@/assets";
import { projects } from "../../constants";
import React from "react";
import Image, { StaticImageData } from "next/image";
import Tilt from "react-parallax-tilt";
import Link from "next/link";

interface Project {
  name: string;
  description: string;
  tags: {
    name: string;
  }[];
  image: StaticImageData;
  sourceCodeLink: string;
  websiteLink: string;
}

const ProjectCard: React.FC<Project> = ({
  image,
  sourceCodeLink,
  tags,
  name,
  description,
  websiteLink,
}) => {
  return (
    <Tilt
      scale={1.05}
      transitionSpeed={1000}
      className="bg-tertiary p-6 rounded-2xl w-[360px]"
    >
      <div className="relative w-full h-[230px]">
        <Image
          src={image}
          alt="website image"
          className="w-full h-full object-cover rounded-2xl"
        />

        <div className="absolute inset-0 flex justify-end m-2 gap-1">
          <Link
            href={websiteLink}
            target="_blank"
            className="button black-gradient flex justify-center items-center w-10 h-10 rounded-full cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-1/2 h-1/2"
            >
              <path
                fillRule="evenodd"
                d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <Link
            href={sourceCodeLink}
            target="_blank"
            className="button black-gradient flex justify-center items-center w-10 h-10 rounded-full cursor-pointer"
          >
            <Image src={github} alt="source code" className="w-1/2 h-1/2" />
          </Link>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-secondary font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-base">{description}</p>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        <p className="text-sm text-blue-600" key={`${name}-${tags[0].name}`}>
          #{tags[0].name}
        </p>
        <p className="text-sm text-green-600" key={`${name}-${tags[1].name}`}>
          #{tags[1].name}
        </p>
        <p className="text-sm text-pink-600" key={`${name}-${tags[2].name}`}>
          #{tags[2].name}
        </p>
      </div>
    </Tilt>
  );
};

const Works: React.FC = () => {
  return (
    <section
      className="flex flex-col w-full items-center bg-primary px-8 pt-20"
      id="Projects"
    >
      <div className="flex flex-col gap-y-4 items-center text-center max-w-6xl">
        <h2 className="text-5xl font-semibold text-secondary">Projects</h2>

        <div className="text-lg max-w-3xl">
          My skills and experience are showcased through real-world project
          examples, including links to code repositories, and live demos,
          highlighting my ability to handle complex problems and multiple
          technologies.
        </div>

        <div className="flex flex-wrap items-center justify-center gap-10 pt-8">
          {projects.map((project, index) => (
            <ProjectCard {...project} key={`${index}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
