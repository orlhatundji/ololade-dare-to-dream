import React from "react";

const About = () => {
  return (
    <div id="about" className="relative bg-black  px-4 lg:pl-20 lg:pr-10 py-20 lg:py-40 lg:flex gap-10 text-white seasons border-b border-white/50">
      <hr className="hidden lg:block border-primary opacity-50 border absolute left-0 w-16 mt-4 mr-5" />
      <h2 className="text-5xl text-primary min-w-fit mb-10 lg:mb-0">What I do</h2>
      <div className="grid lg:grid-cols-2 gap-x-10 gap-y-8 lg:gap-y-12">
        <div className="">
          <h3 className="text-xl font-bold">Model and Beauty Queen</h3>
          <p className="text-sm leading-[1.5rem] mt-5">
            She has won several prestigious beauty titles, including Miss Amina
            2019, Miss Unique 2019, Face of Akoka, and Most Beautiful Campus
            Queen Nigeria (MBCQN) 2021.
          </p>
        </div>
        <div className="">
          <h3 className="text-xl font-bold">Philanthropist</h3>
          <p className="text-sm leading-[1.5rem] mt-5">
            Ololade leads the PET Project to empower physically challenged women
            and partners with Household Outreach to support children's
            well-being.
          </p>
        </div>
        <div className="">
          <h3 className="text-xl font-bold">Entrepreneur</h3>
          <p className="text-sm leading-[1.5rem] mt-5">
            She has launched a fashion house, modeling academy, and pageantry
            coaching hub. She is also attempting the Guinness World Record for
            the longest distance catwalk by a female model.
          </p>
        </div>
        <div className="">
          <h3 className="text-xl font-bold">Multitalented Individual</h3>
          <p className="text-sm leading-[1.5rem] mt-5">
            Ololade excels in dancing, acting, and project management. She is
            also a young pastor passionate about the gospel of Christ.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
