import Button from "../components/Button";
import { FaSpotify } from "react-icons/fa";
import { Section } from "../types/Section";
import { getSectionHeading, openURLInNewTab } from "../utils";

const Music = () => (
  <div id={Section.Music} className="py-24">
    {getSectionHeading(Section.Music)}

    <div className="grid md:grid-cols-3 gap-12">
      <div className="max-w-full prose prose-sm md:prose-base prose-[#848484]">
        <p>
          If you&apos;ve read about my profile so far and you found it
          interesting, studies show that knowing what type of music a person
          listens to would say a lot about them.
        </p>

        <p>
          Also, I&apos;ve been known for my good taste in music and I&apos;ve
          always wanted to share the latest and greatest hits through an easy
          medium, so here&apos;s a Spotify Playlist I&apos;ve created called
          Everyday Tracks: A dynamic playlist of what&apos;s on my daily roster
          of music.
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
        title="My Music"
        src="https://open.spotify.com/embed/playlist/320UFAuOmWray0bYwGHZ0z?utm_source=generator&theme=0"
        width="100%"
        height="512"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className=" md:block rounded col-span-2"
      />
    </div>
  </div>
);

export default Music;
