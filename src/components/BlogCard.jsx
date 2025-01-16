"use client";
import { Card, CardHeader, CardBody, Button } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function BlogCard({ blog }) {
  const [showParagraph, setShowParagraph] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  return (
    <Card className="mb-8 w-full max-w-[48rem] bg-[#0f172a] bg-opacity-50 border border-gray-700 text-white hover:bg-opacity-90 transition-all">
      <CardHeader
        shadow={false}
        floated={false}
        className="relative h-64 md:h-72 m-0 rounded-t-lg overflow-hidden"
      >
        <Image
          src={blog.main_image}
          alt={blog.title}
          fill
          className="object-cover"
          priority
        />
      </CardHeader>
      
      <CardBody className="p-8">
        <div className="grid gap-6">
          <h2 className="text-2xl font-semibold">{blog.title}</h2>
          
          <div className="flex items-center gap-4 border-b border-gray-700/50 pb-6">
            {blog.author.photo && (
              <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-purple-500/30">
                <Image
                  src={blog.author.photo}
                  alt={blog.author.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="space-y-1.5">
              <p className="text-sm">
                <span className="font-semibold text-purple-300">Author:</span> {blog.author.name}
              </p>
              <p className="text-sm">
                <span className="font-semibold text-purple-300">Date:</span> {formatDate(blog.date)}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-[#3e276c] px-4 py-1.5 rounded-md text-sm text-gray-200 hover:bg-[#4e377c] transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="space-y-4">
            <Button 
              variant="text" 
              className="text-white hover:text-purple-300 p-0 flex items-center gap-2 transition-colors"
              onClick={() => setShowParagraph(!showParagraph)}
            >
              {showParagraph ? "Hide Preview" : "Show Preview"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className={`h-4 w-4 transition-transform ${showParagraph ? 'rotate-180' : ''}`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Button>
            
            <hr className="border-gray-700" />

            {showParagraph && (
              <p className="text-gray-300 animate-fadeIn leading-relaxed">
                {blog.first_paragraph}
              </p>
            )}
          </div>

          <Link 
            href={blog.read_more_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button variant="text" className="flex text-white hover:text-purple-300 items-center gap-2 p-0 transition-colors">
              Read on Medium
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
        </div>
      </CardBody>
    </Card>
  );
}
