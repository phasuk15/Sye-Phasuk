import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./sections/NavBar";
import Footer from "./sections/Footer";

import { Pixelify_Sans } from "next/font/google";
import { Jersey_10 } from "next/font/google";

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
  variable: "--font-pixelify",
});

const jersey = Jersey_10({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-jersey",
});

export const metadata: Metadata = {
  title: "Sye Phasuk",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={pixelify.className}>
      <body className="bg-white text-gray-900">
        <NavBar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>

      
    </html>
  );
}