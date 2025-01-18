"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <>
      <div
        id="container"
        className="flex flex-col gap-6 justify-center items-center  xl:grid xl:grid-cols-[30%_70%]"
      >
        <div
          id="about-img"
          className="flex flex-col gap-2 justify-center items-center "
        >
          <div className="relative group  rounded-full overflow-hidden">
            <Image
              src="/about-img.webp"
              alt="hero-img"
              width={200}
              height={200}
              className="rounded-full aspect-square object-cover transform transition duration-300 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#bdb4ff] via-[#3e276c] to-[#0f172a] opacity-10 group-hover:opacity-20 transition duration-300"></div>
          </div>
          <h1 className="text-3xl font-semibold md:text-5xl">Meriç Cintosun</h1>
          <h2 className="text-xl md:text-2xl">{t('fullStackDev')}</h2>
        </div>
        <div
          id="about-desc"
          className="bg-[#0f172a] bg-opacity-50 rounded-xl lg:w-[70%] lg:mx-auto p-6 flex flex-col gap-6 mb-6  xl:w-full"
        >
          <p>{t('aboutIntro')}</p>
          <p>{t('aboutCareer')}</p>
          <p>{t('aboutPassion')}</p>
        </div>
      </div>
    </>
  );
}
