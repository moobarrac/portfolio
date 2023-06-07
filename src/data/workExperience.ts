export type WorkExperienceTypes = {
  id: number;
  name: string;
  period: { start: string; end: string };
  position: string;
  location: string;
  summary: string;
  keyFocus: string[];
};

export const workExperiences: WorkExperienceTypes[] = [
  {
    id: 1,
    name: "Reliance Health",
    period: { start: "March 2022", end: "Present" },
    position: "Frontend Engineer",
    location: "Lagos, Nigeria",
    summary:
      "As part of the Data/Claims Team, my role involve collaborating with the claims team to understand the requirements and workflows of the claims process. I design and implement user interfaces and functionalities for the claims management system.",
    keyFocus: ["React", "Typescript", "Tailwind CSS", "NextJs", "Git/GitHub"],
  },
  {
    id: 2,
    name: "Universal Horizon Limited",
    period: { start: "August 2020", end: "March 2022" },
    position: "Frontend Developer",
    location: "Lagos, Nigeria",
    summary:
      "As part of the Support team, I was tasked to build user engagement features, tackle user support issues and incidents faced across the company.",
    keyFocus: ["React", "Redux", "CSS", "Git/GitHub"],
  },
  {
    id: 3,
    name: "Seal World Communications",
    period: { start: "March 2018", end: "July 2020" },
    position: "Web Developer Intern",
    location: "Lagos, Nigeria",
    summary:
      "As a Intern in Seal World Communication, I had the oppurtunity to gain hands-on experience in web development, worked on real-world projects, collaborated with a team, learned from experienced developers.",
    keyFocus: ["HTML", "CSS", "Javascript", "Bootstrap"],
  },
];