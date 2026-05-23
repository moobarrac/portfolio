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
};

const profiles: Profile[] = [
  { title: "GitHub", icon: FaGithubAlt, link: links.github },
  { title: "LinkedIn", icon: FaLinkedinIn, link: links.linkedin },
  { title: "Twitter", icon: FaTwitter, link: links.twitter },
  { title: "Instagram", icon: FaInstagram, link: links.instagram },
];

const Profiles = () => (
  <ul className="flex gap-3">
    {profiles.map(({ title, link, icon: Icon }) => (
      <li key={title}>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          aria-label={title}
          className="flex items-center justify-center w-9 h-9 rounded-full border border-line text-fg-muted hover:text-accent hover:border-accent transition-colors"
        >
          <Icon aria-hidden="true" />
        </a>
      </li>
    ))}
  </ul>
);

export default Profiles;
