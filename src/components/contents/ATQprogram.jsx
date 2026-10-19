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
    <section id="about-atq" className="bg-linear-to-br from-sky-50 via-white to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 transition-colors">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="group relative mx-auto w-full max-w-xl" data-aos="fade-right">
          <img
            src={AcClass}
            alt="Accounting class"
            className="block h-auto w-full rounded-2xl shadow-xl shadow-[#0b1a6e]/10 dark:shadow-sky-500/5 ring-1 ring-[#0b1a6e]/10 dark:ring-slate-700 transition duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-[1.01] group-hover:shadow-2xl"
          />
        </div>
        <div className="max-w-2xl" data-aos="fade-left">
          <h2 className="border-l-4 border-[#0b1a6e] dark:border-[#03A9f4] pl-5 text-3xl font-semibold leading-tight text-[#0b1a6e] dark:text-sky-300 transition-colors duration-200 hover:text-[#16257f] dark:hover:text-sky-200 sm:text-4xl">
            ATQ learning resources and tests
          </h2>
          <p className="mt-6 text-left leading-8 text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-8">
            It enables students to shorten their study time and they can study at their own place. Students from everywhere in Cambodia can study with training organizations or by themselves through a <span className="text-blue-800 underline text-semibold"><a href="https://education.kicpaa.org/student/login" target="blank"> LEARNING HUB</a></span>.
          </p>
        </div>
      </div>
      <div id="curriculum" className="mt-15 container scroll-mt-24">
        <h3 data-aos="fade-up" className="mt-15 border-l-4 border-[#0b1a6e] dark:border-[#03A9f4] pl-5 text-3xl font-semibold leading-tight text-[#0b1a6e] dark:text-sky-300 transition-colors duration-200 hover:text-[#16257f] dark:hover:text-sky-200 sm:text-4xl">
          Curriculum
        </h3>
        <p data-aos="fade-up" data-aos-delay="100" className="text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-9 pt-5">
          ATQ Program is divided into 2 levels: principal level and technical level. Each level is further divided into 2 parts.
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
