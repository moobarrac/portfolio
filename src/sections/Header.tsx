import React from "react";
import Profiles from "../components/Profiles";
import Button from "../components/Button";
import { openURLInNewTab } from "../utils";
import { resumeLink } from "../data/links";

const Header: React.FC = () => (
  <header
    id="header"
    className="min-h-[80vh] flex flex-col justify-center py-24 max-w-3xl"
  >
    <p className="text-sm font-code uppercase tracking-widest text-accent mb-6">
      Software Engineer
    </p>
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
      Mubarak Abdulwahab
    </h1>
    <p className="text-base md:text-lg leading-relaxed text-fg-muted mb-10 max-w-2xl">
      I build web applications end-to-end — interfaces, services, and the data
      model that ties them together. Comfortable across the stack, with a soft
      spot for real-time and form-heavy product work. Currently at{" "}
      <span className="text-fg font-semibold">Reliance Health</span>, shipping
      benefits, diagnosis, and pre-authorization tooling across backend
      services and microfrontends.
    </p>
    <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 sm:items-center">
      <div className="flex gap-5 items-center">
        <Button onClick={() => openURLInNewTab(resumeLink)}>Resume</Button>
        <a
          href="#projects"
          className="text-fg-muted hover:text-accent transition-colors text-sm font-semibold"
        >
          See my work →
        </a>
      </div>
      <Profiles />
    </div>
  </header>
);

export default Header;
