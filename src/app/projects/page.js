"use client"
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-[90%] mx-auto flex-wrap gap-3">
        <ProjectCard
          title="My Personal Project"
          description="My Personal Project Description"
          tags={["REACT", "NEXT.JS", "TAILWINDCSS", "MONGODB", "NODE.JS"]}
          imageSrc="/about-img.jpg"
          altText="project-img"
          link="/projects"
        />
        <ProjectCard
          title="My Personal Project"
          description="My Personal Project Description"
          tags={["REACT", "NEXT.JS", "TAILWINDCSS", "MONGODB", "NODE.JS"]}
          imageSrc="/about-img.jpg"
          altText="project-img"
          link="/projects"
        />
        <ProjectCard
          title="My Personal Project"
          description="My Personal Project Description"
          tags={["REACT", "NEXT.JS", "TAILWINDCSS", "MONGODB", "NODE.JS"]}
          imageSrc="/about-img.jpg"
          altText="project-img"
          link="/projects"
        />
        <ProjectCard
          title="My Personal Project"
          description="My Personal Project Description"
          tags={["REACT", "NEXT.JS", "TAILWINDCSS", "MONGODB", "NODE.JS"]}
          imageSrc="/about-img.jpg"
          altText="project-img"
          link="/projects"
        />
        <ProjectCard
          title="My Personal Project"
          description="My Personal Project Description"
          tags={["REACT", "NEXT.JS", "TAILWINDCSS", "MONGODB", "NODE.JS"]}
          imageSrc="/about-img.jpg"
          altText="project-img"
          link="/projects"
        />
        <ProjectCard
          title="My Personal Project"
          description="My Personal Project Description"
          tags={["REACT", "NEXT.JS", "TAILWINDCSS", "MONGODB", "NODE.JS"]}
          imageSrc="/about-img.jpg"
          altText="project-img"
          link="/projects"
        />
      </div>
    </>
  );
}
