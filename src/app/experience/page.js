"use client";
import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Experience() {
  const experiences = [
    {
      title: "Istanbul University",
      subtitle: "Student / Communication Faculty",
      date: "2020 - 2024",
      description:
        "Studied at Istanbul University (Communication Faculty), gaining Communication, Leadership, Time Management, Empathy, and Self-Motivation skills. My education in the Faculty of Communication significantly enhanced my soft skills.",
    },
    {
      title: "Studio PM",
      subtitle: "Graphic Designer (Short-Term)",
      date: "2022 (Short-Term)",
      description:
        "Created visual content using Figma and Adobe Creative Suite (Photoshop, Illustrator, InDesign). Edited and retouched photos, developed creative solutions for social media, collaborated with photographers and the marketing team, and produced promotional materials for both print and digital media, maintaining the brand's visual consistency.",
    },
    {
      title: "Yetkin Gençler Training Program",
      subtitle: "Participant",
      date: "April - July 2023",
      description:
        "YetGen is a 12-week 21st-century skills training program. I took courses such as Effective Presentation Techniques, Teamwork, Career Planning, Excel, Information/Media/Financial Literacy, Social Innovation, and the GirişGen Entrepreneurship Module. Through this experience, I learned how to establish a startup focused on the UN Sustainable Development Goals.\n\nSkills: Entrepreneurship, Sustainability, Career Management, Information Literacy, Teamwork, Presentation Skills, Microsoft Excel",
    },
    {
      title: "Viviency Digital Media Agency",
      subtitle: "Full Stack Developer",
      date: "2023",
      description:
        "Developed web projects using a modern tech stack: React, Next.js, TailwindCSS, Firebase, WordPress, and Node.js. Integrated WordPress as a CMS, leveraged Next.js for SSR (improving SEO and performance), utilized Firebase for real-time database management and authentication, and created user-friendly UIs with a mobile-first approach.",
    },
    {
      title: "ITU Blockchain Community",
      subtitle: "Developer Member",
      date: "January 2024 - Present",
      description:
        "Joined the ITU Blockchain community, participating in hackathons and contributing to projects like 'Persona.' Gained experience with React, Next.js, TailwindCSS, Postman, Docker, Firebase, Node.js, MongoDB, Solidity, and Rust. Worked on blockchain-based projects, dApps, and Layer 2 solutions, deepening my full-stack development skills. I stay updated with the latest Web3 and blockchain advancements.",
    },
    {
      title: "Flalingo (USA - Remote)",
      subtitle: "Mid Frontend & Developer",
      date: "November 2024 - Present",
      description:
        "At Flalingo, a California-based company, I focus on delivering seamless user experiences for English language learning platforms. I develop scalable, high-performance web and mobile applications using React.js, Next.js, React Native, and Expo. With a focus on UX design, responsive interfaces, and efficient coding practices, I create innovative solutions for both web and mobile projects.",
    },
    {
      title: "Extra Certificates",
      subtitle: "Other Details in My LinkedIn Profile",
      date: "N/A",
      description: "- HSD Figma Workshop\n- Blockchain Academy Rise In",
    },
  ];

  return (
    <section className="py-8 px-4 bg-[#0f172a] bg-opacity-70 rounded-xl mb-6">
      <h2 className="text-center mb-8 text-[#6B46C1] text-4xl font-bold">
        My Experiences
      </h2>
      <VerticalTimeline>
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            date={exp.date}
            icon={<FaLaptopCode />}
            iconClassName="bg-[#3e276c] text-[#6B46C1]"
            contentArrowStyle={{ borderRight: "7px solid #1f1f38" }}
          >
            <h3 className="vertical-timeline-element-title mt-0 text-[#6B46C1] text-lg font-semibold">
              {exp.title}
            </h3>
            <h4 className="vertical-timeline-element-subtitle font-normal text-[#6B46C1] text-base">
              {exp.subtitle}
            </h4>
            <p className="whitespace-pre-line leading-6 text-[#6B46C1]">
              {exp.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
