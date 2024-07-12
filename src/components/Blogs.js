import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const Blogs = () => {
  return (
    <div className="bg-secondary-200  px-2 lg:pl-20 lg:pr-10 py-16">
      <div className="flex items-center justify-center gap-x-5 w-full">
        <h2 className="text-5xl text-center">Blogs</h2>
      </div>
      <div className="flex flex-col lg:flex-row flex-wrap gap-x-5 gap-y-8 justify-between mt-14">
        <div className="flex flex-col items-center gap-y-3 lg:w-[30%]">
          <StaticImage
            src="../images/blog/1.png"
            alt="Ololade in style"
            className="max-w-full lg:max-w-[204px] border-4 border-white -rotate-[5deg]"
            formats={["AUTO", "PNG"]}
            pngOptions={{ quality: 100, lossless: true }}
          />
          <h3 className="text-xl font-bold">Crown of achievements</h3>
          <p className="text-[1.1rem] leading-[1.375rem] font-times text-center">
            Ololade Ayelabola's venturing into the world of beauty pageants has
            been marked by several significant victories. .....
          </p>
          <a
            href=""
            className="bg-black text-primary rounded-[2rem] py-1.5 px-6 text-sm"
          >
            Read more
          </a>
        </div>
        <div className="flex flex-col items-center gap-y-3 lg:w-[30%]">
          <StaticImage
            src="../images/blog/2.png"
            alt="Ololade in style"
            className="max-w-full lg:max-w-[204px] border-4 border-white"
            formats={["AUTO", "PNG"]}
            pngOptions={{ quality: 100, lossless: true }}
          />
          <h3 className="text-xl font-bold">Crown of achievements</h3>
          <p className="text-[1.1rem] leading-[1.375rem] font-times text-center">
            Ololade Ayelabola's venturing into the world of beauty pageants has
            been marked by several significant victories. .....
          </p>
          <a
            href=""
            className="bg-black text-primary rounded-[2rem] py-1.5 px-6 text-sm"
          >
            Read more
          </a>
        </div>
        <div className="flex flex-col items-center gap-y-3 lg:w-[30%]">
          <StaticImage
            src="../images/blog/3.png"
            alt="Ololade in style"
            className="max-w-full lg:max-w-[204px] border-4 border-white rotate-[5deg]"
            formats={["AUTO", "PNG"]}
            pngOptions={{ quality: 100, lossless: true }}
          />
          <h3 className="text-xl font-bold">Crown of achievements</h3>
          <p className="text-[1.1rem] leading-[1.375rem] font-times text-center">
            Ololade Ayelabola's venturing into the world of beauty pageants has
            been marked by several significant victories. .....
          </p>
          <a
            href=""
            className="bg-black text-primary rounded-[2rem] py-1.5 px-6 text-sm"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
