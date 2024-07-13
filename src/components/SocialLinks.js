import React from "react";

// Assets
import InstagramIcon from "../assets/icons/instagram.svg";
import TwitterIcon from "../assets/icons/twitter.svg";
import LinkedInIcon from "../assets/icons/tiktok.svg";
import FacebookIcon from "../assets/icons/facebook.svg";
import { Zoom } from "react-awesome-reveal";

const SocialLinks = ({ noLine }) => {
  return (
    <ul className="flex text-white text-xs gap-4">
      {!noLine && (
        <hr className="hidden lg:block border-secondary-200 opacity-50 border absolute left-0 w-16 mt-2" />
      )}
      <Zoom duration={1000} triggerOnce>
        <li className="hover:scale-150 transition-all cursor-pointer">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://web.facebook.com/ayelabola.ololade.9"
          >
            <FacebookIcon className="h-7" />
          </a>
        </li>

        <li className="hover:scale-150 transition-all cursor-pointer">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/thelade_wonder/"
          >
            <InstagramIcon className="h-7" />
          </a>
        </li>
        <li className="hover:scale-150 transition-all cursor-pointer">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.tiktok.com/@officiallade_wonder"
          >
            <LinkedInIcon className="h-7" />
          </a>
        </li>
        <li className="hover:scale-150 transition-all cursor-pointer">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://x.com/thelade_wonder"
          >
            <TwitterIcon className="h-7" />
          </a>
        </li>
      </Zoom>
    </ul>
  );
};

export default SocialLinks;
