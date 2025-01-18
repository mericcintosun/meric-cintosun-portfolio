"use client";

import { useLanguage } from '@/context/LanguageContext';

export function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 rounded-md bg-[#71607d] hover:bg-[#38117c] transition-colors text-white font-medium text-sm"
    >
      {language === 'en' ? 'TR' : 'EN'}
    </button>
  );
} 