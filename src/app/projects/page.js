"use client";

import ResponsiveMockup from "@/components/MacbookMockup";
import ProjectNavigation from "@/components/ProjectNavigation";
import Toast from "@/components/Toast";
import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

export default function Projects() {
  const { t } = useLanguage();
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("info");
  const [showToast, setShowToast] = useState(false);

  // Loading effect
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Toast functions
  const showToastMessage = (message, type = "info") => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
  };

  const closeToast = () => {
    setShowToast(false);
  };

  // Proje detayları
  const projectDetails = [
    {
      title: t("alvionTitle"),
      description: t("alvionDesc"),
      detailedDescription: t("alvionDetailedDesc"),
      category: "DeFi Platform",
      github: "https://github.com/mericcintosun/alvion",
      website: null, // Live demo in progress
      technologies: ["Next.js", "AI", "Algorand", "DeFi"],
    },
    {
      title: t("letmeClickTitle"),
      description: t("letmeClickDesc"),
      detailedDescription: t("letmeClickDetailedDesc"),
      category: "Gaming Ecosystem",
      github: null, // Private repo
      website: null, // Live demo in progress
      technologies: ["Sui", "zkLogin", "React", "Web3"],
    },
    {
      title: t("lineaLaunchpadTitle"),
      description: t("lineaLaunchpadDesc"),
      detailedDescription: t("lineaLaunchpadDetailedDesc"),
      category: "Token Launchpad",
      github: "https://github.com/mericcintosun/splice",
      website: null, // Live demo in progress
      technologies: ["Linea", "Solidity", "Tailwind", "AI Chatbot"],
    },
    {
      title: t("movetreeTitle"),
      description: t("movetreeDesc"),
      detailedDescription: t("movetreeDetailedDesc"),
      category: "Social Platform",
      github: "https://github.com/mericcintosun/movetree",
      website: null, // Live demo in progress
      technologies: ["Sui", "Move", "zkLogin", "SuiNS"],
    },
    {
      title: t("suivoxTitle"),
      description: t("suivoxDesc"),
      detailedDescription: t("suivoxDetailedDesc"),
      category: "Voting Platform",
      github: "https://github.com/mericcintosun/sui-voting-app",
      website: null, // Live demo in progress
      technologies: ["Sui", "Move", "DAO", "Governance"],
    },
    {
      title: t("zukasTitle"),
      description: t("zukasDesc"),
      detailedDescription: t("zukasDetailedDesc"),
      category: "Innovation Program",
      github: "https://github.com/mericcintosun/zukas",
      website: "https://zukas.city/",
      technologies: ["Blockchain", "Community", "Governance"],
    },
    {
      title: t("studio312Title"),
      description: t("studio312Desc"),
      detailedDescription: t("studio312DetailedDesc"),
      category: "Mobile Studio",
      github: "https://github.com/mericcintosun/studio312-website",
      website: "https://studio312-website.vercel.app/",
      technologies: ["Flutter", "React Native", "Mobile"],
    },
    {
      title: t("alvinTitle"),
      description: t("alvinDesc"),
      detailedDescription: t("alvinDetailedDesc"),
      category: "Productivity App",
      github: "https://github.com/mericcintosun/alvin-newyear-progress",
      website: "https://alvin-newyear-progress.vercel.app/",
      technologies: ["React", "Next.js", "Node.js"],
    },
    {
      title: t("aurascendTitle"),
      description: t("aurascendDesc"),
      detailedDescription: t("aurascendDetailedDesc"),
      category: "Emotion AI",
      github: "https://github.com/mericcintosun/aurascend",
      website: "https://aurascend.vercel.app/",
      technologies: ["React", "Next.js", "MongoDB", "AI"],
    },
    {
      title: t("axisTitle"),
      description: t("axisDesc"),
      detailedDescription: t("axisDetailedDesc"),
      category: "AI Assistant",
      github: "https://github.com/mericcintosun/Xperience-hackathon-axis",
      website: "https://axis-ai.vercel.app/",
      technologies: ["React", "Next.js", "AI", "Blockchain"],
    },
    {
      title: t("digitalAgencyTitle"),
      description: t("digitalAgencyDesc"),
      detailedDescription: t("digitalAgencyDetailedDesc"),
      category: "Website",
      github: "https://github.com/mericcintosun/digital-agency-blog-website",
      website: null, // Live demo in progress
      technologies: ["React", "Next.js", "WordPress", "MongoDB"],
    },
    {
      title: t("eduflowTitle"),
      description: t("eduflowDesc"),
      detailedDescription: t("eduflowDetailedDesc"),
      category: "Education App",
      github: "https://github.com/alperenbekci/eduflow",
      website: "https://eduflow-tan.vercel.app/",
      technologies: ["React", "Next.js", "Solidity"],
    },
    {
      title: t("kittyTodoTitle"),
      description: t("kittyTodoDesc"),
      detailedDescription: t("kittyTodoDetailedDesc"),
      category: "Productivity App",
      github: "https://github.com/mericcintosun/react-todolist-app/tree/main",
      website: "https://react-todolist-app-psi.vercel.app/",
      technologies: ["React"],
    },
    {
      title: t("makeCloneTitle"),
      description: t("makeCloneDesc"),
      detailedDescription: t("makeCloneDetailedDesc"),
      category: "Automation Tool",
      github: "https://vercel.com/mericcintosun/make-clone",
      website: "https://make-clone.vercel.app/",
      technologies: ["Next.js", "AI", "No-Code"],
    },
    {
      title: t("newsTrackerTitle"),
      description: t("newsTrackerDesc"),
      detailedDescription: t("newsTrackerDetailedDesc"),
      category: "News App",
      github: "https://github.com/mericcintosun/news-tracker-frontend-task/",
      website: "https://news-tracker-frontend-task.vercel.app/",
      technologies: ["React", "Next.js", "Chart.js"],
    },
    {
      title: t("nonoTitle"),
      description: t("nonoDesc"),
      detailedDescription: t("nonoDetailedDesc"),
      category: "Puzzle Game",
      github: "https://github.com/mericcintosun/nono",
      website: "https://devfolio.co/projects/nono-68b9",
      technologies: ["RISC0", "Rust", "Solidity"],
    },
    {
      title: t("personaTitle"),
      description: t("personaDesc"),
      detailedDescription: t("personaDetailedDesc"),
      category: "Web3 Wallet",
      github: "https://github.com/itublockchain/ETHOnline24-Persona",
      website: "https://persona-khaki.vercel.app/",
      technologies: ["React", "Next.js", "Wagmi", "Solidity"],
    },
    {
      title: t("riskonTitle"),
      description: t("riskonDesc"),
      detailedDescription: t("riskonDetailedDesc"),
      category: "DeFi Platform",
      github: "https://github.com/mericcintosun/riskon",
      website: "https://riskon.vercel.app/",
      technologies: ["Stellar SDK", "AI", "TensorFlow.js"],
    },
    {
      title: t("harryPotterTitle"),
      description: t("harryPotterDesc"),
      detailedDescription: t("harryPotterDetailedDesc"),
      category: "NFT Marketplace",
      github: "https://github.com/mericcintosun/harry-potter-dapp",
      website: "https://harry-potter-dapp.vercel.app/",
      technologies: ["Blockchain", "NFT", "Web3"],
    },
  ];

  // Proje resimleri için carousel data
  const carouselProjects = [
    {
      src: "/projectImages/alvion.png",
      alt: "Alvion project",
      title: "Alvion",
    },
    {
      src: "/projectImages/letmeclick.png",
      alt: "letme.click project",
      title: "letme.click",
    },
    {
      src: "/projectImages/linea-launchpad.png",
      alt: "Linea Launchpad project",
      title: "Linea Launchpad",
    },
    {
      src: "/projectImages/movetree.png",
      alt: "MoveTree project",
      title: "MoveTree",
    },
    {
      src: "/projectImages/suivox.png",
      alt: "SuiVox project",
      title: "SuiVox",
    },
    {
      src: "/projectImages/zukas.png",
      alt: "ZUKAS City project",
      title: "ZUKAS City",
    },
    {
      src: "/projectImages/studio312.png",
      alt: "Studio 312 project",
      title: "Studio 312",
    },
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

  // Animation variants
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.05,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
        delay: 0,
      },
    },
  };

  const buttonContainerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.05,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  const techTagVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      backgroundColor: "rgba(168, 85, 247, 0.4)",
      transition: { duration: 0.2 },
    },
  };

  const techContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
        delayChildren: 0,
      },
    },
  };

  const navigationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        delay: 0,
      },
    },
  };

  // Action buttons component
  const ActionButtons = ({ className = "" }) => {
    const handleGithubClick = (e) => {
      if (!activeProject.github) {
        e.preventDefault();
        showToastMessage("🔒 Private Repository", "warning");
      }
    };

    const handleWebsiteClick = (e) => {
      if (!activeProject.website) {
        e.preventDefault();
        showToastMessage("🚧 Live Demo In Progress!", "info");
      }
    };

    return (
      <motion.div
        className={`flex gap-2 sm:gap-3 items-center justify-center ${className}`}
        variants={buttonContainerVariants}
        initial="hidden"
        animate="visible"
        style={{
          isolation: "isolate",
          willChange: "auto",
        }}
      >
        <AnimatePresence mode="wait">
          {/* GitHub Button */}
          {activeProject.github ? (
            <motion.a
              key={`github-${activeProjectIndex}`}
              href={activeProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 sm:gap-2 transition-colors duration-200 rounded-lg px-3 sm:px-4 py-2 border text-xs sm:text-sm bg-gray-800 hover:bg-gray-700 border-gray-600 cursor-pointer"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              initial="hidden"
              animate="visible"
              exit="hidden"
              style={{
                isolation: "isolate",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
            >
              <motion.svg
                className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </motion.svg>
              <span className="font-medium text-white">GitHub</span>
            </motion.a>
          ) : (
            <motion.button
              key={`github-${activeProjectIndex}`}
              onClick={handleGithubClick}
              className="flex items-center gap-1.5 sm:gap-2 transition-colors duration-200 rounded-lg px-3 sm:px-4 py-2 border text-xs sm:text-sm bg-gray-800/50 border-gray-700 cursor-not-allowed opacity-70"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              style={{
                isolation: "isolate",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
            >
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span className="font-medium text-white">GitHub</span>
              <svg
                className="w-3 h-3 text-white/50"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.button>
          )}

          {/* Live App Button */}
          {activeProject.website ? (
            <motion.a
              key={`website-${activeProjectIndex}`}
              href={activeProject.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 sm:gap-2 transition-colors duration-200 rounded-lg px-3 sm:px-4 py-2 border text-xs sm:text-sm bg-purple-700 hover:bg-purple-600 border-purple-500 cursor-pointer"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              initial="hidden"
              animate="visible"
              exit="hidden"
              style={{
                isolation: "isolate",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
            >
              <motion.svg
                className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </motion.svg>
              <span className="font-medium text-white">Live App</span>
            </motion.a>
          ) : (
            <motion.button
              key={`website-${activeProjectIndex}`}
              onClick={handleWebsiteClick}
              className="flex items-center gap-1.5 sm:gap-2 transition-colors duration-200 rounded-lg px-3 sm:px-4 py-2 border text-xs sm:text-sm bg-purple-700/50 border-purple-600 cursor-not-allowed opacity-70"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              style={{
                isolation: "isolate",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
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
              <svg
                className="w-3 h-3 text-white/50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  // Technology tags component
  const TechnologyTags = ({ className = "" }) => (
    <motion.div
      className={`flex flex-wrap justify-center gap-1.5 sm:gap-2 ${className}`}
      variants={techContainerVariants}
      initial="hidden"
      animate="visible"
      style={{
        isolation: "isolate",
        willChange: "auto",
      }}
    >
      <AnimatePresence mode="wait">
        {activeProject.technologies.map((tech, index) => (
          <motion.span
            key={`${tech}-${activeProjectIndex}`}
            className="px-2 sm:px-3 py-1 sm:py-1.5 bg-purple-600/20 text-purple-300 rounded-full text-xs font-medium border border-purple-500/30 hover:bg-purple-600/30 transition-colors whitespace-nowrap"
            variants={techTagVariants}
            whileHover="hover"
            layout
            style={{
              isolation: "isolate",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            {tech}
          </motion.span>
        ))}
      </AnimatePresence>
    </motion.div>
  );

  return (
    <>
      <Toast
        message={toastMessage}
        isVisible={showToast}
        onClose={closeToast}
        type={toastType}
      />
      <motion.div
        className="bg-slate-900 w-full relative lg:pt-10"
        variants={pageVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        <div className="lg:grid lg:grid-cols-[55%_45%] xl:grid-cols-[60%_40%]">
          <motion.div variants={sectionVariants}>
            <ResponsiveMockup
              projects={carouselProjects}
              autoRotate={false}
              currentIndex={activeProjectIndex}
            />
          </motion.div>

          {/* Project Details Section */}
          <motion.div
            className="lg:h-full relative flex flex-col justify-center"
            variants={sectionVariants}
          >
            <div className="w-full max-w-xl mx-auto space-y-4 sm:space-y-6 lg:space-y-6 xl:space-y-8">
              {/* Action Buttons */}
              <ActionButtons className="flex-row gap-2 sm:flex-row sm:gap-3 pt-6 pb-4 lg:pt-0" />

              {/* Project Title and Description */}
              <div className="flex flex-col items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.h2
                    key={`title-${activeProjectIndex}`}
                    className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-white font-bold text-center pb-6"
                    variants={titleVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    {activeProject.title}
                  </motion.h2>
                </AnimatePresence>

                <AnimatePresence mode="wait">
                  <motion.p
                    key={`desc-${activeProjectIndex}`}
                    className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-lg text-slate-300 leading-relaxed text-center"
                    variants={descriptionVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    <span className="block lg:hidden">
                      {activeProject.description}
                    </span>
                    <span className="hidden lg:block">
                      {activeProject.detailedDescription}
                    </span>
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Technology Tags */}
              <TechnologyTags />
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="relative bottom-0 left-0 right-0 h-20 sm:h-24 lg:h-28 xl:h-32 2xl:h-36 flex flex-col items-center justify-center bg-gradient-to-t from-slate-900 via-slate-900/90 to-transparent mt-4"
        variants={navigationVariants}
        style={{
          isolation: "isolate",
          willChange: "auto",
        }}
      >
        <div className="text-center space-y-2 sm:space-y-3 lg:space-y-3 xl:space-y-4">
          <ProjectNavigation
            projects={projectDetails}
            activeIndex={activeProjectIndex}
            onProjectChange={handleProjectChange}
          />
        </div>
      </motion.div>
    </>
  );
}
