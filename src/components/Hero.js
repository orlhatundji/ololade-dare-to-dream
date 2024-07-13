import React from "react";

import SocialLinks from "./SocialLinks";
import { Flip, Fade, Slide, Roll, Zoom } from "react-awesome-reveal";

const Hero = () => {
  return (
    <main className="hero lg:bg-cover bg-no-repeat px-4 lg:px-20 py-20 text-white">
      <nav className="">
        <ul className="grid grid-cols-3 lg:grid-cols-4 w-fit text-secondary-100 text-xl gap-7">
          <li className="">
            <a href="#about">About Me</a>
          </li>
          <li className="">
            <a href="#about">Projects</a>
          </li>
          <li className="">
            <a href="#gallery">Gallery</a>
          </li>
          <li className="">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <Fade duration={2000}>
        <h1 className="hero-text text-[3rem] leading-[4rem] lg:text-[4rem] lg:leading-[4.5rem] mt-20 text-primary font-bold tracking-[.384rem]">
          Ololade <br />
          Ayelabola
        </h1>
      </Fade>
      <p className="mt-5 text-sm lg:text-lg text-secondary-200">
        Model | Beauty Queen | Entrepreneur
      </p>
      <div className="mt-10">
        <SocialLinks />
      </div>
      <Zoom duration={2000} delay={1000} triggerOnce>
      <div className="mt-52 lg:max-w-[427px] bg-primary py-12 px-6 lg:p-10 rounded text-black">
        <h2 className="font-bold text-[2rem] leading-[2.8rem] lg:text-[2.7rem] lg:leading-[2.9rem]">
          Meet Ololade <br />
          Ayelabola
        </h2>
        <p className="mt-10 text-sm leading-[1.7rem] font-medium">
          A talented model, beauty queen, entrepreneur, and philanthropist. She
          has won many beauty pageants and turned her love for fashion into
          successful businesses. Ololade is also deeply committed to helping
          others through her charity work. Discover her inspiring journey and
          see how she makes a difference in the world.
        </p>
      </div>
      </Zoom>
    </main>
  );
};

export default Hero;
