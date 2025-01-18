"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

function NavList() {
  const { t } = useLanguage();
  
  const navItems = [
    { text: t('home'), href: "/" },
    { text: t('aboutMe'), href: "/about" },
    { text: t('projects'), href: "/projects" },
    { text: t('skills'), href: "/skills" },
    { text: t('experience'), href: "/experience" },
    { text: t('blog'), href: "/blog" },
    { text: t('contactMe'), href: "/contact" },
  ];

  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {navItems.map((item) => (
        <li key={item.text}>
          <Link
            href={item.href}
            className="flex items-center text-gray-100 hover:text-white transition-colors p-1 font-medium font-montserrat"
          >
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function NavbarSimple() {
  const [openNav, setOpenNav] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => window.innerWidth >= 960 && setOpenNav(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-[1000] px-6 py-3 bg-[#0f172a] bg-opacity-50 backdrop-blur-sm">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex items-center justify-between text-gray-100">
          <div className="flex gap-2 items-center justify-center">
            <Link href="/">
              <Image
                className="rounded-full transform transition duration-300 ease-in-out hover:rotate-3"
                src="/main-image.webp"
                alt="logo"
                width={60}
                height={60}
                sizes="60px"
                priority
              />
            </Link>

            <Link href="/">
              <p className="text-2xl text-gray-100 tracking-tighter md:text-3xl mr-4 cursor-pointer py-1.5 hover:text-white transition-colors font-iceland">
                Meriç <span className="font-medium">Cintosun</span>
              </p>
            </Link>
          </div>
          
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <NavList />
            <LanguageSwitcher />
          </div>
          
          <button
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            onClick={() => setOpenNav(!openNav)}
            aria-label={openNav ? "Menüyü kapat" : "Menüyü aç"}
          >
            {openNav ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
        
        {openNav && (
          <div className="border border-[#a4b8e9] border-opacity-45 my-4 p-4 bg-[#0f172a] rounded-sm bg-opacity-50">
            <div className="flex flex-col items-start gap-4">
              <NavList />
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
