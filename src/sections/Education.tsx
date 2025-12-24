import { FaLocationArrow } from "react-icons/fa";
import { Section } from "../types/Section";
import { getSectionHeading } from "../utils";
import { EducationTypes, educations } from "../data/education";

type Props = {
  data: EducationTypes;
};

const Education: React.FC<Props> = ({ data }) => (
  <div className="flex group">
    <div className={`ml-1 w-1 flex-shrink-0 bg-[#848484]`} />
    <div className="-ml-2 mt-8 flex-shrink-0 relative w-3 h-3 rounded-full shadow-lg bg-black group-hover:w-6 transition-[width]" />
    <div className="mt-5 ml-8 grid gap-2 pb-2">
      <div>
        <h3>
          <span className="text-base font-bold">{data.institution}</span>{" "}
          <span className="text-xs">
            ({data.period.start} - {data.period.end})
          </span>
        </h3>
        <h4>
          {data.degree}, {data.study}
        </h4>
      </div>

      <h5 className="my-1 flex gap-2 items-center text-xs">
        <FaLocationArrow />
        <span>{data.location}</span>
      </h5>
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
