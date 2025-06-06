"use client";

import Image from "next/image";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

export default function ResponsiveMockup({
  projects = [],
  autoRotate = true,
  rotationInterval = 4000,
  currentIndex: externalCurrentIndex,
}) {
  const [internalCurrentIndex, setInternalCurrentIndex] = useState(0);
  const [deviceType, setDeviceType] = useState("desktop");

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
      } else if (width < 1024) {
        setDeviceType("tablet");
      } else {
        setDeviceType("desktop");
      }
    };

    // Set initial device type
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Get mockup configuration based on device type
  const getMockupConfig = () => {
    switch (deviceType) {
      case "mobile":
        return {
          mockupSrc: "/iphone-mockup.png",
          mockupAlt: "iPhone mock-up",
          frame: {
            top: "1%",
            left: "2%",
            width: "94.8%",
            height: "98.5%",
          },
          projectPrefix: "iphone-",
          folderPath: "/iphoneProjectImages/",
        };
      case "tablet":
        return {
          mockupSrc: "/ipad-mockup.png",
          mockupAlt: "iPad mock-up",
          frame: {
            top: "9%",
            left: "13%",
            width: "74%",
            height: "82%",
          },
          projectPrefix: "ipad-",
          folderPath: "/ipadProjectImages/",
        };
      default: // desktop
        return {
          mockupSrc: "/macbook-mockup.png",
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
      <div className="flex w-full items-center justify-center">
        <div className="text-gray-500">No projects to display</div>
      </div>
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
    };

    const mappedName =
      imageNameMapping[nameWithoutExt.toLowerCase()] ||
      nameWithoutExt.toLowerCase();

    return `${mockupConfig.folderPath}${mockupConfig.projectPrefix}${mappedName}.png`;
  };

  return (
    <div className="justify-center">
      <div
        className={`relative w-full px-4 flex ${
          deviceType === "mobile"
            ? "max-w-sm mx-auto"
            : deviceType === "tablet"
            ? "max-w-2xl mx-auto"
            : "max-w-4xl"
        }`}
      >
        {/* Screen overlay - Behind mockup */}
        <div
          className={`absolute overflow-hidden ${
            deviceType === "mobile"
              ? "rounded-[39px]"
              : deviceType === "tablet"
              ? "rounded-[10px]"
              : "rounded-sm"
          }`}
          style={{
            ...mockupConfig.frame,
            position: "absolute",
            zIndex: 1,
          }}
        >
          <Image
            src={getProjectImageSrc()}
            alt={currentProject.alt}
            fill
            className={`${
              deviceType === "desktop" ? "object-cover" : "object-contain"
            } transition-opacity duration-500 ${
              deviceType === "mobile" 
                ? "scale-[0.9] rounded-[25px]" 
                : deviceType === "tablet" 
                ? "scale-[0.98] rounded-[15px]" 
                : "scale-100 rounded-[8px]"
            }`}
            priority
          />
        </div>

        {/* Mockup device - In front */}
        <Image
          src={mockupConfig.mockupSrc}
          alt={mockupConfig.mockupAlt}
          width={1600}
          height={1000}
          className="pointer-events-none select-none w-full relative z-10"
          priority
        />
      </div>
    </div>
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
