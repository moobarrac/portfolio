import React from "react";
import { Section } from "../types/Section";
import { getSectionHeading } from "../utils";
const AboutMeImg = require("../images/aboutme.jpg");

const AboutMe = () => (
  <div id={Section.AboutMe} className="py-12">
    {getSectionHeading(Section.AboutMe)}

    <div className="grid md:grid-cols-4 gap-12">
      <div className="relative col-span-1 block">
        <img src={AboutMeImg} alt="Selfie Boy" />
      </div>

      <div className="col-span-3 max-w-full prose prose-sm md:prose-base prose-neutral ">
        <p>Hello World!</p>

        <p>
          I&apos;m Mubarak Abdulwahab, I&apos;m a Frontend Developer, with a
          strong problem-solving mindset, using my technical expertise to
          overcome challenges and create innovative solutions that elevate user
          experiences and make an impact on people&apos;s lives. This website
          was made to showcase all of what I can do and plan to do.
        </p>

        <p>
          Throughout my career, I have had the opportunity to work on a wide
          variety of projects for clients in various industries. I have a proven
          track record of delivering high-quality work on time and within
          budget. I am also highly adaptable and always eager to learn new
          technologies and skills.
        </p>
      </div>
    </div>
  </div>
);

export default AboutMe;
