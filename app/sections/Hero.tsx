"use client";

import Github from "../components/icons/Github";
import Youtube from "../components/icons/Youtube";
import Insta from "../components/icons/Insta";
import Linkedin from "../components/icons/Linkedin";

const Hero = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 py-16">

      <div className="w-full max-w-4xl font-pixelify bg-light-pink border-4 border-rosewood shadow-[6px_6px_0px_#412722] p-10 md:p-20 text-center relative">

        {/* Corner L-bracket accents */}
        <span className="absolute top-2.5 left-2.5 w-5 h-5 border-t-[3px] border-l-[3px] border-raspberry"></span>
        <span className="absolute top-2.5 right-2.5 w-5 h-5 border-t-[3px] border-r-[3px] border-raspberry"></span>
        <span className="absolute bottom-2.5 left-2.5 w-5 h-5 border-b-[3px] border-l-[3px] border-raspberry"></span>
        <span className="absolute bottom-2.5 right-2.5 w-5 h-5 border-b-[3px] border-r-[3px] border-raspberry"></span>

        {/* Top divider */}
        <div className="flex items-center gap-3 mb-6">
          <span className="flex-1 h-px bg-mauve-brown opacity-30"></span>
          <span className="text-raspberry text-[9px] tracking-widest">✦ ✦ ✦</span>
          <span className="flex-1 h-px bg-mauve-brown opacity-30"></span>
        </div>

        {/* Hello label */}
        <p className="text-[13px] text-mauve-brown tracking-[0.2em] mb-4">
          hello, i'm
        </p>

        {/* Name */}
        <h1
          className="font-jersey font-bold text-raspberry leading-none mb-2"
          style={{ fontSize: "clamp(64px, 14vw, 130px)" }}
          data-aos="fade-up"
          data-aos-once="false"
        >
          Sye Phasuk
        </h1>

        {/* Identity chips */}
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3 my-6">
          {["artist", "thai", "uk", "sagittarius"].map((label, i, arr) => (
            <span key={label} className="flex items-center gap-2 md:gap-3">
              <span
                className="text-mauve-brown text-[9px] px-4 py-1 tracking-wide"
                style={{
                  borderTop: "1.5px solid #8b5c6e",
                  borderBottom: "1.5px solid #8b5c6e",
                }}
              >
                {label}
              </span>
              {i < arr.length - 1 && (
                <span className="text-raspberry text-[9px]">❖</span>
              )}
            </span>
          ))}
        </div>

        {/* Bottom divider + social icons */}
        <div className="flex items-center gap-3 mt-6">
          <span className="flex-1 h-px bg-mauve-brown opacity-30"></span>
          <div className="flex gap-3 items-center">
            <Linkedin />
            <Github />
            <Youtube url="https://www.youtube.com/@dianas15" />
            <Insta />
          </div>
          <span className="flex-1 h-px bg-mauve-brown opacity-30"></span>
        </div>

      </div>
    </div>
  );
};

export default Hero;