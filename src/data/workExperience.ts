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
    position: "Full-stack Engineer",
    location: "Lagos, Nigeria",
    summary:
      "Full-stack engineer at an HMO platform serving African markets. Owned end-to-end delivery of Benefits & Exclusions, Diagnosis Standardization, and Pre-Authorization automation — Node.js/Express/Sequelize services against PostgreSQL, plus React/Next.js/TypeScript microfrontends with a shared Tailwind component system used across internal products.",
    keyFocus: [
      "Node.js",
      "Express",
      "Sequelize",
      "PostgreSQL",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    id: 2,
    name: "World Leaves",
    period: { start: "November 2023", end: "March 2025" },
    position: "Software Engineer",
    location: "USA",
    summary:
      "Backend lead on a payments and gaming platform. Owned the wallet engine — transactions, balance tracking, refunds, webhook handling — with concurrency and idempotency safeguards; REST APIs with RBAC for admin and affiliate roles; an auth flow rewrite (session security, token refresh); real-time multiplayer via Socket.IO + Express + Sequelize; structured logging, Sentry, and uptime monitoring. Also shipped the React/Tailwind admin and finance dashboards on top.",
    keyFocus: [
      "Node.js",
      "Express",
      "Sequelize",
      "Socket.IO",
      "React",
      "Tailwind CSS",
      "Sentry",
    ],
  },
  {
    id: 3,
    name: "Patricia Technologies",
    period: { start: "September 2021", end: "May 2022" },
    position: "Frontend Engineer",
    location: "Lagos, Nigeria",
    summary:
      "Frontend engineer on customer and admin portals. Integrated multiple third-party payment gateways, built a reusable React + Material UI component library shared across surfaces, and partnered with backend on token auth, session management, and client-side encryption for sensitive transaction data.",
    keyFocus: ["React", "TypeScript", "Material UI", "Redux"],
  },
  {
    id: 4,
    name: "Universal Horizon Limited",
    period: { start: "April 2020", end: "September 2021" },
    position: "Frontend Developer",
    location: "Lekki, Nigeria",
    summary:
      "Frontend developer building and maintaining React applications: new feature work, legacy refactors for maintainability and readability, and performance tuning on existing surfaces. Worked closely with backend, QA, and design.",
    keyFocus: ["React", "JavaScript", "CSS"],
  },
];
