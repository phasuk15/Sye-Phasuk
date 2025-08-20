"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Gallery from "./sections/Gallery";
import Essays from "./sections/Essays";
import Contact from "./sections/Contact";

const Home = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const hash = window.location.hash;
    if (pathname === "/" && hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname, searchParams]);

  return (
    <main>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
       <section id="projects">
        <Projects />
      </section>
       <section id="gallery">
        <Gallery />
      </section>
      <section id="essays">
        <Essays />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
export default Home;