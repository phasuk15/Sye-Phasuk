"use client";

import { useState } from "react";
import ScrollLink from "../components/ScrollLink";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-light-pink text-white p-4 flex justify-between items-center shadow-lg z-50">
      {/* Logo */}
      <a href="/" className="text-2xl font-bold font-pixelify text-black">
        Sye Phasuk
      </a>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-5 font-pixelify text-black">
        <ScrollLink href="#about">About</ScrollLink>
        <ScrollLink href="#projects">Projects</ScrollLink>
        <ScrollLink href="#gallery">Gallery</ScrollLink>
        <ScrollLink href="#essays">Essays</ScrollLink>
        <ScrollLink href="#contact">Contact</ScrollLink>
      </div>

      {/* Hamburger Button (mobile only) */}
      <button
        className="md:hidden flex flex-col space-y-1 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="w-6 h-1 bg-black"></span>
        <span className="w-6 h-1 bg-black"></span>
        <span className="w-6 h-1 bg-black"></span>
      </button>

       {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-light-pink shadow-lg transform transition-transform duration-300 ease-in-out md:hidden z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <button
          className="absolute top-4 left-4 text-black text-xl font-bold"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>

        {/* Sidebar Links */}
        <div className="mt-16 flex flex-col space-y-4 px-6 font-pixelify text-black">
          <ScrollLink href="#about" onClick={() => setIsOpen(false)}>About</ScrollLink>
          <ScrollLink href="#projects" onClick={() => setIsOpen(false)}>Projects</ScrollLink>
          <ScrollLink href="#gallery" onClick={() => setIsOpen(false)}>Gallery</ScrollLink>
          <ScrollLink href="#essays" onClick={() => setIsOpen(false)}>Essays</ScrollLink>
          <ScrollLink href="#contact" onClick={() => setIsOpen(false)}>Contact</ScrollLink>
        </div>
      </div>

      {/* Dim background when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
}