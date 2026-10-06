import React, { useState } from "react";
import logo from "../../assets/logo/KicpaaLogo.png";

const navItems = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "ATQ Program",
    link: "/atq-program",
  },
  {
    id: 3,
    name: "Subject Course",
    link: "/subject-course",
    
  },
  {
    id: 4,
    name: "ATQ Exam",
    link: "/"
  }
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="poppins fixed left-0 right-0 top-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 md:px-6">
        <div className="flex items-center gap-3">
          <img className="h-12 w-auto md:h-16" src={logo} alt="Logo" />
        </div>

        <nav className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <div key={item.id}>
              <a
                href={item.link}
                className="text-sm font-medium text-slate-700 transition hover:text-blue-500 lg:text-[15px]"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button className="cursor-pointer rounded-xl bg-gray-400/20 px-3 py-2 text-blue-900 shadow-sm transition hover:bg-blue-800 hover:text-white">
            <i className="fa-solid fa-moon" />
          </button>
          <button className="cursor-pointer rounded-xl bg-gray-400/20 px-3 py-2 text-blue-900 shadow-sm transition hover:bg-blue-800 hover:text-white">
            <i className="fa-solid fa-circle-question" /> Q&A
          </button>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white p-2 text-slate-700 shadow-sm md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <i className="fa-solid fa-bars" />
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className="rounded-lg px-2 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-blue-600"
              >
                {item.name}
              </a>
            ))}

            <div className="mt-2 flex flex-col gap-2">
              <button className="rounded-xl bg-gray-400/20 px-3 py-2 text-sm text-blue-900 hover:bg-blue-800 hover:text-white">
                <i className="fa-solid fa-circle-question" /> Q&A
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
