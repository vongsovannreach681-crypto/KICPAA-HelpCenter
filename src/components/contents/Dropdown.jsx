import React, { useState } from "react";
import {
  MONTHS,
  MONTH_ABBREVIATIONS,
  examSessionsByMonth,
} from "../../data/examSessions";

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

const parseExamDate = (date) => {
  const [weekday, datePart] = date.split(", ");
  const [day, monthAbbreviation, year] = datePart.split("-");
  const monthIndex = MONTH_ABBREVIATIONS.indexOf(monthAbbreviation);

  return {
    weekday,
    day: Number(day),
    monthIndex,
    year: Number(year),
    timestamp: new Date(Number(year), monthIndex, Number(day)).getTime(),
  };
};

const formatExamDate = (date) => {
  const parsedDate = parseExamDate(date);
  return `${parsedDate.weekday}, ${parsedDate.day} ${
    MONTHS[parsedDate.monthIndex]
  } ${parsedDate.year}`;
};

const formatExamDateRange = (sessions) => {
  const dates = [...new Set(sessions.flatMap((session) => session.dates))]
    .map(parseExamDate)
    .sort((first, second) => first.timestamp - second.timestamp);
  const firstDate = dates[0];
  const lastDate = dates.at(-1);

  if (
    firstDate.monthIndex === lastDate.monthIndex &&
    firstDate.year === lastDate.year
  ) {
    return firstDate.day === lastDate.day
      ? `${firstDate.day} ${MONTHS[firstDate.monthIndex]} ${firstDate.year}`
      : `${firstDate.day}-${lastDate.day} ${MONTHS[firstDate.monthIndex]} ${firstDate.year}`;
  }

  return `${firstDate.day} ${MONTHS[firstDate.monthIndex]} ${firstDate.year} - ${lastDate.day} ${MONTHS[lastDate.monthIndex]} ${lastDate.year}`;
};

const formatBookingDeadline = (date) => {
  const [day, monthAbbreviation, shortYear] = date.split("-");
  const monthIndex = MONTH_ABBREVIATIONS.indexOf(monthAbbreviation);

  return `${Number(day)} ${MONTHS[monthIndex]} 20${shortYear}`;
};

// Set a specific date to highlight, e.g. new Date(2026, 9, 25).
// Leave as null to highlight sessions happening today.
const HIGHLIGHT_DATE = null;

const getHighlightTimestamp = () => {
  const target = HIGHLIGHT_DATE ? new Date(HIGHLIGHT_DATE) : new Date();
  target.setHours(0, 0, 0, 0);
  return target.getTime();
};

const isSessionOnDate = (session, timestamp) =>
  session.dates.some((date) => parseExamDate(date).timestamp === timestamp);

const Dropdown = () => {
  const highlightTimestamp = getHighlightTimestamp();

  return (
    <section
      id="important-dates"
      className="bg-white px-4 py-12 font-['Poppins',sans-serif] dark:bg-slate-950 sm:px-6 sm:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <div
          aria-label="ATQ exam sessions by month"
          className="border-b border-slate-300 dark:border-slate-800"
        >
          {availableMonths.map((month) => {
            const sessions = examSessionsByMonth[month];
            const firstSession = sessions[0];
            const bookingDeadline = firstSession.registrationCloses;

            return (
              <details
                key={month}
                open={month === getDefaultExamMonth()}
                className="group border-t border-slate-300 dark:border-slate-800"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-[#0c1a6e] outline-none transition-colors hover:text-[#03A9f4] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#03A9f4] [&::-webkit-details-marker]:hidden dark:text-blue-200 dark:hover:text-[#03A9f4]">
                  <span className="text-lg font-bold sm:text-xl">
                    {month} {parseExamDate(firstSession.dates[0]).year} Exam
                    Session
                  </span>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    className="h-4 w-4 shrink-0 text-slate-500 transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none dark:text-slate-400"
                  >
                    <path
                      d="m3 6 5 5 5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                </summary>

                <ul className="list-disc space-y-2 pb-5 pl-5 text-sm leading-6 text-slate-700 dark:text-slate-300 sm:text-base">
                  <li>
                    <span className="font-medium">Exam schedule:</span>{" "}
                    {formatExamDateRange(sessions)}
                  </li>
                  <li>
                    <span className="font-medium">
                      Standard exam booking deadline:
                    </span>{" "}
                    {formatBookingDeadline(bookingDeadline)}
                  </li>
                  <li>
                    <span className="font-medium">Exam sessions:</span>
                    <ul className="mt-2 list-[circle] space-y-1 pl-5">
                      {sessions.map((session) => {
                        const isHighlighted = isSessionOnDate(
                          session,
                          highlightTimestamp,
                        );

                        return (
                          <li
                            key={`${month}-${session.subject}`}
                            className={
                              isHighlighted
                                ? "-ml-2 rounded-md bg-amber-100 px-2 py-1 font-semibold text-amber-900 dark:bg-amber-500/20 dark:text-amber-200"
                                : undefined
                            }
                          >
                            {session.subject}:{" "}
                            {session.dates.map(formatExamDate).join(" and ")} (
                            {session.time})
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                </ul>
              </details>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Dropdown;