"use client";
import { Card, CardHeader, CardBody, Button } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function ProjectCard({
  title,
  description,
  tags = [],
  imageSrc,
  altText = "card-image",
  link = "#",
}) {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="mb-6 w-full max-w-[48rem] flex flex-col md:flex-row bg-[#0f172a] bg-opacity-50 border text-white hover:bg-opacity-90 transition-all">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-full md:w-2/5 shrink-0 rounded-b md:rounded-r-none rounded-t md:rounded-t-none bg-[#0f172a] bg-opacity-50 overflow-hidden"
        >
          <motion.div
            className="relative w-full h-0 pb-[100%] md:pb-0 md:h-full border-r-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={imageSrc}
              alt={altText}
              fill
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="absolute object-cover rounded-lg"
            />
          </motion.div>
        </CardHeader>
        <CardBody className="w-full md:w-3/5 flex flex-col gap-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-semibold text-lg mb-2"
          >
            {title}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-4 text-gray-400"
          >
            {description}
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {tags.map((tag, index) => (
              <motion.p
                key={index}
                whileHover={{ scale: 1.1, backgroundColor: "#4e2d8c" }}
                className="rounded-3xl bg-[#3e276c] bg-opacity-100 text-gray-300 inline-block px-4 py-2 text-center text-xs"
              >
                {tag}
              </motion.p>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link href={link} target="_blank">
              <Button className="flex text-white bg-opacity-0 items-center gap-2 m-0 p-0 hover:gap-4 transition-all">
                {t("projectDetails")}
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-4 w-4"
                  whileHover={{ x: 5 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </motion.svg>
              </Button>
            </Link>
          </motion.div>
        </CardBody>
      </Card>
    </motion.div>
  );
}
