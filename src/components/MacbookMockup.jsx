"use client";

import Image from "next/image";
import PropTypes from "prop-types";

export default function MacbookMockup({
  projectSrc,
  projectAlt = "Project screenshot",
  mockupSrc = "/macbook-mockup.png",
  mockupAlt = "MacBook Air mock-up",
}) {
  const frame = {
    top: "25.2%",
    left: "13.2%",
    width: "73.3%",
    height: "47.3%",
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="relative w-full max-w-4xl px-4">
        {/* MacBook gövdesi */}
        <Image
          src={mockupSrc}
          alt={mockupAlt}
          width={1600}
          height={1000}
          className="pointer-events-none select-none w-full h-auto"
          priority
        />

        {/* Ekran overlay’i */}
        <div
          className="absolute bg-black  overflow-hidden"
          style={{
            ...frame,
            position: "absolute", // 👈🏻 Bunu özellikle ekliyoruz
          }}
        >
          <Image
            src={projectSrc}
            alt={projectAlt}
            fill
            sizes="(max-width:1200px) 100vw, 800px"
            className="object-cover" // object-contain yapabilirsin istersen!
            priority
          />
        </div>

        {/* İnce çerçeve efekti */}
        <div
          className="absolute pointer-events-none border border-gray-700/30"
          style={{
            ...frame,
            position: "absolute", // 👈🏻 Aynı şekilde
          }}
        />
      </div>
    </div>
  );
}

MacbookMockup.propTypes = {
  projectSrc: PropTypes.string.isRequired,
  projectAlt: PropTypes.string,
  mockupSrc:  PropTypes.string,
  mockupAlt:  PropTypes.string,
};