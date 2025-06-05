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
      technologies: ["React", "Tailwind CSS", "Local Storage"],
    },
    {
      title: t("makeCloneTitle"),
      description: t("makeCloneDesc"),
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
      technologies: ["React", "Next.js", "Chart.js", "Web Notification API"],
    },
    {
      title: t("nonoTitle"),
      description: t("nonoDesc"),
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
      technologies: ["React", "Next.js", "Stellar SDK", "AI", "TensorFlow.js"],
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

  return (
    <div className="bg-slate-900 min-h-screen w-full overflow-hidden mt-[-100px] relative">
      {/* Ana Layout Container */}
      <div className="h-screen w-full grid grid-cols-1 lg:grid-cols-[60%_40%]">
        
        {/* MacBook Carousel Section */}
        <div className="bg-slate-900 flex items-center justify-center p-4 sm:p-6 lg:p-8 order-2 lg:order-1">
          <div className="w-full h-full max-w-full max-h-full flex items-center justify-center">
            <MacbookMockup
              projects={carouselProjects}
              autoRotate={false}
              currentIndex={activeProjectIndex}
            />
          </div>
        </div>

        {/* Proje Bilgileri Section */}
        <div className="bg-slate-900 flex items-center justify-center p-4 sm:p-6 lg:p-8 order-1 lg:order-2">
          <div className="w-full max-w-lg lg:max-w-full h-full flex flex-col justify-center text-center">
            
            {/* Proje Başlığı */}
            <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-white via-purple-400 to-white text-transparent bg-clip-text mb-3 lg:mb-4 leading-tight">
              {activeProject.title}
            </h1>
            
            {/* Proje Açıklaması */}
            <p className="text-xs sm:text-sm lg:text-base text-slate-300 max-w-full mx-auto mb-4 lg:mb-6 leading-relaxed px-2 lg:px-0">
              {activeProject.description}
            </p>

            {/* Teknoloji Tag'leri */}
            <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-4 lg:mb-8 px-2 lg:px-0">
              {activeProject.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 sm:px-3 py-1 sm:py-1.5 bg-purple-600/20 text-purple-300 rounded-full text-xs sm:text-sm font-medium border border-purple-500/30 hover:bg-purple-600/30 transition-colors whitespace-nowrap"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Proje Navigasyon Component'i - İki section'ın ortasında alt kısımda */}
      <div className="absolute top-[630px] left-1/2 transform -translate-x-1/2 z-10">
        <ProjectNavigation
          projects={projectDetails}
          activeIndex={activeProjectIndex}
          onProjectChange={handleProjectChange}
        />
      </div>
    </div>
  );
}
