import Button from "../components/Button";
import ImageLink from "../components/ImageLink";
import links from "../data/links";
import projectsList from "../data/projects";
import { BiLinkExternal } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { Section } from "../types/Section";
import { getSectionHeading, openURLInNewTab } from "../utils";
import { Tooltip } from "react-tooltip";

const Projects = () => (
  <div id={Section.Projects} className="py-24">
    {getSectionHeading(Section.Projects)}

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projectsList.map((project, index) => (
        <div
          key={project.id}
          className="flex flex-col gap-2 animate-fade-in"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <ImageLink
            alt={project.name}
            src={project.image}
            href={project.link?.web || project.link?.github}
          />

          <h4 className="text-lg font-bold">{project.name}</h4>

          <p className="prose prose-sm prose-[#848484] ">{project.summary}</p>

          <p className="text-xs leading-relaxed font-bold">
            {project.tags.map((tag) => `#${tag}`).join(" ")}
          </p>

          {project.link && (
            <div className="mt-1 flex gap-5">
              {project.link.web && (
                <a
                  href={project.link.web}
                  target="_blank"
                  rel="noreferrer"
                  data-tooltip-id="web-link-tip"
                >
                  <BiLinkExternal fontSize={18} />
                </a>
              )}

              {project.link.github && (
                <a
                  href={project.link.github}
                  target="_blank"
                  rel="noreferrer"
                  data-tooltip-id="github-link-tip"
                >
                  <FaGithub fontSize={18} />
                </a>
              )}
              <Tooltip
                id="web-link-tip"
                place="bottom"
                content="Visit Website"
              />
              <Tooltip
                id="github-link-tip"
                place="bottom"
                content="Check Source Code"
              />
            </div>
          )}
        </div>
      ))}
    </div>

    <Button
      icon={FaGithub}
      className="mt-8"
      onClick={() => openURLInNewTab(links.github)}
    >
      Projects on GitHub
    </Button>
  </div>
);

export default Projects;
