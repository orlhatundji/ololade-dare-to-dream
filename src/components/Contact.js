import { StaticImage } from "gatsby-plugin-image";
import React from "react";

// Assets
import PhoneIcon from "../assets/icons/phone.svg";
import EmailIcon from "../assets/icons/mail.svg";
import SocialLinks from "./SocialLinks";

const Contact = () => {
  return (
    <div id="contact" className="px-4 lg:pl-16 lg:pr-10 py-10 pb-20 lg:py-16 border">
      <h2 className="z-10 text-[4rem] leading-[4rem] lg:text-[5.25rem] lg:leading-[5.25rem] text-primary mt-10">
        Let<span className="font-times">'</span>s work
        <br />
        together<span className="font-times">!</span>
      </h2>
      <div className="lg:grid grid-cols-2 justify-between -mt-12">
        <div className="relative flex">
          <StaticImage
            src="../images/contact_us.png"
            alt="Ololade in style"
            className="max-w-[250px] lg:max-w-full -z-10 ml-auto lg:ml-36"
            formats={["AUTO", "PNG"]}
          />
          <div className="absolute inset-0 bg-black opacity-60 -z-10" />
        </div>
        <div className="self-end  text-secondary-200 lg:max-w-[324px] ml-auto  opacity-70 mt-5 lg:mt-0">
          <p className="text-lg">
            Reach out to me via any of the following channels
          </p>
          <div className="flex flex-col gap-y-5 mt-5">
            <div className="flex items-center gap-x-4">
              <PhoneIcon className="w-8" />
              <a href="tel:+2349068080111" className="text-">
                +234 906 808 0111
              </a>
            </div>
            <div className="flex items-center gap-x-4">
              <EmailIcon className="w-7" />
              <a href="mailto:ololadeayelabola@gmail.com" className="text-">
                ololadeayelabola@gmail.com
              </a>
            </div>
            <div className="-ml-3">
              <SocialLinks noLine />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
