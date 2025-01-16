"use client";

import Image from "next/image";

export default function About() {
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
          <h2 className="text-xl md:text-2xl">Full Stack Developer</h2>
        </div>
        <div
          id="about-desc"
          className="bg-[#0f172a] bg-opacity-50 rounded-xl lg:w-[70%] lg:mx-auto p-6 flex flex-col gap-6 mb-6  xl:w-full"
        >
          <p className=" ">
            Hi! I'm Meriç Cintosun, a software developer specializing in
            blockchain and web technologies. My journey, fueled by a deep
            curiosity about how technology shapes the world, has led me to delve
            into software development and the blockchain ecosystem. After
            graduating from Istanbul University’s Faculty of Communication, I
            became an active member of ITU Blockchain, contributing to both
            research and development. I focus on Layer 2 solutions,
            decentralized applications (dApps), and blockchain protocols,
            developing projects using technologies like Solidity, CosmWasm, and
            Rust.
          </p>
          <p>
            Throughout my career, I have gained expertise in both frontend and
            mobile application development. I enjoy creating modern,
            user-centric interfaces and building projects that make technology
            more accessible. Using tools like React, Next.js, TailwindCSS, React
            Native, and Expo, I develop dynamic and user-friendly applications,
            while TypeScript and Framer Motion allow me to elevate my designs to
            a modern and professional level. Currently, I work as a Mid Frontend
            & Mobile Developer at Flalingo, a language learning application,
            where I focus on AI-powered mobile solutions.
          </p>
          <p>
            I am passionate about continuous learning and self-improvement. I am
            motivated by the opportunity to work with new technologies, create
            innovative projects, and use technology to make the world a better
            place. In my spare time, I participate in hackathons and share
            knowledge with communities through content creation. Beyond
            software, I am deeply committed to working on projects that combine
            design, creativity, and technology. If you're looking to collaborate
            on something inspiring, I’m always open to connecting!
          </p>
        </div>
      </div>
    </>
  );
}
