import { FaLocationArrow } from "react-icons/fa";
import { Section } from "../types/Section";
import { getSectionHeading } from "../utils";
import { EducationTypes, educations } from "../data/education";

type Props = {
  data: EducationTypes;
};

const Education: React.FC<Props> = ({ data }) => (
  <div className="flex group">
    <div className="ml-1 w-px flex-shrink-0 bg-line" />
    <div className="-ml-[5px] mt-8 flex-shrink-0 relative w-[10px] h-[10px] rounded-full bg-accent" />
    <div className="mt-5 ml-8 grid gap-2 pb-2">
      <div>
        <h3>
          <span className="text-base font-bold">{data.institution}</span>{" "}
          <span className="text-xs text-fg-muted">
            ({data.period.start} – {data.period.end})
          </span>
        </h3>
        <h4 className="text-sm text-fg-muted">
          {data.degree}, {data.study}
        </h4>
      </div>

      <p className="my-1 flex gap-2 items-center text-xs text-fg-subtle">
        <FaLocationArrow aria-hidden="true" />
        <span>{data.location}</span>
      </p>

      {data.note && (
        <p className="text-xs text-fg-subtle">{data.note}</p>
      )}
    </div>
  </div>
);

const EducationTimeline = () => {
  return (
    <div id={Section.Education}>
      {getSectionHeading(Section.Education)}

      <div className="flex flex-col">
        {educations.map((data) => (
          <Education key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default EducationTimeline;
