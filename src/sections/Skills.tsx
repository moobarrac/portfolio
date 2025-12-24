import { Section } from "../types/Section";
import { getSectionHeading } from "../utils";
import { skills } from "../data/skills";

const Skills = () => (
  <div id={Section.Skills} className="py-16">
    {getSectionHeading(Section.Skills)}

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
      {skills.map(({ id, name, icon: Icon, className }) => (
        <div
          key={id}
          className={`px-4 py-2 border-[2px]  hover:border-[#1f1f1f] border-[#afafafbe] rounded flex items-center gap-4 transition-colors duration-700 hover:duration-100 bg-black text-white hover:text-black ${className} bg-black`}
        >
          <div className="w-5 h-5">
            <Icon width={20} height={20} />
          </div>

          <div className="min-w-0 flex-1 flex flex-col">
            <strong className="truncate">{name}</strong>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
