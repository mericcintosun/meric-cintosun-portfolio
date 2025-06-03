"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import MacbookMockup from "./MacbookMockup";

export default function HeroShowcase({
  appIcon = "/icons/portfolio-icon.png",
  appTitle = "Portfolio",
  appSubtitle = "Projects Showcase",
  description,
  downloadText,
  downloadLink = "#",
  carouselProjects = [],
  stats = []
}) {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12 items-center min-h-[80vh]">
          
          {/* Sol taraf - App Info */}
          <motion.div 
            className="lg:col-span-1 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* App Icon ve Başlık */}
            <div className="flex items-center space-x-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl"
              >
                <Image
                  src={appIcon}
                  alt={appTitle}
                  width={40}
                  height={40}
                  className="rounded-xl"
                />
              </motion.div>
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                  {appTitle}
                </h1>
                <p className="text-gray-400 text-lg">{appSubtitle}</p>
              </div>
            </div>

            {/* Açıklama */}
            <motion.p 
              className="text-gray-300 text-lg leading-relaxed max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {description}
            </motion.p>

            {/* Download Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.a
                href={downloadLink}
                className="inline-flex items-center space-x-3 bg-black hover:bg-gray-800 transition-colors duration-300 rounded-xl px-6 py-3 border border-gray-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Download on the</div>
                    <div className="text-lg font-semibold">GitHub</div>
                  </div>
                </div>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Orta - MacBook Mockup */}
          <motion.div 
            className="lg:col-span-1 flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full max-w-2xl">
              <MacbookMockup
                projects={carouselProjects}
                autoRotate={true}
                rotationInterval={4000}
              />
            </div>
          </motion.div>

          {/* Sağ taraf - Stats */}
          <motion.div 
            className="lg:col-span-1 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center space-y-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              >
                {stat.badge && (
                  <div className="inline-flex items-center justify-center mb-4">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full font-bold text-sm">
                      {stat.badge}
                    </div>
                  </div>
                )}
                
                {stat.rating && (
                  <div className="space-y-2">
                    <div className="text-6xl font-bold bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                      {stat.rating}
                    </div>
                    <div className="flex justify-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className={`w-6 h-6 ${i < Math.floor(stat.rating) ? 'text-yellow-400' : 'text-gray-600'}`}>
                          ⭐
                        </div>
                      ))}
                    </div>
                    <div className="text-gray-400 text-sm uppercase tracking-wide">
                      {stat.ratingLabel}
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-8 mt-8">
                  {stat.metrics && stat.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                        {metric.value}
                      </div>
                      <div className="text-gray-400 text-sm uppercase tracking-wide mt-1">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
} 