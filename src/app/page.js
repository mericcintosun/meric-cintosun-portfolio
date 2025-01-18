"use client";
import { ThemeProvider } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="text-white relative">
      <ThemeProvider>
        <main className="flex flex-col items-center justify-center px-5 text-center">
          <div
            id="hero_section"
            className="flex flex-col justify-center items-center xl:grid xl:grid-cols-[30%_70%]"
          >
            <div id="hero_img">
              <Image
                src="/home-astronaut.webp"
                alt="hero-img"
                width={300}
                height={300}
                className="rounded-full transform transition duration-300 ease-in-out hover:rotate-3 animate-float"
              />
            </div>
            <div id="hero_desc">
              <div
                id="hero_text"
                className="text-white text-center text-lg md:text-2xl lg:text-3xl px-4"
              >
                {t('greeting')} <span className="font-bold">Meriç</span>. {t('specialization')}{" "}
                <span className="bg-gradient-to-r from-[#6B46C1] via-[#9F7AEA] to-[#B794F4] bg-clip-text text-transparent font-semibold">
                  {t('web2web3')}
                </span>{" "}
                {t('graduationText')}{" "}
                <span className="font-bold">{t('university')}</span> {t('graduationYear')}{" "}
                <span className="bg-gradient-to-r from-[#6B46C1] via-[#9F7AEA] to-[#B794F4] bg-clip-text text-transparent font-semibold">
                  {t('technologies')}
                </span>
                , {t('blockchainText')}{" "}
                <span className="font-bold">{t('dapps')}</span>. {t('finalText')}
              </div>
            </div>
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
                  {t('contactButton')}
                </Link>

                <a
                  href="/mericcintosun-cv.pdf"
                  download
                  className="w-[11rem] md:w-[15rem] md:text-2xl sm:w-auto bg-gradient-to-r from-[#1E0A4D] via-[#2D0F6A] to-[#3A127F] text-white font-semibold py-3 px-6 rounded-md shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-700 transition-opacity duration-200"
                >
                  {t('downloadCV')}
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
                    alt="github"
                    width={30}
                    height={30}
                    className="filter invert hover:invert-0 transition-transform duration-200"
                  />
                  <span className="ml-2">{t('github')}</span>
                </Link>

                <Link
                  href="https://www.linkedin.com/in/meric-cintosun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[11rem] md:w-[15rem] md:text-2xl sm:w-auto bg-gradient-to-r from-[#0a0b1a] via-[#13162f] to-[#1a1a3f] text-white font-semibold py-3 px-4 rounded-md shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-700 transition-opacity duration-200 flex items-center justify-center"
                >
                  <Image
                    src="/linkedin.svg"
                    alt="linkedin"
                    width={30}
                    height={30}
                    className="filter invert hover:invert-0 transition-transform duration-200"
                  />
                  <span className="ml-2">{t('linkedin')}</span>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </ThemeProvider>
    </div>
  );
}
