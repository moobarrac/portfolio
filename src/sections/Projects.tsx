import Button from "../components/Button";
import ImageLink from "../components/ImageLink";
import links from "../data/links";
import projectsList from "../data/projects";
import { BiLinkExternal } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { Section, type Project } from "../types/Section";
import { getSectionHeading, openURLInNewTab } from "../utils";

const ProjectLinks = ({ project }: { project: Project }) =>
  project.link ? (
    <div className="mt-1 flex gap-5">
      {project.link.web && (
        <a
          href={project.link.web}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.name} — visit website`}
          className="text-fg-muted hover:text-accent transition-colors"
        >
          <BiLinkExternal fontSize={18} aria-hidden="true" />
        </a>
      )}
      {project.link.github && (
        <a
          href={project.link.github}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.name} — view source on GitHub`}
          className="text-fg-muted hover:text-accent transition-colors"
        >
          <FaGithub fontSize={18} aria-hidden="true" />
        </a>
      )}
    </div>
  ) : null;

const ProjectCard = ({ project }: { project: Project }) => (
  <article className="flex flex-col gap-3">
    <ImageLink
      alt={project.name}
      src={project.image}
      href={project.link?.web || project.link?.github}
    />
    {project.featured && (
      <span className="text-xs font-code uppercase tracking-widest text-accent">
        Featured
      </span>
    )}
    <h3 className="text-lg font-bold">{project.name}</h3>
    <p className="text-sm leading-relaxed text-fg-muted">{project.summary}</p>
    <p className="text-xs leading-relaxed text-fg-subtle">
      {project.tags.map((tag) => `#${tag}`).join(" ")}
    </p>
    <ProjectLinks project={project} />
  </article>
);

const Projects = () => (
  <div id={Section.Projects} className="py-24">
    {getSectionHeading(Section.Projects)}

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projectsList.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>

    <Button
      icon={FaGithub}
      className="mt-12"
      onClick={() => openURLInNewTab(links.github)}
    >
      Projects on GitHub
    </Button>
  </div>
);

export default Projects;
