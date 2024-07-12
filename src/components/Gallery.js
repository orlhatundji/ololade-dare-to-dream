import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const Gallery = () => {
  return (
    <div className="bg-black  px-2 lg:pl-20 lg:pr-10 py-16">
      <div className="flex items-center justify-center gap-x-5 w-full">
        <hr className="border-primary w-20" />
        <h2 className="text-5xl text-primary w-fit">Gallery</h2>
        <hr className="border-primary w-20" />
      </div>
      <div className="flex flex-wrap gap-x-5 gap-y-8 justify-between mt-14">
        {Array.from({ length: 8 }).map((_, idx) => (
          <StaticImage
            key={idx}
            src="../images/hero.jpg"
            alt="Ololade in style"
            className="max-w-full lg:max-w-[204px] border"
            formats={["AUTO", "PNG"]}
            pngOptions={{ quality: 100, lossless: true }}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
