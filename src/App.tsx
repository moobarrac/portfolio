import { AboutMe, Contact, Header, Music, Projects, Skills } from "./sections";
import WorkExperienceTimeline from "./sections/WorkExperience";
import EducationTimeline from "./sections/Education";

function App() {
  return (
    <div className="px-8 md:px-16 lg:px-24 text-fg bg-bg">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-28">
        <WorkExperienceTimeline />
        <EducationTimeline />
      </div>
      <Projects />
      <Skills />
      <AboutMe />
      <Music />
      <Contact />
    </div>
  );
}

export default App;
