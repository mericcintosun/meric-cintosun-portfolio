"use client";

import MacbookMockup from "@/components/MacbookMockup";
import ProjectNavigation from "@/components/ProjectNavigation";
import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect } from "react";

export default function Projects() {
  const { t } = useLanguage();
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  // Proje detayları
  const projectDetails = [
    {
      title: t("alvinTitle"),
      description: t("alvinDesc"),
      category: "Productivity App",
      github: "https://github.com/mericcintosun/alvin-newyear-progress",
      website: "https://alvin-newyear-progress.vercel.app/",
      technologies: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Node.js",
        "Nodemailer",
        "ReCAPTCHA",
      ],
    },
    {
      title: t("aurascendTitle"),
      description: t("aurascendDesc"),
      category: "Emotion AI",
      github: "https://github.com/mericcintosun/aurascend",
      website: "https://aurascend.vercel.app/",
      technologies: [
        "React",
        "Next.js",
        "MongoDB",
        "AI Analysis",
        "Emotional Intelligence",
      ],
    },
    {
      title: t("axisTitle"),
      description: t("axisDesc"),
      category: "AI Assistant",
      github: "https://github.com/mericcintosun/Xperience-hackathon-axis",
      website: "https://axis-ai.vercel.app/",
      technologies: [
        "React",
        "Next.js",
        "TailwindCSS",
        "MultiverseX",
        "AI",
        "Blockchain",
      ],
    },
    {
      title: t("mediaAgencyTitle"),
      description: t("mediaAgencyDesc"),
      category: "Website",
      github: "https://github.com/mericcintosun/digital-agency-blog-website",
      website: null,
      technologies: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "WordPress",
        "Prisma",
        "MongoDB",
      ],
    },
    {
      title: t("eduflowTitle"),
      description: t("eduflowDesc"),
      category: "Education App",
      github: "https://github.com/alperenbekci/eduflow",
      website: "https://eduflow-tan.vercel.app/",
      technologies: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Solidity",
        "Ethers.js",
      ],
    },
    {
      title: t("kittyTodoTitle"),
      description: t("kittyTodoDesc"),
      category: "Productivity App",
      github: "https://github.com/mericcintosun/react-todolist-app/tree/main",
      website: "https://react-todolist-app-psi.vercel.app/",
      technologies: ["React", "Tailwind CSS", "Local Storage"],
    },
    {
      title: t("makeCloneTitle"),
      description: t("makeCloneDesc"),
      category: "Automation Tool",
      github: "https://vercel.com/mericcintosun/make-clone",
      website: "https://make-clone.vercel.app/",
      technologies: [
        "Next.js",
        "TailwindCSS",
        "Framer Motion",
        "AI Automation",
        "No-Code",
      ],
    },
    {
      title: t("newsTrackerTitle"),
      description: t("newsTrackerDesc"),
      category: "News App",
      github: "https://github.com/mericcintosun/news-tracker-frontend-task/",
      website: "https://news-tracker-frontend-task.vercel.app/",
      technologies: ["React", "Next.js", "Chart.js", "Web Notification API"],
    },
    {
      title: t("nonoTitle"),
      description: t("nonoDesc"),
      category: "Puzzle Game",
      github: null,
      website: "https://devfolio.co/projects/nono-68b9",
      technologies: [
        "React",
        "Next.js",
        "RISC0",
        "Rust",
        "Solidity",
        "Aligned Layer",
      ],
    },
    {
      title: t("personaTitle"),
      description: t("personaDesc"),
      category: "Web3 Wallet",
      github: "https://github.com/itublockchain/ETHOnline24-Persona",
      website: "https://persona-khaki.vercel.app/connected-wallet",
      technologies: [
        "React",
        "Next.js",
        "Wagmi",
        "ConnectKit",
        "Solidity",
        "Ethers.js",
      ],
    },
    {
      title: t("riskonTitle"),
      description: t("riskonDesc"),
      category: "DeFi Platform",
      github: "https://github.com/mericcintosun/riskon",
      website: "https://riskon.vercel.app/",
      technologies: ["React", "Next.js", "Stellar SDK", "AI", "TensorFlow.js"],
    },
    {
      title: "Harry Potter dApp",
      description:
        "HP NFTs – Wizarding World Digital Collectibles. HP NFTs is a blockchain marketplace built with Next.js and TailwindCSS, offering unique Harry Potter-themed NFTs. Users can create, collect, and trade magical artifacts from each Hogwarts house, bringing the Wizarding World to life in the realm of digital ownership.",
      category: "NFT Marketplace",
      github: "https://github.com/mericcintosun/harry-potter-dapp",
      website: "https://harry-potter-dapp.vercel.app/",
      technologies: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Blockchain",
        "NFT",
        "Web3",
      ],
    },
  ];

  // Proje resimleri için carousel data
  const carouselProjects = [
    {
      src: "/projectImages/alvin.png",
      alt: "Alvin New Year Progress project",
      title: "Alvin New Year Progress",
    },
    {
      src: "/projectImages/aurascend.png",
      alt: "Aurascend project",
      title: "Aurascend",
    },
    {
      src: "/projectImages/axis.png",
      alt: "Axis project",
      title: "Axis",
    },
    {
      src: "/projectImages/digital-agency.png",
      alt: "Digital Agency project",
      title: "Digital Agency",
    },
    {
      src: "/projectImages/eduflow.png",
      alt: "Eduflow project",
      title: "Eduflow",
    },
    {
      src: "/projectImages/kitty-todo.png",
      alt: "Kitty Todo project",
      title: "Kitty Todo",
    },
    {
      src: "/projectImages/make-clone.png",
      alt: "Make Clone project",
      title: "Make Clone",
    },
    {
      src: "/projectImages/news-tracker.png",
      alt: "News Tracker project",
      title: "News Tracker",
    },
    {
      src: "/projectImages/nono.png",
      alt: "Nono project",
      title: "Nono",
    },
    {
      src: "/projectImages/persona.png",
      alt: "Persona project",
      title: "Persona",
    },
    {
      src: "/projectImages/riskon.png",
      alt: "Riskon project",
      title: "Riskon",
    },
    {
      src: "/projectImages/hp.png",
      alt: "Harry Potter dApp project",
      title: "Harry Potter dApp",
    },
  ];

  // Aktif proje bilgileri
  const activeProject = projectDetails[activeProjectIndex];

  // Proje değişikliğini handle et
  const handleProjectChange = (newIndex) => {
    setActiveProjectIndex(newIndex);
  };

  // Klavye ok tuşları desteği
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        setActiveProjectIndex((prevIndex) =>
          prevIndex === 0 ? projectDetails.length - 1 : prevIndex - 1
        );
      } else if (event.key === "ArrowRight") {
        setActiveProjectIndex((prevIndex) =>
          prevIndex === projectDetails.length - 1 ? 0 : prevIndex + 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Action buttons component
  const ActionButtons = ({ className = "" }) => (
    <div
      className={`flex gap-2 sm:gap-3 items-center justify-center ${className}`}
    >
      {activeProject.github && (
        <a
          href={activeProject.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 sm:gap-2 bg-gray-800 hover:bg-gray-700 transition-colors duration-200 rounded-lg px-3 sm:px-4 py-2 border border-gray-600 text-xs sm:text-sm"
        >
          <svg
            className="w-3 h-3 sm:w-4 sm:h-4 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          <span className="font-medium text-white">GitHub</span>
        </a>
      )}

      {activeProject.website && (
        <a
          href={activeProject.website}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 sm:gap-2 bg-purple-700 hover:bg-purple-600 transition-colors duration-200 rounded-lg px-3 sm:px-4 py-2 border border-purple-500 text-xs sm:text-sm"
        >
          <svg
            className="w-3 h-3 sm:w-4 sm:h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
          <span className="font-medium text-white">Live App</span>
        </a>
      )}
    </div>
  );

  // Technology tags component
  const TechnologyTags = ({ className = "" }) => (
    <div
      className={`flex flex-wrap justify-center gap-1.5 sm:gap-2 ${className}`}
    >
      {activeProject.technologies.map((tech, index) => (
        <span
          key={index}
          className="px-2 sm:px-3 py-1 sm:py-1.5 bg-purple-600/20 text-purple-300 rounded-full text-xs font-medium border border-purple-500/30 hover:bg-purple-600/30 transition-colors whitespace-nowrap"
        >
          {tech}
        </span>
      ))}
    </div>
  );

  return (
    <div className="bg-slate-900 min-h-screen w-full relative pt-10">
      <div className="min-h-screen">
        <div className="lg:grid lg:grid-cols-[55%_45%] xl:grid-cols-[60%_40%]">
          <MacbookMockup
            projects={carouselProjects}
            autoRotate={false}
            currentIndex={activeProjectIndex}
          />

          {/* Project Details Section */}
          <div className=" lg:h-full relative flex flex-col justify-center">
            <div className="w-full max-w-xl mx-auto space-y-4 sm:space-y-6 lg:space-y-6 xl:space-y-8">
              {/* Action Buttons */}
              <ActionButtons className="flex-col gap-2 sm:flex-row sm:gap-3" />

              {/* Description */}
              <div className="min-h-[80px] sm:min-h-[100px] lg:min-h-[120px] xl:min-h-[140px] flex items-center justify-center">
                <p className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-lg text-slate-300 leading-relaxed text-center">
                  {activeProject.description}
                </p>
              </div>

              {/* Technology Tags */}
              <TechnologyTags />
            </div>
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 h-20 sm:h-24 lg:h-28 xl:h-32 2xl:h-36 flex flex-col items-center justify-center bg-gradient-to-t from-slate-900 via-slate-900/90 to-transparent z-10">
          <div className="text-center space-y-2 sm:space-y-3 lg:space-y-3 xl:space-y-4">
            <ProjectNavigation
              projects={projectDetails}
              activeIndex={activeProjectIndex}
              onProjectChange={handleProjectChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
