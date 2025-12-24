import { Section } from "../types/Section";
import { getSectionHeading } from "../utils";
import AboutMeImg from "../images/aboutme.jpg";

const AboutMe = () => (
  <div id={Section.AboutMe} className="py-12">
    {getSectionHeading(Section.AboutMe)}

    <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-stretch">
      <div className="relative col-span-2 block w-full h-96">
        <img
          src={AboutMeImg}
          alt="Selfie Boy"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      <div className="col-span-3 max-w-full prose prose-sm md:prose-base prose-neutral">
        <p>Welcome!</p>

        <p>
          My name is Mubarak Abdulwahab, a passionate Frontend Developer
          dedicated to crafting digital experiences that resonate and engage.
          With a knack for problem-solving and a penchant for innovation, I
          leverage my technical skills to conquer challenges and design
          solutions that not only elevate user experiences but also leave a
          lasting impact.
        </p>

        <p>
          This website serves as a canvas for my professional journey,
          showcasing the breadth of my capabilities and the future I aspire to
          create. With each project, I strive to blend aesthetics with
          functionality, ensuring that every piece of work is not only visually
          appealing but also user-centric and practical.
        </p>

        <p>
          My journey has taken me through a diverse array of projects and
          industries, allowing me to hone a versatile skill set and accumulate a
          wealth of experience. I consistently deliver results that exceed
          expectations while meeting deadlines and adhering to budgets. Ever
          curious, I thrive on continuous learning and adapting to the
          ever-evolving technological landscape.
        </p>
      </div>
    </div>
  </div>
);

export default AboutMe;
