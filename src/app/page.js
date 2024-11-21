"use client";
import { ThemeProvider } from "@material-tailwind/react";

export default function HomePage() {
  return (
    <div className="relative h-screen overflow-hidden text-white">
      <div className="grid-overlay"></div>
      <ThemeProvider>
        <main className="relative z-20 flex flex-col items-center justify-center h-full px-5 text-center"></main>
      </ThemeProvider>
    </div>
  );
}
