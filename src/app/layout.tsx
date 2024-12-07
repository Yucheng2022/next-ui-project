import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { NavbarComponent } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { MouseFollower } from "@/components/MouseFollower";
import { LoadingScreen } from "@/components/LoadingScreen";
import { ParallaxBackground } from "@/components/ParallaxBackground";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js + NextUI App",
  description: "A modern web application built with Next.js and NextUI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Suspense fallback={<LoadingScreen />}>
            <MouseFollower />
            <ParallaxBackground />
            <div className="relative flex flex-col min-h-screen">
              <NavbarComponent />
              <main className="container mx-auto max-w-7xl px-6 flex-grow">
                <PageTransition>
                  {children}
                </PageTransition>
              </main>
              <Footer />
            </div>
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
