"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Hero from "./sections/Hero";
import About from "./sections/About";

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
    </main>
  );
}
export default Home;