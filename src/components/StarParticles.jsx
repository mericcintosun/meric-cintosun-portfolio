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
    fpsLimit: 144,
    interactivity: {
      detectsOn: "window",
      events: {
        onClick: {
          enable: true,
          mode: "push",
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
          distance: 1500,
          duration: 200,
          opacity: 0.8,
          size: 200,
        },
        push: {
          distance: 400,
          duration: 0.4,
        },
      },
    },
    particles: {
      number: {
        value: 600,
        density: {
          enable: true,
          width: 2560,
          height: 1440,
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
