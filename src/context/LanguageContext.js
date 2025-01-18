"use client";

import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    home: "Home",
    aboutMe: "About Me",
    projects: "Projects",
    skills: "Skills",
    experience: "My Experience",
    blog: "Blog",
    contactMe: "Contact Me",
    greeting: "Hi, I'm",
    specialization: "A Frontend Developer specializing in",
    web2web3: "Web2 and Web3",
    graduationText: "technologies. Since graduating from",
    university: "Istanbul University",
    graduationYear: "in 2024, I've built applications with",
    technologies: "React, Next.js, and React Native",
    blockchainText: "and developed blockchain projects focused on Layer 2 solutions and",
    dapps: "dApps",
    finalText: "Let's build the future together!",
    contactButton: "Contact Me!",
    downloadCV: "Download CV!",
    github: "GitHub",
    linkedin: "LinkedIn"
  },
  tr: {
    home: "Ana Sayfa",
    aboutMe: "Hakkımda",
    projects: "Projeler",
    skills: "Yetenekler",
    experience: "Deneyimim",
    blog: "Blog",
    contactMe: "İletişim",
    greeting: "Merhaba, ben",
    specialization: "Frontend Geliştirici olarak",
    web2web3: "Web2 ve Web3",
    graduationText: "teknolojilerinde uzmanlaşıyorum.",
    university: "İstanbul Üniversitesi",
    graduationYear: "'nden 2024'te mezun olduktan sonra",
    technologies: "React, Next.js ve React Native",
    blockchainText: "ile uygulamalar geliştirdim ve Layer 2 çözümleri ve",
    dapps: "dApps",
    finalText: "odaklı blockchain projeleri üzerinde çalıştım. Geleceği birlikte inşa edelim!",
    contactButton: "İletişime Geç!",
    downloadCV: "CV'mi İndir!",
    github: "GitHub",
    linkedin: "LinkedIn"
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'tr' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 