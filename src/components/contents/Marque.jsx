import React from "react";
import aub from "../../assets/marquee/aub.png";
import bbu from "../../assets/marquee/bbu.png";
import cac from "../../assets/marquee/CaC.png";
import camed from "../../assets/marquee/Camed.png";
import ifa from "../../assets/marquee/IFA.png";
import panhasas from "../../assets/marquee/Panhasas.png";
import vanda from "../../assets/marquee/Vanda.png";

const organizations = [
  {
    name: "CamEd Business School",
    shortName: "CamEd",
    logo: camed,
  },
  {
    name: "Vanda Institute",
    shortName: "Vanda",
    logo: vanda,
  },
  {
    name: "Build Bright University",
    shortName: "BBU",
    logo: bbu,
  },
  {
    name: "Acleda University of Business",
    shortName: "AUB",
    logo: aub,
  },
  {
    name: "Paññāsāstra University of Cambodia",
    shortName: "PUC",
    logo: panhasas,
  },
  {
    name: "Institute of Finance and Accounting",
    shortName: "IFA",
    logo: ifa,
  },
  {
    name: "Center for Accounting & Commerce",
    shortName: "CaC",
    logo: cac,
  },
];

const Marque = () => {
  return (
    <section id="partners" data-aos="fade-up" className="mt-16 font-['Poppins',sans-serif] sm:mt-20 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="border-l-4 border-[#0b1a6e] dark:border-[#03A9f4] pl-5 text-3xl font-semibold leading-tight text-[#0b1a6e] dark:text-sky-300 transition-colors duration-200 hover:text-[#16257f] dark:hover:text-sky-200 sm:text-4xl">
          Recognized Training Organizations
        </h3>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-9">
          KICPAA partners with leading universities and training institutes across Cambodia to deliver quality ATQ tuition, classroom preparation, and academic mentorship.
        </p>
      </div>

      {/* Infinite Scrolling Marquee Container */}
      <div className="mx-auto mt-8 max-w-7xl overflow-hidden rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/70 dark:bg-slate-900/80 py-6 shadow-xs backdrop-blur-xs sm:py-8 transition-colors">
        <div className="marquee-viewport relative overflow-hidden">
          {/* Left Edge Fade Mask */}
          <div
            className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-16 bg-gradient-to-r from-white dark:from-slate-900 via-white/80 dark:via-slate-900/80 to-transparent sm:w-28"
            aria-hidden="true"
          />

          {/* Right Edge Fade Mask */}
          <div
            className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-16 bg-gradient-to-l from-white dark:from-slate-900 via-white/80 dark:via-slate-900/80 to-transparent sm:w-28"
            aria-hidden="true"
          />

          {/* Continuous Animated Track */}
          <div className="marquee-track flex items-center">
            {[0, 1].map((group) => (
              <div
                key={group}
                className="flex shrink-0 gap-5 px-5 sm:gap-6 sm:px-6"
                aria-hidden={group === 1}
              >
                {organizations.map((org) => (
                  <div
                    key={org.shortName}
                    className="group flex h-28 w-52 shrink-0 flex-col items-center justify-center rounded-2xl border border-slate-200/80 dark:border-slate-700/80 bg-white dark:bg-slate-800 px-4 py-3 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-[#03A9f4] hover:shadow-lg dark:hover:shadow-sky-500/10 sm:h-32 sm:w-60 sm:px-5 sm:py-4"
                  >
                    <img
                      src={org.logo}
                      alt={group === 1 ? "" : org.name}
                      className="h-12 w-auto max-w-[85%] object-contain transition-transform duration-300 group-hover:scale-105 sm:h-14"
                      loading="lazy"
                    />
                    <span className="mt-2 line-clamp-1 text-center text-xs font-semibold text-slate-600 dark:text-slate-200 transition-colors group-hover:text-[#0b1a6e] dark:group-hover:text-sky-300">
                      {org.name}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Info Strip */}
    </section>
  );
};

export default Marque;
