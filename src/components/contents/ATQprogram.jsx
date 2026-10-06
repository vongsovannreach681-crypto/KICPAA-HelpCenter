import React from "react";
import AcClass from "../../assets/images/ACClass.png";

import Ciri from "./Ciri";
import MethodStudy from "./MethodStudy";
import LearningHub from "./LearningHub";
import Marque from "./Marque";
import AdmissionFees from "./AdmissionFees";
import InternshipOpportunities from "./InternshipOpportunities";
const ATQprogram = () => {
  return (
    <section className="bg-linear-to-br from-sky-50 via-white to-cyan-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="group relative mx-auto w-full max-w-xl">
          <img
            src={AcClass}
            alt="Accounting class"
            className="block h-auto w-full rounded-2xl shadow-xl shadow-[#0b1a6e]/10 ring-1 ring-[#0b1a6e]/10 transition duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-[1.01] group-hover:shadow-2xl group-hover:shadow-[#0b1a6e]/20"
          />
        </div>
        <div className="max-w-2xl">
          <h2 className="border-l-4 border-[#0b1a6e] pl-5 text-3xl font-semibold leading-tight text-[#0b1a6e] transition-colors duration-200 hover:text-[#16257f] sm:text-4xl">
            About ATQ Program
          </h2>
          <p className="mt-6  text-justify leading-8 text-slate-600 sm:text-lg sm:leading-9">
            <span className="font-semibold text-[#0b1a6e]">
              Accounting Technician Qualification (ATQ)
            </span>{" "}
            is the examination-based qualification for the skill recognizing at
            the technician level of accounting. Developed by KICPAA with
            technical support from ICAEW and funded by Russian Federation and
            UNDP Cambodia. It enables students to shorten their study time and
            they can study at their own place. Students from everywhere in
            Cambodia can study with training organizations or by themselves
            through a LEARNING HUB.
          </p>
        </div>
      </div>
      <div className="mt-20 container">
        <h3 className="mt-15 border-l-4 border-[#0b1a6e] pl-5 text-3xl font-semibold leading-tight text-[#0b1a6e] transition-colors duration-200 hover:text-[#16257f] sm:text-4xl">
          Curriculum
        </h3>
        <p className="text-slate-600 sm:text-lg sm:leading-9 pt-5">
          TQ Program is divided into 2 levels: principal level and technical level. Each level is further divided into 2 parts.
        </p>
        <div className="mt-10"></div>
        
        <Ciri/>
        <MethodStudy/>
        <LearningHub/>
        <Marque/>
        <AdmissionFees/>
        <InternshipOpportunities/>
      </div>
    </section>
  );
};

export default ATQprogram;
