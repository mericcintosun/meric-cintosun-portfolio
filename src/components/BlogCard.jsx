"use client";
import { Card, CardHeader, CardBody, Button } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BlogCard({ blog }) {
  const [showParagraph, setShowParagraph] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Card className="mb-6 w-full max-w-[48rem] h-[700px] bg-[#0f172a] bg-opacity-50 border border-gray-700 text-white hover:bg-opacity-90 transition-all flex flex-col">
          <CardHeader
            shadow={false}
            floated={false}
            className="relative h-48 md:h-64 m-0 rounded-t-lg overflow-hidden flex-shrink-0"
          >
            <Image
              src={blog.main_image}
              alt={blog.title}
              fill
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </CardHeader>

          <CardBody className="p-6 flex-grow flex flex-col">
            <h2 className="text-2xl font-semibold mb-4 line-clamp-2 flex-shrink-0">
              {blog.title}
            </h2>

            <div className="flex items-center space-x-4 mb-4 flex-shrink-0">
              {blog.author.photo && (
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={blog.author.photo}
                    alt={blog.author.name}
                    fill
                    loading="lazy"
                    sizes="96px"
                    className="object-cover"
                  />
                </div>
              )}
              <div className="space-y-1">
                <p className="text-sm">
                  <span className="font-semibold">Author:</span>{" "}
                  {blog.author.name}
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Date:</span>{" "}
                  {formatDate(blog.date)}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4 flex-shrink-0">
              {blog.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-[#3e276c] px-3 py-1 rounded-md text-sm text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Button
              variant="text"
              className="text-white hover:text-gray-300 p-0 flex items-center gap-2 mb-2 flex-shrink-0 relative group"
              onClick={() => setShowParagraph(!showParagraph)}
            >
              <span className="relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-purple-500 after:left-0 after:-bottom-1 after:origin-left after:scale-x-0 after:transition-transform group-hover:after:scale-x-100">
                {showParagraph ? "Hide Preview" : "Show Preview"}
              </span>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
                animate={{ rotate: showParagraph ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </motion.svg>
            </Button>

            <AnimatePresence>
              {showParagraph && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-300 leading-relaxed overflow-hidden line-clamp-4"
                >
                  {blog.first_paragraph}
                </motion.p>
              )}
            </AnimatePresence>

            <Link
              href={blog.read_more_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-auto flex-shrink-0"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  variant="text"
                  className="flex items-center gap-2 p-2 px-4 rounded-lg bg-gradient-to-r from-[#1E0A4D] via-[#2D0F6A] to-[#3A127F] text-white hover:opacity-90 transition-opacity duration-200 shadow-lg"
                >
                  <span className="font-semibold">Read on Medium</span>
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-4 w-4 text-white"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </motion.svg>
                </Button>
              </motion.div>
            </Link>
          </CardBody>
        </Card>
      </motion.div>
    </motion.div>
  );
}
