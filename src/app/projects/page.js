import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "News Tracker Real Time Application",
    description: "News Tracker is a modern and responsive web and mobile application built with Next.js and NewsAPI, offering real-time news tracking across categorized sections. It features push notifications, a user-friendly interface, and a time graph for tracking news updates interactively.",
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
    title: "Nono (zK Nonogram Game)",
    description: "zk Nonogram Game is an innovative puzzle game powered by zero-knowledge proof (zk-SNARK) technology, allowing players to solve logic-based puzzles while preserving their privacy. The game offers a secure and engaging experience with a modern, user-friendly interface.",
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
    title: "Digital Media Agency Blog Website",
    description: "This digital media agency website enables users to create personalized training programs tailored to their needs and track progress in real-time. It offers interactive content, performance analytics, and a user-friendly interface to enhance the learning experience.",
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
    title: "Kitty Todo List",
    description: "Kitty Todo List is a simple and fun task management app with an adorable cat theme, allowing users to organize their to-dos effortlessly. Its minimalist interface and pastel colors provide a functional yet visually delightful experience.",
    tags: ["React", "Tailwind CSS", "Funtime :)"],
    imageSrc: "/projects/kitty-todo-app.webp",
    altText: "project-img",
    link: "https://github.com/mericcintosun/react-todolist-app/tree/main"
  },
  {
    title: "Persona (Wallet App)",
    description: "Persona is a platform that allows users to connect their Web3 wallets and view transaction data and scores on various Layer 2 networks. The project is built using modern frontend technologies like React, Tailwind CSS, and Wagmi.",
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
    title: "Eduflow (Blockchain Education App)",
    description: "Eduflow is a blockchain education app that allows users to learn about blockchain technology and earn rewards for completing courses. The app is built using modern frontend technologies like React, Tailwind CSS, and Wagmi.",
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
    title: "Alvin New Year Progress",
    description: "Alvin New Year Progress is a simple and fun task management app with an adorable cat theme, allowing users to organize their to-dos effortlessly. Its minimalist interface and pastel colors provide a functional yet visually delightful experience.",
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
    title: "Genç Flamingolar",
    description: "I can't share the details of the project because it is a private project within the company, but the project is generally a chrome extension that facilitates the work of the company's support team. You can reach the technologies I use.",
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

export default function Projects() {
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
