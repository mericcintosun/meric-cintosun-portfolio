"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function ProjectNavigation({
  projects,
  activeIndex,
  onProjectChange,
}) {
  const scrollContainerRef = useRef(null);

  // Proje görsellerini ekliyoruz (carousel data ile aynı)
  const projectImages = [
    "/projectImages/alvin.png",
    "/projectImages/aurascend.png",
    "/projectImages/axis.png",
    "/projectImages/digital-agency.png",
    "/projectImages/eduflow.png",
    "/projectImages/kitty-todo.png",
    "/projectImages/make-clone.png",
    "/projectImages/news-tracker.png",
    "/projectImages/nono.png",
    "/projectImages/persona.png",
    "/projectImages/riskon.png",
  ];

  // Aktif proje için renk paleti
  const getActiveColor = (index) => {
    const colors = [
      "border-emerald-400", // Alvin - Yeşil
      "border-blue-400",    // Aurascend - Mavi  
      "border-purple-400",  // Axis - Mor
      "border-orange-400",  // Digital Agency - Turuncu
      "border-cyan-400",    // Eduflow - Cyan
      "border-pink-400",    // Kitty Todo - Pembe
      "border-indigo-400",  // Make Clone - İndigo
      "border-red-400",     // News Tracker - Kırmızı
      "border-yellow-400",  // Nono - Sarı
      "border-green-400",   // Persona - Yeşil
      "border-teal-400",    // Riskon - Teal
    ];
    return colors[index % colors.length];
  };

  // Proje navigasyon fonksiyonları
  const goToPreviousProject = () => {
    const newIndex = activeIndex === 0 ? projects.length - 1 : activeIndex - 1;
    onProjectChange(newIndex);
  };

  const goToNextProject = () => {
    const newIndex = activeIndex === projects.length - 1 ? 0 : activeIndex + 1;
    onProjectChange(newIndex);
  };

  // Aktif projeyi merkeze kaydır
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const activeCard = container.children[activeIndex];
      if (activeCard) {
        const containerWidth = container.offsetWidth;
        const cardWidth = activeCard.offsetWidth;
        const cardLeft = activeCard.offsetLeft;
        const scrollPosition = cardLeft - (containerWidth / 2) + (cardWidth / 2);
        
        container.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
      }
    }
  }, [activeIndex]);

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="flex items-center justify-center gap-6">
        
        {/* Sol Navigation Button */}
        <button
          onClick={goToPreviousProject}
          className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 bg-slate-800/50 hover:bg-slate-700/80 text-slate-400 hover:text-white backdrop-blur-sm"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Projects Container */}
        <div 
          ref={scrollContainerRef}
          className="flex items-center gap-4 overflow-x-auto scrollbar-hide px-8 py-4"
          style={{ 
            scrollbarWidth: "none", 
            msOverflowStyle: "none",
            maxWidth: "600px"
          }}
        >
          {projects.map((project, index) => {
            const isActive = index === activeIndex;
            const distanceFromActive = Math.abs(index - activeIndex);
            
            // Opacity ve scale hesaplama
            let opacity = 1;
            let scale = 1;
            
            if (!isActive) {
              if (distanceFromActive === 1) {
                opacity = 0.6;
                scale = 0.85;
              } else if (distanceFromActive === 2) {
                opacity = 0.4;
                scale = 0.75;
              } else {
                opacity = 0.25;
                scale = 0.7;
              }
            } else {
              scale = 1.1;
            }

            return (
              <div
                key={index}
                className="relative flex-shrink-0 transition-all duration-500 ease-out cursor-pointer"
                onClick={() => onProjectChange(index)}
                style={{ 
                  opacity: opacity,
                  transform: `scale(${scale})`
                }}
              >
                {/* Project Card */}
                <div 
                  className={`relative w-16 h-16 rounded-2xl overflow-hidden transition-all duration-500 ease-out border-2 ${
                    isActive 
                      ? `${getActiveColor(index)} bg-slate-800/80` 
                      : "border-transparent bg-slate-800/60 hover:bg-slate-800/80"
                  }`}
                >
                  {/* Project Image */}
                  <Image
                    src={projectImages[index] || "/main-image.webp"}
                    alt={project.title}
                    fill
                    className="object-cover object-center transition-all duration-500"
                  />
                  
                  {/* Subtle overlay for inactive items */}
                  {!isActive && (
                    <div className="absolute inset-0 bg-slate-900/30" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Sağ Navigation Button */}
        <button
          onClick={goToNextProject}
          className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 bg-slate-800/50 hover:bg-slate-700/80 text-slate-400 hover:text-white backdrop-blur-sm"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
