"use client";
import { Card, CardHeader, CardBody, Button } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ blog }) {
  return (
    <Card className="mb-6 w-full max-w-[48rem] flex flex-col bg-[#0f172a] bg-opacity-50 border text-white hover:bg-opacity-90 transition-all">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-full shrink-0 rounded-none bg-[#0f172a] bg-opacity-50 overflow-hidden"
      >
        <div className="relative w-full h-0 pb-[60%]">
          <Image
            src={blog.main_image}
            alt={blog.title}
            fill
            className="absolute object-cover rounded-t-lg"
          />
        </div>
      </CardHeader>
      <CardBody className="w-full flex flex-col gap-4 p-6">
        <h2 className="text-xl font-semibold">{blog.title}</h2>
        <p className="text-gray-300">{blog.first_paragraph}</p>
        
        <div className="flex items-center gap-4 mb-2">
          {blog.author.photo && (
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={blog.author.photo}
                alt={blog.author.name}
                fill
                className="object-cover"
              />
            </div>
          )}
          <p>
            <strong>Author:</strong> {blog.author.name}
          </p>
        </div>

        <p className="mb-2">
          <strong>Date:</strong> {blog.date}
        </p>

        {blog.language && (
          <p className="mb-4">
            <strong>Language:</strong> {blog.language}
          </p>
        )}

        <div className="mb-4">
          <strong>Tags:</strong>
          <div className="flex flex-wrap gap-2 mt-2">
            {blog.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-[#3e276c] bg-opacity-100 text-gray-300 px-3 py-1 rounded-md text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <Link href={blog.read_more_url} target="_blank" rel="noopener noreferrer">
          <Button variant="text" className="flex text-white bg-opacity-0 items-center gap-2 m-0 p-0">
            Read More
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
