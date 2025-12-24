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
      "Frontend Engineer on the Data/Claims team, building a scalable claims management experience with React, Next.js, and TypeScript. I translate complex claims workflows into fast, accessible UI and reusable components while partnering closely with product, design, and backend teams.",
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
    name: "World Leaves",
    period: { start: "November 2023", end: "March 2025" },
    position: "Software Engineer",
    location: "USA",
    summary:
      "Full-stack Software Engineer building real-time, responsive web experiences with React, Next.js, and TypeScript. I integrated REST APIs and Socket.IO for live updates, improved performance, and maintained clean, maintainable code across the frontend and backend.",
    keyFocus: [
      "React",
      "NextJS",
      "Typescript",
      "Socket.io",
      "NodeJS",
      "PostgresQL",
    ],
  },
  {
    id: 3,
    name: "Patricia Technologies",
    period: { start: "September 2021", end: "May 2022" },
    position: "Frontend Engineer",
    location: "Lagos, Nigeria",
    summary:
      "Frontend Engineer building and maintaining user-facing interfaces with React and TypeScript, collaborating closely with engineers and product stakeholders. I delivered responsive UI and improved state driven workflows using Redux and Bootstrap-based components.",
    keyFocus: ["React", "Bootstrap", "TypeScript", "Redux"],
  },
  {
    id: 4,
    name: "Universal Horizon Limited",
    period: { start: "April 2020", end: "September 2021" },
    position: "Frontend Developer",
    location: "Lekki, Nigeria",
    summary:
      "Frontend Developer on the Support team, building engagement features and improving existing React interfaces to enhance user experience and operational workflows. I handled bug fixes, UI improvements, and state management updates using React, Redux, and Git.",
    keyFocus: ["React", "Redux", "CSS", "Git/GitHub"],
  },
];
