"use client";
import { Card, CardHeader, CardBody, Button } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  title,
  description,
  tags = [],
  imageSrc,
  altText = "card-image",
  link = "#",
}) {
  return (
    <Card className="mb-6 w-full max-w-[48rem] flex flex-col md:flex-row bg-[#0f172a] bg-opacity-50 border text-white hover:bg-opacity-90 transition-all">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-full md:w-2/5 shrink-0 rounded-b md:rounded-r-none rounded-t md:rounded-t-none bg-[#0f172a] bg-opacity-50 overflow-hidden"
      >
        <div className="relative w-full h-0 pb-[100%] md:pb-0 md:h-full">
          <Image
            src={imageSrc}
            alt={altText}
            layout="fill"
            className="absolute object-cover rounded-lg"
          />
        </div>
      </CardHeader>
      <CardBody className="w-full md:w-3/5 flex flex-col gap-6">
        <p className="font-semibold text-lg mb-2">{title}</p>
        <p className="mb-4 text-gray-400">{description}</p>
        <div className="flex flex-wrap gap-4">
          {tags.map((tag, index) => (
            <p
              key={index}
              className="rounded-3xl bg-[#3e276c] bg-opacity-100 text-gray-300 inline-block px-4 py-2 text-center text-xs"
            >
              {tag}
            </p>
          ))}
        </div>
        <Link href={link} target="_blank">
          <Button className="flex text-white bg-opacity-0 items-center gap-2 m-0 p-0">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </Link>
      </CardBody>
    </Card>
  );
}
