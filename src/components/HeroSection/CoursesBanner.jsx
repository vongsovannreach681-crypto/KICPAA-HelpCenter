import React from "react";
import student from "../../assets/images/student.png";
import { useLanguage } from "../../context/LanguageContext";

// Small decorative dots scattered around the student (% of the right panel)
const dots = [
  { top: 18, left: 8 },
  { top: 34, left: 4 },
  { top: 44, left: 22 },
  { top: 56, left: 10 },
  { top: 66, left: 2 },
  { top: 78, left: 14 },
  { top: 12, left: 70 },
  { top: 24, left: 86 },
  { top: 40, left: 92 },
  { top: 52, left: 80 },
  { top: 64, left: 94 },
  { top: 74, left: 76 },
  { top: 86, left: 28 },
  { top: 90, left: 88 },
  { top: 30, left: 30 },
];

// Small STEM symbols that sit like notes on the graph paper
const symbols = [
  { char: "π", top: 14, left: 14, rotate: -8 },
  { char: "∑", top: 46, left: 88, rotate: 6 },
  { char: "</>", top: 76, left: 6, rotate: -4 },
];

const CoursesBanner = ({
  heading,
  text,
  imageSrc = student,
}) => {
  const { t } = useLanguage();

  const displayHeading = heading || t("atqProgram.aboutHeading", "About ATQ Program");
  const displayText =
    text ||
    t(
      "atqProgram.bannerText",
      "is the examination-based qualification for the skill recognizing at the technician level of accounting. Developed by KICPAA with technical support from ICAEW and funded by Russian Federation and UNDP Cambodia."
    );

  return (
    <section
      className="relative mt-22 overflow-hidden bg-[#fafafa] dark:bg-slate-950 transition-colors"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.045) 1px, transparent 1px)",
        backgroundSize: "44px 44px",
      }}
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-end gap-0 px-6 lg:min-h-[420px] lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        {/* Left: copy */}
        <div className="self-center py-12 lg:py-16" data-aos="fade-right">
          <h1 className="border-l-10 rounded-[0px 10px 0px 10px] border-blue-800 pl-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-[#0b2a6b] dark:text-sky-300 sm:text-5xl lg:text-6xl">
            {displayHeading}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-600 dark:text-slate-300 sm:text-lg">
            <span className="text-blue-950 font-semibold dark:text-cyan-300">
              Accounting Technician Qualification (ATQ){" "}
            </span>
            {displayText}
          </p>
        </div>

        {/* Right: student panel */}
        <div
          className="relative flex h-[340px] items-end justify-center lg:h-[420px]"
          data-aos="fade-left"
          data-aos-delay="150"
        >
          {/* Subtle warm glow behind student */}
          <div
            className="pointer-events-none absolute bottom-0 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-amber-400/15 blur-3xl dark:bg-sky-500/10"
            aria-hidden="true"
          />

          {/* Scattered decorative dots */}
          {dots.map((d, i) => (
            <span
              key={i}
              className="pointer-events-none absolute hidden h-1.5 w-1.5 rounded-full bg-blue-900/25 dark:bg-sky-400/30 sm:block"
              style={{ top: `${d.top}%`, left: `${d.left}%` }}
              aria-hidden="true"
            />
          ))}

          {/* STEM symbols */}
          {symbols.map((s, i) => (
            <span
              key={i}
              className="pointer-events-none absolute hidden select-none font-mono text-sm font-semibold text-blue-900/30 dark:text-sky-400/35 sm:block"
              style={{
                top: `${s.top}%`,
                left: `${s.left}%`,
                transform: `rotate(${s.rotate}deg)`,
              }}
              aria-hidden="true"
            >
              {s.char}
            </span>
          ))}

          {/* Student image anchored to the bottom */}
          <div className="absolute bottom-0 left-1/2 h-[290px] w-[230px] -translate-x-1/2 sm:w-[260px] lg:h-[385px] lg:w-[300px]">
            {/* Outline offset behind the portrait */}
            <div
              className="absolute inset-0 translate-x-3 -translate-y-3 rounded-t-full border-[3px] border-[#ffb703]"
              aria-hidden="true"
            />
            {/* Main portrait */}
            <div className="relative h-full w-full overflow-hidden rounded-t-full border-[3px] border-[#0b2a6b] bg-white shadow-xl dark:border-slate-700 dark:bg-slate-900">
              <img
                src={imageSrc}
                alt="ATQ Student"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesBanner;
