"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

// Animation variants for consistent animations
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 }
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

const navVariants = {
  initial: { y: -100 },
  animate: { y: 0 }
};

const mobileMenuVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 }
};

const springTransition = {
  type: "spring",
  stiffness: 400,
  damping: 30
};

const easeTransition = {
  type: "easeInOut",
  duration: 0.3
};

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

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const navItemVariants = {
    initial: { opacity: 0, y: -10 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { ...easeTransition }
    }
  };

  return (
    <motion.ul
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6"
    >
      {navItems.map((item) => (
        <motion.li
          key={item.text}
          variants={navItemVariants}
        >
          <Link
            href={item.href}
            className="flex items-center text-gray-100 hover:text-white transition-colors p-1 font-medium font-montserrat"
          >
            {item.text}
          </Link>
        </motion.li>
      ))}
    </motion.ul>
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
    <motion.nav
      variants={navVariants}
      initial="initial"
      animate="animate"
      transition={springTransition}
      className="fixed top-0 left-0 right-0 z-[1000] px-6 py-3 bg-[#0f172a] bg-opacity-50 backdrop-blur-sm"
    >
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex items-center justify-between text-gray-100">
          <motion.div 
            variants={fadeIn}
            initial="initial"
            animate="animate"
            transition={{ ...easeTransition, delay: 0.2 }}
            className="flex gap-2 items-center justify-center"
          >
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={springTransition}
              >
                <Image
                  className="rounded-full"
                  src="/main-image.webp"
                  alt="Meriç Cintosun Logo"
                  width={60}
                  height={60}
                  sizes="60px"
                  priority={true}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </motion.div>
            </Link>

            <Link href="/">
              <motion.p
                whileHover={{ scale: 1.02 }}
                transition={springTransition}
                className="text-2xl text-gray-100 tracking-tighter md:text-3xl mr-4 cursor-pointer py-1.5 hover:text-white transition-colors font-iceland"
              >
                Meriç <span className="font-medium">Cintosun</span>
              </motion.p>
            </Link>
          </motion.div>
          
          <motion.div 
            variants={fadeIn}
            initial="initial"
            animate="animate"
            transition={{ ...easeTransition, delay: 0.3 }}
            className="hidden lg:flex lg:items-center lg:gap-4"
          >
            <NavList />
            <LanguageSwitcher />
          </motion.div>
          
          <motion.button
            variants={fadeIn}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={springTransition}
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            onClick={() => setOpenNav(!openNav)}
            aria-label={openNav ? "Menüyü kapat" : "Menüyü aç"}
          >
            <motion.div
              animate={{ rotate: openNav ? 180 : 0 }}
              transition={springTransition}
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
            </motion.div>
          </motion.button>
        </div>
        
        <AnimatePresence mode="wait">
          {openNav && (
            <motion.div
              variants={mobileMenuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ ...easeTransition, duration: 0.2 }}
              className="border border-[#a4b8e9] border-opacity-45 my-4 p-4 bg-[#0f172a] rounded-sm bg-opacity-50"
            >
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col items-start gap-4"
              >
                <NavList />
                <LanguageSwitcher />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
