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
      "At Reliance Health, in my role as a Frontend Engineer within the Data/Claims Team, I am integral in translating the needs and workflows of the claims team into a functional and user-friendly claims management system, utilizing my expertise to design and implement effective UI/UX.",
    keyFocus: [
      "React",
      "Typescript",
      "Tailwind CSS",
      "NextJs",
      "Git/GitHub",
      "Microservices",
    ],
  },

  {
    id: 2,
    name: "Patricia Technologies Limited",
    period: { start: "Sept 2021", end: "May 2022" },
    position: "Frontend Engineer",
    location: "Lagos, Nigeria",
    summary:
      "During my tenure at Patricia as a Frontend Engineer, I immersed myself in real-world projects, enhancing my skills through collaboration with seasoned developers and contributing to the team with my React and Typescript expertise..",
    keyFocus: ["React", "Bootstrap", "Typescript", "Redux"],
  },
  {
    id: 3,
    name: "Universal Horizon Limited",
    period: { start: "August 2020", end: "Sept 2021" },
    position: "Frontend Developer",
    location: "Lagos, Nigeria",
    summary:
      "As a Frontend Developer with Universal Horizon Limited, I played a crucial role in the Support team, focusing on developing user engagement features and addressing support issues, thereby enhancing user experience and operational efficiency.",
    keyFocus: ["React", "Redux", "CSS", "Git/GitHub"],
  },
  {
    id: 4,
    name: "Seal World Communications",
    period: { start: "March 2018", end: "June 2020" },
    position: "Web Developer",
    location: "Lagos, Nigeria",
    summary:
      "My internship at Seal World Communications was a formative experience, where I delved into web development, engaging in real-world projects, team collaboration, and learning from experienced developers, which laid a strong foundation for my career.",
    keyFocus: [
      " Fundamental web technologies",
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Bootstrap",
    ],
  },
];
