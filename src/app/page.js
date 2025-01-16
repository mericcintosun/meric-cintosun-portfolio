"use client";
import { ThemeProvider } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="text-white relative">
      <ThemeProvider>
        <main className="flex flex-col items-center justify-center px-5 text-center">
          <div
            id="hero_section"
            className="flex flex-col justify-center items-center xl:grid xl:grid-cols-[30%_70%]"
          >
            <div id="hero_img" className="relative w-[300px] h-[300px]">
              <Image
                src="/home-astronaut.webp"
                alt="hero-img"
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                priority
                placeholder="blur"
                blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
                quality={75}
                className="object-cover rounded-full transform transition duration-300 ease-in-out hover:rotate-3 animate-float"
              />
            </div>
            <div id="hero_desc">
              <div
                id="hero_text"
                className="text-white text-center text-lg md:text-2xl lg:text-3xl px-4"
              >
                Hi, I'm <span className="font-bold">Meriç</span>. A Frontend
                Developer specializing in{" "}
                <span className="bg-gradient-to-r from-[#6B46C1] via-[#9F7AEA] to-[#B794F4] bg-clip-text text-transparent font-semibold">
                  Web2 and Web3
                </span>{" "}
                technologies. Since graduating from{" "}
                <span className="font-bold">Istanbul University</span> in 2024,
                I've built applications with{" "}
                <span className="bg-gradient-to-r from-[#6B46C1] via-[#9F7AEA] to-[#B794F4] bg-clip-text text-transparent font-semibold">
                  React, Next.js, and React Native
                </span>
                , and developed blockchain projects focused on Layer 2 solutions
                and <span className="font-bold">dApps</span>. Let’s build the
                future together!
              </div>

              
            </div>
            <div
                id="buttons"
                className="col-span-full flex flex-col justify-center mx-auto max-w-screen-2xl items-center my-4 gap-6 md:gap-12 md:my-12 md:justify-around md:flex-col md:items-center xl:flex-row xl:items-center xl:justify-around xl:mx-auto"
              >
                <div
                  id="contact_buttons"
                  className=" flex flex-col sm:flex-row gap-6  md:gap-12 justify-center items-center xl:items-center xl:justify-around"
                >
                  <Link
                    href="/contact"
                    className=" w-[11rem] md:w-[15rem] md:text-2xl  sm:w-auto bg-gradient-to-r from-[#1E0A4D] via-[#2D0F6A] to-[#3A127F] text-white font-semibold py-3 px-6 rounded-md shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-700 transition-opacity duration-200"
                  >
                    Contact Me!
                  </Link>

                  <a
                    href="/mericcintosun-cv.pdf"
                    download
                    className="w-[11rem] md:w-[15rem] md:text-2xl  sm:w-auto bg-gradient-to-r from-[#1E0A4D] via-[#2D0F6A] to-[#3A127F] text-white font-semibold py-3 px-6 rounded-md shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-700 transition-opacity duration-200"
                  >
                    Download CV!
                  </a>
                </div>

                <div
                  id="icon_buttons"
                  className="flex flex-col sm:flex-row gap-6 justify-center items-center xl:items-center  xl:justify-around"
                >
                  <Link
                    href="https://github.com/mericcintosun"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[11rem] md:w-[15rem] md:text-2xl sm:w-auto bg-gradient-to-r from-[#0a0b1a] via-[#13162f] to-[#1a1a3f] text-white font-semibold py-3 px-4 rounded-md shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-700 transition-opacity duration-200 flex items-center justify-center"
                  >
                    <Image
                      src="/github.svg"
                      alt="GitHub"
                      width={30}
                      height={30}
                      className="filter invert hover:invert-0 transition-transform
                    duration-200"
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
                      alt="LinkedIn"
                      width={30}
                      height={30}
                      className="filter invert hover:invert-0 transition-transform
                    duration-200"
                    />
                    <span className="ml-2">LinkedIn</span>
                  </Link>
                </div>
            </div>
          </div>
        </main>
      </ThemeProvider>
    </div>
  );
}
