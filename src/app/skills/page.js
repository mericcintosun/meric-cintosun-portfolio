"use client";

export default function Skills() {
  const softwareSkills = [
    "HTML & CSS",
    "Javascript (ES6+)",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Ethers.js",
    "Rust",
    "Rust (CosmWasm Smart Contracts)",
    "Figma",
    "TypeScript",
    "PostgreSQL",
    "React Native",
    "Expo",
    "Redux",
    "React-Router",
    "Git & GitHub",
    "Framer Motion & GSAP",
    "Hardhat",
    "Adobe Photoshop",
    "Adobe Illustrator",
  ];

  const softSkills = [
    "Communication",
    "Problem-solving",
    "Leadership",
    "Time management",
    "Empathy",
    "Emotional intelligence",
    "Self-awareness",
    "Mentorship",
    "Teamwork",
    "Creativity",
    "Adaptability",
    "Self-motivation",
    "Conflict management",
  ];

  return (
    <>
      <div
        id="container"
        className="w-[90%] mx-auto flex flex-col bg-[#0f172a] bg-opacity-50 py-6 my-6 rounded-xl"
      >
        <div id="hard-skills" className="flex flex-col mb-6">
          <h1 className="text-center text-5xl font-bold mb-6">
            Software Skills
          </h1>
          <div className="software-skills-box flex flex-wrap items-center justify-center w-[80%] mx-auto ">
            {softwareSkills.map((skill, index) => (
              <p
                key={index}
                className="rounded-3xl bg-[#3e276c] bg-opacity-100 text-gray-300 inline-block px-4 py-2 text-center text-xl font-semibold m-2"
              >
                {skill}
              </p>
            ))}
          </div>
        </div>
        <div id="soft-skills" className="flex flex-col ">
          <h1 className="text-center text-5xl font-bold ">Soft Skills</h1>
          <a
            href="https://r.resimlink.com/zPmOhl-bJWqS.png"
            download
            className="text-center text-md text-[#b6c0ea] mb-6"
          >
            Proven with YetGen certification.
          </a>
          <div className="software-skills-box flex flex-wrap items-center justify-center w-[80%] mx-auto">
            {softSkills.map((skill, index) => (
              <p
                key={index}
                className="rounded-3xl bg-[#3e276c] bg-opacity-100 text-gray-300 inline-block px-4 py-2 text-center text-xl font-semibold m-2"
              >
                {skill}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
