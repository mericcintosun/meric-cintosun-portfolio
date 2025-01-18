import StarParticles from "@/components/StarParticles";
import "./globals.css";
import { NavbarSimple } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a"
};

export const metadata = {
  metadataBase: new URL('https://mericcintosun.com'),
  title: "Meriç | Portfolio",
  description: "Meriç Cintosun'un kişisel web sitesi. Full Stack Developer ve Blockchain geliştiricisi.",
  keywords: ["Meriç Cintosun", "Full Stack Developer", "Blockchain Developer", "Web Developer", "Portfolio"],
  authors: [{ name: "Meriç Cintosun" }],
  creator: "Meriç Cintosun",
  publisher: "Meriç Cintosun",
  robots: "index, follow"
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body suppressHydrationWarning={true}>
        <LanguageProvider>
          <StarParticles />
          <NavbarSimple />
          <main className="font-montserrat mx-auto max-w-screen-2xl min-h-[23rem] px-6 pt-32">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
