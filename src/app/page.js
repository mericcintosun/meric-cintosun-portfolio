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
            className="flex flex-col justify-center items-center"
          >
            <div id="hero_img">
              <Image
                src="/home-astronaut.png"
                alt="hero-img"
                width={300}
                height={300}
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

              <div
                id="buttons"
                className="flex flex-col my-6 gap-6 max-w-full justify-center items-center px-4"
              >
                {/* Contact Buttons */}
                <div
                  id="contact_buttons"
                  className="flex flex-col sm:flex-row gap-4 sm:gap-12 w-full max-w-md justify-center items-center"
                >
                  {/* Contact Me! Butonu */}
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto bg-gradient-to-r from-[#1E0A4D] via-[#2D0F6A] to-[#3A127F] text-white font-semibold py-3 px-6 rounded-md shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-700 transition-opacity duration-200"
                  >
                    Contact Me!
                  </Link>

                  {/* Download CV! Butonu */}
                  <a
                    href="/cv.pdf"
                    download
                    className="w-full sm:w-auto bg-gradient-to-r from-[#1E0A4D] via-[#2D0F6A] to-[#3A127F] text-white font-semibold py-3 px-6 rounded-md shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-700 transition-opacity duration-200"
                  >
                    Download CV!
                  </a>
                </div>

                {/* Icon Buttons */}
                <div
                  id="icon_buttons"
                  className="flex flex-col sm:flex-row gap-4 sm:gap-12 w-full max-w-md justify-center items-center mt-4"
                >
                  <a
                    href="https://github.com/mericcintosun"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-gradient-to-r from-[#0a0b1a] via-[#13162f] to-[#1a1a3f] text-white font-semibold py-3 px-4 rounded-md shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-700 transition-opacity duration-200 flex items-center justify-center"
                  >
                    <img
                      src="/github.svg"
                      alt="GitHub"
                      width={30}
                      height={30}
                      className="filter invert hover:invert-0 transition-transform duration-200"
                    />
                    <span className="ml-2">GitHub</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/meric-cintosun"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-gradient-to-r from-[#0a0b1a] via-[#13162f] to-[#1a1a3f] text-white font-semibold py-3 px-4 rounded-md shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-700 transition-opacity duration-200 flex items-center justify-center"
                  >
                    <img
                      src="/linkedin.svg"
                      alt="LinkedIn"
                      width={30}
                      height={30}
                      className="filter invert hover:invert-0 transition-transform duration-200"
                    />
                    <span className="ml-2">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </ThemeProvider>
    </div>
  );
}
