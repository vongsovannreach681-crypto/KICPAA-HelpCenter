import React from "react";
import {
  FaArrowRight,
  FaBookOpen,
  FaCreditCard,
  FaCircleCheck,
  FaCircleExclamation,
  FaFileInvoice,
  FaReceipt,
  FaRectangleList,
  FaUserPlus,
} from "react-icons/fa6";

const admissionSteps = [
  {
    title: "Create an Account",
    description: "Sign up in the Learning Hub or KICPAA app.",
    icon: FaUserPlus,
  },
  {
    title: "Fill in Information",
    description: "Complete the required information.",
    icon: FaRectangleList,
  },
  {
    title: "Choose Exam Subjects",
    description: "Select the subjects you want to take exams in.",
    icon: FaBookOpen,
  },
  {
    title: "Download Invoice",
    description: "Download your invoice for the selected fees.",
    icon: FaFileInvoice,
  },
  {
    title: "Pay the Fees",
    description: "Pay the application, annual membership, and exam fees.",
    icon: FaCreditCard,
  },
  {
    title: "KICPAA Approval",
    description:
      "KICPAA reviews your application against student membership criteria. Once approved, access the Learning Hub or KICPAA app.",
    icon: FaCircleCheck,
  },
];

const fees = [
  {
    name: "Application fee",
    frequency: "One-time payment",
    amount: "$5",
  },
  {
    name: "Annual student membership fee",
    frequency: "Paid annually",
    amount: "$10",
  },
  {
    name: "Examination fee",
    frequency: "Per subject",
    amount: "$15",
  },
];

const AdmissionFees = () => {
  return (
    <section
      aria-labelledby="admission-fees-title"
      className="relative left-1/2 mt-20 w-screen -translate-x-1/2 scroll-mt-24"
      id="admission"
      data-aos="fade-up"
    >
      <div className="bg-[#0b1a6e] px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center text-white" data-aos="fade-up">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-200">
              ATQ Application Process
            </p>
            <h3
              className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl"
              id="admission-fees-title"
            >
              How Admission Works
            </h3>
            <p className="mt-3 text-base leading-7 text-white/85 sm:text-lg">
              Complete these steps to register and take your ATQ exams.
            </p>
          </div>

          <ol className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-y-0">
            {admissionSteps.map((step, index) => {
              const StepIcon = step.icon;
              return (
              <li
                key={step.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="relative flex flex-col items-center px-2 text-center text-white"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-2xl text-[#0b1a6e] shadow-md shadow-black/10 ring-1 ring-white/20">
                  <StepIcon aria-hidden="true" />
                </span>
                <h4 className="mt-4 text-base font-semibold leading-snug">
                  {step.title}
                </h4>
                <p className="mt-2 text-sm leading-6 text-white/80">
                  {step.description}
                </p>
                {index < admissionSteps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-8 text-2xl font-light text-sky-200 sm:hidden"
                  >
                    ↓
                  </span>
                )}
                {index < admissionSteps.length - 1 && (
                  <FaArrowRight
                    aria-hidden="true"
                    className="admission-flow-arrow absolute right-[-1.15rem] top-6 text-xl text-sky-200"
                  />
                )}
              </li>
              );
            })}
          </ol>

          <div data-aos="fade-up" data-aos-delay="200" className="mx-auto mt-10 flex max-w-4xl items-start gap-3 rounded-xl border border-white/15 border-l-4 border-l-sky-300 bg-white/10 p-4 text-white sm:items-center">
            <FaCircleExclamation
              className="mt-1 text-lg text-sky-200 sm:mt-0"
              aria-hidden="true"
            />
            <p className="text-sm leading-6 sm:text-base">
              You must be an ATQ student member and pay all the fees listed
              below to take the ATQ exam.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8" data-aos="fade-up" data-aos-delay="150">
        <article className="overflow-hidden rounded-2xl border border-[#0b1a6e]/10 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-md shadow-[#0b1a6e]/5 dark:shadow-slate-950/40 sm:p-8 transition-colors">
          <div className="flex items-center gap-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0b1a6e] dark:bg-slate-800 text-base text-white">
              <FaReceipt aria-hidden="true" />
            </span>
            <div>
              <h4 className="mt-1 text-xl font-semibold text-[#0b1a6e] dark:text-sky-300 sm:text-2xl">
                Fees Table
              </h4>
            </div>
          </div>

          <p className="mt-4 text-sm leading-6 text-[#0b1a6e]/80 dark:text-slate-300 sm:text-base">
            The fee you have to pay will be as follow:
          </p>

          <div className="mt-5 overflow-x-auto rounded-xl border border-[#0b1a6e]/10 dark:border-slate-800">
            <table className="w-full min-w-[360px] text-left text-sm">
              <caption className="sr-only">ATQ fees and payment frequency</caption>
              <thead className="bg-[#0b1a6e] dark:bg-slate-800 text-xs uppercase tracking-wide text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold" scope="col">
                    Fee
                  </th>
                  <th className="px-4 py-3 font-semibold" scope="col">
                    Payment
                  </th>
                  <th className="px-4 py-3 text-right font-semibold" scope="col">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#0b1a6e]/10 dark:divide-slate-800 text-[#0b1a6e] dark:text-slate-200">
                {fees.map((fee) => (
                  <tr
                    key={fee.name}
                    className="transition-colors hover:bg-[#0b1a6e]/[0.03] dark:hover:bg-slate-800/50"
                  >
                    <th className="px-4 py-4 font-semibold" scope="row">
                      {fee.name}
                    </th>
                    <td className="px-4 py-4">{fee.frequency}</td>
                    <td className="px-4 py-4 text-right text-lg font-bold text-[#0b1a6e] dark:text-sky-300">
                      {fee.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-5 border-l-4 border-[#03A9f4] bg-[#0b1a6e]/[0.03] dark:bg-slate-800/60 p-4 text-sm leading-6 text-[#0b1a6e] dark:text-slate-200">
            The examination fee is charged for each subject you choose to take.
          </p>
        </article>
      </div>
    </section>
  );
};

export default AdmissionFees;
