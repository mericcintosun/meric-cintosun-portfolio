"use client";

import { useLanguage } from "@/context/LanguageContext";

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

  return (
    <>
      <div
        id="container"
        className="w-[90%] mx-auto flex flex-col bg-[#0f172a] bg-opacity-50 py-6 my-6 rounded-xl"
      >
        <div id="hard-skills" className="flex flex-col mb-6">
          <h1 className="text-center text-5xl font-bold mb-6">
            {t('softwareSkills')}
          </h1>
          <div className="software-skills-box flex flex-wrap items-center justify-center w-[80%] mx-auto ">
            {softwareSkills.map((skill, index) => (
              <p
                key={index}
                className="rounded-3xl bg-[#3e276c] bg-opacity-100 text-gray-300 inline-block px-4 py-2 text-center text-xl font-semibold m-2"
              >
                {skill}
              </p>
            ))}
          </div>
        </div>
        <div id="soft-skills" className="flex flex-col ">
          <h1 className="text-center text-5xl font-bold ">
            {t('softSkills')}
          </h1>
          <a
            href="/yetgen-certificate.webp"
            target="_blank"
            className="text-center text-md text-[#b6c0ea] mb-6 hover:text-white transition-colors"
          >
            {t('softSkillsCertificate')}
          </a>
          <div className="software-skills-box flex flex-wrap items-center justify-center w-[80%] mx-auto">
            {softSkills.map((skill) => (
              <p
                key={skill.key}
                className="rounded-3xl bg-[#3e276c] bg-opacity-100 text-gray-300 inline-block px-4 py-2 text-center text-xl font-semibold m-2"
              >
                {skill.text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
