import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./sections/NavBar";
import Footer from "./sections/Footer";

export const metadata: Metadata = {
  title: "Herb and Spice",
  description: "Delicious food, cozy atmosphere",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <NavBar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>

      
    </html>
  );
}