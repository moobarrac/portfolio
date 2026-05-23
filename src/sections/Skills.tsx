import { Section } from "../types/Section";
import { getSectionHeading } from "../utils";
import { skills } from "../data/skills";

const Skills = () => (
  <div id={Section.Skills} className="py-16">
    {getSectionHeading(Section.Skills)}

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
      {skills.map(({ id, name, icon: Icon }) => (
        <div
          key={id}
          className="px-4 py-3 border border-line rounded-md flex items-center gap-3 bg-bg-elevated hover:border-accent transition-colors"
        >
          <Icon className="w-4 h-4 text-fg-muted shrink-0" aria-hidden="true" />
          <span className="truncate text-sm">{name}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
