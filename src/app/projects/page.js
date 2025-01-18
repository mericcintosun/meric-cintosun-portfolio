"use client";

import ProjectCard from "@/components/ProjectCard";
import { useLanguage } from "@/context/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('newsTrackerTitle'),
      description: t('newsTrackerDesc'),
      tags: [
        "React",
        "Next.js",
        "Custom CSS",
        "Web Notification API",
        "Node.js",
        "Express.js",
        "Chart.js",
      ],
      imageSrc: "/projects/news-tracker.webp",
      altText: "project-img",
      link: "https://github.com/mericcintosun/news-tracker-frontend-task/"
    },
    {
      title: t('nonoTitle'),
      description: t('nonoDesc'),
      tags: [
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
      ],
      imageSrc: "/projects/nono.webp",
      altText: "project-img",
      link: "https://devfolio.co/projects/nono-68b9"
    },
    {
      title: t('mediaAgencyTitle'),
      description: t('mediaAgencyDesc'),
      tags: [
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
      ],
      imageSrc: "/projects/media-agency.webp",
      altText: "project-img",
      link: "https://github.com/mericcintosun/digital-agency-blog-website"
    },
    {
      title: t('kittyTodoTitle'),
      description: t('kittyTodoDesc'),
      tags: ["React", "Tailwind CSS", "Funtime :)"],
      imageSrc: "/projects/kitty-todo-app.webp",
      altText: "project-img",
      link: "https://github.com/mericcintosun/react-todolist-app/tree/main"
    },
    {
      title: t('personaTitle'),
      description: t('personaDesc'),
      tags: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Wagmi",
        "ConnectKit",
        "Node.js",
        "Solidity",
        "Ethers.js",
      ],
      imageSrc: "/projects/persona.webp",
      altText: "project-img",
      link: "https://github.com/itublockchain/ETHOnline24-Persona"
    },
    {
      title: t('eduflowTitle'),
      description: t('eduflowDesc'),
      tags: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Node.js",
        "Solidity",
        "Ethers.js",
      ],
      imageSrc: "/projects/eduflow.webp",
      altText: "project-img",
      link: "https://github.com/alperenbekci/eduflow"
    },
    {
      title: t('alvinTitle'),
      description: t('alvinDesc'),
      tags: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Node.js",
        "Nodemailer",
        "ReCAPTCHA",
      ],
      imageSrc: "/projects/alvin-new-year-progress.webp",
      altText: "project-img",
      link: "https://github.com/mericcintosun/alvin-newyear-progress"
    },
    {
      title: t('gencFlamingoTitle'),
      description: t('gencFlamingoDesc'),
      tags: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Node.js",
        "Nodemailer",
        "ReCAPTCHA",
        "PostgreSQL",
        "Typescript",
        "Webpack",
        "Socket.IO",
        "Chrome Extension API's",
        "Freshcat API",
        "Express.js",
      ],
      imageSrc: "/projects/genc-flamingolar.webp",
      altText: "project-img",
      link: "https://github.com/mericcintosun/"
    }
  ];

  return (
    <div className="flex flex-col justify-center items-center w-[90%] mx-auto flex-wrap gap-3">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          {...project}
        />
      ))}
    </div>
  );
}
