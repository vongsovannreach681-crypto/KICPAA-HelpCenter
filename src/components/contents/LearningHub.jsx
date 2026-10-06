import React from 'react'

const LearningHub = () => {
  return (
    <div>
         <h3 className="mt-15 border-l-4 border-[#0b1a6e] pl-5 text-3xl font-semibold leading-tight text-[#0b1a6e] transition-colors duration-200 hover:text-[#16257f] sm:text-4xl">
          Learning Hub
        </h3>
        <p className="text-slate-600 sm:text-lg sm:leading-9 pt-5">
            Learning Hub is a web system for students to learn, take ATQ exam and get regular updates on accounting and auditing regulations from KICPAA.
            <span className="font-Medium">
                All learning materials of ATQ program are available for access upon registration of the exam. Candidates are expected to complete the readings, quizzes, tests and mock exams before exam dates.
            </span>
        </p>
        <br />
       <div className="flex flex-col gap-3 sm:flex-row sm:gap-5">
         <a href="https://education.kicpaa.org/student/login" target="_blank" rel="noopener noreferrer" className="mt-5 cursor-pointer">
            <button className="cursor-pointer">
                <span className="text-white bg-[#03A9F4] p-3 mt-5">Login to Learning Hub <i class="fa-solid fa-arrow-right-to-bracket"></i></span>
            </button>
        </a>
        <a href="https://education.kicpaa.org/student/register" target="_blank" rel="noopener noreferrer" className="mt-5 cursor-pointer">
            <button className="cursor-pointer">
                <span className=" border-2 border-[#03A9F4] hover:text-white text-[#03A9F4] hover:bg-[#03A9F4] p-3 mt-5">Register for Learning Hub <i class="fa-solid fa-arrow-right-to-bracket"></i></span>
            </button>
        </a>
       </div>
    </div>
  )
}

export default LearningHub