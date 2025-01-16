"use client";

import React, { useCallback, useEffect, useState } from "react";
import dynamic from 'next/dynamic';
import { loadFull } from "tsparticles";

// Particles'ı dinamik olarak import et
const Particles = dynamic(() => import("react-tsparticles"), {
  ssr: false,
  loading: () => null,
  suspense: true
});

const StarParticles = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Cleanup function
    return () => setMounted(false);
  }, []);

  const particlesInit = useCallback(async (engine) => {
    try {
      await loadFull(engine);
    } catch (error) {
      console.error('Particles init error:', error);
    }
  }, []);

  // Particle options dışarı çıkarıldı - her render'da yeniden oluşturulmaması için
  const particlesOptions = React.useMemo(() => ({
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
          mode: "bubble",
        },
        resize: {
          enable: true,
          delay: 0.5,
        },
      },
      modes: {
        bubble: {
          distance: 40,
          duration: 2,
          opacity: 1,
          size: 4,
        },
        push: {
          quantity: 8,
          size: 1,
        },
      },
    },
    particles: {
      number: {
        value: 600,
        density: {
          enable: true,
          value_area: 800
        }
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
        random: true,
        animation: {
          enable: true,
          speed: 1,
          sync: false,
          startValue: "random",
          destroy: "none",
        },
      },
      size: {
        value: { min: 1, max: 1.5 },
        random: true,
        animation: {
          enable: false,
        },
      },
      move: {
        enable: true,
        speed: { min: 0.1, max: 1 },
        direction: "none",
        random: true,
        straight: false,
        outModes: {
          default: "out",
          bottom: "out",
          left: "out",
          right: "out",
          top: "out"
        },
      },
      links: {
        enable: false,
      },
    },
  }), []); // Empty dependency array since options are static

  // Client-side only rendering
  if (!mounted) return null;

  return (
    <div className="fixed inset-0 w-full h-full -z-10" suppressHydrationWarning>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="w-full h-full"
      />
    </div>
  );
};

export default React.memo(StarParticles);
