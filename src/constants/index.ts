import { StaticImageData } from "next/image";
import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  nextjs,
  mysql,
  scss,
  git,
  threejs,
  wondro,
} from "../assets";

interface Tech {
  name: string;
  icon: StaticImageData;
}

const technologies: Tech[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "SCSS",
    icon: scss,
  },
  {
    name: "git",
    icon: git,
  },
];

const projects = [
  {
    name: "Wondro",
    description:
      "A fleshed-out e-commerce website with a minimalist design prioritizing an easy user experience, using Firebase for user authentication and data storage. Lacks payment processing.",
    tags: [
      {
        name: "nextjs",
      },
      {
        name: "firebase",
      },
      {
        name: "tailwind",
      },
    ],
    image: wondro,
    sourceCodeLink: "https://github.com/MantasValentin/wondro",
    websiteLink: "https://wondro.vercel.app",
  },
];

const experiences = [];

const testimonials = [];

export { technologies, experiences, testimonials, projects };
