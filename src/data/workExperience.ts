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
    id: 5,
    name: "World Leaves, USA",
    period: { start: "November 2023", end: "Present" },
    position: "Senior Software Engineer",
    location: "Denver, USA",
    summary:
      "In my role at World Leaves, I am focused on building and optimizing front-end solutions using React and NextJS, integrating real-time communication between the front-end and back-end using REST and Socket.io, and maintaining code quality through TypeScript.",
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
    id: 1,
    name: "Reliance Health",
    period: { start: "March 2022", end: "November 2023" },
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
    id: 6,
    name: "KrownPay",
    period: { start: "Feb 2022", end: "May 2023" },
    position: "Full Stack Engineer",
    location: "Sydney, Australia",
    summary:
      "During my time at KrownPay, I developed and maintained cryptocurrency payment gateways, ensuring secure transactions and wallet integration using Node.js, Express, and MongoDB. On the frontend, I implemented interfaces with React, Context API, and Redux to provide businesses with seamless tools for tracking payments and generating invoices. ",
    keyFocus: [
      "React",
      "Context API",
      "Typescript",
      "Redux",
      "Node",
      "Express",
      "JWT",
    ],
  },
  {
    id: 2,
    name: "Patricia Technologies Limited",
    period: { start: "Apr 2021", end: "Feb 2022" },
    position: "Frontend Engineer",
    location: "Lagos, Nigeria",
    summary:
      "During my tenure at Patricia as a Frontend Engineer, I immersed myself in real-world projects, enhancing my skills through collaboration with seasoned developers and contributing to the team with my React and Typescript expertise..",
    keyFocus: ["React", "Bootstrap", "Typescript", "Redux"],
  },
  {
    id: 3,
    name: "Universal Horizon Limited",
    period: { start: "Aug 2019", end: "Apr 2021" },
    position: "Frontend Developer",
    location: "Lagos, Nigeria",
    summary:
      "As a Frontend Developer with Universal Horizon Limited, I played a crucial role in the Support team, focusing on developing user engagement features and addressing support issues, thereby enhancing user experience and operational efficiency.",
    keyFocus: ["React", "Redux", "CSS", "Git/GitHub"],
  },
  {
    id: 4,
    name: "Seal World Communications",
    period: { start: "March 2018", end: "June 2019" },
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
