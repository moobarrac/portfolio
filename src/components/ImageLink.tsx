import React from "react";
import { BiLinkExternal } from "react-icons/bi";

type Props = {
  src: string;
  alt: string;
  href?: string;
};

const ImageLink: React.FC<Props> = ({ src, alt, href }) => {
  const image = (
    <div className="aspect-[16/10] w-full">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover"
      />
    </div>
  );

  if (!href) {
    return (
      <div className="relative block overflow-hidden rounded-md border border-line bg-bg-elevated">
        {image}
      </div>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="relative block overflow-hidden rounded-md border border-line bg-bg-elevated group"
    >
      {image}
      <div className="absolute inset-0 bg-black/60 text-fg opacity-0 flex items-center justify-center transition-opacity group-hover:opacity-100">
        <BiLinkExternal fontSize={36} aria-hidden="true" />
      </div>
    </a>
  );
};

export default ImageLink;
