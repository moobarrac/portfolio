export type EducationTypes = {
  id: number;
  institution: string;
  degree: string;
  study: string;
  location: string;
  period: { start: string; end: string };
};

export const educations: EducationTypes[] = [
  {
    id: 1,
    institution: "Bayero University, Kano",
    degree: "Bachelor's Degree",
    study: "Mechanical Engineering",
    location: "Kano, Nigeria",
    period: { start: "2017", end: "2022" },
  },
  {
    id: 2,
    institution: "De Prince Computer Institute",
    degree: "IT Internship",
    study: "Web Development",
    location: "Lagos, Nigeria",
    period: { start: "2015", end: "2017" },
  },
  {
    id: 3,
    institution: "Isolo High School",
    degree: "WASSCE",
    study: "High School",
    location: "Lagos, Nigeria",
    period: { start: "2011", end: "2017" },
  },
];
