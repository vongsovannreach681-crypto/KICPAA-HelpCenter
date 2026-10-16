import React from "react";

const examSessions = [
  { batch: 10, month: "October", subject: "TQ1", dates: ["Fri, 23-Oct-2026", "Tue, 27-Oct-2026"], time: "9 - 11 AM", venue: "KICPAA", registrationCloses: "15-Oct-26" },
  { batch: 10, month: "October", subject: "TQ2", dates: ["Fri, 23-Oct-2026", "Tue, 27-Oct-2026"], time: "2 - 4 PM", venue: "KICPAA", registrationCloses: "15-Oct-26" },
  { batch: 10, month: "October", subject: "TQ3", dates: ["Mon, 26-Oct-2026", "Wed, 28-Oct-2026"], time: "9 - 11 AM", venue: "KICPAA", registrationCloses: "15-Oct-26" },
  { batch: 10, month: "October", subject: "TQ4", dates: ["Mon, 26-Oct-2026", "Wed, 28-Oct-2026"], time: "2 - 4 PM", venue: "KICPAA", registrationCloses: "15-Oct-26" },
  { batch: 10, month: "October", subject: "TQ5", dates: ["Mon, 26-Oct-2026", "Tue, 27-Oct-2026"], time: "9 - 11 AM", venue: "KICPAA", registrationCloses: "15-Oct-26" },
  { batch: 10, month: "October", subject: "TQ6", dates: ["Mon, 26-Oct-2026", "Tue, 27-Oct-2026"], time: "2 - 4 PM", venue: "KICPAA", registrationCloses: "15-Oct-26" },
  { batch: 10, month: "October", subject: "TQ7", dates: ["Fri, 23-Oct-2026", "Wed, 28-Oct-2026"], time: "9 - 11 AM", venue: "KICPAA", registrationCloses: "15-Oct-26" },
  { batch: 10, month: "October", subject: "TQ8", dates: ["Fri, 23-Oct-2026", "Wed, 28-Oct-2026"], time: "2 - 4 PM", venue: "KICPAA", registrationCloses: "15-Oct-26" },
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
        Batch 10 exams will be held in October 2026 at KICPAA.
      </p>

      <div className="mt-8 overflow-x-auto rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <table className="w-full min-w-[760px] border-collapse text-center">
          <thead>
            <tr className="bg-blue-950 dark:bg-sky-500 text-sm font-bold text-white sm:text-base">
              <th scope="col" className="border border-slate-500 px-3 py-2">Batch</th>
              <th scope="col" className="border border-slate-500 px-3 py-2">Month</th>
              <th scope="col" className="border border-slate-500 px-3 py-2">Subject</th>
              <th scope="col" colSpan={2} className="border border-slate-500 px-3 py-2">Date</th>
              <th scope="col" className="border border-slate-500 px-3 py-2">Time</th>
              <th scope="col" className="border border-slate-500 px-3 py-2">Venue</th>
              <th scope="col" className="border border-slate-500 px-3 py-2">Close Registration</th>
            </tr>
          </thead>
          <tbody className="text-[#0c1a6e] dark:text-blue-100">
            {examSessions.map((session, index) => (
              <tr key={session.subject} className="bg-white dark:bg-slate-900">
                {index === 0 && <td rowSpan={examSessions.length} className="border border-slate-400 px-3 py-3 text-sm font-bold sm:text-base">{session.batch}</td>}
                {index === 0 && <td rowSpan={examSessions.length} className="border border-slate-400 px-3 py-3 text-sm font-bold sm:text-base">{session.month}</td>}
                <td className="border border-slate-400 px-3 py-3 text-sm font-semibold sm:text-base">{session.subject}</td>
                <td className="border border-slate-400 px-3 py-2 text-sm sm:text-base">
                  {session.dates.map((date) => <div key={date} className="whitespace-nowrap">{date.split(",")[0]}</div>)}
                </td>
                <td className="border border-slate-400 px-3 py-2 text-sm sm:text-base">
                  {session.dates.map((date) => <div key={date} className="whitespace-nowrap">{date.split(", ")[1]}</div>)}
                </td>
                <td className="border border-slate-400 px-3 py-3 text-sm font-medium sm:text-base">{session.time}</td>
                {index === 0 && <td rowSpan={examSessions.length} className="border border-slate-400 px-3 py-3 text-sm font-bold sm:text-base">{session.venue}</td>}
                {index === 0 && <td rowSpan={examSessions.length} className="border border-slate-400 px-3 py-3 text-sm font-bold sm:text-base">{session.registrationCloses}</td>}
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