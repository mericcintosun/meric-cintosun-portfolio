"use client";
import { ThemeProvider } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HomePage() {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="text-white relative">
      <ThemeProvider>
        <main className="flex flex-col items-center justify-center px-5 text-center">
          <div
            id="hero_section"
            className="flex flex-col justify-center items-center xl:grid xl:grid-cols-[30%_70%]"
          >
            <motion.div
              id="hero_img"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Image
                src="/home-astronaut.webp"
                alt="Meriç Cintosun Portfolio Hero Image"
                width={300}
                height={300}
                priority={true}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                sizes="(max-width: 768px) 250px, 300px"
                className="rounded-full transform transition duration-300 ease-in-out hover:rotate-3 animate-float"
              />
            </motion.div>
            <motion.div
              id="hero_desc"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div
                id="hero_text"
                className="text-white text-center text-lg md:text-2xl lg:text-3xl px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {t('greeting')} <span className="font-bold">Meriç</span>. {t('specialization')}{" "}
                <span className="bg-gradient-to-r from-[#6B46C1] via-[#9F7AEA] to-[#B794F4] bg-clip-text text-transparent font-semibold">
                  {t('web2web3')}
                </span>{" "}
                {t('graduationText')}{" "}
                <span className="font-bold">{t('university')}</span> {t('graduationYear')}{" "}
                <span className="bg-gradient-to-r from-[#6B46C1] via-[#9F7AEA] to-[#B794F4] bg-clip-text text-transparent font-semibold">
                  {t('technologies')}
                </span>
                , {t('blockchainText')}{" "}
                <span className="font-bold">{t('dapps')}</span>. {t('finalText')}
              </motion.div>
            </motion.div>
            <motion.div
              id="buttons"
              className="col-span-full flex flex-col justify-center mx-auto max-w-screen-2xl items-center my-4 gap-6 md:gap-12 md:my-12 md:justify-around md:flex-col md:items-center xl:flex-row xl:items-center xl:justify-around xl:mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <motion.div
                id="contact_buttons"
                className="flex flex-col sm:flex-row gap-6 md:gap-12 justify-center items-center xl:items-center xl:justify-around"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      staggerChildren: 0.2
                    }
                  }
                }}
                initial="hidden"
                animate="show"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className="w-[11rem] md:w-[15rem] md:text-2xl sm:w-auto bg-gradient-to-r from-[#1E0A4D] via-[#2D0F6A] to-[#3A127F] text-white font-semibold py-3 px-6 rounded-md shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-700 transition-opacity duration-200"
                  >
                    {t('contactButton')}
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="/mericcintosun-cv.pdf"
                    download
                    className="w-[11rem] md:w-[15rem] md:text-2xl sm:w-auto bg-gradient-to-r from-[#1E0A4D] via-[#2D0F6A] to-[#3A127F] text-white font-semibold py-3 px-6 rounded-md shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-700 transition-opacity duration-200"
                  >
                    {t('downloadCV')}
                  </a>
                </motion.div>
              </motion.div>

              <motion.div
                id="icon_buttons"
                className="flex flex-col sm:flex-row gap-6 justify-center items-center xl:items-center xl:justify-around"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      staggerChildren: 0.2,
                      delay: 0.4
                    }
                  }
                }}
                initial="hidden"
                animate="show"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="https://github.com/mericcintosun"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[11rem] md:w-[15rem] md:text-2xl sm:w-auto bg-gradient-to-r from-[#0a0b1a] via-[#13162f] to-[#1a1a3f] text-white font-semibold py-3 px-4 rounded-md shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-700 transition-opacity duration-200 flex items-center justify-center"
                  >
                    <Image
                      src="/github.svg"
                      alt="GitHub Profile Link"
                      width={30}
                      height={30}
                      loading="lazy"
                      sizes="30px"
                      className="filter invert hover:invert-0 transition-transform duration-200"
                    />
                    <span className="ml-2">{t('github')}</span>
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="https://www.linkedin.com/in/meric-cintosun"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[11rem] md:w-[15rem] md:text-2xl sm:w-auto bg-gradient-to-r from-[#0a0b1a] via-[#13162f] to-[#1a1a3f] text-white font-semibold py-3 px-4 rounded-md shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-700 transition-opacity duration-200 flex items-center justify-center"
                  >
                    <Image
                      src="/linkedin.svg"
                      alt="LinkedIn Profile Link"
                      width={30}
                      height={30}
                      loading="lazy"
                      sizes="30px"
                      className="filter invert hover:invert-0 transition-transform duration-200"
                    />
                    <span className="ml-2">{t('linkedin')}</span>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </main>
      </ThemeProvider>
    </div>
  );
}
