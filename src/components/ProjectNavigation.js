"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";

export default function ProjectNavigation({
  projects,
  activeIndex,
  onProjectChange,
}) {
  const scrollContainerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const navigationRef = useRef(null);
  const isInView = useInView(navigationRef, { once: false, amount: 0.3 });

  // Screen size tracking
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Proje görsellerini ekliyoruz (carousel data ile aynı sırada)
  const projectImages = [
    "/projectLogos/alvion-logo.png",
    "/projectLogos/letmeclick-logo.png",
    "/projectLogos/linea-launchpad-logo.svg",
    "/projectLogos/movetree-logo.png",
    "/projectLogos/suivox-logo.png",
    "/projectLogos/zukas-logo.png",
    "/projectLogos/studio312-logo.png",
    "/projectLogos/alvin-logo.png",
    "/projectLogos/aurascend-logo.png",
    "/projectLogos/axis-logo.png",
    "/projectLogos/digital-agency-logo.png",
    "/projectLogos/eduflow-logo.png",
    "/projectLogos/kitty-logo.png",
    "/projectLogos/make-logo.png",
    "/projectLogos/news-tracker-logo.png",
    "/projectLogos/nono-logo.png",
    "/projectLogos/persona-logo.png",
    "/projectLogos/riskon-logo.png",
    "/projectLogos/hp-logo.png",
  ];

  // Proje navigasyon fonksiyonları
  const goToPreviousProject = () => {
    const newIndex = activeIndex === 0 ? projects.length - 1 : activeIndex - 1;
    onProjectChange(newIndex);
  };

  const goToNextProject = () => {
    const newIndex = activeIndex === projects.length - 1 ? 0 : activeIndex + 1;
    onProjectChange(newIndex);
  };

  // Aktif projeyi merkeze kaydır (sadece desktop için)
  useEffect(() => {
    if (scrollContainerRef.current && window.innerWidth >= 768) {
      const container = scrollContainerRef.current;
      const activeCard = container.children[activeIndex];
      if (activeCard) {
        const containerWidth = container.offsetWidth;
        const cardWidth = activeCard.offsetWidth;
        const cardLeft = activeCard.offsetLeft;
        const scrollPosition = cardLeft - containerWidth / 2 + cardWidth / 2;

        container.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });
      }
    }
  }, [activeIndex]);

  // Touch/Swipe support for mobile
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNextProject();
    }
    if (isRightSwipe) {
      goToPreviousProject();
    }
  };

  // Mobil için 3'lü görünüm: merkez aktif proje, yanlarında komşu projeler
  const getMobileVisibleProjects = () => {
    const prevIndex = activeIndex === 0 ? projects.length - 1 : activeIndex - 1;
    const nextIndex = activeIndex === projects.length - 1 ? 0 : activeIndex + 1;

    return [
      { ...projects[prevIndex], index: prevIndex, position: "prev" },
      { ...projects[activeIndex], index: activeIndex, position: "active" },
      { ...projects[nextIndex], index: nextIndex, position: "next" },
    ];
  };

  // Tablet için 5'lü görünüm
  const getTabletVisibleProjects = () => {
    const result = [];
    for (let i = -2; i <= 2; i++) {
      let index = activeIndex + i;
      if (index < 0) index = projects.length + index;
      if (index >= projects.length) index = index - projects.length;

      result.push({
        ...projects[index],
        index: index,
        position: i === 0 ? "active" : `offset${i}`,
      });
    }
    return result;
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    hover: {
      scale: 1.1,
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  const projectCardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  const projectGridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.2 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const activeIndicatorVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={navigationRef}
      className="relative w-full max-w-5xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Mobile & Tablet View - Combined Responsive */}
      <div className="block md:hidden">
        {/* Navigation Container */}
        <motion.div
          className="flex items-center justify-center gap-4 sm:gap-6"
          variants={containerVariants}
        >
          {/* Sol Arrow - Mobile görünümde görünür */}
          <motion.button
            onClick={goToPreviousProject}
            className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 bg-white/5 hover:bg-white/10 text-white/60 hover:text-white backdrop-blur-md border border-white/10 hover:border-white/20 sm:hidden"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <motion.svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              initial={{ x: 0 }}
              whileHover={{ x: -2 }}
              transition={{ duration: 0.2 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </motion.svg>
          </motion.button>

          {/* Projects Container - Responsive */}
          <motion.div
            className="flex items-center gap-3 px-4 sm:grid sm:grid-cols-5 sm:gap-3 sm:px-4 sm:py-3 sm:max-w-md sm:mx-auto"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            variants={projectGridVariants}
          >
            {/* Mobile: 3'lü görünüm, Tablet: 5'li görünüm */}
            <AnimatePresence mode="wait">
              {(isMobile
                ? getMobileVisibleProjects()
                : getTabletVisibleProjects()
              ).map((project, idx) => {
                const isActive = project.position === "active";
                const scale = isActive
                  ? isMobile
                    ? 1
                    : 1.1
                  : isMobile
                  ? 0.75
                  : 1;
                const opacity = isActive ? 1 : isMobile ? 0.5 : 1;

                return (
                  <motion.div
                    key={`${project.index}-${project.position}`}
                    className="relative flex-shrink-0 transition-all duration-300 ease-out cursor-pointer group sm:flex-shrink"
                    onClick={() => onProjectChange(project.index)}
                    style={{
                      transform: `scale(${scale})`,
                      opacity: opacity,
                    }}
                    variants={projectCardVariants}
                    whileHover="hover"
                    whileTap="tap"
                    layout
                  >
                    <motion.div
                      className={`relative w-14 h-14 sm:w-full sm:aspect-square rounded-lg overflow-hidden transition-all duration-300 ease-out ${
                        isActive
                          ? "ring-2 ring-white/60 ring-offset-2 ring-offset-slate-900"
                          : "ring-1 ring-white/20 sm:hover:ring-white/40 sm:hover:scale-105"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        variants={imageVariants}
                        className="w-full h-full"
                      >
                        <Image
                          src={
                            projectImages[project.index] || "/main-image.webp"
                          }
                          alt={project.title}
                          fill
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                          sizes="56px"
                          className="object-cover object-center transition-all duration-300"
                        />
                      </motion.div>

                      <motion.div
                        className={`absolute inset-0 transition-all duration-300 ${
                          isActive
                            ? "bg-gradient-to-br from-white/10 to-transparent"
                            : "bg-slate-900/40 group-hover:bg-slate-900/20"
                        }`}
                        animate={{ opacity: isActive ? 0.7 : 1 }}
                      />

                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-lg"
                            variants={activeIndicatorVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                          />
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* Sağ Arrow - Mobile görünümde görünür */}
          <motion.button
            onClick={goToNextProject}
            className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 bg-white/5 hover:bg-white/10 text-white/60 hover:text-white backdrop-blur-md border border-white/10 hover:border-white/20 sm:hidden"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <motion.svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              initial={{ x: 0 }}
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </motion.svg>
          </motion.button>
        </motion.div>

        {/* Tablet Navigation Arrows - Sadece tablet görünümde */}
        <motion.div
          className="hidden sm:flex items-center justify-center gap-6 mt-4"
          variants={containerVariants}
        >
          <motion.button
            onClick={goToPreviousProject}
            className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 bg-white/5 hover:bg-white/10 text-white/60 hover:text-white backdrop-blur-md border border-white/10 hover:border-white/20"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <motion.svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              initial={{ x: 0 }}
              whileHover={{ x: -2 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </motion.svg>
          </motion.button>

          <motion.button
            onClick={goToNextProject}
            className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 bg-white/5 hover:bg-white/10 text-white/60 hover:text-white backdrop-blur-md border border-white/10 hover:border-white/20"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <motion.svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              initial={{ x: 0 }}
              whileHover={{ x: 2 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </motion.svg>
          </motion.button>
        </motion.div>
      </div>

      {/* Desktop View - Original Design */}
      <div className="hidden md:block">
        <motion.div
          className="flex items-center justify-center gap-6"
          variants={containerVariants}
        >
          {/* Sol Navigation Button */}
          <motion.button
            onClick={goToPreviousProject}
            className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-white/5 hover:bg-white/10 text-white/60 hover:text-white backdrop-blur-md border border-white/10 hover:border-white/20"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <motion.svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              initial={{ x: 0 }}
              whileHover={{ x: -2 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </motion.svg>
          </motion.button>

          {/* Desktop View - Multiple Projects */}
          <motion.div
            ref={scrollContainerRef}
            className="flex items-center gap-3 overflow-x-auto scrollbar-hide px-6 py-3"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              maxWidth: "600px",
            }}
            variants={projectGridVariants}
          >
            {projects.map((project, index) => {
              const isActive = index === activeIndex;
              const distanceFromActive = Math.abs(index - activeIndex);

              // Opacity ve scale hesaplama
              let opacity = 1;
              let scale = 1;

              if (!isActive) {
                if (distanceFromActive === 1) {
                  opacity = 0.5;
                  scale = 0.8;
                } else if (distanceFromActive === 2) {
                  opacity = 0.3;
                  scale = 0.7;
                } else {
                  opacity = 0.2;
                  scale = 0.65;
                }
              } else {
                scale = 1.05;
              }

              return (
                <motion.div
                  key={index}
                  className="relative flex-shrink-0 transition-all duration-500 ease-out cursor-pointer group"
                  onClick={() => onProjectChange(index)}
                  style={{
                    opacity: opacity,
                    transform: `scale(${scale})`,
                  }}
                  variants={projectCardVariants}
                  whileHover="hover"
                  whileTap="tap"
                  layout
                >
                  {/* Project Card */}
                  <motion.div
                    className={`relative w-14 h-14 rounded-xl overflow-hidden transition-all duration-500 ease-out ${
                      isActive
                        ? "ring-2 ring-white/40 ring-offset-2 ring-offset-slate-900"
                        : "ring-1 ring-white/10 hover:ring-white/20"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Project Image */}
                    <motion.div
                      variants={imageVariants}
                      className="w-full h-full"
                    >
                      <Image
                        src={projectImages[index] || "/main-image.webp"}
                        alt={project.title}
                        fill
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                        sizes="56px"
                        className="object-cover object-center transition-all duration-500 group-hover:scale-110"
                      />
                    </motion.div>

                    {/* Overlay */}
                    <motion.div
                      className={`absolute inset-0 transition-all duration-500 ${
                        isActive
                          ? "bg-gradient-to-br from-white/10 to-transparent"
                          : "bg-slate-900/40 group-hover:bg-slate-900/20"
                      }`}
                      animate={{ opacity: isActive ? 0.7 : 1 }}
                    />

                    {/* Active indicator */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-lg"
                          variants={activeIndicatorVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                        />
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Sağ Navigation Button */}
          <motion.button
            onClick={goToNextProject}
            className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-white/5 hover:bg-white/10 text-white/60 hover:text-white backdrop-blur-md border border-white/10 hover:border-white/20"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <motion.svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              initial={{ x: 0 }}
              whileHover={{ x: 2 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </motion.svg>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}
