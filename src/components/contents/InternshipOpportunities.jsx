import React, { useState, useEffect } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaSliders,
  FaTableCells,
} from "react-icons/fa6";

// List of Partner Internship Providers
// When you upload images later, simply import them and assign to the `logo` property
const internshipProviders = [
  {
    id: 1,
    name: "Reach and Parters Co., Ltd",
    short: "Reach & Partners",
    tagline: "Consulting & Advisory",
    accentColor: "#0284c7",
    logo: null,
  },
  {
    id: 2,
    name: "BANHJI FINTECH Co., LTD.",
    short: "BANHJI FINTECH",
    tagline: "Financial Technology",
    accentColor: "#00b4d8",
    logo: null,
  },
  {
    id: 3,
    name: "K Professional Accountants Co., Ltd.",
    short: "K Professional",
    tagline: "Chartered Accountants",
    accentColor: "#0b1a6e",
    logo: null,
  },
  {
    id: 4,
    name: "LRS Henderson (Cambodia) Co., Ltd.",
    short: "LRS Henderson",
    tagline: "Audit & Advisory",
    accentColor: "#2563eb",
    logo: null,
  },
  {
    id: 5,
    name: "3S CONSULTING Co., LTD.",
    short: "3S CONSULTING",
    tagline: "Business Advisory",
    accentColor: "#d97706",
    logo: null,
  },
  {
    id: 6,
    name: "Fii & Associates Co., Ltd",
    short: "Fii & Associates",
    tagline: "Audit, Tax & Corporate",
    accentColor: "#0d9488",
    logo: null,
  },
  {
    id: 7,
    name: "Grant Thornton (Cambodia) Limited",
    short: "Grant Thornton",
    tagline: "Audit, Tax & Advisory",
    accentColor: "#7c3aed",
    logo: null,
  },
  {
    id: 8,
    name: "Advance Grand Formula Co., Ltd.",
    short: "Grand Formula",
    tagline: "Accounting Services",
    accentColor: "#e11d48",
    logo: null,
  },
  {
    id: 9,
    name: "ECOVIS VSDK & Partners Co., Ltd",
    short: "ECOVIS VSDK",
    tagline: "Audit & Advisory Network",
    accentColor: "#b91c1c",
    logo: null,
  },
  {
    id: 10,
    name: "Allnison Auditing and Consulting Co., Ltd.",
    short: "Allnison",
    tagline: "Auditing & Consulting",
    accentColor: "#0369a1",
    logo: null,
  },
  {
    id: 11,
    name: "BDO (Cambodia) Limited",
    short: "BDO Cambodia",
    tagline: "Audit & Assurance",
    accentColor: "#dc2626",
    logo: null,
  },
  {
    id: 12,
    name: "ATAP & PARTNERS Company Limited",
    short: "ATAP & PARTNERS",
    tagline: "Accounting & Tax",
    accentColor: "#059669",
    logo: null,
  },
  {
    id: 13,
    name: "Donasco & Company Ltd",
    short: "Donasco & Co",
    tagline: "Auditing & Services",
    accentColor: "#4f46e5",
    logo: null,
  },
  {
    id: 14,
    name: "Lochan & Co (Cambodia) Company Limited",
    short: "Lochan & Co",
    tagline: "Chartered Accountants",
    accentColor: "#ea580c",
    logo: null,
  },
  {
    id: 15,
    name: "SOTA Professional Company Limited",
    short: "SOTA Professional",
    tagline: "Accounting & Compliance",
    accentColor: "#0891b2",
    logo: null,
  },
  {
    id: 16,
    name: "DAS & Partners Co, Ltd.",
    short: "DAS & Partners",
    tagline: "Audit, Tax & Advisory",
    accentColor: "#4338ca",
    logo: null,
  },
];

const InternshipOpportunities = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [isPaused, setIsPaused] = useState(false);
  const [viewMode, setViewMode] = useState("slider"); // 'slider' | 'grid'

  // Responsive items count per slide
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setItemsPerPage(5);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 540) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(internshipProviders.length / itemsPerPage);

  // Auto-play slider
  useEffect(() => {
    if (isPaused || viewMode !== "slider") return;
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 4500);

    return () => clearInterval(interval);
  }, [totalPages, isPaused, viewMode]);

  const safeCurrentPage = currentPage >= totalPages ? Math.max(0, totalPages - 1) : currentPage;
  const startIndex = safeCurrentPage * itemsPerPage;
  const currentProviders = internshipProviders.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const prevSlide = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  return (
    <div id="internship-opportunities" data-aos="fade-up" className="mt-16 sm:mt-20 scroll-mt-24 font-['Poppins',sans-serif]">
      {/* Title & Requirements Intro */}
      <div data-aos="fade-up">
        <h3 className="mt-15 border-l-4 border-[#0b1a6e] dark:border-[#03A9f4] pl-5 text-3xl font-semibold leading-tight text-[#0b1a6e] dark:text-sky-300 transition-colors duration-200 hover:text-[#16257f] dark:hover:text-sky-200 sm:text-4xl">
          Internship Opportunities
        </h3>
        <p className="text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-9 pt-5">
          In the ATQ program curriculum, students must pass all subjects and have minimum experience to get the ATQ certificate.
        </p>
      </div>

      {/* Centered Category Heading matching the UI in screenshot */}
      <div data-aos="fade-up" data-aos-delay="100" className="mt-12 flex flex-col items-center justify-center text-center">
        <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-extrabold tracking-widest text-[#0b1a6e] dark:text-sky-300 uppercase">
          <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#0b1a6e] dark:border-sky-400">
            <span className="h-1.5 w-1.5 rounded-full bg-[#03A9f4]" />
          </span>
          <span>Partner Internship Providers</span>
        </div>

        {/* View mode toggle (Slider vs All Grid) */}
        <div className="mt-3 flex items-center gap-2">
          <button
            onClick={() => setViewMode("slider")}
            className={`cursor-pointer rounded-lg px-2.5 py-1 text-xs font-semibold transition-all ${
              viewMode === "slider"
                ? "bg-[#0b1a6e] dark:bg-sky-500 text-white shadow-2xs"
                : "text-slate-500 dark:text-slate-400 hover:text-[#0b1a6e] dark:hover:text-sky-300"
            }`}
          >
            <FaSliders className="mr-1" aria-hidden="true" /> Slider View
          </button>
          <span className="text-slate-300 dark:text-slate-700">|</span>
          <button
            onClick={() => setViewMode("grid")}
            className={`cursor-pointer rounded-lg px-2.5 py-1 text-xs font-semibold transition-all ${
              viewMode === "grid"
                ? "bg-[#0b1a6e] dark:bg-sky-500 text-white shadow-2xs"
                : "text-slate-500 dark:text-slate-400 hover:text-[#0b1a6e] dark:hover:text-sky-300"
            }`}
          >
            <FaTableCells className="mr-1" aria-hidden="true" /> View All (16)
          </button>
        </div>
      </div>

      {/* UI MODE 1: CAROUSEL SLIDER (EXACT UI FROM SCREENSHOT) */}
      {viewMode === "slider" && (
        <div
          className="relative mt-6 px-3 sm:px-0"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="absolute left-0 sm:-left-5 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white/95 text-slate-700 shadow-md transition-all hover:bg-[#0b1a6e] hover:text-white hover:border-[#0b1a6e] dark:border-slate-700 dark:bg-slate-850 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-[#03A9f4] dark:hover:text-slate-950 dark:hover:border-[#03A9f4]"
          >
            <FaChevronLeft className="text-xs" aria-hidden="true" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute right-0 sm:-right-5 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white/95 text-slate-700 shadow-md transition-all hover:bg-[#0b1a6e] hover:text-white hover:border-[#0b1a6e] dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-[#03A9f4] dark:hover:text-slate-950 dark:hover:border-[#03A9f4]"
          >
            <FaChevronRight className="text-xs" aria-hidden="true" />
          </button>

          {/* Cards Track (5 cards in a row matching the screenshot) */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {currentProviders.map((provider) => {
              return (
              <div
                key={provider.id}
                className="group relative flex min-h-28 sm:min-h-32 items-center justify-center rounded-2xl border border-slate-200/80 bg-white px-4 py-3 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-[#03A9f4] hover:shadow-lg hover:shadow-blue-950/5 dark:border-slate-800 dark:bg-slate-900"
              >
                {provider.logo ? (
                  <img
                    src={provider.logo}
                    alt={provider.name}
                    className="max-h-12 w-auto max-w-[85%] object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex w-full flex-col items-center justify-center px-2 text-center">
                    <div className="w-full">
                      <span
                        className="block w-full whitespace-normal break-words text-sm font-extrabold tracking-tight transition-colors sm:text-[15px]"
                        style={{ color: provider.accentColor }}
                      >
                        {provider.name}
                      </span>
                    </div>
                   
                  </div>
                )}
              </div>
              );
            })}
          </div>

          {/* Pagination Dots matching screenshot (Active: Cyan #03A9f4, Inactive: Slate) */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`cursor-pointer transition-all duration-300 ${
                  safeCurrentPage === index
                    ? "h-2 w-6 rounded-full bg-[#03A9f4]"
                    : "h-2 w-2 rounded-full bg-slate-300 hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-600"
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* UI MODE 2: ALL PARTNERS GRID */}
      {viewMode === "grid" && (
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {internshipProviders.map((provider) => {
            return (
            <div
              key={provider.id}
              className="group relative flex min-h-28 sm:min-h-32 items-center justify-center rounded-2xl border border-slate-200/80 bg-white px-4 py-3 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-[#03A9f4] hover:shadow-lg hover:shadow-blue-950/5 dark:border-slate-800 dark:bg-slate-900"
            >
              {provider.logo ? (
                <img
                  src={provider.logo}
                  alt={provider.name}
                  className="max-h-12 w-auto max-w-[85%] object-contain transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="flex w-full flex-col items-center justify-center px-2 text-center">
                  <div className="w-full">
                    <span
                      className="block w-full whitespace-normal break-words text-sm font-extrabold tracking-tight transition-colors"
                      style={{ color: provider.accentColor }}
                    >
                      {provider.name}
                    </span>
                  </div>

                </div>
              )}
            </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default InternshipOpportunities;
