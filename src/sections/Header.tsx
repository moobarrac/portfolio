import React from "react";
import Lottie from "lottie-react";
import data from "../images/99312-developer-skills.json";
import Profiles from "../components/Profiles";
import Button from "../components/Button";
import { openURLInNewTab } from "../utils";
import { resumeLink } from "../data/links";

const Header: React.FC = () => {
  return (
    <div
      id="header"
      className="h-screen w-full  items-center justify-center gap-4 grid md:grid-cols-2 py-24"
    >
      <div className="flex items-center justify-center flex-col gap-6 md:gap-10 col-span-1">
        <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">
          Welcome, This is <span className="">Mubarak</span>
        </h2>
        <div>
          <h3 className=" text-base md:text-2xl text-[#0D47A1] font-code">
            A Software Engineer
          </h3>
        </div>
        <Profiles />
        <div className="flex gap-8">
          <Button onClick={() => openURLInNewTab(resumeLink)}>Resume</Button>
        </div>
      </div>
      <div className="col-span-1 bg-black h-full flex items-center justify-center rounded-3xl">
        <div className="w-72 md:w-96 h-72 md:h-96  lg:ml-24 ">
          <Lottie 
            animationData={data} 
            loop={true}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
