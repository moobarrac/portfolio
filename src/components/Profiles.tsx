import type { IconType } from "react-icons";
import {
  FaGithubAlt,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import links from "../data/links";

type Profile = {
  title: string;
  icon: IconType;
  link: string;
  className: string;
};

const profiles: Profile[] = [
  {
    title: "Instagram",
    icon: FaInstagram,
    link: links.instagram,
    className: "bg-[#e1306c]",
  },
  {
    title: "LinkedIn",
    icon: FaLinkedinIn,
    link: links.linkedin,
    className: "bg-[#2867b2]",
  },
  {
    title: "Twitter",
    icon: FaTwitter,
    link: links.twitter,
    className: "bg-[#1da1f2]",
  },
  {
    title: "GitHub",
    icon: FaGithubAlt,
    link: links.github,
    className: "bg-[#211f1f]",
  },
];
const Profiles = () => {
  return (
    <div className="flex gap-6  md:gap-12">
      {profiles.map(({ title, link, className, icon: Icon }, index) => (
        <span
          key={index}
          className={`p-4 h-8 w-8 flex items-center justify-center text-white text-sm md:text-xl rounded-full ease-in duration-400 ${className}`}
        >
          <a href={link} target="_blank" rel="noreferrer">
            <Icon />
            <span className="sr-only">{title}</span>
          </a>
        </span>
      ))}
    </div>
  );
};

export default Profiles;
