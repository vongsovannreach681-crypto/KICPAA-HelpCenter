import React, { useState } from "react";
import {
  FaBookOpen,
  FaCalculator,
  FaCheck,
  FaChevronDown,
} from "react-icons/fa6";
import { examSessionsByMonth } from "../../data/examSessions";
import { useLanguage } from "../../context/LanguageContext";
import {
  getPrinciplesBooks,
  getTechnicianBooks,
} from "../../data/bookExploreData";

const ExamMonthSelect = ({ subject }) => {
  const [selectedMonth, setSelectedMonth] = useState("");
  const { t, isKhmer } = useLanguage();
  const session = selectedMonth
    ? examSessionsByMonth[selectedMonth].find(
        (monthSession) => monthSession.subject === subject,
      )
    : null;
  const months = Object.entries(examSessionsByMonth).filter(([, sessions]) =>
    sessions.some((monthSession) => monthSession.subject === subject),
  );
  // for select monthly exam
  return (
    <div className="mt-6">
      <label
        htmlFor={`exam-month-${subject}`}
        className="mb-2 block text-sm font-bold text-[#0b1a6e] dark:text-sky-300"
      >
        {t("syllabus.examMonthLabel", "Exam month")}
      </label>
      <select
        id={`exam-month-${subject}`}
        value={selectedMonth}
        onChange={(event) => setSelectedMonth(event.target.value)}
        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#03A9f4] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
      >
        <option value="" disabled>
          {t("syllabus.selectMonth", "Select a month")}
        </option>
        {months.map(([month]) => (
          <option key={month} value={month}>
            {t(`months.${month}`, month)}
          </option>
        ))}
      </select>
      {session && (
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700 dark:text-slate-300">
          <li>
            <span className="font-semibold">
              {t("syllabus.examSchedule", "Exam schedule:")}
            </span>{" "}
            {session.dates.join(isKhmer ? " និង " : " and ")}
          </li>
          <li>
            <span className="font-semibold">
              {t("syllabus.timeLabel", "Time:")}
            </span>{" "}
            {session.time}
          </li>
          <li>
            <span className="font-semibold">
              {t("syllabus.venueLabel", "Venue:")}
            </span>{" "}
            {session.venue}
          </li>
          <li>
            <span className="font-semibold">
              {t("syllabus.regClosesLabel", "Registration closes:")}
            </span>{" "}
            {session.registrationCloses}
          </li>
        </ul>
      )}
    </div>
  );
};

const BooksExplore = () => {
  const [activeLevel, setActiveLevel] = useState("principles");
  const { t, isKhmer } = useLanguage();

  const TQbook = getPrinciplesBooks(isKhmer);
  const TQbookTechnical = getTechnicianBooks(isKhmer);

  return (
    <section
      aria-label={isKhmer ? "មុខវិជ្ជា ATQ" : "ATQ subject courses"}
      className="mt-20 scroll-mt-24"
      id="books-explore"
    >
      <div
        data-aos="fade-up"
        className="mb-12 flex flex-wrap justify-center gap-2 sm:gap-4"
        role="group"
        aria-label={
          isKhmer
            ? "ជ្រើសរើសកម្រិតសិក្សា"
            : "Filter courses by qualification level"
        }
      >
        {[
          {
            id: "principles",
            label: isKhmer ? "កម្រិតមូលដ្ឋានគ្រិះ" : "Principles Level",
            count: TQbook.length,
            icon: FaBookOpen,
          },
          {
            id: "technician",
            label: isKhmer ? "កម្រិតបច្ចេកទេស" : "Technician Level",
            count: TQbookTechnical.length,
            icon: FaCalculator,
          },
        ].map((level) => {
          const isActive = activeLevel === level.id;
          const LevelIcon = level.icon;

          return (
            <button
              key={level.id}
              id={`${level.id}-tab`}
              type="button"
              aria-pressed={isActive}
              aria-controls={`${level.id}-panel`}
              onClick={() => setActiveLevel(level.id)}
              className={`group relative min-w-[140px] px-4 py-3 text-center transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#03A9f4] sm:min-w-60 sm:px-6 sm:py-4 ${
                isActive
                  ? "text-[#0b1a6e] dark:text-[#03A9f4]"
                  : "text-slate-500 hover:text-[#0b1a6e] dark:text-slate-400 dark:hover:text-[#03A9f4]"
              }`}
            >
              <span
                aria-hidden="true"
                className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${
                  isActive
                    ? "bg-[#0b1a6e] text-white dark:bg-[#03A9f4] dark:text-slate-950"
                    : "bg-slate-100 text-slate-500 group-hover:bg-sky-50 group-hover:text-[#0b1a6e] dark:bg-slate-800 dark:text-slate-400 dark:group-hover:bg-slate-700 dark:group-hover:text-[#03A9f4]"
                }`}
              >
                <LevelIcon aria-hidden="true" className="text-lg" />
              </span>
              <span className="block text-base font-bold sm:text-lg">
                {level.label}
              </span>
              <span className="mt-1 block text-xs text-slate-500 dark:text-slate-400">
                {level.count} {isKhmer ? "មុខវិជ្ជា" : "courses"}
              </span>
              <span
                aria-hidden="true"
                className={`absolute inset-x-6 bottom-0 h-0.5 rounded-full transition-colors ${
                  isActive
                    ? "bg-[#0b1a6e] dark:bg-[#03A9f4]"
                    : "bg-transparent"
                }`}
              />
            </button>
          );
        })}
      </div>

      {activeLevel === "principles" && (
        <div id="principles-panel">
          <div className="max-w-6xl" data-aos="fade-up">
            <h2
              id="books-explore-title"
              className="text-2xl font-bold tracking-tight text-[#0b1a6e] sm:text-3xl dark:text-sky-400"
            >
              {isKhmer
                ? "កម្រិតមូលដ្ឋានគ្រិះ (Principles Level)"
                : "Principles Level"}
            </h2>
            <p className="mt-3 max-w-5xl font-serif text-base italic leading-7 text-slate-700 sm:text-lg dark:text-slate-300">
              {t(
                "syllabus.principlesDesc",
                "The Principles Level provides a framework for learning which contains core skills in processing business transactions to enable students to become effective members of an accounting support team.",
              )}
            </p>
          </div>

          <div className="mt-8 border-b border-slate-300 dark:border-slate-800">
            {TQbook.map((book) => (
              <details
                key={book.id}
                data-aos="fade-up"
                className="group border-t border-slate-300 dark:border-slate-800"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 text-[#0b1a6e] outline-none transition-colors hover:text-[#03A9f4] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#03A9f4] sm:py-7 [&::-webkit-details-marker]:hidden dark:text-slate-100 dark:hover:text-[#03A9f4]">
                  <span className="text-lg font-bold sm:text-2xl">
                    {book.name}
                  </span>
                  <FaChevronDown
                    className="shrink-0 text-sm text-slate-500 transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none dark:text-slate-400"
                    aria-hidden="true"
                  />
                </summary>

                <div className="grid gap-6 pb-7 text-slate-600 md:grid-cols-2 md:gap-8 dark:text-slate-300">
                  <div>
                    <p className="text-sm leading-7 sm:text-base">{book.des}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#0b1a6e] dark:text-sky-300">
                      {isKhmer
                        ? "នៅពេលបញ្ចប់មុខវិជ្ជានេះ បេក្ខជននឹងទទួលបានសមត្ថភាពគ្រប់គ្រាន់ក្នុងការ៖"
                        : "On completion of this module, candidates will reach a competency sufficient to be able to:"}
                    </h3>
                    <ul className="mt-3 space-y-3">
                      {book.list.map((outcome, index) => (
                        <li key={`${book.id}-${index}`} className="flex gap-3">
                          <span
                            aria-hidden="true"
                            className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-50 text-[11px] font-bold text-[#03A9f4] dark:bg-sky-950/60 dark:text-[#03A9f4]"
                          >
                            <FaCheck aria-hidden="true" />
                          </span>
                          <span className="text-sm leading-6 text-slate-700 sm:text-base dark:text-slate-300">
                            {outcome}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <ExamMonthSelect subject={`TQ${book.id}`} />
                  </div>
                </div>

                {book.syllabusCoverage?.length > 0 && (
                  <div className="mb-8 overflow-x-auto rounded-sm border border-sky-200 dark:border-slate-800">
                    <table className="w-full min-w-[560px] border-collapse text-left text-sm sm:text-base">
                      <caption className="sr-only">
                        {book.name}{" "}
                        {isKhmer
                          ? "វិសាលភាពនៃកម្មវិធីសិក្សា"
                          : "syllabus coverage"}
                        {book.syllabusCoverage[0]?.weight !== undefined &&
                          (isKhmer
                            ? " និងទម្ងន់ពិន្ទុ"
                            : " and assessment weights")}
                      </caption>
                      <thead className="bg-sky-100 text-slate-950 dark:bg-slate-800 dark:text-slate-100">
                        <tr>
                          <th
                            scope="col"
                            className="w-16 border border-sky-200 px-4 py-3 dark:border-slate-800"
                          />
                          <th
                            scope="col"
                            className="border border-sky-200 px-5 py-3 font-bold uppercase tracking-wide dark:border-slate-800"
                          >
                            {isKhmer
                              ? "វិសាលភាពនៃកម្មវិធីសិក្សា"
                              : "Syllabus coverage"}
                          </th>
                          {book.syllabusCoverage[0]?.weight !== undefined && (
                            <th
                              scope="col"
                              className="w-36 border border-sky-200 px-4 py-3 text-center font-bold uppercase tracking-wide dark:border-slate-800"
                            >
                              {isKhmer ? "ទម្ងន់ពិន្ទុ (%)" : "Weight (%)"}
                            </th>
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {book.syllabusCoverage.map((row) => (
                          <tr
                            key={row.code}
                            className="bg-white dark:bg-slate-900"
                          >
                            <th
                              scope="row"
                              className="border border-sky-200 px-4 py-2 text-center font-medium text-[#0b4b88] dark:border-slate-800 dark:text-sky-400"
                            >
                              ({row.code})
                            </th>
                            <td className="border border-sky-200 px-5 py-2 text-slate-800 dark:border-slate-800 dark:text-slate-200">
                              {row.topic}
                            </td>
                            {row.weight !== undefined && (
                              <td className="border border-sky-200 px-4 py-2 text-center text-slate-800 dark:border-slate-800 dark:text-slate-200">
                                {row.weight}
                              </td>
                            )}
                          </tr>
                        ))}
                        {book.syllabusCoverage[0]?.weight !== undefined && (
                          <tr className="bg-sky-100 font-bold text-slate-950 dark:bg-slate-800 dark:text-slate-100">
                            <th
                              scope="row"
                              className="border border-sky-200 px-4 py-2 dark:border-slate-800"
                            />
                            <td className="border border-sky-200 px-5 py-2 uppercase dark:border-slate-800">
                              {isKhmer ? "សរុប" : "Total"}
                            </td>
                            <td className="border border-sky-200 px-4 py-2 text-center dark:border-slate-800">
                              {book.syllabusCoverage.reduce(
                                (total, row) => total + row.weight,
                                0,
                              )}
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                )}
              </details>
            ))}
          </div>
        </div>
      )}

      {activeLevel === "technician" && (
        <div id="technician-panel">
          <section
            aria-labelledby="technician-level-title"
            className="scroll-mt-24"
            id="technician-level"
          >
            <div className="max-w-6xl" data-aos="fade-up">
              <h2
                id="technician-level-title"
                className="text-2xl font-bold tracking-tight text-[#0b1a6e] sm:text-3xl dark:text-sky-400"
              >
                {isKhmer
                  ? "កម្រិតបច្ចេកទេស (Technician Level)"
                  : "Technician Level"}
              </h2>
              <p className="mt-3 max-w-5xl font-serif text-base italic leading-7 text-slate-700 sm:text-lg dark:text-slate-300">
                {t(
                  "syllabus.technicianDesc",
                  "The Technician Level modules build on the studied undertaken in the previous level and develop skills with a particular focus on application of knowledge, using realistic scenarios.",
                )}
              </p>
            </div>

            <div className="mt-8 border-b border-slate-300 dark:border-slate-800">
              {TQbookTechnical.map((book) => (
                <details
                  key={book.id}
                  data-aos="fade-up"
                  className="group border-t border-slate-300 dark:border-slate-800"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 text-[#0b1a6e] outline-none transition-colors hover:text-[#03A9f4] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#03A9f4] sm:py-7 [&::-webkit-details-marker]:hidden dark:text-slate-100 dark:hover:text-[#03A9f4]">
                    <span className="text-lg font-bold sm:text-2xl">
                      {book.name}
                    </span>
                    <FaChevronDown
                      className="shrink-0 text-sm text-slate-500 transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none dark:text-slate-400"
                      aria-hidden="true"
                    />
                  </summary>

                  <div className="grid gap-6 pb-7 text-slate-600 md:grid-cols-2 md:gap-8 dark:text-slate-300">
                    <p className="text-sm leading-7 sm:text-base">{book.des}</p>

                    {book.list.length > 0 && (
                      <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-[#0b1a6e] dark:text-sky-300">
                          {isKhmer
                            ? "នៅពេលបញ្ចប់មុខវិជ្ជានេះ បេក្ខជននឹងទទួលបានសមត្ថភាពគ្រប់គ្រាន់ក្នុងការ៖"
                            : "On completion of this module, candidates will reach a competency sufficient to be able to:"}
                        </h3>
                        <ul className="mt-3 space-y-3">
                          {book.list.map((outcome, index) => (
                            <li
                              key={`${book.name}-${index}`}
                              className="flex gap-3"
                            >
                              <span
                                aria-hidden="true"
                                className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-50 text-[11px] font-bold text-[#03A9f4] dark:bg-sky-950/60 dark:text-[#03A9f4]"
                              >
                                <FaCheck aria-hidden="true" />
                              </span>
                              <span className="text-sm leading-6 text-slate-700 sm:text-base dark:text-slate-300">
                                {outcome}
                              </span>
                            </li>
                          ))}
                        </ul>
                        <ExamMonthSelect subject={`TQ${book.id}`} />
                      </div>
                    )}
                  </div>

                  {book.syllabusCoverage?.length > 0 && (
                    <div className="mb-8 overflow-x-auto rounded-sm border border-sky-200 dark:border-slate-800">
                      <table className="w-full min-w-[560px] border-collapse text-left text-sm sm:text-base">
                        <caption className="sr-only">
                          {book.name}{" "}
                          {isKhmer
                            ? "វិសាលភាពនៃកម្មវិធីសិក្សា"
                            : "syllabus coverage"}
                          {book.syllabusCoverage[0]?.weight !== undefined &&
                            (isKhmer
                              ? " និងទម្ងន់ពិន្ទុ"
                              : " and assessment weights")}
                        </caption>
                        <thead className="bg-sky-100 text-slate-950 dark:bg-slate-800 dark:text-slate-100">
                          <tr>
                            <th
                              scope="col"
                              className="w-16 border border-sky-200 px-4 py-3 dark:border-slate-800"
                            />
                            <th
                              scope="col"
                              className="border border-sky-200 px-5 py-3 font-bold uppercase tracking-wide dark:border-slate-800"
                            >
                              {isKhmer
                                ? "វិសាលភាពនៃកម្មវិធីសិក្សា"
                                : "Syllabus coverage"}
                            </th>
                            {book.syllabusCoverage[0]?.weight !== undefined && (
                              <th
                                scope="col"
                                className="w-36 border border-sky-200 px-4 py-3 text-center font-bold uppercase tracking-wide dark:border-slate-800"
                              >
                                {isKhmer ? "ទម្ងន់ពិន្ទុ (%)" : "Weight (%)"}
                              </th>
                            )}
                          </tr>
                        </thead>
                        <tbody>
                          {book.syllabusCoverage.map((row) => (
                            <tr
                              key={row.code}
                              className="bg-white dark:bg-slate-900"
                            >
                              <th
                                scope="row"
                                className="border border-sky-200 px-4 py-2 text-center font-medium text-[#0b4b88] dark:border-slate-800 dark:text-sky-400"
                              >
                                ({row.code})
                              </th>
                              <td className="border border-sky-200 px-5 py-2 text-slate-800 dark:border-slate-800 dark:text-slate-200">
                                {row.topic}
                              </td>
                              {row.weight !== undefined && (
                                <td className="border border-sky-200 px-4 py-2 text-center text-slate-800 dark:border-slate-800 dark:text-slate-200">
                                  {row.weight}
                                </td>
                              )}
                            </tr>
                          ))}
                          {book.syllabusCoverage[0]?.weight !== undefined && (
                            <tr className="bg-sky-100 font-bold text-slate-950 dark:bg-slate-800 dark:text-slate-100">
                              <th
                                scope="row"
                                className="border border-sky-200 px-4 py-2 dark:border-slate-800"
                              />
                              <td className="border border-sky-200 px-5 py-2 uppercase dark:border-slate-800">
                                {isKhmer ? "សរុប" : "Total"}
                              </td>
                              <td className="border border-sky-200 px-4 py-2 text-center dark:border-slate-800">
                                {book.syllabusCoverage.reduce(
                                  (total, row) => total + row.weight,
                                  0,
                                )}
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  )}
                </details>
              ))}
            </div>
          </section>
        </div>
      )}
    </section>
  );
};

export default BooksExplore;
