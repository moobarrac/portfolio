import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { Section } from "../types/Section";
import { getSectionHeading } from "../utils";
import { WorkExperienceTypes, workExperiences } from "../data/workExperience";

type Props = {
  data: WorkExperienceTypes;
};

const WorkExperience: React.FC<Props> = ({ data }) => (
  <div className="flex group">
    <div className={`ml-1 w-1 flex-shrink-0 bg-[#848484]`} />

    <div className="-ml-2 mt-8 flex-shrink-0 relative w-3 h-3 rounded-full shadow-lg bg-black group-hover:w-6 transition-[width]" />

    <div className="mt-5 ml-8 grid gap-2 pb-2">
      <div>
        <h3>
          <span className="text-base font-bold">{data.name}</span>{" "}
          <span className="text-xs">
            ({data.period.start} - {data.period.end})
          </span>
        </h3>
        <h4>{data.position}</h4>
      </div>

      <h5 className="my-1 flex gap-2 items-center text-xs">
        <FaLocationArrow />
        <span>{data.location}</span>
      </h5>

      <p className="prose prose-sm prose-[#848484] ">{data.summary}</p>

      <p className="text-xs leading-relaxed prose-sm prose-neutral dark:prose-invert">
        <strong>Key Focus:</strong> {data.keyFocus.join(", ")}
      </p>
    </div>
  </div>
);

const WorkExperienceTimeline = () => {
  return (
    <div id={Section.WorkExperience}>
      {getSectionHeading(Section.WorkExperience)}

      <div className="flex flex-col">
        {workExperiences.map((data, index) => (
          <WorkExperience key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default WorkExperienceTimeline;
