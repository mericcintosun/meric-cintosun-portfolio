'use client';

import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import "./globals.css";
import { Montserrat } from 'next/font/google'
import Script from 'next/script'

// Font optimizasyonu
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['system-ui', 'arial'],
})

// Client-side only bileşenler - No SSR
const StarParticles = dynamic(() => import("@/components/StarParticles"), {
  loading: () => null
})

const NavbarSimple = dynamic(() => import("@/components/Navbar").then(mod => mod.NavbarSimple), {
  loading: () => <div className="h-16" />
})

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => null
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link
          rel="preload"
          href="/fonts/montserrat.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        {/* Ana içerik */}
        <div className="contents">
          <NavbarSimple/>
          <main className="mx-auto max-w-screen-2xl min-h-[23rem] px-6">
            <Suspense fallback={
              <div className="animate-pulse">
                <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
              </div>
            }>
              {children}
            </Suspense>
          </main>
          <Footer />
        </div>

        {/* Dekoratif elementler */}
        <StarParticles />
        
        {/* Analytics */}
        <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID"
        />
      </body>
    </html>
  );
}
