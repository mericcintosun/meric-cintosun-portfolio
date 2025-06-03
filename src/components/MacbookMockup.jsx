"use client";

import Image from "next/image";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";


export default function MacbookMockup({
  projects = [],
  mockupSrc = "/macbook-mockup.png",
  mockupAlt = "MacBook Air mock-up",
  autoRotate = true,
  rotationInterval = 4000,
  currentIndex: externalCurrentIndex,
}) {
  const [internalCurrentIndex, setInternalCurrentIndex] = useState(0);

  // Use external index if provided, otherwise use internal
  const currentIndex = externalCurrentIndex !== undefined ? externalCurrentIndex : internalCurrentIndex;

  const frame = {
    top: "25.2%",
    left: "13.2%",
    width: "73.3%",
    height: "47.3%",
  };

  // Auto-rotation effect
  useEffect(() => {
    if (!autoRotate || projects.length <= 1 || externalCurrentIndex !== undefined) return;

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

  const currentProject = projects[currentIndex];

  return (
    <div className="w-full flex justify-center mt-[-100px]">
      <div className="relative w-full max-w-4xl px-4 flex">
        {/* MacBook gövdesi */}
        <Image
          src={mockupSrc}
          alt={mockupAlt}
          width={1600}
          height={1000}
          className="pointer-events-none select-none w-full"
          priority
        />

        {/* Ekran overlay'i */}
        <div
          className="absolute bg-black overflow-hidden"
          style={{
            ...frame,
            position: "absolute",
          }}
        >
          <Image
            src={currentProject.src}
            alt={currentProject.alt}
            fill
            sizes="(max-width:1200px) 100vw, 800px"
            className="object-contain transition-opacity duration-500"
            priority
          />
        </div>

        {/* İnce çerçeve efekti */}
        <div
          className="absolute pointer-events-none border border-gray-700/30"
          style={{
            ...frame,
            position: "absolute",
          }}
        />
      </div>
    </div>
  );
}

MacbookMockup.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  mockupSrc: PropTypes.string,
  mockupAlt: PropTypes.string,
  autoRotate: PropTypes.bool,
  rotationInterval: PropTypes.number,
  currentIndex: PropTypes.number,
};
