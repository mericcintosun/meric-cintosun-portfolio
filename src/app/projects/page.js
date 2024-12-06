"use client";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-[90%] mx-auto flex-wrap gap-3">
        <ProjectCard
          title="News Tracker Real Time Application"
          description="News Tracker is a modern and responsive web and mobile application built with Next.js and NewsAPI, offering real-time news tracking across categorized sections. It features push notifications, a user-friendly interface, and a time graph for tracking news updates interactively."
          tags={[
            "React",
            "Next.js",
            "Custom CSS",
            "Web Notification API",
            "Node.js",
            "Express.js",
            "Chart.js",
          ]}
          imageSrc="/NewsTracker.jpg"
          altText="project-img"
          link="https://github.com/mericcintosun/news-tracker-frontend-task/settings"
        />
        <ProjectCard
          title="Nono (zK Nonogram Game)"
          description="zk Nonogram Game is an innovative puzzle game powered by zero-knowledge proof (zk-SNARK) technology, allowing players to solve logic-based puzzles while preserving their privacy. The game offers a secure and engaging experience with a modern, user-friendly interface."
          tags={[
            "React",
            "Next.js",
            "Tailwind CSS",
            "RISC0",
            "Node.js",
            "Express.js",
            "Chart.js",
            "Rust",
            "Typescript",
            "Aligned Layer",
            "Solidity",
          ]}
          imageSrc="/Nono.webp"
          altText="project-img"
          link="https://devfolio.co/projects/nono-68b9"
        />
        <ProjectCard
          title="Digital Media Agency Blog Website"
          description="This digital media agency website enables users to create personalized training programs tailored to their needs and track progress in real-time. It offers interactive content, performance analytics, and a user-friendly interface to enhance the learning experience."
          tags={[
            "React",
            "Next.js",
            "Tailwind CSS",
            "WordPress (CMS)",
            "Node.js",
            "Prisma",
            "MongoDB",
            "Material Tailwind",
            "Axios - Tanstack Query",
            "Framer Motion",
          ]}
          imageSrc="/DigitalMediaAgency.jpg"
          altText="project-img"
          link="https://devfolio.co/projects/nono-68b9"
        />
        <ProjectCard
          title="Kitty Todo List"
          description="Kitty Todo List is a simple and fun task management app with an adorable cat theme, allowing users to organize their to-dos effortlessly. Its minimalist interface and pastel colors provide a functional yet visually delightful experience."
          tags={["React", "Tailwind CSS", "Funtime :)"]}
          imageSrc="/KittyApp.jpg"
          altText="project-img"
          link="https://github.com/mericcintosun/react-todolist-app/tree/main"
        />
        <ProjectCard
          title="Persona (Wallet App)"
          description="Persona is a platform that allows users to connect their Web3 wallets and view transaction data and scores on various Layer 2 networks. The project is built using modern frontend technologies like React, Tailwind CSS, and Wagmi.

"
          tags={[
            "React",
            "Next.js",
            "Tailwind CSS",
            "Wagmi",
            "ConnectKit",
            "Node.js",
            "Solidity",
            "Ethers.js",
          ]}
          imageSrc="/Persona.jpg"
          altText="project-img"
          link="https://github.com/itublockchain/ETHOnline24-Persona"
        />
      </div>
    </>
  );
}
