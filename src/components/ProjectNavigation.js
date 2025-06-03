"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function ProjectNavigation({
  projects,
  activeIndex,
  onProjectChange,
}) {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef(null);

  // Scroll durumunu kontrol et
  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollButtons);
      return () => container.removeEventListener("scroll", checkScrollButtons);
    }
  }, [projects]);

  // Scroll fonksiyonları
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -120, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 120, behavior: "smooth" });
    }
  };

  // Aktif projeyi merkeze getir - iyileştirilmiş versiyon
  const scrollToActiveProject = (index) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const projectElements = container.children;
      const projectElement = projectElements[index];

      if (projectElement) {
        const containerWidth = container.clientWidth;
        const projectWidth = projectElement.offsetWidth;
        const projectLeft = projectElement.offsetLeft;

        // Projeyi tam ortaya getir
        const scrollPosition =
          projectLeft - containerWidth / 2 + projectWidth / 2;

        container.scrollTo({
          left: Math.max(0, scrollPosition),
          behavior: "smooth",
        });

        // Scroll tamamlandıktan sonra buton durumlarını güncelle
        setTimeout(() => {
          checkScrollButtons();
        }, 300);
      }
    }
  };

  // Aktif proje değiştiğinde scroll et
  useEffect(() => {
    const timer = setTimeout(() => {
      scrollToActiveProject(activeIndex);
    }, 100); // Kısa delay ile daha stabil çalışma

    return () => clearTimeout(timer);
  }, [activeIndex]);

  // İlk yükleme için
  useEffect(() => {
    if (scrollContainerRef.current) {
      setTimeout(() => {
        scrollToActiveProject(activeIndex);
      }, 200);
    }
  }, []);

  return (
    <div className="relative w-full bg-slate-800/40 backdrop-blur-sm rounded-xl p-3">
      {/* Scroll Butonları */}
      <div className="flex items-center gap-3">
        {/* Sol Ok */}
        <button
          onClick={scrollLeft}
          disabled={!canScrollLeft}
          className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 ${
            canScrollLeft
              ? "bg-purple-600/20 hover:bg-purple-600/40 text-purple-300 hover:text-white"
              : "bg-slate-700/30 text-slate-500 cursor-not-allowed"
          }`}
          aria-label="Scroll left"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Proje Icon'ları */}
        <div
          ref={scrollContainerRef}
          className="flex gap-2 overflow-x-auto scrollbar-hide flex-1 py-1"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => onProjectChange(index)}
              className={`relative flex-shrink-0 w-12 h-12 rounded-xl overflow-hidden transition-all duration-300 ${
                index === activeIndex
                  ? "ring-2 ring-purple-400 scale-110 shadow-lg shadow-purple-500/25"
                  : "hover:scale-105 opacity-70 hover:opacity-100"
              }`}
              aria-label={`Select ${project.title}`}
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${
                  index === activeIndex
                    ? "from-purple-500/30 to-blue-600/30"
                    : "from-slate-600/30 to-slate-700/30 hover:from-purple-500/20 hover:to-blue-600/20"
                }`}
              />

              {/* Icon */}
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src="/main-image.webp"
                  alt={project.title}
                  width={24}
                  height={24}
                  className="w-6 h-6 object-contain filter brightness-110"
                />
              </div>

              {/* Active indicator */}
              {index === activeIndex && (
                <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Sağ Ok */}
        <button
          onClick={scrollRight}
          disabled={!canScrollRight}
          className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 ${
            canScrollRight
              ? "bg-purple-600/20 hover:bg-purple-600/40 text-purple-300 hover:text-white"
              : "bg-slate-700/30 text-slate-500 cursor-not-allowed"
          }`}
          aria-label="Scroll right"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
