import React, { useState } from "react";
import { FaTableCells } from "react-icons/fa6";
import aub from "../../assets/marquee/aub.png";
import asiaEurope from "../../assets/marquee/AsiaEurpe.png";
import bbu from "../../assets/marquee/bbu.png";
import cac from "../../assets/marquee/CaC.png";
import camed from "../../assets/marquee/Camed.png";
import dfc from "../../assets/marquee/DFC.png";
import ifa from "../../assets/marquee/IFA.png";
import lpbs from "../../assets/marquee/LPBS.png";
import mekong from "../../assets/marquee/Mekong.png";
import panhasas from "../../assets/marquee/Panhasas.png";
import paragon from "../../assets/marquee/Paragon.png";
import pollo from "../../assets/marquee/Pollo.png";
import samdech from "../../assets/marquee/Samdech.png";
import spnvs from "../../assets/marquee/spnvs.png";
import tbongKmum from "../../assets/marquee/TbongKmum.png";
import vanda from "../../assets/marquee/Vannda.png";
import uef from "../../assets/marquee/UEF.png";
import western from "../../assets/marquee/Western.png";
const organizations = [
  {
    name: "Acleda University of Business",
    shortName: "AUB",
    logo: aub,
    url: "https://www.aub.edu.kh/tc/eng/",
  },
  {
    name: "Build Bright University",
    shortName: "BBU",
    logo: bbu,
    url: "https://bbu.edu.kh/",
  },
  {
    name: "Cambodia Accounting Club",
    shortName: "CaC",
    logo: cac,
    url: "https://cac-center.edu.kh/",
  },
  {
    name: "CamEd Business School",
    shortName: "CamEd",
    logo: camed,
    url: "https://cam-ed.edu.kh/",
  },
  {
    name: "Institute of Finance and Accounting",
    shortName: "IFA",
    logo: ifa,
    url: "https://www.ifa.edu.kh/",
  },
  {
    name: "Paññāsāstra University of Cambodia",
    shortName: "PUC",
    logo: panhasas,
    url: "https://www.puc.edu.kh/",
  },
  {
    name: "University of Economics and Finance",
    shortName: "UEF",
    logo: uef,
    url: "https://uef.edu.kh/",
  },
  {
    name: "Vanda University",
    shortName: "Vanda",
    logo: vanda,
    url: "https://vanda.edu.kh/",
  },
  {
    name: "Apollo Business School",
    shortName: "Apollo",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXBsv-KScy68h3AKclwH5gl_00JR9kPVsd187cva_iJ-kmBsdacrEl5pG3&s=10",
  },
  {
    name: "LA PAIX Business School",
    shortName: "LPBS",
    logo: lpbs,
  },
  {
    name: "Royal University of Law and Economics",
    shortName: "RULE",
    logo: "https://nica.team/wp-content/uploads/2020/02/225px-Logo_of_Rule_Cambodia-5.png",
    url:"https://www.rule.edu.kh/"
  },
  {
    name: "Cambodian Mekong University",
    shortName: "Mekong",
    logo: mekong,
    url:"https://mekong.edu.kh/"
  },
  {
    name: "DFC Learning",
    shortName: "DFC",
    logo: dfc,
    url:"https://dfc.com.kh/"
  },
  {
    name: "Paragon International University",
    shortName: "Paragon",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6DCSqS7VN35gczvR2jW0U0XvpXUIp7YeTJIIvWGwncCCtazAgJm1OLRE&s=10",
    url: "https://www.paragoniu.edu.kh/",
  },
  {
    name: "Samdech Preah Mahasangharajah Bour Kry University",
    shortName: "Samdech",
    logo: samdech,
    url:"https://www.sbku.edu.kh/"
  },
  {
    name: "University of Heng Samrin Thbongkhmum ",
    shortName: "Tbong Khmum",
    logo: tbongKmum,
    url:"https://uhst.edu.kh/"
  },
  {
    name: "Asia Europe University",
    shortName: "Asia Euro",
    logo: asiaEurope,
    url:"https://www.aeu.edu.kh/kh"
  },
  {
    name: "Western University",
    shortName: "Western",
    logo: "https://westernuniversity.edu.kh/assets/img/seo-og-image.png",
    url:"https://westernuniversity.edu.kh/kh"
  },
];

const Marque = () => {
  const [viewMode, setViewMode] = useState("marquee");

  return (
    <section id="partners" data-aos="fade-up" className="mt-16 font-['Poppins',sans-serif] sm:mt-20 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="border-l-4 border-[#0b1a6e] dark:border-[#03A9f4] pl-5 text-3xl font-semibold leading-tight text-[#0b1a6e] dark:text-sky-300 transition-colors duration-200 hover:text-[#16257f] dark:hover:text-sky-200 sm:text-4xl">
          Training Organization
        </h3>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-9">
          KICPAA partners with leading universities and training institutes across Cambodia to deliver quality ATQ tuition, classroom preparation, and academic mentorship.
        </p>
      </div>

      <div className="mx-auto mt-6 flex max-w-7xl justify-center" role="group" aria-label="Organization display options">
        <div className="inline-flex rounded-xl border border-slate-200 bg-white p-1 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <button
            type="button"
            onClick={() => setViewMode("marquee")}
            aria-pressed={viewMode === "marquee"}
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
              viewMode === "marquee"
                ? "bg-[#0b1a6e] text-white dark:bg-sky-500"
                : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
            }`}
          >
            Marquee
          </button>
          <button
            type="button"
            onClick={() => setViewMode("grid")}
            aria-pressed={viewMode === "grid"}
            className={`inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
              viewMode === "grid"
                ? "bg-[#0b1a6e] text-white dark:bg-sky-500"
                : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
            }`}
          >
            <FaTableCells aria-hidden="true" />
            Grid
          </button>
        </div>
      </div>

      {viewMode === "marquee" ? (
        <div className="mx-auto mt-4 max-w-7xl overflow-hidden rounded-3xl border border-slate-200/90 bg-white/70 py-6 shadow-xs backdrop-blur-xs transition-colors dark:border-slate-800 dark:bg-slate-900/80 sm:py-8">
          <div className="marquee-viewport relative overflow-hidden">
            <div
              className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-16 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-slate-900 dark:via-slate-900/80 sm:w-28"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-16 bg-gradient-to-l from-white via-white/80 to-transparent dark:from-slate-900 dark:via-slate-900/80 sm:w-28"
              aria-hidden="true"
            />
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
                      className={`group ${org.url ? "cursor-pointer" : ""} flex h-28 w-52 shrink-0 flex-col items-center justify-center rounded-2xl border border-slate-200/80 bg-white px-4 py-3 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-[#03A9f4] hover:shadow-lg dark:border-slate-700/80 dark:bg-slate-800 dark:hover:shadow-sky-500/10 sm:h-32 sm:w-60 sm:px-5 sm:py-4`}
                    >
                      {org.url ? (
                        <a href={org.url} target="_blank" rel="noreferrer">
                          <img
                            src={org.logo}
                            alt={group === 1 ? "" : org.name}
                            className="h-16 w-auto max-w-[90%] object-contain transition-transform duration-300 group-hover:scale-105 sm:h-[4.5rem]"
                            loading="lazy"
                          />
                        </a>
                      ) : (
                        <img
                          src={org.logo}
                          alt={group === 1 ? "" : org.name}
                          className="h-16 w-auto max-w-[90%] object-contain transition-transform duration-300 group-hover:scale-105 sm:h-[4.5rem]"
                          loading="lazy"
                        />
                      )}
                      <span className="mt-2 line-clamp-1 text-center text-xs font-semibold text-slate-600 transition-colors group-hover:text-[#0b1a6e] dark:text-slate-200 dark:group-hover:text-sky-300">
                        {org.name}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="mx-auto mt-4 grid max-w-7xl grid-cols-1 gap-4 rounded-3xl border border-slate-200/90 bg-white/70 p-5 shadow-xs backdrop-blur-xs transition-colors dark:border-slate-800 dark:bg-slate-900/80 sm:grid-cols-2 sm:p-6 md:grid-cols-3 lg:grid-cols-4">
          {organizations.map((org) => (
            <div
              key={org.shortName}
              className={`group ${org.url ? "cursor-pointer" : ""} flex min-h-36 flex-col items-center justify-center rounded-2xl border border-slate-200/80 bg-white px-4 py-4 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-[#03A9f4] hover:shadow-lg dark:border-slate-700/80 dark:bg-slate-800 dark:hover:shadow-sky-500/10`}
            >
              {org.url ? (
                <a href={org.url} target="_blank" rel="noreferrer">
                  <img
                    src={org.logo}
                    alt={org.name}
                    className="h-16 w-auto max-w-[90%] object-contain transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </a>
              ) : (
                <img
                  src={org.logo}
                  alt={org.name}
                  className="h-16 w-auto max-w-[90%] object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              )}
              <span className="mt-3 text-center text-xs font-semibold text-slate-600 transition-colors group-hover:text-[#0b1a6e] dark:text-slate-200 dark:group-hover:text-sky-300">
                {org.name}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Footer Info Strip */}
    </section>
  );
};

export default Marque;
