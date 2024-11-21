"use client";

import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const StarParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fullScreen: {
      enable: true,
      zIndex: 0,
    },
    detectRetina: true,
    fpsLimit: 120,
    interactivity: {
      detectsOn: "window",
      events: {
        onClick: {
          enable: true,
          mode: "repulse",
        },
        onHover: {
          enable: true,
          mode: " bubble ",
        },
        resize: {
          enable: true,
          delay: 0.5,
        },
      },
      modes: {
        bubble: {
          distance: 250,
          duration: 2,
          opacity: 0.5,
          size: 4,
        },
        repulse: {
          distance: 400,
          duration: 0.4,
        },
      },
    },
    particles: {
      number: {
        value: 400,
        density: {
          enable: true,
          width: 1920,
          height: 1080,
        },
      },
      color: {
        value: [
          "#0F172A",
          "#3B3276",
          "#D0A4FC",
          "#703DAB",
          "#FFFFFF",
          "#FF9A8F",
        ],
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: { min: 0.1, max: 1 },
        animation: {
          enable: true,
          speed: 1,
          sync: false,
          startValue: "random",
          destroy: "none",
        },
      },
      size: {
        value: { min: 1, max: 1.1 },
        animation: {
          enable: false,
        },
      },
      move: {
        enable: true,
        speed: { min: 0.1, max: 1 },
        direction: "none",
        outModes: {
          default: "out",
        },
        random: false,
        straight: false,
        trail: {
          enable: false,
        },
      },
      links: {
        enable: false,
      },
    },
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesOptions}
      className="fixed inset-0 w-full h-full -z-10"
    />
  );
};

export default StarParticles;
