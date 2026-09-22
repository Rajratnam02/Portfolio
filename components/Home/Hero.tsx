"use client";

import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

type Section = "home" | "project" | "skill";

interface HeroProps {
  setIsActive: Dispatch<SetStateAction<Section>>;
}

const Hero = ({ setIsActive }: HeroProps) => {
  const texts = [
    "Problem Solver",
    1000,
    "Full-Stack Developer",
    1000,
    "Software Architect",
    1000,
    "System Builder",
    1000,
  ];

  return (
    <section className="relative pb-10 w-full overflow-hidden rounded-2xl">
      {/* Banner video */}
      <div className="relative z-0 h-40 sm:h-52 md:h-65 w-full overflow-hidden rounded-2xl">
        <video
          src="/hero.mp4"
          className="h-full w-full scale-[1.35] object-cover object-top"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Avatar + buttons row */}
      <div className="relative z-10 -mt-10 flex flex-wrap items-end justify-between gap-3 mx-3 sm:mx-5">
        <div className="relative h-20 w-20 sm:h-28 sm:w-28 md:h-30 md:w-30 shrink-0 overflow-hidden rounded-full border-4 border-background">
          <Image
            src="/rajratnam.jpeg"
            alt="Rajratnam"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2 pb-2">
          <div
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1apg-HStU5ljLls3lXz44gBYU9-irzker/view?usp=sharing",
              )
            }
            className="rounded-full cursor-pointer bg-foreground px-4 py-2 sm:px-6 sm:py-3 text-sm font-medium text-background transition-all duration-300 hover:bg-accent hover:text-background"
          >
            View Resume
          </div>

          <div
            onClick={() => setIsActive("project")}
            className="rounded-full cursor-pointer border border-border px-4 py-2 sm:px-6 sm:py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-foreground hover:bg-foreground hover:text-background"
          >
            View Projects
          </div>
        </div>
      </div>

      {/* Name, title, college */}
      <div className="flex flex-col gap-4 mt-5">
        <p className="text-2xl sm:text-3xl -mb-3 sm:-mb-5">Rajratnam</p>

        <TypeAnimation
          sequence={texts}
          speed={5}
          repeat={Infinity}
          style={{
            fontSize: "1rem",
            display: "inline-block",
            color: "#00a0fd",
            fontFamily: "Coda, sans-serif",
          }}
        />

        <p className="text-[#aaa] text-sm sm:text-base -mt-3 sm:-mt-5">
          Indian Institute of Information Technology, Ranchi
        </p>
      </div>
    </section>
  );
};

export default Hero;
