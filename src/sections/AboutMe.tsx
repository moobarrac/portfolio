import { Section } from "../types/Section";
import { getSectionHeading } from "../utils";
import AboutMeImg from "../images/aboutme.webp";

const AboutMe = () => (
  <div id={Section.AboutMe} className="py-12">
    {getSectionHeading(Section.AboutMe)}

    <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-stretch">
      <div className="relative col-span-2 block w-full h-96 rounded-2xl overflow-hidden border border-line">
        <img
          src={AboutMeImg}
          alt="Mubarak Abdulwahab"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="col-span-3 max-w-full prose prose-sm md:prose-base prose-invert prose-neutral">
        <p>
          I&apos;m Mubarak — a software engineer building web applications
          end-to-end. I work across the stack: interfaces, services, APIs, and
          the data model that ties them together. I&apos;m happiest where the
          surface meets the data, because that&apos;s where the choices that
          decide how a feature actually feels get made.
        </p>

        <ul>
          <li>
            Currently at <strong>Reliance Health</strong> (HMO platform serving
            African markets), shipping Benefits &amp; Exclusions, Diagnosis
            Standardization, and Pre-Authorization tooling across backend
            services and microfrontends.
          </li>
          <li>
            Mechanical Engineering background (Bayero University, Kano); came
            into software through a web development internship in 2015 and
            moved in full-time in 2020.
          </li>
          <li>Based in Lagos, Nigeria.</li>
        </ul>
      </div>
    </div>
  </div>
);

export default AboutMe;
