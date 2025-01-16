"use client";
import { useState, useEffect } from "react";
import BlogCard from "@/components/BlogCard";
import data from "../../../public/blog.json";
import { Select, Option, Input } from "@material-tailwind/react";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [sortOrder, setSortOrder] = useState("newest");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let filteredBlogs = data.blogs;
    if (searchTerm) {
      const searchTermLower = searchTerm.toLowerCase();
      filteredBlogs = data.blogs.filter(blog => 
        blog.title.toLowerCase().includes(searchTermLower) || 
        blog.tags.some(tag => tag.toLowerCase().includes(searchTermLower)) ||
        blog.first_paragraph.toLowerCase().includes(searchTermLower)
      );
    }

    const sortedBlogs = [...filteredBlogs].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });
    
    setBlogs(sortedBlogs);
  }, [sortOrder, searchTerm]);

  const handleSortChange = (value) => {
    setSortOrder(value);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <section className="container mx-auto px-4">
      <div className="flex flex-col pt-4 pb-8">
        <div className="flex flex-col space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-[#6B46C1] text-3xl md:text-4xl font-bold">
              Blog
            </h1>
            <div className="h-1 w-32 md:w-48 bg-gradient-to-r from-purple-500/50 to-transparent rounded-full"></div>
          </div>

          <div className="bg-[#1a2234]/80 backdrop-blur-sm p-4 rounded-xl shadow-lg">
            <div className="flex flex-col md:flex-row gap-6 items-stretch justify-center w-full">
              <div className="w-full md:w-[60%] relative">
                <Input
                  type="text"
                  label="Search in blogs..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="!border-none focus:!border-none text-white"
                  labelProps={{
                    className: "!text-purple-300 before:!border-transparent after:!border-transparent peer-focus:before:!border-purple-500/50 peer-focus:after:!border-purple-500/50"
                  }}
                  containerProps={{
                    className: "min-w-[100px]"
                  }}
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4 text-purple-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  }
                  crossOrigin={undefined}
                />
              </div>
              
              <div className="w-full md:w-[40%] md:border-l border-purple-500/20">
                <div className="md:pl-4">
                  <Select
                    label="Sort by Date"
                    value={sortOrder}
                    onChange={handleSortChange}
                    className="text-white !border-none"
                    labelProps={{
                      className: "!text-purple-300 before:!border-transparent after:!border-transparent peer-focus:before:!border-purple-500/50 peer-focus:after:!border-purple-500/50"
                    }}
                    menuProps={{
                      className: "border border-purple-500/20 bg-[#1a2234] rounded-lg"
                    }}
                    arrow={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        className="w-4 h-4 text-purple-300"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    }
                  >
                    <Option value="newest" className="hover:bg-purple-500/20 text-white bg-[#1a2234]">
                      Newest First
                    </Option>
                    <Option value="oldest" className="hover:bg-purple-500/20 text-white bg-[#1a2234]">
                      Oldest First
                    </Option>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {blogs.length === 0 && searchTerm && (
        <div className="text-center text-white py-6">
          No blogs found matching "<span className="text-purple-300">{searchTerm}</span>"
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-8">
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </section>
  );
}
