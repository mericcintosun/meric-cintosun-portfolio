import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';

const SocialButtons = () => {
  return (
    <div
      id="buttons"
      className="col-span-full flex flex-col justify-center mx-auto max-w-screen-2xl items-center my-4 gap-6 md:gap-12 md:my-12 md:justify-around md:flex-col md:items-center xl:flex-row xl:items-center xl:justify-around xl:mx-auto"
    >
      <div
        id="contact_buttons"
        className="flex flex-col sm:flex-row gap-6 md:gap-12 justify-center items-center xl:items-center xl:justify-around"
      >
        <Link
          href="/contact"
          className="w-[11rem] md:w-[15rem] md:text-2xl sm:w-auto bg-gradient-to-r from-[#1E0A4D] via-[#2D0F6A] to-[#3A127F] text-white font-semibold py-3 px-6 rounded-md shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-700 transition-opacity duration-200"
        >
          Contact Me!
        </Link>

        <a
          href="/mericcintosun-cv.pdf"
          download
          className="w-[11rem] md:w-[15rem] md:text-2xl sm:w-auto bg-gradient-to-r from-[#1E0A4D] via-[#2D0F6A] to-[#3A127F] text-white font-semibold py-3 px-6 rounded-md shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-700 transition-opacity duration-200"
        >
          Download CV!
        </a>
      </div>

      <div
        id="icon_buttons"
        className="flex flex-col sm:flex-row gap-6 justify-center items-center xl:items-center xl:justify-around"
      >
        <Link
          href="https://github.com/mericcintosun"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[11rem] md:w-[15rem] md:text-2xl sm:w-auto bg-gradient-to-r from-[#0a0b1a] via-[#13162f] to-[#1a1a3f] text-white font-semibold py-3 px-4 rounded-md shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-700 transition-opacity duration-200 flex items-center justify-center"
        >
          <Image
            src="/github.svg"
            alt="git"
            width={30}
            height={30}
            className="filter invert hover:invert-0 transition-transform duration-200"
          />
          <span className="ml-2">GitHub</span>
        </Link>

        <Link
          href="https://www.linkedin.com/in/meric-cintosun"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[11rem] md:w-[15rem] md:text-2xl sm:w-auto bg-gradient-to-r from-[#0a0b1a] via-[#13162f] to-[#1a1a3f] text-white font-semibold py-3 px-4 rounded-md shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-700 transition-opacity duration-200 flex items-center justify-center"
        >
          <Image
            src="/linkedin.svg"
            alt="Linked"
            width={30}
            height={30}
            className="filter invert hover:invert-0 transition-transform duration-200"
          />
          <span className="ml-2">LinkedIn</span>
        </Link>
      </div>
    </div>
  );
};

export default memo(SocialButtons); 