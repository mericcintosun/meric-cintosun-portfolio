import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="bg-[#0f172a] bg-opacity-50 text-gray-300">
          <div className="flex flex-col items-center justify-center w-[80%] mx-auto gap-6 py-8 border-b border-gray-700">
            <p className="text-xs tracking-wide text-center">
              Copyright © 2024{" "}
              <span className="font-semibold text-gray-100">
                Meriç Cintosun
              </span>
              . All rights reserved.
            </p>
            <p className="text-2xl font-medium text-center">
              Open{" "}
              <span className="font-bold bg-gradient-to-r from-[#bdb4ff] via-[#3e276c] to-[#ffffff] text-transparent bg-clip-text">
                 Source 💜💜
              </span>
            </p>
            <p className="text-sm text-center max-w-2xl">
              Built with{" "}
              <span className="font-medium text-gray-100">React</span>,{" "}
              <span className="font-medium text-gray-100">Next.js</span> (App
              Router & Server Actions),
              <span className="font-medium text-gray-100">
                Tailwind CSS
              </span>,{" "}
              <span className="font-medium text-gray-100">Framer Motion</span>,
              and{" "}
              <span className="font-medium text-gray-100">ts-particles</span>.
            </p>
          </div>

          <div className="py-4">
            <nav className="flex w-[90%] mx-auto max-w-5xl items-center justify-center gap-4 sm:gap-8 text-sm font-medium flex-wrap">
              <Link
                href="/"
                className="hover:text-gray-100 transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="hover:text-gray-100 transition-colors duration-200"
              >
                About Me
              </Link>
              <Link
                href="/projects"
                className="hover:text-gray-100 transition-colors duration-200"
              >
                Projects
              </Link>
              <Link
                href="/skills"
                className="hover:text-gray-100 transition-colors duration-200"
              >
                Skills
              </Link>
              <Link
                href="/experience"
                className="hover:text-gray-100 transition-colors duration-200"
              >
                Experience
              </Link>
              <Link
                href="/education"
                className="hover:text-gray-100 transition-colors duration-200"
              >
                Education
              </Link>
              <Link
                href="/blog"
                className="hover:text-gray-100 transition-colors duration-200"
              >
                Blog
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
