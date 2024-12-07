import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { NavbarComponent } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { MouseFollower } from "@/components/MouseFollower";
import { LoadingScreen } from "@/components/LoadingScreen";
import { ParallaxBackground } from "@/components/ParallaxBackground";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Next.js + NextUI App",
  description: "A modern web application built with Next.js and NextUI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className='light'>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Providers>
          <LoadingScreen />
          <Suspense fallback={null}>
            <MouseFollower />
            <ParallaxBackground />
          </Suspense>
          <div className="relative flex flex-col min-h-screen">
            <NavbarComponent />
            <PageTransition>
              <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
                {children}
              </main>
            </PageTransition>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
