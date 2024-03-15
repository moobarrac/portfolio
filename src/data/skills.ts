// import { TbBrandReactNative } from "react-icons/tb";
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
    name: "Frontend Development",
    className: "hover:bg-[#fff]",
  },
  {
    id: 2,
    icon: SiReact,
    name: "ReactJS",
    className: "hover:bg-[#61DBFB]",
  },
  {
    id: 3,
    icon: SiRedux,
    name: "Redux",
    className: "hover:bg-[#00a7e5]",
  },
  {
    id: 4,
    icon: SiNextdotjs,
    name: "NextJS",
    className: "hover:bg-[#a41dadd5]",
  },
  {
    id: 5,
    icon: SiJavascript,
    name: "Javascript",
    className: "hover:bg-[#F0DB4F]",
  },
  {
    id: 6,
    icon: SiTypescript,
    name: "Typescript",
    className: "hover:bg-[#007acc]",
  },
  // {
  //   id: 7,
  //   icon: TbBrandReactNative,
  //   name: "React Native",
  //   className: "hover:bg-[#6180fb]",
  // },
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
    icon: SiFirebase,
    name: "Firebase",
    className: "hover:bg-[#FFA611]",
  },
  {
    id: 16,
    icon: SiNodedotjs,
    name: "Node JS",
    className: "hover:bg-[#ee4b4b]",
  },
  {
    id: 17,
    icon: SiExpress,
    name: "Express JS",
    className: "hover:bg-[#3ab71e]",
  },

  {
    id: 18,
    icon: SiMongodb,
    name: "MongoDB",
    className: "hover:bg-[#FFA611]",
  },
];
