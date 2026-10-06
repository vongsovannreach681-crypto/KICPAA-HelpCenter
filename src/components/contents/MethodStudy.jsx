import React from "react";
import SelfStudy from "../../assets/images/Self.png";
import training from "../../assets/images/Training.png";

const methods = [
  {
    id: "self-study",
    title: "Self-study",
    image: SelfStudy,
    alt: "Self Study",
    description:
      "Students can self-study and take the exam immediately, and are categorized as KICPAA for their training organizations. This category is for those who already have a degree, qualification, or experience in accounting.",
    note: "Not recommended for students who have just finished high school.",
    reverse: false,
  },
  {
    id: "training",
    title: "Training organizations",
    image: training,
    alt: "Training",
    description:
      "Students can attend training sessions and take the exam after completing the required coursework. This category is for those who are new to accounting or want to enhance their skills.",
    note: null,
    reverse: true,
  },
];

const MethodCard = ({ method }) => (
  <section
    data-aos={method.reverse ? "fade-left" : "fade-right"}
    className={`group relative mt-10 flex flex-col items-stretch overflow-hidden rounded-xl bg-white dark:bg-slate-900 shadow-md ring-1 ring-[#0b1a6e]/10 dark:ring-slate-800
      transition-all duration-300 ease-out
      hover:-translate-y-1.5 hover:shadow-2xl hover:ring-[#03A9F4]/50 dark:hover:ring-[#03A9F4]/50
      focus-within:-translate-y-1.5 focus-within:shadow-2xl
      motion-reduce:transition-none motion-reduce:hover:translate-y-0
      ${method.reverse ? "md:flex-row-reverse" : "md:flex-row"}`}
  >
    {/* Accent bar: grows to full width of its edge on hover */}
    <span
      aria-hidden="true"
      className={`absolute top-0 h-full w-1.5 bg-[#03A9F4] transition-all duration-300 group-hover:w-2.5 ${
        method.reverse ? "right-0" : "left-0"
      }`}
    />

    {/* Image panel: image zooms inside a clipped frame */}
    <div className="relative flex shrink-0 items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-800/40 md:w-72">
      <img
        className="w-[250px] transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-1 motion-reduce:transform-none"
        src={method.image}
        alt={method.alt}
      />
    </div>

    {/* Text */}
    <div className="flex-1 p-6 md:p-8">
      <h3 className="mb-5 w-fit text-2xl font-bold text-[#0b1a6e] dark:text-sky-300">
        {method.title}
        <span
          aria-hidden="true"
          className="mt-2 block h-1 w-1/3 rounded-full bg-[#03A9F4] transition-all duration-300 group-hover:w-full"
        />
      </h3>

      <p className="max-w-prose text-left text-base leading-relaxed text-gray-700 dark:text-slate-300">
        {method.description}
      </p>

      {method.note && (
        <p className="mt-4 w-fit rounded-md border-l-4 border-amber-400 bg-amber-50 dark:bg-amber-950/40 px-3 py-2 text-sm text-[#0b1a6e] dark:text-amber-300 transition-colors duration-300 group-hover:bg-amber-100 dark:group-hover:bg-amber-950/60">
          {method.note}
        </p>
      )}
    </div>
  </section>
);

const MethodStudy = () => {
  return (
    <div id="method-study" className="container mt-15 scroll-mt-24">
      <h3 data-aos="fade-up" className="mt-15 border-l-4 border-[#0b1a6e] dark:border-[#03A9f4] pl-5 text-3xl font-semibold leading-tight text-[#0b1a6e] dark:text-sky-300 transition-colors duration-200 hover:text-[#16257f] dark:hover:text-sky-200 sm:text-4xl">
        Method study
      </h3>
      <p data-aos="fade-up" data-aos-delay="100" className="pt-5 text-lg text-gray-700 dark:text-slate-300">
        The ATQ program is delivered to students through two methods:
      </p>

      {methods.map((method) => (
        <MethodCard key={method.id} method={method} />
      ))}
    </div>
  );
};

export default MethodStudy;