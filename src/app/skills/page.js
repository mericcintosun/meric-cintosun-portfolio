"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function Skills() {
  const { t } = useLanguage();

  const softwareSkills = [
    "HTML & CSS",
    "Javascript (ES6+)",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Ethers.js",
    "Rust",
    "Rust (CosmWasm Smart Contracts)",
    "Figma",
    "TypeScript",
    "PostgreSQL",
    "React Native",
    "Expo",
    "Redux",
    "React-Router",
    "Git & GitHub",
    "Framer Motion & GSAP",
    "Hardhat",
    "Adobe Photoshop",
    "Adobe Illustrator",
  ];

  const softSkills = [
    { key: 'communication', text: t('communication') },
    { key: 'problemSolving', text: t('problemSolving') },
    { key: 'leadership', text: t('leadership') },
    { key: 'timeManagement', text: t('timeManagement') },
    { key: 'empathy', text: t('empathy') },
    { key: 'emotionalIntelligence', text: t('emotionalIntelligence') },
    { key: 'selfAwareness', text: t('selfAwareness') },
    { key: 'mentorship', text: t('mentorship') },
    { key: 'teamwork', text: t('teamwork') },
    { key: 'creativity', text: t('creativity') },
    { key: 'adaptability', text: t('adaptability') },
    { key: 'selfMotivation', text: t('selfMotivation') },
    { key: 'conflictManagement', text: t('conflictManagement') },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="container"
      className="w-[90%] mx-auto flex flex-col bg-[#0f172a] bg-opacity-50 py-6 my-6 rounded-xl"
    >
      <motion.div 
        id="hard-skills" 
        className="flex flex-col mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.h1 
          className="text-center text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {t('softwareSkills')}
        </motion.h1>
        <motion.div 
          className="software-skills-box flex flex-wrap items-center justify-center w-[80%] mx-auto"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {softwareSkills.map((skill, index) => (
            <motion.p
              key={index}
              variants={item}
              whileHover={{ 
                scale: 1.1, 
                backgroundColor: "#4e2d8c",
                transition: { type: "spring", stiffness: 300 }
              }}
              className="rounded-3xl bg-[#3e276c] bg-opacity-100 text-gray-300 inline-block px-4 py-2 text-center text-xl font-semibold m-2"
            >
              {skill}
            </motion.p>
          ))}
        </motion.div>
      </motion.div>
      <motion.div 
        id="soft-skills" 
        className="flex flex-col"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <motion.h1 
          className="text-center text-5xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {t('softSkills')}
        </motion.h1>
        <motion.a
          href="/yetgen-certificate.webp"
          target="_blank"
          className="text-center text-md text-[#b6c0ea] mb-6 hover:text-white transition-colors"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          {t('softSkillsCertificate')}
        </motion.a>
        <motion.div 
          className="software-skills-box flex flex-wrap items-center justify-center w-[80%] mx-auto"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {softSkills.map((skill) => (
            <motion.p
              key={skill.key}
              variants={item}
              whileHover={{ 
                scale: 1.1, 
                backgroundColor: "#4e2d8c",
                transition: { type: "spring", stiffness: 300 }
              }}
              className="rounded-3xl bg-[#3e276c] bg-opacity-100 text-gray-300 inline-block px-4 py-2 text-center text-xl font-semibold m-2"
            >
              {skill.text}
            </motion.p>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
