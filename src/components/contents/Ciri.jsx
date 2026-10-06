import React from "react";
import { principles, technician } from "../../data/subjectCourses";

function SideLabel({ children }) {
  return (
    <div className="flex shrink-0 items-center justify-center self-center bg-white px-2 py-5 dark:bg-slate-900 dark:border dark:border-slate-800">
      <span className="rotate-180 text-lg font-extrabold tracking-wide text-[#0b1a6e] dark:text-[#03A9f4] [writing-mode:vertical-rl]">
        {children}
      </span>
    </div>
  );
}

function Part({ part, title, subjects }) {
  return (
    <div className="flex flex-col gap-1 poppins">
      <h3 className="text-center text-xl font-bold text-white">{part}</h3>
      <fieldset className="border border-white/25 px-1.5 pb-1.5 pt-0">
        <legend className="mx-auto px-2 text-sm text-white/50">{title}</legend>
        <div className="flex flex-col gap-2">
          {subjects.map((s) => (
            <div
              key={s.code}
              className="border border-white/80 bg-[#16257f] px-4 py-4 text-[17px] text-white dark:border-slate-700 dark:bg-slate-900/90"
            >
              <span className="font-bold">{s.code}:</span> {s.name}
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
}

function Column({ items }) {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-3">
      {items.map((p) => (
        <Part key={p.part} {...p} />
      ))}
    </div>
  );
}

export default function Ciri() {
  return (
    <section data-aos="fade-up" className="w-full bg-[#0b1a6e] dark:bg-slate-950 p-4 font-['Poppins',sans-serif] sm:p-6 rounded-2xl border border-transparent dark:border-slate-800">
      {/* Title bar */}
      <div data-aos="fade-down" className="bg-white py-3 text-center dark:bg-slate-900 dark:border dark:border-slate-800 rounded-lg">
        <h2 className="text-2xl font-extrabold text-[#0b1a6e] sm:text-3xl dark:text-sky-300">
          Accounting Technician Qualification
        </h2>
      </div>

      {/* Diagram */}
      <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-stretch lg:gap-3">
        {/* Principles */}
        <div data-aos="fade-right" data-aos-delay="150" className="flex flex-1 gap-2">
          <SideLabel>PRINCIPLES</SideLabel>
          <Column items={principles} />
        </div>

        {/* Arrow */}
        <div data-aos="zoom-in" data-aos-delay="250" className="flex items-center justify-center self-center">
          <svg
            viewBox="0 0 40 36"
            className="h-9 w-10 rotate-90 text-white lg:rotate-0"
            aria-hidden="true"
          >
            <path d="M2 2 L38 18 L2 34 Z" fill="currentColor" />
          </svg>
        </div>

        {/* Technician */}
        <div data-aos="fade-left" data-aos-delay="150" className="flex flex-1 gap-2">
          <SideLabel>TECHNICIAN</SideLabel>
          <Column items={technician} />
        </div>
      </div>
    </section>
  );
}