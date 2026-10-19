import React, { useState } from "react";
import {
  MONTHS,
  MONTH_ABBREVIATIONS,
  examSessionsByMonth,
} from "../../data/examSessions";
import Dropdown from "./Dropdown";
const examSessions = MONTHS.flatMap((month) =>
  examSessionsByMonth[month].map((session) => ({ ...session, month })),
);
const availableMonths = MONTHS.filter(
  (month) => examSessionsByMonth[month].length > 0,
);
const getDefaultExamMonth = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const upcomingMonth = availableMonths.find((month) =>
    examSessionsByMonth[month].some((session) =>
      session.dates.some((date) => {
        const [day, monthAbbreviation, year] = date.split(", ")[1].split("-");
        const monthIndex = MONTH_ABBREVIATIONS.indexOf(monthAbbreviation);
        return new Date(Number(year), monthIndex, Number(day)) >= today;
      }),
    ),
  );

  return upcomingMonth ?? availableMonths.at(-1) ?? MONTHS[0];
};
const startsGroup = (sessions, index, property) =>
  index === 0 ||
  sessions[index - 1].month !== sessions[index].month ||
  sessions[index - 1][property] !== sessions[index][property];
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
  const selectedSessions = examSessions.filter(
    (session) => session.month === selectedMonth,
  );

  return (
    <section
      id="important-dates"
      className="bg-white px-4 py-12 font-['Poppins',sans-serif] dark:bg-slate-950 sm:px-6 sm:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <div data-aos="fade-up">
          <h2 className="text-2xl font-bold text-[#0c1a6e] dark:text-blue-200 sm:text-3xl">
            ATQ exam in {selectedMonth}
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base"
          >
            Choose a month to view its ATQ exam schedule.
          </p>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="150"
          className="mt-8 overflow-x-auto rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
        >
          <table className="w-full min-w-[760px] border-collapse text-center">
            <thead>
              <tr className="bg-blue-950 dark:bg-sky-500 text-sm font-bold text-white sm:text-base">
                <th scope="col" className="border border-slate-500 px-3 py-2">
                  Batch
                </th>
                <th scope="col" className="border border-slate-500 px-3 py-2">
                  Month
                </th>
                <th scope="col" className="border border-slate-500 px-3 py-2">
                  Subject
                </th>
                <th
                  scope="col"
                  colSpan={2}
                  className="border border-slate-500 px-3 py-2"
                >
                  Date
                </th>
                <th scope="col" className="border border-slate-500 px-3 py-2">
                  Time
                </th>
                <th scope="col" className="border border-slate-500 px-3 py-2">
                  Venue
                </th>
                <th scope="col" className="border border-slate-500 px-3 py-2">
                  Close Registration
                </th>
              </tr>
            </thead>
            <tbody className="text-[#0c1a6e] dark:text-blue-100">
              {selectedSessions.map((session, index) => (
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
                      {session.month}
                    </td>
                  )}
                  <td className="border border-slate-400 px-3 py-3 text-sm font-semibold sm:text-base">
                    {session.subject}
                  </td>
                  <td className="border border-slate-400 px-3 py-2 text-sm sm:text-base">
                    {session.dates.map((date) => (
                      <div key={date} className="whitespace-nowrap">
                        {date.split(",")[0]}
                      </div>
                    ))}
                  </td>
                  <td className="border border-slate-400 px-3 py-2 text-sm sm:text-base">
                    {session.dates.map((date) => (
                      <div key={date} className="whitespace-nowrap">
                        {date.split(", ")[1]}
                      </div>
                    ))}
                  </td>
                  <td className="border border-slate-400 px-3 py-3 text-sm font-medium sm:text-base">
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
              ))}
            </tbody>
          </table>
        </div>
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
              {month}
            </button>
          ))}
        </div>
       
        <div
          data-aos="fade-right"
          className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900 sm:p-8"
        >
          <h3 className="text-xl font-bold text-[#0c1a6e] dark:text-blue-200 sm:text-2xl">
            Exam requirements
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
            To be eligible to take the ATQ Exam, candidates must:
          </p>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-700 marker:font-semibold marker:text-[#0c1a6e] dark:text-slate-200 dark:marker:text-blue-300 sm:text-base">
            <li>Be a student member of KICPAA.</li>
            <li>Have paid all due fees, including the examination fee.</li>
            <li>Have an account in the Learning Hub.</li>
          </ol>
        </div>

        <div
          data-aos="fade-left"
          data-aos-delay="100"
          className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 sm:p-8"
        >
          <h3 className="text-xl font-bold text-[#0c1a6e] dark:text-blue-200 sm:text-2xl">
            Booking your ATQ Exam
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
            Candidates can register for an exam 30 days in advance by following
            these steps:
          </p>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-700 marker:font-semibold marker:text-[#0c1a6e] dark:text-slate-200 dark:marker:text-blue-300 sm:text-base">
            <li>
              Go to the{" "}
              <a
                href="https://education.kicpaa.org/student/login"
                target="blank"
                className="text-blue-900 underline dark:text-cyan-200"
              >
                Learning Hub
              </a>
              .
            </li>
            <li>
              Go to <span className="font-semibold">Examination</span> and
              select your next examination date.
            </li>
            <li>
              Select a subject, then choose your desired examination date from
              the list.
            </li>
            <li>Click Save to confirm your booking.</li>
          </ol>
          <p className="mt-5 rounded-lg border-l-4 border-[#0c1a6e] bg-blue-50 px-4 py-3 text-sm font-medium leading-6 text-[#0c1a6e] dark:border-blue-400 dark:bg-blue-950/50 dark:text-blue-200 sm:text-base">
            Be sure to book your exam schedule by the Standard Exam Booking
            Deadline.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExamSdech;
