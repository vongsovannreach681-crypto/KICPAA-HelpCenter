import React from "react";
import AcClass from "../../assets/images/image.png";
import Ciri from "./Ciri";
import MethodStudy from "./MethodStudy";
import LearningHub from "./LearningHub";
import Marque from "./Marque";
import AdmissionFees from "./AdmissionFees";
import InternshipOpportunities from "./InternshipOpportunities";
import {
  FaChalkboardTeacher,
  FaLanguage,
  FaSwatchbook,
} from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";

const ATQprogram = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: FaChalkboardTeacher,
      title: t("atqProgram.features.f1Title", "Study online anytime anywhere"),
      desc: t(
        "atqProgram.features.f1Desc",
        "Access your lessons from any device, at your own pace."
      ),
      gradient: "from-blue-500 to-indigo-600",
      glow: "group-hover:shadow-blue-500/30",
    },
    {
      icon: FaLanguage,
      title: t("atqProgram.features.f2Title", "Khmer or English available"),
      desc: t(
        "atqProgram.features.f2Desc",
        "Real professionals guide you through every course."
      ),
      gradient: "from-emerald-500 to-teal-600",
      glow: "group-hover:shadow-emerald-500/30",
    },
    {
      icon: FaSwatchbook,
      title: t(
        "atqProgram.features.f3Title",
        "ATQ learning resources and tests"
      ),
      desc: t(
        "atqProgram.features.f3Desc",
        "Show your skills with certificates you can share."
      ),
      gradient: "from-amber-500 to-orange-600",
      glow: "group-hover:shadow-amber-500/30",
    },
  ];

  return (
    <section
      id="about-atq"
      className="bg-linear-to-br from-sky-50 via-white to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 transition-colors"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div
          className="group relative mx-auto w-full max-w-xl"
          data-aos="fade-right"
        >
          <div>
            <img
              src={AcClass}
              alt="Accounting class"
              className="block h-auto w-full rounded-2xl shadow-xl shadow-[#0b1a6e]/10 dark:shadow-sky-500/5 ring-1 ring-[#0b1a6e]/10 dark:ring-slate-700 transition duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-[1.01] group-hover:shadow-2xl"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 sm:gap-6">
            {features.map(({ icon: Icon, title, gradient }, index) => (
              <div
                key={title}
                data-aos="fade-left"
                data-aos-delay={index * 120}
                data-aos-duration="650"
                className="group flex w-full items-center"
              >
                {/* Icon circle */}
                <div
                  className={`relative z-10 shrink-0 rounded-full bg-linear-to-br ${gradient} p-3 text-white shadow-lg ring-2 ring-white transition-transform duration-300 group-hover:scale-110 sm:p-4 sm:ring-4 dark:ring-slate-900`}
                >
                  <Icon className="text-2xl sm:text-3xl lg:text-4xl" />
                </div>

                {/* Text pill */}
                <div
                  className={`-ml-6 min-w-0 flex-1 rounded-xl bg-linear-to-r ${gradient} py-2.5 pl-9 pr-4 text-white shadow-md transition-all duration-300 group-hover:translate-x-1 group-hover:brightness-110 sm:-ml-8 sm:py-3 sm:pl-12 sm:pr-6 lg:flex-none`}
                >
                  <h3 className="text-base font-semibold leading-snug sm:text-lg lg:text-xl">
                    {title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div id="curriculum" className="mt-15 container scroll-mt-24">
        <h3
          data-aos="fade-up"
          className="mt-15 border-l-4 border-[#0b1a6e] dark:border-[#03A9f4] pl-5 text-3xl font-semibold leading-tight text-[#0b1a6e] dark:text-sky-300 transition-colors duration-200 hover:text-[#16257f] dark:hover:text-sky-200 sm:text-4xl"
        >
          {t("atqProgram.curriculumTitle", "Curriculum")}
        </h3>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-9 pt-5"
        >
          {t(
            "atqProgram.curriculumDesc",
            "ATQ Program is divided into 2 levels: principal level and technical level. Each level is further divided into 2 parts."
          )}
        </p>
        <div className="mt-10"></div>

        <Ciri />
        <MethodStudy />
        <LearningHub />
        <Marque />
        <AdmissionFees />
        <InternshipOpportunities />
      </div>
    </section>
  );
};

export default ATQprogram;
