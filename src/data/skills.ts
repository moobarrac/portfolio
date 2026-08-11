import {
  SiNextdotjs,
  SiRedux,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiGit,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiPython,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiSequelize,
  SiReactquery,
  SiSwr,
  SiMui,
  SiSocketdotio,
  SiGraphql,
  SiJest,
  SiTestinglibrary,
  SiDocker,
  SiPostman,
} from "react-icons/si";
import { FaAmazon } from "react-icons/fa";
import { IconType } from "react-icons";

type Skill = {
  id: number;
  icon: IconType;
  name: string;
};

export const skills: Skill[] = [
  { id: 1, icon: SiTypescript, name: "TypeScript" },
  { id: 2, icon: SiJavascript, name: "JavaScript" },
  { id: 3, icon: SiPython, name: "Python" },
  { id: 4, icon: SiPhp, name: "PHP" },
  { id: 5, icon: SiReact, name: "React" },
  { id: 6, icon: SiNextdotjs, name: "Next.js" },
  { id: 7, icon: SiRedux, name: "Redux Toolkit" },
  { id: 8, icon: SiReactquery, name: "React Query" },
  { id: 9, icon: SiSwr, name: "SWR" },
  { id: 10, icon: SiTailwindcss, name: "Tailwind CSS" },
  { id: 11, icon: SiMui, name: "Material UI" },
  { id: 12, icon: SiNodedotjs, name: "Node.js" },
  { id: 13, icon: SiExpress, name: "Express" },
  { id: 14, icon: SiSequelize, name: "Sequelize" },
  { id: 15, icon: SiPostgresql, name: "PostgreSQL" },
  { id: 16, icon: SiMysql, name: "MySQL" },
  { id: 17, icon: SiMongodb, name: "MongoDB" },
  { id: 18, icon: SiSocketdotio, name: "Socket.IO" },
  { id: 19, icon: SiGraphql, name: "GraphQL" },
  { id: 20, icon: FaAmazon, name: "AWS" },
  { id: 21, icon: SiDocker, name: "Docker" },
  { id: 22, icon: SiPostman, name: "Postman" },
  { id: 23, icon: SiGit, name: "Git" },
  { id: 24, icon: SiJest, name: "Jest" },
  { id: 25, icon: SiTestinglibrary, name: "Testing Library" },
];
