"use client";
import { ThemeProvider } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { memo, Suspense, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const HeroImage = memo(() => (
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
));

const HeroText = memo(() => (
  <div id="hero_text" className="text-white text-center text-lg md:text-2xl lg:text-3xl px-4">
    Hi, I'm <span className="font-bold">Meriç</span>. A Frontend Developer specializing in{" "}
    <span className="bg-gradient-to-r from-[#6B46C1] via-[#9F7AEA] to-[#B794F4] bg-clip-text text-transparent font-semibold">
      Web2 and Web3
    </span>{" "}
    technologies. Since graduating from{" "}
    <span className="font-bold">Istanbul University</span> in 2024, I've built applications with{" "}
    <span className="bg-gradient-to-r from-[#6B46C1] via-[#9F7AEA] to-[#B794F4] bg-clip-text text-transparent font-semibold">
      React, Next.js, and React Native
    </span>
    , and developed blockchain projects focused on Layer 2 solutions and{" "}
    <span className="font-bold">dApps</span>. Let's build the future together!
  </div>
));

const SocialButtons = dynamic(() => import('../components/SocialButtons'), {
  loading: () => <div className="h-20 animate-pulse bg-gray-800/20 rounded-lg" />,
  ssr: false
});

function HomePage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="text-white relative">
      <ThemeProvider>
        <main className="flex flex-col items-center justify-center px-5 text-center">
          <div
            id="hero_section"
            className="flex flex-col justify-center items-center xl:grid xl:grid-cols-[30%_70%]"
          >
            <HeroImage />
            <div id="hero_desc">
              <HeroText />
            </div>
            <Suspense fallback={<div className="h-20 animate-pulse bg-gray-800/20 rounded-lg" />}>
              <SocialButtons />
            </Suspense>
          </div>
        </main>
      </ThemeProvider>
    </div>
  );
}

export default memo(HomePage);
