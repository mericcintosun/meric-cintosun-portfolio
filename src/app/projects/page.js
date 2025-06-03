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
    <div className="bg-slate-900 min-h-screen">
      {/* Ana İçerik */}
      <div className="grid grid-cols-[60%_40%] min-h-screen">
        {/* MacBook Carousel Section */}
        <div className="bg-slate-900">
          <MacbookMockup
            projects={carouselProjects}
            autoRotate={false}
            currentIndex={activeProjectIndex}
          />
        </div>

        {/* Proje Bilgileri Section */}
        <div className="bg-slate-900 pt-20 pb-4 relative">
          <div className="container mx-auto px-6 text-center h-[300px] flex flex-col">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-purple-400 to-white text-transparent bg-clip-text mb-3">
              {activeProject.title}
            </h1>
            <p className="text-sm text-slate-300 max-w-3xl mx-auto mb-4">
              {activeProject.description}
            </p>

            {/* Teknoloji Tag'leri */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {activeProject.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-xs font-medium border border-purple-500/30 hover:bg-purple-600/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Proje Navigasyon Component'i - Açıklamaların hemen altında */}
            <div className="mt-4">
              <ProjectNavigation
                projects={projectDetails}
                activeIndex={activeProjectIndex}
                onProjectChange={handleProjectChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
