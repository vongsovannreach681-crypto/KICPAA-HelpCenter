import React from 'react'
import { FaArrowRightToBracket } from "react-icons/fa6";

const LearningHub = () => {
  return (
    <div id="learning-hub" data-aos="fade-up" className="scroll-mt-24">
         <h3 className="mt-15 border-l-4 border-[#0b1a6e] dark:border-[#03A9f4] pl-5 text-3xl font-semibold leading-tight text-[#0b1a6e] dark:text-sky-300 transition-colors duration-200 hover:text-[#16257f] dark:hover:text-sky-200 sm:text-4xl">
          Learning Hub
        </h3>
        <p className="text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-9 pt-5">
            Learning Hub is a web system for students to learn, take ATQ exam and get regular updates on accounting and auditing regulations from KICPAA.
            <span className="font-Medium">
                All learning materials of ATQ program are available for access upon registration of the exam. Candidates are expected to complete the readings, quizzes, tests and mock exams before exam dates.
            </span>
        </p>
        <br />
       <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4" data-aos="fade-up" data-aos-delay="150">
         <a
           href="https://education.kicpaa.org/student/login"
           target="_blank"
           rel="noopener noreferrer"
           className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#03A9F4] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800"
         >
           Login to Learning Hub <FaArrowRightToBracket aria-hidden="true" />
         </a>
         <a
           href="https://education.kicpaa.org/student/register"
           target="_blank"
           rel="noopener noreferrer"
           className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#03A9F4] dark:border-sky-400 px-6 py-3 text-sm font-semibold text-[#03A9F4] dark:text-sky-300 transition hover:bg-[#03A9F4] hover:text-white"
         >
           Register for Learning Hub <FaArrowRightToBracket aria-hidden="true" />
         </a>
       </div>
    </div>
  )
}

export default LearningHub