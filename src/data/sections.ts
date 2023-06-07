import {  FaDev, FaPaperPlane, FaTools } from "react-icons/fa";
import { MdInfo, MdMusicNote, MdPerson, MdSchool, MdWork } from "react-icons/md";
import { Section, SectionArray, SectionMap } from "../types/Section";

const sectionsList: SectionMap = {
  [Section.AboutMe]: {
    icon: MdPerson,
    title: "About Me",
  },
  [Section.WorkExperience]: {
    icon: MdWork,
    title: "Work Experience",
  },
  [Section.Education]: {
    icon: MdSchool,
    title: "Education",
  },
  [Section.Skills]: {
    icon: FaTools,
    title: "Skills",
  },
  [Section.Projects]: {
    icon: FaDev,
    title: "Projects",
  },
  [Section.Music]: {
    icon: MdMusicNote,
    title: "Music",
  },
  [Section.Contact]: {
    icon: FaPaperPlane,
    title: "Contact",
  },
  [Section.AboutRotW]: {
    icon: MdInfo,
    title: "About Resume on the Web",
  },
};

export const sectionsArray: SectionArray = Object.entries(sectionsList).map(([id, { icon, title }]) => ({
  id: id as Section,
  icon,
  title,
}));

export default sectionsList;