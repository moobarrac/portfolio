import React from "react";
import { AboutMe, Contact, Header, Music, Projects, Skills } from "./sections";
import WorkExperienceTimeline from "./sections/WorkExperience";
import EducationTimeline from "./sections/Education";

function App() {
  return (
    <div className="px-8 md:px-16 lg:px-24 text-black bg-[#fff]">
      <Header />
      <AboutMe />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-28">
        <WorkExperienceTimeline />
        <EducationTimeline />
      </div>
      <Skills />
      <Projects />
      <Music />
      <Contact />
    </div>
  );
}

export default App;
