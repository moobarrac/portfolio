import Button from "../components/Button";
import { FaSpotify } from "react-icons/fa";
import { Section } from "../types/Section";
import { getSectionHeading, openURLInNewTab } from "../utils";

const Music = () => (
  <div id={Section.Music} className="py-24">
    {getSectionHeading(Section.Music)}

    <div className="grid md:grid-cols-3 gap-12">
      <div className="max-w-full text-sm md:text-base leading-relaxed text-fg-muted space-y-4">
        <p>
          If knowing someone&apos;s music tells you something about them,
          here&apos;s mine.
        </p>

        <p>
          Everyday Tracks is the Spotify playlist I keep current — what&apos;s
          actually on rotation, not a curated highlight reel.
        </p>

        <Button
          icon={FaSpotify}
          className="mt-8 text-sm"
          onClick={() =>
            openURLInNewTab(
              "https://open.spotify.com/playlist/320UFAuOmWray0bYwGHZ0z"
            )
          }
        >
          Listen to Everyday Tracks on Spotify
        </Button>
      </div>
      <iframe
        title="Everyday Tracks playlist on Spotify"
        src="https://open.spotify.com/embed/playlist/320UFAuOmWray0bYwGHZ0z?utm_source=generator&theme=0"
        width="100%"
        height="380"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="rounded-md col-span-2"
      />
    </div>
  </div>
);

export default Music;
