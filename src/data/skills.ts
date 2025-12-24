import {
  SiNextdotjs,
  SiRedux,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiStyledcomponents,
  SiGithub,
  SiGit,
  SiHtml5,
  SiFirebase,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiReactquery,
  SiJest,
  SiTestinglibrary,
  SiGraphql,
  SiWebpack,
} from "react-icons/si";
import { IconType } from "react-icons";

type Skill = {
  id: number;
  icon: IconType;
  name: string;
  className?: string;
};

export const skills: Skill[] = [
  {
    id: 1,
    icon: SiReact,
    name: "UI Engineering",
    className: "hover:bg-[#fff]",
  },
  {
    id: 2,
    icon: SiReact,
    name: "React",
    className: "hover:bg-[#61DAFB]",
  },
  {
    id: 3,
    icon: SiNextdotjs,
    name: "Next.js",
    className: "hover:bg-[#00a7e5]",
  },
  {
    id: 4,
    icon: SiTypescript,
    name: "TypeScript",
    className: "hover:bg-[#007acc]",
  },
  {
    id: 5,
    icon: SiJavascript,
    name: "JavaScript",
    className: "hover:bg-[#F0DB4F]",
  },
  {
    id: 6,
    icon: SiRedux,
    name: "Redux",
    className: "hover:bg-[#764ABC]",
  },
  {
    id: 7,
    icon: SiReactquery,
    name: "React Query",
    className: "hover:bg-[#FF4154]",
  },
  {
    id: 8,
    icon: SiCss3,
    name: "CSS",
    className: "hover:bg-[#264de4]",
  },
  {
    id: 9,
    icon: SiTailwindcss,
    name: "Tailwind CSS",
    className: "hover:bg-[#38c172]",
  },
  {
    id: 10,
    icon: SiBootstrap,
    name: "Bootstrap",
    className: "hover:bg-[#563d7c]",
  },
  {
    id: 11,
    icon: SiStyledcomponents,
    name: "Styled Components",
    className: "hover:bg-[#BF4F74]",
  },
  {
    id: 12,
    icon: SiGit,
    name: "Git",
    className: "hover:bg-[#F1502F]",
  },
  {
    id: 13,
    icon: SiGithub,
    name: "GitHub",
    className: "hover:bg-[#f1e536]",
  },
  {
    id: 14,
    icon: SiHtml5,
    name: "HTML",
    className: "hover:bg-[#e34c26]",
  },
  {
    id: 15,
    icon: SiNodedotjs,
    name: "Node.js",
    className: "hover:bg-[#3C873A]",
  },
  {
    id: 16,
    icon: SiExpress,
    name: "Express",
    className: "hover:bg-[#3ab71e]",
  },
  {
    id: 17,
    icon: SiMongodb,
    name: "MongoDB",
    className: "hover:bg-[#47A248]",
  },
  {
    id: 18,
    icon: SiFirebase,
    name: "Firebase",
    className: "hover:bg-[#FFA611]",
  },
  { id: 19, icon: SiJest, name: "Jest", className: "hover:bg-[#C21325]" },
  {
    id: 20,
    icon: SiTestinglibrary,
    name: "React Testing Library",
    className: "hover:bg-[#E33332]",
  },
  { id: 21, icon: SiGraphql, name: "GraphQL", className: "hover:bg-[#E535AB]" },
  { id: 22, icon: SiWebpack, name: "Webpack", className: "hover:bg-[#1C78C0]" },
];
