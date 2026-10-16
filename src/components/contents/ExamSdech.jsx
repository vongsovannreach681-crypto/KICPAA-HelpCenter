import React from "react";

const examSessions = [
  { number: 1, date: "29–30 Mar", days: "Wed–Thu" },
  { number: 2, date: "26–27 Apr", days: "Wed–Thu" },
  { number: 3, date: "30–31 May", days: "Tue–Wed" },
  { number: 4, date: "28–29 Jun", days: "Wed–Thu" },
  { number: 5, date: "26–27 Jul", days: "Wed–Thu" },
  { number: 6, date: "30–31 Aug", days: "Wed–Thu" },
  { number: 7, date: "27–28 Sep", days: "Wed–Thu" },
  { number: 8, date: "25–26 Oct", days: "Wed–Thu" },
  { number: 9, date: "22–23 Nov", days: "Wed–Thu" },
];

const ExamSdech = () => (
  <section
    id="important-dates"
    className="bg-white px-4 py-12 font-['Poppins',sans-serif] dark:bg-slate-950 sm:px-6 sm:py-16"
  >
    <div className="mx-auto max-w-6xl">
      <h2 className="text-2xl font-bold text-[#0c1a6e] dark:text-blue-200 sm:text-3xl">
        ATQ exam schedule
      </h2>

      <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
        For 2026, exams are offered for TQ1 to TQ4 and will be conducted at
        KICPAA&apos;s office at the end of each month, starting in February.
      </p>

      <div className="mt-8 overflow-x-auto rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <table className="w-full min-w-[680px] border-collapse text-left">
          <thead>
            <tr className="bg-blue-950 text-xs font-bold uppercase text-white">
              <th scope="col" className="w-16 bg-blue-950 px-6 py-3.5">No</th>
              <th scope="col" className="bg-blue-950 px-6 py-3.5">Date</th>
              <th scope="col" className="bg-blue-950 px-6 py-3.5">Time</th>
              <th scope="col" className="bg-blue-950 px-6 py-3.5">Venue</th>
              <th scope="col" className="bg-blue-950 px-6 py-3.5 text-right">Subjects</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-[#0c1a6e] dark:divide-slate-800 dark:text-blue-100">
            {examSessions.map((session) => (
              <tr key={session.number}>
                <td className="px-6 py-5 text-sm">{session.number}</td>
                <td className="px-6 py-5 text-sm font-semibold sm:text-base">
                  {session.date}
                  <span className="ml-2 text-sm font-normal opacity-70">
                    ({session.days})
                  </span>
                </td>
                <td className="px-6 py-5 text-sm sm:text-base">
                  9–11 am | 2–4 pm
                </td>
                <td className="px-6 py-5 text-sm sm:text-base">KICPAA</td>
                <td className="px-6 py-5 text-right text-sm font-bold sm:text-base">
                  TQ1 – TQ4
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900 sm:p-8">
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

      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 sm:p-8">
        <h3 className="text-xl font-bold text-[#0c1a6e] dark:text-blue-200 sm:text-2xl">
          Booking your ATQ Exam
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
          Candidates can register for an exam 30 days in advance by following
          these steps:
        </p>
        <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-700 marker:font-semibold marker:text-[#0c1a6e] dark:text-slate-200 dark:marker:text-blue-300 sm:text-base">
          <li>Go to the <a href="https://education.kicpaa.org/student/login" target="blank" className="text-blue-900 underline">Learning Hub</a>.</li>
          <li>
            Go to <span className="font-semibold">Examination</span> and select
            your next examination date.
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

export default ExamSdech;