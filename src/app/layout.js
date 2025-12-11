import StarParticles from "@/components/StarParticles";
import "./globals.css";
import { NavbarSimple } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export const metadata = {
  metadataBase: new URL("https://mericcintosun.com"),
  title: {
    default: "Meriç Cintosun | Full Stack & Blockchain Developer",
    template: "%s | Meriç Cintosun",
  },
  description:
    "Meriç Cintosun - Full Stack Developer and Blockchain specialist. Building modern web applications and DeFi projects with React, Next.js, Node.js, Flutter and Rust. Istanbul University graduate.",
  icons: {
    icon: [
      { url: "/main-image.webp", type: "image/webp" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/main-image.webp", sizes: "180x180", type: "image/webp" }],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/main-image.webp",
      },
    ],
  },
  keywords: [
    "Meriç Cintosun",
    "Full Stack Developer",
    "Blockchain Developer",
    "Web Developer",
    "Portfolio",
    "React",
    "Next.js",
    "Node.js",
    "Solidity",
    "DeFi",
    "Smart Contracts",
    "JavaScript",
    "TypeScript",
    "Web3",
    "Frontend Developer",
    "Backend Developer",
    "Istanbul University",
    "Turkey",
    "Software Engineer",
    "Web Development",
    "Blockchain Technology",
  ],
  authors: [{ name: "Meriç Cintosun", url: "https://mericcintosun.com" }],
  creator: "Meriç Cintosun",
  publisher: "Meriç Cintosun",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mericcintosun.com",
    siteName: "Meriç Cintosun Portfolio",
    title: "Meriç Cintosun | Full Stack & Blockchain Developer",
    description:
      "Full Stack Developer and Blockchain specialist. Building modern web applications and DeFi projects with React, Next.js, Node.js, Flutter and Rust.",
    images: [
      {
        url: "/main-image.webp",
        width: 1200,
        height: 630,
        alt: "Meriç Cintosun - Full Stack & Blockchain Developer",
      },
      {
        url: "/home-astronaut.webp",
        width: 800,
        height: 600,
        alt: "Meriç Cintosun Portfolio Hero Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meriç Cintosun | Full Stack & Blockchain Developer",
    description:
      "Full Stack Developer and Blockchain specialist. Building modern web applications and DeFi projects with React, Next.js, Node.js, Flutter and Rust.",
    images: ["/main-image.webp"],
    creator: "@mericcintosun",
    site: "@mericcintosun",
  },
  alternates: {
    canonical: "https://mericcintosun.com",
    languages: {
      "en-US": "https://mericcintosun.com",
      "tr-TR": "https://mericcintosun.com/tr",
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "Technology",
  classification: "Business",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  generator: "Next.js",
  applicationName: "Meriç Cintosun Portfolio",
  manifest: "/manifest.json",
  other: {
    "msapplication-TileColor": "#0f172a",
    "theme-color": "#0f172a",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Meriç Cintosun",
    "mobile-web-app-capable": "yes",
    "msapplication-navbutton-color": "#0f172a",
    "msapplication-starturl": "/",
    "google-site-verification": "your-google-verification-code",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Meriç Cintosun",
    url: "https://mericcintosun.com",
    image: "https://mericcintosun.com/main-image.webp",
    sameAs: [
      "https://github.com/mericcintosun",
      "https://www.linkedin.com/in/meric-cintosun",
    ],
    jobTitle: "Full Stack & Blockchain Developer",
    worksFor: {
      "@type": "Organization",
      name: "Freelancer",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Istanbul University",
    },
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Solidity",
      "Blockchain",
      "Web3",
      "DeFi",
      "Smart Contracts",
      "Full Stack Development",
      "Frontend Development",
      "Backend Development",
      "Web Development",
    ],
    description:
      "Full Stack Developer and Blockchain specialist. Building modern web applications and DeFi projects with React, Next.js, Node.js, Flutter and Rust.",
    nationality: "Turkish",
    birthPlace: "Turkey",
  };

  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning={true}>
        <LanguageProvider>
          <StarParticles />
          <NavbarSimple />
          <main className="font-montserrat mx-auto max-w-screen-2xl min-h-[23rem] px-6 pt-32">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
