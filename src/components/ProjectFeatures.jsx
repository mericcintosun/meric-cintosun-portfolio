"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  CubeIcon,
  StarIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

export default function ProjectFeatures() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <CodeBracketIcon className="w-8 h-8" />,
      title: "Frontend Development",
      titleTr: "Frontend Geliştirme",
      description:
        "Modern web applications built with React, Next.js, and TypeScript",
      descriptionTr:
        "React, Next.js ve TypeScript ile oluşturulan modern web uygulamaları",
      count: "15+",
      countLabel: "Projects",
      countLabelTr: "Proje",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <DevicePhoneMobileIcon className="w-8 h-8" />,
      title: "Mobile Development",
      titleTr: "Mobil Geliştirme",
      description: "Cross-platform mobile apps using React Native and Expo",
      descriptionTr:
        "React Native ve Expo kullanarak çapraz platform mobil uygulamalar",
      count: "8+",
      countLabel: "Apps",
      countLabelTr: "Uygulama",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <CubeIcon className="w-8 h-8" />,
      title: "Blockchain & Web3",
      titleTr: "Blockchain ve Web3",
      description: "DApps and smart contracts on various blockchain networks",
      descriptionTr: "Çeşitli blockchain ağlarında DApps ve akıllı kontratlar",
      count: "12+",
      countLabel: "DApps",
      countLabelTr: "DApp",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <GlobeAltIcon className="w-8 h-8" />,
      title: "Full Stack Solutions",
      titleTr: "Full Stack Çözümler",
      description: "End-to-end web solutions with modern tech stacks",
      descriptionTr: "Modern teknoloji yığınları ile uçtan uca web çözümleri",
      count: "20+",
      countLabel: "Solutions",
      countLabelTr: "Çözüm",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const achievements = [
    {
      icon: <StarIcon className="w-6 h-6" />,
      number: "4.9",
      label: "Average Rating",
      labelTr: "Ortalama Puan",
      subtext: "Client Satisfaction",
      subtextTr: "Müşteri Memnuniyeti",
    },
    {
      icon: <RocketLaunchIcon className="w-6 h-6" />,
      number: "50+",
      label: "Projects Completed",
      labelTr: "Tamamlanan Proje",
      subtext: "Since 2022",
      subtextTr: "2022'den Beri",
    },
    {
      icon: <CodeBracketIcon className="w-6 h-6" />,
      number: "10+",
      label: "Technologies",
      labelTr: "Teknoloji",
      subtext: "Mastered",
      subtextTr: "Uzmanlaştığım",
    },
  ];

  const { language } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900 py-24">
      <div className="container mx-auto px-6">
        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group border border-gray-100 dark:border-gray-700"
              whileHover={{
                scale: 1.05,
                rotateY: 5,
              }}
            >
              <div
                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {language === "tr" ? feature.titleTr : feature.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                {language === "tr"
                  ? feature.descriptionTr
                  : feature.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {feature.count}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  {language === "tr"
                    ? feature.countLabelTr
                    : feature.countLabel}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
