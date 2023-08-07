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
  minesweeoer,
  unregulated,
  postgresql,
  redis,
  graphql,
  docker,
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
  // {
  //   name: "PostgreSQL",
  //   icon: postgresql,
  // },
  // {
  //   name: "Redis",
  //   icon: redis,
  // },
  // {
  //   name: "GraphqQL",
  //   icon: graphql,
  // },
  {
    name: "Docker",
    icon: docker,
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
    name: "Unregulated",
    description:
      "Unregulated is a simplified Reddit-style social media site allowing users to form and manage groups, create posts with images, engage by giving feedback like commenting and liking",
    tags: [
      {
        name: "NextTS",
      },
      {
        name: "Firebase",
      },
      {
        name: "TailwindCSS",
      },
    ],
    image: unregulated,
    sourceCodeLink: "https://github.com/MantasValentin/Unregulated",
    websiteLink: "https://unregulated.vercel.app/",
  },
  {
    name: "Wondro",
    description:
      "Wondro is a fleshed-out e-commerce website with a minimalist design prioritizing an easy user experience, using Firebase for user authentication and data storage. Lacks payment processing",
    tags: [
      {
        name: "NextTS",
      },
      {
        name: "Firebase",
      },
      {
        name: "TailwindCSS",
      },
    ],
    image: wondro,
    sourceCodeLink: "https://github.com/MantasValentin/wondro",
    websiteLink: "https://wondro.vercel.app",
  },
  {
    name: "Minesweeper",
    description: "A replica of the old Minesweeper game with rankings",
    tags: [
      {
        name: "ReactTS",
      },
      {
        name: "Firebase",
      },
      {
        name: "SCSS",
      },
    ],
    image: minesweeoer,
    sourceCodeLink: "https://github.com/MantasValentin/Minesweeper",
    websiteLink: "https://minesweeper-29057.firebaseapp.com/",
  },
];

const experiences = [];

const testimonials = [];

export { technologies, experiences, testimonials, projects };
