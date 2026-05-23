import type { IconType } from "react-icons";

export enum Section {
  "AboutMe" = "about-me",
  "Education" = "education",
  "Projects" = "projects",
  "Skills" = "skills",
  "WorkExperience" = "work-experience",
  "Music" = "music",
  "Contact" = "contact",
}

export type SectionMap = Record<Section, { icon: IconType; title: string }>;

export type SectionArray = {
  id: Section;
  title: string;
  icon: IconType;
}[];

export type Project = {
  id: number;
  image: string;
  name: string;
  summary: string;
  tags: string[];
  featured?: boolean;
  link?: {
    web?: string;
    github?: string;
  };
};
