export const metadata = {
  title: "Blog",
  description:
    "Meriç Cintosun's technology blog. Articles about web development, Blockchain, AI, React, Next.js, Solidity and technology insights.",
  keywords: [
    "Meriç Cintosun blog",
    "Technology blog",
    "Web development blog",
    "Blockchain blog",
    "AI blog",
    "React blog",
    "Next.js blog",
    "Solidity blog",
    "Programming blog",
    "Software development",
    "Tech articles",
    "Developer blog",
    "JavaScript blog",
  ],
  openGraph: {
    title: "Blog | Meriç Cintosun",
    description:
      "Technology blog. Articles about web development, Blockchain, AI, React, Next.js, Solidity and technology insights.",
    url: "https://mericcintosun.com/blog",
    images: [
      {
        url: "/main-image.webp",
        width: 1200,
        height: 630,
        alt: "Meriç Cintosun - Blog",
      },
    ],
  },
  twitter: {
    title: "Blog | Meriç Cintosun",
    description:
      "Articles about web development, Blockchain, AI, React, Next.js technology topics.",
    images: ["/main-image.webp"],
  },
};

export default function BlogLayout({ children }) {
  return children;
}
