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
  const currentIndex =
    externalCurrentIndex !== undefined
      ? externalCurrentIndex
      : internalCurrentIndex;

  const frame = {
    top: "5.6%",
    left: "13.3%",
    width: "73.3%",
    height: "84.4%",
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

  const currentProject = projects[currentIndex];

  return (
    <div className=" justify-center">
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
            className="object-cover transition-opacity duration-500"
            priority
          />
        </div>
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
