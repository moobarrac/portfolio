import Heading from "../components/Heading";
import sectionsList from "../data/sections";
import type { Section } from "../types/Section";

export const openURLInNewTab = (url: string) =>
  window.open(url, "_blank", "noopener,noreferrer");

export const getSectionHeading = (section: Section) => (
  <Heading icon={sectionsList[section].icon}>
    {sectionsList[section].title}
  </Heading>
);
