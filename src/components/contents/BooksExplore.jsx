import React, { useState } from "react";
import {
  FaBookOpen,
  FaCalculator,
  FaCheck,
  FaChevronDown,
} from "react-icons/fa6";
import tq1Book from "../../assets/images/book/tq1.png";
import tq2Book from "../../assets/images/book/tq2.png";
import tq3Book from "../../assets/images/book/tq3.png";
import tq4Book from "../../assets/images/book/tq4.png";
const BooksExplore = () => {
  const [activeLevel, setActiveLevel] = useState("principles");
  const TQbook = [
    {
      id: 1,
      name: "TQ1: Bookkeeping, accounting and controls",
      des: "This module introduces candidates to the key processing requirements to support accounting record keeping and to recognise the key accounting controls required to maintain the integrity of accounting systems. The records and introduction to the use of accounting and business documents will enable the production of financial statements.",

      list: [
        "Explain the nature of bookkeeping and its function within a business",
        "Identify and explain the key financial transactions within a business",
        "Identify and explain the key books and ledgers within a bookkeeping system",
        "Describe customer and supplier transactions and the documentation these create",
        "Record customer and supplier transactions in a double entry bookkeeping system",
        "Create a trial balance for a period of transactions",
      ],
      category: "Principles Level",
      image: tq1Book,
      syllabusCoverage: [
        {
          code: "A",
          topic:
            "Explain the nature of bookkeeping and its function within a business",
          weight: 5,
        },
        {
          code: "B",
          topic:
            "Identify and explain the key financial transactions within a business",
          weight: 5,
        },
        {
          code: "C",
          topic:
            "Identify and explain the key books and ledgers within a bookkeeping system",
          weight: 10,
        },
        {
          code: "D",
          topic:
            "Record customer and supplier transactions in a double entry bookkeeping system",
          weight: 40,
        },
        {
          code: "E",
          topic: "Explain and apply control accounts and the use of journals",
          weight: 20,
        },
        {
          code: "F",
          topic: "Create a trial balance for a period of transactions",
          weight: 20,
        },
      ],
    },
    {
      id: 2,
      name: "TQ2: IT skills and software",
      des: "Students will be introduced to the key functionalities of QuickBooks, and Microsoft Office, notably Excel, WORD and email. This will allow candidates to integrate easily into an office environment and to ensure that accounting records and related documents are maintained to modern business standards.",
      list: [
        "Describe the office and accounting environment and identify the office functions and processes that benefit from information technology",
        "Describe, explain and demonstrate the functionality of accounting software",
        "Describe, explain and demonstrate the functionality of spreadsheet software",
        "Identify and demonstrate the key features and functionality of WORD",
        "Identify and demonstrate the key features and functionality of email",
      ],
      category: "Principles Level",
      image: tq2Book,
      syllabusCoverage: [
        {
          code: "A",
          topic: "Office environment and the role of information technology",
          weight: 5,
        },
        {
          code: "B",
          topic: "Functionality and use of accounting software",
          weight: 40,
        },
        {
          code: "C",
          topic: "Functionality and use of spreadsheet software",
          weight: 35,
        },
        {
          code: "D",
          topic: "Functionality and use of WORD",
          weight: 10,
        },
        {
          code: "E",
          topic: "Functionality and use of email",
          weight: 10,
        },
      ],
    },
    {
      id: 3,
      name: "TQ3: Introduction to Costing",
      des: "The syllabus introduces candidates to elements of costing which are used to make and support decisions and begins with introducing the nature of and sources of information, and purpose of cost accounting and costing techniques.",
      list: [
        "Describe and explain the purpose of costing and how costing operates and supports an organisation",
        "Define, describe and explain what cost data is, how it is used, the elements of costs, and how costs are classified",
        "Describe and calculate how costs are recorded",
        "Prepare simple budgets for both revenue and costs",
        "Calculate and explain differences between actual performance and budgets ",
      ],
      category: "Principles Level",
      image: tq3Book,
      syllabusCoverage: [
        {
          code: "A",
          topic:
            "Purpose of costing and how costing operates and supports an organisation",
          weight: 10,
        },
        {
          code: "B",
          topic:
            "What cost data is, how it is used, the elements of costs, and how costs are classified",
          weight: 10,
        },
        {
          code: "C",
          topic: "How costs are recorded",
          weight: 40,
        },
        {
          code: "D",
          topic: "Simple budgets for both revenue and costs",
          weight: 20,
        },
        {
          code: "E",
          topic: "Differences between actual performance and budgets",
          weight: 20,
        },
      ],
    },
    {
      id: 4,
      name: "TQ4: Introduction to Business",
      des: "Business Management and Information Systems introduces the basic structures and processes involved in organisations in Cambodia and identifies the impact of the business environments and how information is managed to support business objectives. It considers, in detail, entity types, their purpose and objectives; how the business environment influences business decisions; the business planning process and the impact of behavioural issues; the basic operations of a business; how information is used and managed; and concludes with a description of the basic business models used to support management decisions.",
      list: [
        "Describe entity types, their purpose and objectives,",
        "Explain basic business organisational structures and processes",
        "Explain how the business environment influences business decisions",
        "Describe the business planning process, including the impact of behavioural issues",
        "Explain the basic operations of business functions",
        "Identify and explain how business information is managed",
        "Describe and apply basic business models to support management decisions",
        "Describe and explain blockchain technology",
      ],
      category: "Principles Level",
      image: tq4Book,
      syllabusCoverage: [
        { code: "A", topic: "Entity types, purpose and objective", weight: 10 },
        {
          code: "B",
          topic: "Organisational structures and processes",
          weight: 10,
        },
        { code: "C", topic: "Business environment and decisions", weight: 10 },
        {
          code: "D",
          topic: "Business planning processes and behavior",
          weight: 20,
        },
        { code: "E", topic: "Operations and business functions", weight: 20 },
        { code: "F", topic: "Business information management", weight: 10 },
        {
          code: "G",
          topic: "Business models and management decisions",
          weight: 10,
        },
        {
          code: "H",
          topic: "Describe and explain blockchain technology",
          weight: 10,
        },
      ],
    },
  ];
  
  const TQbookTechnical = [
    {
      id: 1,
      name: "TQ5: Financial statement preparation",
      des: "Financial Statement Preparation is designed to ensure that candidates have a sound understanding of the techniques to support the  preparation of non-complex financial statements. The syllabus introduces the candidate to the fundamentals of the regulatory framework relating to accounts preparation and to the qualitative characteristics of useful information, covers drafting financial statements and the principles of accounts preparation. The syllabus reinforces knowledge concerning the recording, processing, and reporting business transactions and events, use of the trial balance and how to identify and correct errors and the preparation of financial statements for incorporated and unincorporated entities.",

      list: [
        "Explain the context and purpose of financial accounting",
        "Define the qualitative characteristics of financial information",
        "Record transactions and events using the use of double-entry accounting system",
        "Prepare an extended (adjusted) trial balance",
        "Prepare basic financial statements for incorporated and unincorporated entities.",
        "Interpret financial statements",
      ],
      category: "Technician Level",
      image: tq1Book,
      syllabusCoverage: [
        {
          code: "A",
          topic:
            "The context and purpose of financial accounting",
        },
        {
          code: "B",
          topic:
            "Qualitative characteristics of financial information",
        },
        {
          code: "C",
          topic:
            "Recording transactions and events   ",
        },
        {
          code: "D",
          topic:
            "Preparing an extended trial balance   ",
        },
        {
          code: "E",
          topic: "Preparing basic financial statements",
        },
        {
          code: "F",
          topic: "Interpretation of financial statements",
        },
      ],
    },
    {
      id: 2,
      name: "TQ6: Management Accounting",
      des: "Management Accounting is designed to develop knowledge of accounting techniques to support management in planning, controlling and monitoring performance of a business in a variety of contexts. The syllabus introduces candidates to elements of management accounting which are used to make and support decisions and begins with introducing the nature of and sources of information, and purpose of cost accounting and costing techniques; the preparation  and use of budgeting and standard costing and variance analysis; and concludes with an introduction to measuring and monitoring the performance of an organisation.",
      list: [
        "Describe and explain the scope of management accounting within both commercial and public sector organisations",
        "Define and explain the purpose of budgets and budgetary control",
        "Select and apply appropriate forecasting techniques to assist in budget preparation",
        "Select appropriate budgeting approaches and methods and prepare budgets",
        "	Identify and describe the costs associated with the production of products and provision of services and use them to determine prices;",
        "	Calculate and explain differences between actual performance and standards or budgets "
      ],
      category: "Technician Level",
      image: tq2Book,
      syllabusCoverage: [
        {
          code: "A",
          topic: "Scope of management accounting",
          weight: 10,
        },
        {
          code: "B",
          topic: "Purpose of budgeting and budgetary control",
          weight: 10,
        },
        {
          code: "C",
          topic: "Forecasting techniques",
          weight: 15,
        },
        {
          code: "D",
          topic: "Budgeting approaches",
          weight: 20,
        },
        {
          code: "E",
          topic: "Cost of production and provision of services",
          weight: 25,
        },
        {
          code: "F",
          topic: "Performance differences",
          weight: 20,
        },
      ],
    },
    {
      id: 3,
      name: "TQ7: Cambodian taxation and practices",
      des: "Cambodia Taxation is specifically designed to introduce students to the Cambodian tax systems. The course aims to deal with the different regimes of taxation and different forms of tax and tax administration. It addresses the objectives and function of taxation; tax calculations relating to salaries, fringe benefits, VAT, Withholding Tax, Patent Tax, and import and export duties. It specifically addresses ethical issues relating to tax.",
      list: [
        "Outline the objectives and functions of taxation and describe the different taxes",
        "Explain the scope and administration of taxes",
        "Explain and calculate the tax due on salaries and other fringe benefits",
        "Explain and calculate the tax due on profit",
        "	Explain and calculate Value Added Tax ",
        "Explain and calculate withholding tax",
        "Explain and calculate minimum tax",
        "Explain and calculate patent tax",
        "Explain and calculate other taxes in Cambodia",
        "Explain and calculate import and export duties",
        "Identify and explain ethical issues and apply mitigation in tax practice"
      ],
      category: "Technician Level",
      image: tq3Book,
      syllabusCoverage: [
        { code: "A", topic: "Objectives and functions of tax", weight: 5 },
        { code: "B", topic: "Administration of taxes", weight: 5 },
        { code: "C", topic: "Tax on salaries and fringe benefits", weight: 10 },
        { code: "D", topic: "Tax on profits", weight: 10 },
        { code: "E", topic: "VAT", weight: 10 },
        { code: "F", topic: "Withholding taxes", weight: 10 },
        { code: "G", topic: "Minimum taxes", weight: 10 },
        { code: "H", topic: "Patent taxes", weight: 10 },
        { code: "I", topic: "Import and export duties", weight: 10 },
        { code: "J", topic: "Other taxes", weight: 10 },
        { code: "K", topic: "Ethical issues and mitigation", weight: 10 },
      ],
    },
    {
      id: 8,
      name: "TQ8: Cambodian Business and Company Law",
      category: "Technician Level",
      des: "Cambodian Business and Company Law is designed to introduce students to the legal framework of business law and regulations in Cambodia relating to the role and work of professional accountants. Students will also study the standard code of ethics necessary for professional accountancy. The syllabus begins with a general overview of the Cambodian legal system, including introducing sources of law and the judicial system in Cambodia, and progresses to consider laws and regulations on companies, corporate governance, dissolution and insolvency; the full lifecycle of a company starting from formation, management, financing and closing (either by dissolution or insolvency); contract law, tort and negotiable instruments; anti-corruption laws and the standard code of ethics required of professional accountants.   ",
      list: [
        "Identify the essential elements of the legal system, including the main sources of law",
        "Explain the nature of the different forms of business entities, describing their structure and formation of a company",
        "Describe the relationship between different stakeholders and the role of professional accountants",
        "	Explain the dissolution and insolvency process of companies",
        "Identify and describe the different forms of negotiable instruments and legal aspects of each form",
        "Explain the nature of contracts and remedies for breach of contract",
        "	Explain the legal principles and application of laws relating to torts",
        "	Explain the legal principles and application of anti-corruption laws relating to professional accountancy and the standard code of ethics required of professional accountants"
      ],
      syllabusCoverage: [
        {
          code: "A",
          topic: "Essential elements of the legal system",
          weight: 10,
        },
        { code: "B", topic: "Business entities", weight: 10 },
        { code: "C", topic: "Stakeholder relationships", weight: 10 },
        { code: "D", topic: "Dissolution and insolvency", weight: 10 },
        { code: "E", topic: "Negotiable instruments", weight: 10 },
        { code: "F", topic: "Contracts", weight: 20 },
        { code: "G", topic: "Tort", weight: 20 },
        { code: "H", topic: "Anti-corruption", weight: 10 },
      ],
    },
  ];
  

  return (
    <section
      aria-label="ATQ subject courses"
      className="mt-20 scroll-mt-24"
      id="books-explore"
    >
      <div
        data-aos="fade-up"
        className="mb-12 flex flex-wrap justify-center gap-2 sm:gap-4"
        role="group"
        aria-label="Filter courses by qualification level"
      >
        {[
          {
            id: "principles",
            label: "Principles Level",
            count: TQbook.length,
            icon: FaBookOpen,
          },
          {
            id: "technician",
            label: "Technician Level",
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
                {level.count} courses
              </span>
              <span
                aria-hidden="true"
                className={`absolute inset-x-6 bottom-0 h-0.5 rounded-full transition-colors ${
                  isActive ? "bg-[#0b1a6e] dark:bg-[#03A9f4]" : "bg-transparent"
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
          Principles Level
        </h2>
        <p className="mt-3 max-w-5xl font-serif text-base italic leading-7 text-slate-700 sm:text-lg dark:text-slate-300">
          The Principles Level provides a framework for learning which contains
          core skills in processing business transactions to enable students to
          become effective members of an accounting support team.
        </p>
      </div>

      <div className="mt-8 border-b border-slate-300 dark:border-slate-800">
        {TQbook.map((book) => (
          <details key={book.id} data-aos="fade-up" className="group border-t border-slate-300 dark:border-slate-800">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 text-[#0b1a6e] outline-none transition-colors hover:text-[#03A9f4] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#03A9f4] sm:py-7 [&::-webkit-details-marker]:hidden dark:text-slate-100 dark:hover:text-[#03A9f4]">
              <span className="text-lg font-bold sm:text-2xl">{book.name}</span>
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
                  On completion of this module, candidates will reach a
                  competency sufficient to be able to:
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
              </div>
            </div>

            {book.syllabusCoverage?.length > 0 && (
              <div className="mb-8 overflow-x-auto rounded-sm border border-sky-200 dark:border-slate-800">
                <table className="w-full min-w-[560px] border-collapse text-left text-sm sm:text-base">
                  <caption className="sr-only">
                    {book.name} syllabus coverage
                    {book.syllabusCoverage[0].weight !== undefined &&
                      " and assessment weights"}
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
                        Syllabus coverage
                      </th>
                      {book.syllabusCoverage[0].weight !== undefined && (
                        <th
                          scope="col"
                          className="w-36 border border-sky-200 px-4 py-3 text-center font-bold uppercase tracking-wide dark:border-slate-800"
                        >
                          Weight (%)
                        </th>
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {book.syllabusCoverage.map((row) => (
                      <tr key={row.code} className="bg-white dark:bg-slate-900">
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
                    {book.syllabusCoverage[0].weight !== undefined && (
                      <tr className="bg-sky-100 font-bold text-slate-950 dark:bg-slate-800 dark:text-slate-100">
                        <th
                          scope="row"
                          className="border border-sky-200 px-4 py-2 dark:border-slate-800"
                        />
                        <td className="border border-sky-200 px-5 py-2 uppercase dark:border-slate-800">
                          Total
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
            Technician Level
          </h2>
          <p className="mt-3 max-w-5xl font-serif text-base italic leading-7 text-slate-700 sm:text-lg dark:text-slate-300">
            The Technician Level modules build on the studied undertaken in the previous level and develop skills with a particular focus on application of knowledge, using realistic scenarios.
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
                      On completion of this module, candidates will reach a
                      competency sufficient to be able to:
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
                  </div>
                )}
              </div>

              {book.syllabusCoverage?.length > 0 && (
                <div className="mb-8 overflow-x-auto rounded-sm border border-sky-200 dark:border-slate-800">
                  <table className="w-full min-w-[560px] border-collapse text-left text-sm sm:text-base">
                    <caption className="sr-only">
                      {book.name} syllabus coverage
                      {book.syllabusCoverage[0].weight !== undefined &&
                        " and assessment weights"}
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
                          Syllabus coverage
                        </th>
                        {book.syllabusCoverage[0].weight !== undefined && (
                          <th
                            scope="col"
                            className="w-36 border border-sky-200 px-4 py-3 text-center font-bold uppercase tracking-wide dark:border-slate-800"
                          >
                            Weight (%)
                          </th>
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {book.syllabusCoverage.map((row) => (
                        <tr key={row.code} className="bg-white dark:bg-slate-900">
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
                      {book.syllabusCoverage[0].weight !== undefined && (
                        <tr className="bg-sky-100 font-bold text-slate-950 dark:bg-slate-800 dark:text-slate-100">
                          <th
                            scope="row"
                            className="border border-sky-200 px-4 py-2 dark:border-slate-800"
                          />
                          <td className="border border-sky-200 px-5 py-2 uppercase dark:border-slate-800">
                            Total
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
