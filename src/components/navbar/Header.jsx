import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaCircleQuestion, FaMoon, FaSun, FaMagnifyingGlass } from "react-icons/fa6";
import logo from "../../assets/logo/KicpaaLogo.png";
import darkLogo from "../../assets/logo/dark-logo.png";
import SearchModal from "../search/SearchModal";

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
    link: "/atq-examination",
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
      return (
        document.documentElement.classList.contains("dark") ||
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Determine active state for navigation items
  const checkIsActive = (item) => {
    const currentPath = location.pathname;
    const currentHash = location.hash;

    if (item.link === "/") {
      return currentPath === "/" && (!currentHash || currentHash === "");
    }
    if (item.link === "/atq-examination" || item.name === "ATQ Exam") {
      return (
        currentPath === "/atq-examination" ||
        currentPath === "/atq-exam" ||
        currentHash === "#atq-exam"
      );
    }
    if (item.link.startsWith("/#")) {
      return currentPath === "/" && currentHash === item.link.substring(1);
    }
    return currentPath === item.link || (item.link !== "/" && currentPath.startsWith(item.link + "/"));
  };

  // Handle smooth navigation and anchor jumps
  const handleNavClick = (e, item) => {
    setIsOpen(false);
    if (item.link === "/") {
      if (location.pathname === "/" && location.hash) {
        e.preventDefault();
        navigate("/");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else if (item.link.startsWith("/#")) {
      const targetHash = item.link.substring(2);
      if (location.pathname === "/") {
        e.preventDefault();
        navigate(item.link);
        const elem = document.getElementById(targetHash);
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }
  };

  return (
    <>
    <header className="poppins fixed left-0 right-0 top-0 z-40 bg-white/90 dark:bg-slate-900/95 backdrop-blur-md shadow-md dark:border-b dark:border-slate-800 transition-colors duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 md:px-6">
        <div className="flex items-center gap-3">
          <Link to="/" className="block">
            <img
              className="h-10 sm:h-12 w-auto md:h-14"
              src={isDarkMode ? darkLogo : logo}
              alt="KICPAA Logo"
            />
          </Link>
        </div>

        {/* Desktop Navigation with IsActive State */}
        <nav className="hidden items-center gap-1.5 lg:flex">
          {navItems.map((item) => {
            const isActive = checkIsActive(item);
            return (
              <Link
                key={item.id}
                to={item.link}
                onClick={(e) => handleNavClick(e, item)}
                aria-current={isActive ? "page" : undefined}
                className={`group relative rounded-xl px-3.5 py-2 text-sm lg:text-[15px] transition-all duration-200 ${
                  isActive
                    ? "font-semibold text-[#0b1a6e] dark:text-[#03A9f4] bg-blue-50/80 dark:bg-sky-950/50 shadow-2xs"
                    : "font-medium text-slate-600 dark:text-slate-300 hover:text-[#0b1a6e] dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60"
                }`}
              >
                <span>{item.name}</span>
                {isActive && (
                  <span
                    className="absolute -bottom-1 left-3 right-3 h-[2.5px] rounded-full bg-[#03A9f4] shadow-[0_2px_8px_rgba(3,169,244,0.5)] transition-all animate-pulse"
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Right Actions: Search + Dark Mode + Q&A */}
        <div className="hidden items-center gap-2.5 md:flex">
          {/* Search Button */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="cursor-pointer inline-flex items-center gap-2 rounded-xl border border-slate-200/80 bg-slate-100/80 dark:border-slate-700/80 dark:bg-slate-800/80 px-3 py-2 text-xs text-slate-600 dark:text-slate-300 hover:border-[#03A9f4] hover:bg-white dark:hover:bg-slate-800 transition-all shadow-2xs group"
            aria-label="Search content"
            title="Search"
          >
            <FaMagnifyingGlass
              className="text-xs text-slate-400 group-hover:text-[#03A9f4] transition-colors"
              aria-hidden="true"
            />
            <span className="text-xs font-medium">Search...</span>
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            className="cursor-pointer rounded-xl bg-gray-400/20 dark:bg-slate-800 px-3 py-2 text-blue-900 dark:text-amber-300 shadow-sm transition-all hover:bg-blue-800 hover:text-white dark:hover:bg-slate-700"
          >
            {isDarkMode ? (
              <FaSun className="text-base text-amber-400 transition-transform duration-300 hover:rotate-90" aria-hidden="true" />
            ) : (
              <FaMoon className="text-base transition-transform duration-300 hover:-rotate-12" aria-hidden="true" />
            )}
          </button>

          {/* Q&A Chatbot Trigger */}
          
        </div>

        {/* Mobile Right Actions: Search + Dark Mode + Q&A + Menu */}
        <div className="flex items-center gap-1.5 sm:gap-2 md:hidden">
          {/* Mobile Search Button */}
          <button
            onClick={() => setIsSearchOpen(true)}
            aria-label="Search site content"
            title="Search"
            className="cursor-pointer rounded-xl bg-gray-400/20 dark:bg-slate-800 p-2 text-blue-900 dark:text-sky-300 shadow-sm transition hover:bg-blue-800 hover:text-white dark:hover:bg-slate-700"
          >
            <FaMagnifyingGlass className="text-sm" aria-hidden="true" />
          </button>

          {/* Mobile Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            className="cursor-pointer rounded-xl bg-gray-400/20 dark:bg-slate-800 p-2 text-blue-900 dark:text-amber-300 shadow-sm transition hover:bg-blue-800 hover:text-white dark:hover:bg-slate-700"
          >
            {isDarkMode ? (
              <FaSun className="text-sm text-amber-400" aria-hidden="true" />
            ) : (
              <FaMoon className="text-sm" aria-hidden="true" />
            )}
          </button>

          {/* Mobile Q&A Trigger */}
          

          {/* Mobile Menu Toggle */}
          <button
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-2 text-slate-700 dark:text-slate-200 shadow-sm"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <FaBars aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu with IsActive State */}
      {isOpen && (
        <div className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4">
            {/* Mobile Drawer Search Bar */}
            <button
              onClick={() => {
                setIsOpen(false);
                setIsSearchOpen(true);
              }}
              className="flex w-full items-center gap-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3.5 py-2.5 text-xs font-medium text-slate-500 dark:text-slate-300 mb-2 transition hover:border-[#03A9f4]"
            >
              <FaMagnifyingGlass className="text-[#03A9f4]" aria-hidden="true" />
              <span>Search subjects, exams, fees, partners...</span>
            </button>

            {navItems.map((item) => {
              const isActive = checkIsActive(item);
              return (
                <Link
                  key={item.id}
                  to={item.link}
                  onClick={(e) => handleNavClick(e, item)}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm transition-all duration-200 ${
                    isActive
                      ? "border-l-4 border-[#03A9f4] bg-blue-50/90 font-semibold text-[#0b1a6e] dark:bg-sky-950/70 dark:text-[#03A9f4] shadow-2xs"
                      : "font-medium text-slate-700 hover:bg-slate-100 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-[#03A9f4]"
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && (
                    <span className="flex h-2 w-2 rounded-full bg-[#03A9f4] ring-4 ring-[#03A9f4]/20" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>

    {/* Global Full-Site Search Modal */}
    <SearchModal
      isOpen={isSearchOpen}
      onClose={() => setIsSearchOpen(false)}
    />
    </>
  );
};

export default Header;
