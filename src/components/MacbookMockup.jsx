"use client";

import Image from "next/image";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ResponsiveMockup({
  projects = [],
  autoRotate = true,
  rotationInterval = 4000,
  currentIndex: externalCurrentIndex,
}) {
  const [internalCurrentIndex, setInternalCurrentIndex] = useState(0);
  const [deviceType, setDeviceType] = useState("desktop");
  const [isLoaded, setIsLoaded] = useState(false);

  // Use external index if provided, otherwise use internal
  const currentIndex =
    externalCurrentIndex !== undefined
      ? externalCurrentIndex
      : internalCurrentIndex;

  // Device detection effect
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setDeviceType("mobile");
      } else {
        setDeviceType("desktop");
      }
    };

    // Set initial device type
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Loading effect
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Get mockup configuration based on device type
  const getMockupConfig = () => {
    switch (deviceType) {
      case "mobile":
        return {
          mockupSrc: "/iphone-mockup.webp",
          mockupAlt: "iPhone mock-up",  
          frame: {
            top: "1%",
            left: "6.1%",
            width: "87.8%",
            height: "97.8%",
          },
          projectPrefix: "iphone-",
          folderPath: "/iphoneProjectImages/",
        };
      default: // desktop
        return {
          mockupSrc: "/macbook-mockup.webp",
          mockupAlt: "MacBook Air mock-up",
          frame: {
            top: "5.6%",
            left: "13.3%",
            width: "73.3%",
            height: "84.4%",
          },
          projectPrefix: "",
          folderPath: "/projectImages/",
        };
    }
  };

  // Auto-rotation effect
  useEffect(() => {
    if (
      !autoRotate ||
      projects.length <= 1 ||
      externalCurrentIndex !== undefined
    )
      return;

    const interval = setInterval(() => {
      setInternalCurrentIndex((prevIndex) =>
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [autoRotate, rotationInterval, projects.length, externalCurrentIndex]);

  if (projects.length === 0) {
    return (
      <motion.div
        className="flex w-full items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-gray-500">No projects to display</div>
      </motion.div>
    );
  }

  const mockupConfig = getMockupConfig();
  const currentProject = projects[currentIndex];

  // Get the appropriate project image based on device type
  const getProjectImageSrc = () => {
    if (deviceType === "desktop") {
      return currentProject.src;
    }

    // For mobile and tablet, construct the new image path
    const originalSrc = currentProject.src;
    const imageName = originalSrc.split("/").pop(); // Get filename
    const nameWithoutExt = imageName.split(".")[0]; // Remove extension

    // Map specific project names to match your naming convention
    const imageNameMapping = {
      "digital-agency": "agency",
      "news-tracker": "newstracker",
      "kitty-todo": "kitty",
      "make-clone": "make",
      "linea-launchpad": "linea-launchpad",
      "studio312": "studio312",
    };

    const mappedName =
      imageNameMapping[nameWithoutExt.toLowerCase()] ||
      nameWithoutExt.toLowerCase();

    return `${mockupConfig.folderPath}${mockupConfig.projectPrefix}${mappedName}.webp`;
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const mockupVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  const screenVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.8,
      },
    },
    exit: {
      opacity: 0,
      scale: 1.1,
      transition: { duration: 0.3 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3 },
    },
  };

  const deviceTransitionVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="justify-center"
      variants={containerVariants}
      initial="hidden"
      animate={isLoaded ? "visible" : "hidden"}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={deviceType}
          className={`relative w-full px-4 flex overflow-hidden ${deviceType === "mobile" ? "max-w-[200px] mx-auto" : "max-w-4xl"
            }`}
          variants={deviceTransitionVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {/* Screen overlay - Behind mockup for mobile/desktop, in front for tablet */}
          <motion.div
            className={`absolute overflow-hidden ${deviceType === "mobile" ? "rounded-[37px]" : "rounded-sm"
              }`}
            style={{
              ...mockupConfig.frame,
              position: "absolute",
              zIndex: 1,
            }}
            variants={screenVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence mode="wait">
              {deviceType === "mobile" ? (
                <motion.div
                  key={`mobile-${currentIndex}`}
                  className="w-[90%] h-[100%] mx-auto my-auto bg-black flex flex-col"
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <div className="h-[15%] bg-black"></div>
                  <motion.div
                    className="h-[70%] overflow-hidden"
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={getProjectImageSrc()}
                      alt={currentProject.alt}
                      fill
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                      className="object-cover transition-opacity duration-500 scale-[0.85]"
                    />
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  key={`desktop-${currentIndex}`}
                  className="w-full h-full relative"
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={getProjectImageSrc()}
                    alt={currentProject.alt}
                    fill
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    className="object-cover transition-opacity duration-500 scale-100 rounded-[8px]"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Mockup device - In front */}
          <motion.div
            variants={mockupVariants}
            initial="hidden"
            animate="visible"
            className="w-full relative z-10"
          >
            <Image
              src={mockupConfig.mockupSrc}
              alt={mockupConfig.mockupAlt}
              width={1600}
              height={1000}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1600px"
              className="pointer-events-none select-none w-full"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

ResponsiveMockup.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  autoRotate: PropTypes.bool,
  rotationInterval: PropTypes.number,
  currentIndex: PropTypes.number,
};
