import BlogCard from "@/components/BlogCard";
import data from "../../../public/blog.json";

export default function Blog() {
  const { blogs } = data;

  return (
    <section className="container mx-auto px-4 bg-[#0f172a] bg-opacity-70">
      <h1 className=" py-8 text-center text-[#6B46C1] text-4xl font-bold">
        Blog
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </section>
  );
}
