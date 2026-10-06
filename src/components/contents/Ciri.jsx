import React from "react";
import { principles, technician } from "../../data/subjectCourses";

function SideLabel({ children }) {
  return (
    <div className="flex shrink-0 items-center justify-center self-center bg-white px-2 py-5">
      <span className="rotate-180 text-lg font-extrabold tracking-wide text-[#0b1a6e] [writing-mode:vertical-rl]">
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
              className="border border-white/80 bg-[#16257f] px-4 py-4 text-[17px] text-white"
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
    <section className="w-full bg-[#0b1a6e] p-4 font-['Poppins',sans-serif] sm:p-6">
      {/* Title bar */}
      <div className="bg-white py-3 text-center">
        <h2 className="text-2xl font-extrabold text-[#0b1a6e] sm:text-3xl">
          Accounting Technician Qualification
        </h2>
      </div>

      {/* Diagram */}
      <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-stretch lg:gap-3">
        {/* Principles */}
        <div className="flex flex-1 gap-2">
          <SideLabel>PRINCIPLES</SideLabel>
          <Column items={principles} />
        </div>

        {/* Arrow */}
        <div className="flex items-center justify-center self-center">
          <svg
            viewBox="0 0 40 36"
            className="h-9 w-10 rotate-90 text-white lg:rotate-0"
            aria-hidden="true"
          >
            <path d="M2 2 L38 18 L2 34 Z" fill="currentColor" />
          </svg>
        </div>

        {/* Technician */}
        <div className="flex flex-1 gap-2">
          <SideLabel>TECHNICIAN</SideLabel>
          <Column items={technician} />
        </div>
      </div>
    </section>
  );
}