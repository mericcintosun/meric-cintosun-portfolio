export const metadata = {
  title: "Projects",
  description:
    "Projects developed by Meriç Cintosun. React, Next.js, Blockchain, AI and Web3 projects. NFT marketplace, DeFi platforms, productivity applications and more.",
  keywords: [
    "Meriç Cintosun projects",
    "React projects",
    "Next.js projects",
    "Blockchain projects",
    "Web3 projects",
    "DeFi projects",
    "NFT marketplace",
    "AI projects",
    "Full Stack projects",
    "Portfolio projects",
    "JavaScript projects",
    "TypeScript projects",
    "Smart contracts",
  ],
  openGraph: {
    title: "Projects | Meriç Cintosun",
    description:
      "React, Next.js, Blockchain and AI projects developed by Meriç Cintosun. NFT marketplace, DeFi platforms and productivity applications.",
    url: "https://mericcintosun.com/projects",
    images: [
      {
        url: "/projectImages/alvin.webm",
        width: 1200,
        height: 630,
        alt: "Meriç Cintosun - Projects",
      },
    ],
  },
  twitter: {
    title: "Projects | Meriç Cintosun",
    description:
      "React, Next.js, Blockchain and AI projects. NFT marketplace, DeFi platforms and productivity applications.",
    images: ["/projectImages/alvin.webp"],
  },
};

export default function ProjectsLayout({ children }) {
  return children;
}
