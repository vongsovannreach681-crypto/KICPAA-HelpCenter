import React from "react";
import {
  FaArrowRight,
  FaBook,
  FaCircleQuestion,
  FaFilePen,
  FaListCheck,
  FaRegCalendarDays,
} from "react-icons/fa6";

const HomeContent = () => {
  const items = [
    {
      icon: FaBook,
      color: "bg-[#29b6e8]",
      glow: "group-hover:shadow-[#29b6e8]/40",
      title: "ATQ Program",
      text: "Learn more about the Accounting Technician Qualification program, its structure, and requirements.",
    },
    {
      icon: FaFilePen,
      color: "bg-[#00cdb6]",
      glow: "group-hover:shadow-[#00cdb6]/40",
      title: "ATQ Examination",
      text: "Find information about the ATQ examination, including format, duration, and preparation resources.",
    },
    {
      icon: FaListCheck,
      color: "bg-[#5b72ee]",
      glow: "group-hover:shadow-[#5b72ee]/40",
      title: "ATQ Subjects & Course Specification",
      text: "Explore the subjects covered in the ATQ program and access detailed course specifications for each subject.",
    },
    {
      icon: FaRegCalendarDays,
      color: "bg-[#f5a524]",
      glow: "group-hover:shadow-[#f5a524]/40",
      title: "Important Dates for ATQ Exam",
      text: "Stay updated with important dates related to the ATQ examination, including registration deadlines and exam schedules.",
    },
    {
      icon: FaCircleQuestion,
      color: "bg-[#f0527a]",
      glow: "group-hover:shadow-[#f0527a]/40",
      title: "Frequently Asked Questions",
      text: "Find answers to commonly asked questions about the ATQ program, examination, and related topics.",
    },
  ];

  return (
    <div className="mt-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          data-aos="fade-right"
          className="w-fit rounded-bottom-circle border-b-3 border-blue-700 dark:border-[#03A9f4] pb-2 text-2xl font-semibold text-blue-900 dark:text-sky-300 transition-colors"
        >
          Get help on the following topics
        </h2>
      </div>

      <section className="px-4 pb-16 pt-14 font-['Poppins',sans-serif]">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-6">
          {items.map((item, i) => {
            const ItemIcon = item.icon;
            return (
            <article
              key={item.title}
              id={item.title === "ATQ Examination" ? "atq-exam" : undefined}
              data-aos="fade-up"
              data-aos-delay={(i % 3) * 150}
              className={`group relative flex min-h-[290px] cursor-pointer flex-col items-center rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 px-8 pb-8 pt-14 text-center scroll-mt-28
                transition-all duration-300 ease-out
                hover:shadow-xl hover:shadow-blue-900/10 dark:hover:shadow-sky-500/5
                motion-safe:hover:-translate-y-2
                lg:col-span-2 ${i === 3 ? "lg:col-start-2" : ""} ${
                  i === 4
                    ? "sm:col-span-2 sm:mx-auto sm:w-1/2 lg:col-span-2 lg:mx-0 lg:w-auto"
                    : ""
                }`}
            >
              {/* Icon badge: pops and tilts, with a soft colored glow */}
              <span
                className={`absolute -top-8 left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full text-2xl text-white
                  transition-all duration-300 ease-out
                  group-hover:shadow-lg ${item.glow} ${item.color}`}
              >
                <ItemIcon
                  className="transition-transform duration-300 ease-out motion-safe:group-hover:scale-125 motion-safe:group-hover:-rotate-12"
                  aria-hidden="true"
                />
              </span>

              <h2 className="text-[26px] font-medium leading-snug text-[#1e3a8a] dark:text-sky-200 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-[#03A9f4]">
                {item.title}
              </h2>
              <p className="mt-4 line-clamp-2 text-[17px] leading-8 text-[#6b625f] dark:text-slate-400">
                {item.text}
              </p>

              {/* mt-auto pins the link to the bottom so all cards line up */}
              <button className="mt-auto cursor-pointer pt-5 text-blue-900 dark:text-sky-400 transition-colors duration-300 hover:text-blue-500 group-hover:text-blue-600 dark:group-hover:text-sky-300">
                Learn More{" "}
                <FaArrowRight
                  className="inline-block transition-transform duration-300 ease-out motion-safe:group-hover:translate-x-1.5"
                  aria-hidden="true"
                />
              </button>
            </article>
            );
          })}
        </div>
      </section>

      {/* visit kicpaa */}
      <section
        id="visit-office"
        data-aos="fade-up"
        className="mx-auto mb-20 max-w-7xl rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm dark:shadow-slate-950/40 px-4 py-8 sm:px-6 lg:px-8 transition-colors scroll-mt-24"
      >
        <div className="grid items-center gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="text-center lg:text-left">
            <h2 className="inline-block border-b-3 border-blue-700 dark:border-[#03A9f4] pb-2 text-2xl font-semibold text-blue-900 dark:text-white lg:text-3xl transition-colors">
              Want to visit KICPAA office?
            </h2>

            <p className="mt-4 text-base text-gray-600 dark:text-slate-300">
              Schedule an in-person visit at our office or online.
            </p>

            <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSe3-KoESsq9hyve0Zv-GSehYXkF6c4bz-x8MmlXzI-LSGMclA/viewform" className="mt-6 inline-flex items-center gap-2 rounded-xl cursor-pointer bg-[#03A9f4] px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-800">
              <FaArrowRight aria-hidden="true" />{" "}
                 Schedule a visit
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white dark:bg-slate-800 p-2 shadow-sm ring-1 ring-blue-100 dark:ring-slate-700">
            <iframe
              className="h-[300px] w-full rounded-xl border-0 sm:h-[350px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.8237715756263!2d104.90858577570972!3d11.564487944162416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951435673bdfb%3A0x1885effb4eba36a4!2sKampuchea%20Institute%20of%20CPAs%20and%20Auditors!5e0!3m2!1skm!2skh!4v1790927217183!5m2!1skm!2skh"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="KICPAA location map"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeContent;
