import { FaLocationArrow } from "react-icons/fa";
import { Section } from "../types/Section";
import { getSectionHeading } from "../utils";
import { WorkExperienceTypes, workExperiences } from "../data/workExperience";

type Props = {
  data: WorkExperienceTypes;
};

const WorkExperience: React.FC<Props> = ({ data }) => (
  <div className="flex group">
    <div className="ml-1 w-px flex-shrink-0 bg-line" />

    <div className="-ml-[5px] mt-8 flex-shrink-0 relative w-[10px] h-[10px] rounded-full bg-accent" />

    <div className="mt-5 ml-8 grid gap-2 pb-2">
      <div>
        <h3>
          <span className="text-base font-bold">{data.name}</span>{" "}
          <span className="text-xs text-fg-muted">
            ({data.period.start} – {data.period.end})
          </span>
        </h3>
        <h4 className="text-sm text-fg-muted">{data.position}</h4>
      </div>

      <p className="my-1 flex gap-2 items-center text-xs text-fg-subtle">
        <FaLocationArrow aria-hidden="true" />
        <span>{data.location}</span>
      </p>

      <p className="text-sm leading-relaxed text-fg-muted">{data.summary}</p>

      <p className="text-xs leading-relaxed text-fg-subtle">
        <strong className="text-fg-muted">Key Focus:</strong>{" "}
        {data.keyFocus.join(", ")}
      </p>
    </div>
  </div>
);

const WorkExperienceTimeline = () => {
  return (
    <div id={Section.WorkExperience}>
      {getSectionHeading(Section.WorkExperience)}

      <div className="flex flex-col">
        {workExperiences.map((data) => (
          <WorkExperience key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default WorkExperienceTimeline;
