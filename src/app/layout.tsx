import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "lenis/react";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Background } from "@/components/ui/Background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vedant Nigam | AI & Full Stack Developer",
  description: "Next-generation interactive portfolio of Vedant Nigam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <ReactLenis root>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-neon-cyan selection:text-black`}
        >
          <Background />
          <CustomCursor />
          {children}
        </body>
      </ReactLenis>
    </html>
  );
}
