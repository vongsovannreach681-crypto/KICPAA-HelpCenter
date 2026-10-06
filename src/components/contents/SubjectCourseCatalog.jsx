import React from "react";
import TQbook from "../../assets/images/TQbook.png";
import BooksExplore from "./BooksExplore";

const levels = {
  principles: {
    title: "Principles Level",
    text: "The Principles Level provides a framework for learning which contains core skills in processing business transactions to enable them to become effective members of an accounting support team.",
  },
  technician: {
    title: "Technician Level",
    text: "The Technician Level modules build on the studies undertaken in the previous level and develop skills with a particular focus on application of knowledge, using realistic scenarios.",
  },
};

const LevelBlock = ({ title, text, className = "" }) => (
  <div className={`mx-auto max-w-md text-center ${className}`}>
    <h3 className="mx-auto w-fit border-b-[3px] border-b-[#03A9f4] pb-1 text-3xl font-bold text-blue-950 dark:text-sky-300">
      {title}
    </h3>
    <p className="pt-5 text-base leading-relaxed lg:text-lg text-gray-600 dark:text-slate-300">{text}</p>
  </div>
);

const Connector = ({ className = "" }) => (
  <span
    className={`pointer-events-none absolute hidden w-32 -rotate-45 border-t-2 border-dashed border-blue-900/40 dark:border-sky-400/40 md:block ${className}`}
    aria-hidden="true"
  />
);

const SubjectCourseCatalog = () => {
  return (
    <section id="courses" className="container mx-auto px-4 py-20">
      <div className="grid items-center gap-10 md:grid-cols-[1fr_auto_1fr] md:gap-x-10 md:gap-y-16">
        {/* Top right on desktop, first on mobile */}
        <div data-aos="fade-left" className="md:col-start-3 md:row-start-1 md:self-start">
          <LevelBlock
            {...levels.principles}
          />
        </div>

        {/* Book on circle */}
        <div data-aos="zoom-in" data-aos-delay="100" className="relative mx-auto flex h-64 w-64 max-w-full sm:h-80 sm:w-80 lg:h-[28rem] lg:w-[28rem] items-center justify-center md:col-start-2 md:row-span-2 md:row-start-1">
          <div className="absolute inset-0 rounded-full" />
          <img
            src={TQbook}
            alt="TQ Book"
            className="relative w-44 sm:w-52 lg:w-72"
          />
          <Connector className="-right-28 top-10 origin-left" />
          <Connector className="-left-28 bottom-10 origin-right" />
        </div>

        {/* Bottom left on desktop */}
        <div data-aos="fade-right" className="md:col-start-1 md:row-start-2 md:self-end">
          <LevelBlock
            {...levels.technician}
          />
        </div>
      </div>
      <BooksExplore/>
    </section>
  );
};

export default SubjectCourseCatalog;