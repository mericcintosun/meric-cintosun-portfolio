export const metadata = {
  title: "About",
  description:
    "About Meriç Cintosun. Istanbul University graduate, Full Stack Developer and Blockchain specialist. Passionate about modern web technologies and decentralized applications.",
  keywords: [
    "Meriç Cintosun about",
    "Istanbul University",
    "Full Stack Developer",
    "Blockchain Developer",
    "Web Developer",
    "Software Engineer",
    "React Developer",
    "JavaScript Developer",
    "Node.js Developer",
    "Solidity Developer",
  ],
  openGraph: {
    title: "About | Meriç Cintosun",
    description:
      "Istanbul University graduate Full Stack Developer and Blockchain specialist. Passionate about modern web technologies and decentralized applications.",
    url: "https://mericcintosun.com/about",
    images: [
      {
        url: "/about-img.webp",
        width: 800,
        height: 600,
        alt: "Meriç Cintosun - About",
      },
    ],
  },
  twitter: {
    title: "About | Meriç Cintosun",
    description:
      "Istanbul University graduate Full Stack Developer and Blockchain specialist.",
    images: ["/about-img.webp"],
  },
};

export default function AboutLayout({ children }) {
  return children;
}
