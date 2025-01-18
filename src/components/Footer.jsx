"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const footerLinks = [
    { text: t('home'), href: "/" },
    { text: t('aboutMe'), href: "/about" },
    { text: t('projects'), href: "/projects" },
    { text: t('skills'), href: "/skills" },
    { text: t('experience'), href: "/experience" },
    { text: t('blog'), href: "/blog" },
    { text: t('contactMe'), href: "/contact" },
  ];

  return (
    <footer className="mt-[10rem] bottom-0 w-full">
      <div className="bg-[#0f172a] bg-opacity-50 text-gray-300">
        <div className="flex flex-col items-center justify-center w-[80%] mx-auto gap-6 py-8 border-b border-gray-700">
          <p className="text-xs tracking-wide text-center">
            Copyright © 2024{" "}
            <span className="font-semibold text-gray-100">
              Meriç Cintosun
            </span>
            . {t('allRightsReserved')}
          </p>
          <a href="https://github.com/mericcintosun/meric-cintosun-portfolio" target="_blank" className="text-2xl font-medium text-center">
            <span className="font-bold bg-gradient-to-r from-[#bdb4ff] via-[#3e276c] to-[#ffffff] text-transparent bg-clip-text">
              {t('openSource')} 💜
            </span>
          </a>
          <p className="text-sm text-center max-w-2xl">
            {t('builtWith')}{" "}
            <span className="font-medium text-gray-100">React</span>,{" "}
            <span className="font-medium text-gray-100">Next.js</span> (App
            Router & Server Actions),{" "}
            <span className="font-medium text-gray-100">
              Tailwind CSS
            </span>,{" "}
            <span className="font-medium text-gray-100">Framer Motion</span>,
            {t('and')}{" "}
            <span className="font-medium text-gray-100">ts-particles</span>.
          </p>
        </div>

        <div className="py-4">
          <nav className="flex w-[90%] mx-auto max-w-5xl items-center justify-center gap-4 sm:gap-8 text-sm font-medium flex-wrap">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-gray-100 transition-colors duration-200"
              >
                {link.text}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
