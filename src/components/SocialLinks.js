import React from 'react'

// Assets
import InstagramIcon from "../assets/icons/instagram.svg";
import TwitterIcon from "../assets/icons/twitter.svg";
import LinkedInIcon from "../assets/icons/tiktok.svg";
import FacebookIcon from "../assets/icons/facebook.svg";

const SocialLinks = () => {
  return (
    <ul className="flex text-white text-xs gap-4">
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
  )
}

export default SocialLinks