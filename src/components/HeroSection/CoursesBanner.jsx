import React from "react";

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
  heading = "ATQ Program",
  text = "Accounting Technician Qualification (ATQ) is the examination-based qualification for the skill recognizing at the technician level of accounting. Developed by KICPAA with technical support from ICAEW and funded by Russian Federation and UNDP Cambodia.",
  imageSrc = "https://central-college.ca/wp-content/uploads/2026/03/photo-portrait-young-smiling-female-college-school-student-holding-books-with-backpack-1157x1536-1-771x1024-1.webp",
  ctaLabel = "About ATQ Program",
  ctaHref = "#courses",
}) => {
  return (
    <section
      className="relative mt-22 overflow-hidden bg-[#fafafa]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.045) 1px, transparent 1px)",
        backgroundSize: "44px 44px",
      }}
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-end gap-0 px-6 lg:min-h-[420px] lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        {/* Left: copy */}
        <div className="self-center py-12 lg:py-16">
          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-[#0b2a6b] sm:text-5xl lg:text-6xl">
            {heading}
          </h1>

          

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
            {text}
          </p>

          <a
            href={ctaHref}
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-[#03A9f4] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#081f50] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b2a6b]"
          >
            {ctaLabel} <span className="pl-2"> </span><i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        {/* Right: student panel */}
        <div className="relative mx-auto h-[320px] w-full max-w-[460px] lg:h-[420px]">
          {/* Dots */}
          {dots.map((d, i) => (
            <span
              key={i}
              aria-hidden="true"
              className={`absolute h-1.5 w-1.5 rounded-full ${
                i % 3 === 0 ? "bg-[#ffb703]" : i % 2 === 0 ? "bg-[#0b2a6b]" : "bg-[#0b2a6b]/50"
              }`}
              style={{ top: `${d.top}%`, left: `${d.left}%` }}
            />
          ))}

          {/* Symbol notes */}
          {symbols.map((s) => (
            <span
              key={s.char}
              aria-hidden="true"
              className="absolute z-20 rounded-md border border-[#0b2a6b]/15 bg-white px-2.5 py-1 text-base font-bold text-[#0b2a6b] shadow-sm"
              style={{
                top: `${s.top}%`,
                left: `${s.left}%`,
                transform: `rotate(${s.rotate}deg)`,
              }}
            >
              {s.char}
            </span>
          ))}

          {/* Arch frame: offset amber outline + cobalt arch holding the photo */}
          <div className="absolute bottom-0 left-1/2 h-[290px] w-[230px] -translate-x-1/2 sm:w-[260px] lg:h-[385px] lg:w-[300px]">
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-3 -translate-y-3 rounded-t-full border-[3px] border-[#ffb703]"
            />
            <div className="relative h-full w-full overflow-hidden rounded-t-full bg-[#0b2a6b]">
              <img
                src={imageSrc}
                alt="Smiling student holding books with a backpack"
                className="h-full w-full object-cover object-top"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesBanner;