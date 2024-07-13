import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

const Gallery = () => {
  return (
    <div id="gallery" className="bg-black  px-2 lg:pl-20 lg:pr-10 py-16 overflow-x-hidden">
      <Fade duration={2000}>
      <div className="flex items-center justify-center gap-x-5 w-full">
        <hr className="border-primary w-20" />
        <h2 className="text-5xl text-primary w-fit">Gallery</h2>
        <hr className="border-primary w-20" />
      </div>
      </Fade>
      <div className="flex flex-wrap gap-x-5 gap-y-8 justify-between mt-14">
        <Slide direction="left" cascade duration={1000}>
          <StaticImage
            src="../images/gallery/1.png"
            alt="Ololade in style"
            className="max-w-full lg:max-w-[204px] lg:hover:scale-[1.5] delay-1000 hover:z-10 transition-transform duration-300 ease-in-out"
            formats={["AUTO", "PNG"]}
          />
          <StaticImage
            src="../images/gallery/2.png"
            alt="Ololade in style"
            className="max-w-full lg:max-w-[204px] lg:hover:scale-[1.5] delay-1000 hover:z-10 transition-transform duration-300 ease-in-out"
            formats={["AUTO", "PNG"]}
          />
          <StaticImage
            src="../images/gallery/3.png"
            alt="Ololade in style"
            className="max-w-full lg:max-w-[204px] lg:hover:scale-[1.5] delay-1000 hover:z-10 transition-transform duration-300 ease-in-out"
            formats={["AUTO", "PNG"]}
          />
          <StaticImage
            src="../images/gallery/4.png"
            alt="Ololade in style"
            className="max-w-full lg:max-w-[204px] lg:hover:scale-[1.5] delay-1000 hover:z-10 transition-transform duration-300 ease-in-out"
            formats={["AUTO", "PNG"]}
          />
        </Slide>
        <Slide direction="right" cascade duration={1000}>

          <StaticImage
            src="../images/gallery/5.png"
            alt="Ololade in style"
            className="max-w-full lg:max-w-[204px] lg:hover:scale-[1.5] delay-1000 hover:z-10 transition-transform duration-300 ease-in-out"
            formats={["AUTO", "PNG"]}
          />
          <StaticImage
            src="../images/gallery/6.png"
            alt="Ololade in style"
            className="max-w-full lg:max-w-[204px] lg:hover:scale-[1.5] delay-1000 hover:z-10 transition-transform duration-300 ease-in-out"
            formats={["AUTO", "PNG"]}
          />
          <StaticImage
            src="../images/gallery/7.png"
            alt="Ololade in style"
            className="max-w-full lg:max-w-[204px] lg:hover:scale-[1.5] delay-1000 hover:z-10 transition-transform duration-300 ease-in-out"
            formats={["AUTO", "PNG"]}
          />
          <StaticImage
            src="../images/gallery/8.png"
            alt="Ololade in style"
            className="max-w-full lg:max-w-[204px] lg:hover:scale-[1.5] delay-1000 hover:z-10 transition-transform duration-300 ease-in-out"
            formats={["AUTO", "PNG"]}
          />
        </Slide>
      </div>
    </div>
  );
};

export default Gallery;
