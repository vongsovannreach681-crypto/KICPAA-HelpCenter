import React, { useState } from "react";
import {
  MONTHS,
  MONTH_ABBREVIATIONS,
  examSessionsByMonth,
} from "../../data/examSessions";
import { useLanguage } from "../../context/LanguageContext";

// Flatten the month-based data so the schedule can be filtered by one month.
const examSessions = MONTHS.flatMap((month) =>
  examSessionsByMonth[month].map((session) => ({ ...session, month })),
);

const availableMonths = MONTHS.filter(
  (month) => examSessionsByMonth[month].length > 0,
);

const HIGHLIGHT_CLASS =
  "bg-amber-200 text-[#0c1a6e] dark:bg-amber-400 dark:text-slate-900";

// Convert schedule dates such as "Tue, 27-Jan-2026" to local Date objects.
const parseExamDate = (date) => {
  const [day, monthAbbreviation, year] = date.split(", ")[1].split("-");
  const monthIndex = MONTH_ABBREVIATIONS.indexOf(monthAbbreviation);
  return new Date(Number(year), monthIndex, Number(day));
};

const isSameDay = (a, b) => a.getTime() === b.getTime();

const getToday = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
};

// Start with the first month that still has an upcoming exam.
const getDefaultExamMonth = () => {
  const today = getToday();
  const upcomingMonth = availableMonths.find((month) =>
    examSessionsByMonth[month].some((session) =>
      session.dates.some((date) => parseExamDate(date) >= today),
    ),
  );

  return upcomingMonth ?? availableMonths.at(-1) ?? MONTHS[0];
};

// Identify the first row of each repeated value so its cell can span the group.
const startsGroup = (sessions, index, property) =>
  index === 0 ||
  sessions[index - 1].month !== sessions[index].month ||
  sessions[index - 1][property] !== sessions[index][property];

// Count consecutive rows with the same value to calculate the cell row span.
const getGroupRowSpan = (sessions, index, property) => {
  let rowSpan = 1;
  while (
    index + rowSpan < sessions.length &&
    sessions[index + rowSpan].month === sessions[index].month &&
    sessions[index + rowSpan][property] === sessions[index][property]
  ) {
    rowSpan += 1;
  }
  return rowSpan;
};

const ExamSdech = () => {
  const [selectedMonth, setSelectedMonth] = useState(getDefaultExamMonth);
  const { t } = useLanguage();
  const today = getToday();
  const selectedSessions = examSessions.filter(
    (session) => session.month === selectedMonth,
  );

  const displaySelectedMonth = t(`months.${selectedMonth}`, selectedMonth);

  return (
    <section
      id="important-dates"
      className="bg-white px-4 py-12 font-['Poppins',sans-serif] dark:bg-slate-950 sm:px-6 sm:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <div data-aos="fade-up">
          <h2 className="text-2xl font-bold text-[#0c1a6e] dark:text-blue-200 sm:text-3xl">
            {t("exam.examInMonth", "ATQ exam in")} {displaySelectedMonth}
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base"
          >
            {t(
              "exam.chooseMonth",
              "Choose a month to view its ATQ exam schedule."
            )}
          </p>
        </div>

        {/* Remount the table on month changes to replay its entrance animation. */}
        <div
          key={selectedMonth}
          data-aos="zoom-in"
          data-aos-delay="150"
          className="exam-table-enter mt-8 overflow-x-auto rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
        >
          <table className="w-full min-w-[760px] border-collapse text-center">
            <thead>
              <tr className="bg-blue-950 dark:bg-sky-500 text-sm font-bold text-white sm:text-base">
                <th scope="col" className="border border-slate-500 px-3 py-2">
                  {t("exam.batch", "Batch")}
                </th>
                <th scope="col" className="border border-slate-500 px-3 py-2">
                  {t("exam.month", "Month")}
                </th>
                <th scope="col" className="border border-slate-500 px-3 py-2">
                  {t("exam.subject", "Subject")}
                </th>
                <th
                  scope="col"
                  colSpan={2}
                  className="border border-slate-500 px-3 py-2"
                >
                  {t("exam.date", "Date")}
                </th>
                <th scope="col" className="border border-slate-500 px-3 py-2">
                  {t("exam.time", "Time")}
                </th>
                <th scope="col" className="border border-slate-500 px-3 py-2">
                  {t("exam.venue", "Venue")}
                </th>
                <th scope="col" className="border border-slate-500 px-3 py-2">
                  {t("exam.closeReg", "Close Registration")}
                </th>
              </tr>
            </thead>
            <tbody className="text-[#0c1a6e] dark:text-blue-100">
              {selectedSessions.map((session, index) => {
                // Highlight every subject scheduled for today's date.
                const isExamDay = session.dates.some((date) =>
                  isSameDay(parseExamDate(date), today),
                );
                const highlight = isExamDay ? HIGHLIGHT_CLASS : "";

                return (
                  <tr
                    key={`${session.month}-${session.subject}`}
                    className="bg-white dark:bg-slate-900"
                  >
                    {startsGroup(selectedSessions, index, "batch") && (
                      <td
                        rowSpan={getGroupRowSpan(
                          selectedSessions,
                          index,
                          "batch",
                        )}
                        className="border border-slate-400 px-3 py-3 text-sm font-bold sm:text-base"
                      >
                        {session.batch}
                      </td>
                    )}
                    {startsGroup(selectedSessions, index, "month") && (
                      <td
                        rowSpan={getGroupRowSpan(
                          selectedSessions,
                          index,
                          "month",
                        )}
                        className="border border-slate-400 px-3 py-3 text-sm font-bold sm:text-base"
                      >
                        {t(`months.${session.month}`, session.month)}
                      </td>
                    )}

                    {/* Subject */}
                    <td
                      className={`border border-slate-400 px-3 py-3 text-sm font-semibold sm:text-base ${highlight}`}
                    >
                      {session.subject}
                    </td>

                    {/* Date: day name */}
                    <td
                      className={`border border-slate-400 px-3 py-2 text-sm sm:text-base ${highlight}`}
                    >
                      {session.dates.map((date) => (
                        <div key={date} className="whitespace-nowrap">
                          {date.split(",")[0]}
                        </div>
                      ))}
                    </td>

                    {/* Date: day-month-year */}
                    <td
                      className={`border border-slate-400 px-3 py-2 text-sm sm:text-base ${highlight}`}
                    >
                      {session.dates.map((date) => (
                        <div key={date} className="whitespace-nowrap">
                          {date.split(", ")[1]}
                        </div>
                      ))}
                    </td>

                    {/* Time */}
                    <td
                      className={`border border-slate-400 px-3 py-3 text-sm font-medium sm:text-base ${highlight}`}
                    >
                      {session.time}
                    </td>

                    {startsGroup(selectedSessions, index, "venue") && (
                      <td
                        rowSpan={getGroupRowSpan(
                          selectedSessions,
                          index,
                          "venue",
                        )}
                        className="border border-slate-400 px-3 py-3 text-sm font-bold sm:text-base"
                      >
                        {session.venue}
                      </td>
                    )}
                    {startsGroup(
                      selectedSessions,
                      index,
                      "registrationCloses",
                    ) && (
                      <td
                        rowSpan={getGroupRowSpan(
                          selectedSessions,
                          index,
                          "registrationCloses",
                        )}
                        className="border border-slate-400 px-3 py-3 text-sm font-bold sm:text-base"
                      >
                        {session.registrationCloses}
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Month buttons update the schedule shown above. */}
        <div
          className="mt-4 flex gap-2 overflow-x-auto px-1 py-1 sm:flex-wrap sm:justify-center sm:overflow-x-visible"
          aria-label="Exam schedule months"
        >
          {availableMonths.map((month) => (
            <button
              key={month}
              type="button"
              onClick={() => setSelectedMonth(month)}
              aria-pressed={selectedMonth === month}
              className={`shrink-0 whitespace-nowrap rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                selectedMonth === month
                  ? "bg-[#0c1a6e] text-white dark:bg-sky-500"
                  : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
              }`}
            >
              {t(`months.${month}`, month)}
            </button>
          ))}
        </div>

        <div
          data-aos="fade-right"
          className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900 sm:p-8"
        >
          <h3 className="text-xl font-bold text-[#0c1a6e] dark:text-blue-200 sm:text-2xl">
            {t("exam.requirementsTitle", "Exam requirements")}
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
            {t(
              "exam.requirementsDesc",
              "To be eligible to take the ATQ Exam, candidates must:"
            )}
          </p>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-700 marker:font-semibold marker:text-[#0c1a6e] dark:text-slate-200 dark:marker:text-blue-300 sm:text-base">
            <li>{t("exam.req1", "Be a student member of KICPAA.")}</li>
            <li>
              {t(
                "exam.req2",
                "Have paid all due fees, including the examination fee."
              )}
            </li>
            <li>{t("exam.req3", "Have an account in the Learning Hub.")}</li>
          </ol>
        </div>

        <div
          data-aos="fade-left"
          data-aos-delay="100"
          className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 sm:p-8"
        >
          <h3 className="text-xl font-bold text-[#0c1a6e] dark:text-blue-200 sm:text-2xl">
            {t("exam.bookingTitle", "Booking your ATQ Exam")}
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
            {t(
              "exam.bookingDesc",
              "Candidates can register for an exam 30 days in advance by following these steps:"
            )}
          </p>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-700 marker:font-semibold marker:text-[#0c1a6e] dark:text-slate-200 dark:marker:text-blue-300 sm:text-base">
            <li>
              {t("exam.book1", "Go to the")}{" "}
              <a
                href="https://education.kicpaa.org/student/login"
                target="_blank"
                rel="noreferrer"
                className="text-blue-900 underline dark:text-cyan-200"
              >
                Learning Hub
              </a>
              .
            </li>
            <li>{t("exam.book2", "Go to Examination and select your next examination date.")}</li>
            <li>
              {t(
                "exam.book3",
                "Select a subject, then choose your desired examination date from the list."
              )}
            </li>
            <li>{t("exam.book4", "Click Save to confirm your booking.")}</li>
          </ol>
          <p className="mt-5 rounded-lg border-l-4 border-[#0c1a6e] bg-blue-50 px-4 py-3 text-sm font-medium leading-6 text-[#0c1a6e] dark:border-blue-400 dark:bg-blue-950/50 dark:text-blue-200 sm:text-base">
            {t(
              "exam.bookingDeadlineAlert",
              "Be sure to book your exam schedule by the Standard Exam Booking Deadline."
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExamSdech;
