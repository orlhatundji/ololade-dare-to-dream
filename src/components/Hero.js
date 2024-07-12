import React from "react";

// Assets
import InstagramIcon from "../assets/icons/instagram.svg";
import TwitterIcon from "../assets/icons/twitter.svg";
import LinkedInIcon from "../assets/icons/tiktok.svg";
import FacebookIcon from "../assets/icons/facebook.svg";

const Hero = () => {
  return (
    <main className="hero lg:bg-cover bg-no-repeat px-4 lg:px-20 py-20 text-white">
      <nav className="">
        <ul className="grid grid-cols-3 lg:grid-cols-4 w-fit text-secondary-100 text-xl gap-7">
          <li className="">
            <a href="">About Me</a>
          </li>
          <li className="">
            <a href="">Projects</a>
          </li>
          <li className="">
            <a href="">Gallery</a>
          </li>
          <li className="">
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      <h1 className="hero-text text-[3rem] leading-[4rem] lg:text-[4rem] lg:leading-[4.5rem] mt-20 text-primary font-bold tracking-[.384rem]">
        Ololade <br />
        Ayelabola
      </h1>
      <p className="mt-5 text-sm lg:text-lg text-secondary-200">
        Model | Beauty Queen | Entrepreneur
      </p>
      <ul className="flex text-white text-xs gap-4 mt-10">
        <hr className="hidden lg:block border-secondary-200 opacity-50 border absolute left-0 w-16 mt-2" />
        <li className="hover:scale-150 transition-all cursor-pointer">
          <a target="_blank" href="https://web.facebook.com/ayelabola.ololade.9">
            <FacebookIcon className="h-7" />
          </a>
        </li>
        <li className="hover:scale-150 transition-all cursor-pointer">
          <a target="_blank" href="https://www.instagram.com/thelade_wonder/">
            <InstagramIcon className="h-7" />
          </a>
        </li>
        <li className="hover:scale-150 transition-all cursor-pointer">
          <a target="_blank" href="https://www.tiktok.com/@officiallade_wonder">
            <LinkedInIcon className="h-7" />
          </a>
        </li>
        <li className="hover:scale-150 transition-all cursor-pointer">
          <a target="_blank" href="https://x.com/thelade_wonder">
            <TwitterIcon className="h-7" />
          </a>
        </li>
      </ul>

      <div className="mt-52 lg:max-w-[427px] bg-primary py-12 px-6 lg:p-10 rounded text-black">
        <h2 className="font-bold text-[2rem] leading-[2.8rem] lg:text-[2.7rem] lg:leading-[2.9rem]">Meet Ololade <br />Ayelabola</h2>
        <p className="mt-10 text-sm leading-[1.7rem]">
          A talented model, beauty queen, entrepreneur, and philanthropist. She
          has won many beauty pageants and turned her love for fashion into
          successful businesses. Ololade is also deeply committed to helping
          others through her charity work. Discover her inspiring journey and
          see how she makes a difference in the world.
        </p>
      </div>
    </main>
  );
};

export default Hero;
