import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaMoon,
  FaSun,
  FaMagnifyingGlass,
  FaCheck,
  FaChevronDown,
} from "react-icons/fa6";
import logo from "../../assets/logo/KicpaaLogo.png";
import darkLogo from "../../assets/logo/dark-logo.png";
import englishFlag from "../../assets/images/flag/en.jpg";
import khmerFlag from "../../assets/images/flag/kh.jpg";
import SearchModal from "../search/SearchModal";
import { useLanguage } from "../../context/LanguageContext";

const FlagUK = ({ className = "h-3.5 w-5" }) => (
  <img
    src={englishFlag}
    alt=""
    className={`inline-block shrink-0 rounded-xs shadow-2xs ${className}`}
    loading="lazy"
  />
);

const FlagCambodia = ({ className = "h-3.5 w-5" }) => (
  <img
    src={khmerFlag}
    alt=""
    className={`inline-block shrink-0 rounded-xs shadow-2xs ${className}`}
    loading="lazy"
  />
);

const navItems = [
  {
    id: 1,
    key: "home",
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    key: "atqProgram",
    name: "ATQ Program",
    link: "/atq-program",
  },
  {
    id: 3,
    key: "syllabus",
    name: "Syllabus",
    link: "/subject-course",
  },
  {
    id: 4,
    key: "atqExam",
    name: "ATQ Exam",
    link: "/atq-examination",
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const langDropdownRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();
  const { language, setLanguage, t, isKhmer } = useLanguage();

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

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(e.target)
      ) {
        setIsLangDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
    if (item.link === "/atq-examination" || item.key === "atqExam") {
      return (
        currentPath === "/atq-examination" ||
        currentPath === "/atq-exam" ||
        currentHash === "#atq-exam"
      );
    }
    if (item.link.startsWith("/#")) {
      return currentPath === "/" && currentHash === item.link.substring(1);
    }
    return (
      currentPath === item.link ||
      (item.link !== "/" && currentPath.startsWith(item.link + "/"))
    );
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
                className="h-16 sm:h-9 w-auto md:h-16"
                src={isDarkMode ? darkLogo : logo}
                alt="KICPAA Logo"
              />
            </Link>
          </div>

          {/* Desktop Navigation with IsActive State */}
          <nav className="hidden items-center gap-1.5 lg:flex">
            {navItems.map((item) => {
              const isActive = checkIsActive(item);
              const displayName = t(`nav.${item.key}`, item.name);

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
                  <span>{displayName}</span>
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

          {/* Desktop Right Actions: Language Switcher + Search + Dark Mode */}
          <div className="hidden items-center gap-2.5 lg:flex">
            {/* Language Switcher Dropdown */}
            <div className="relative" ref={langDropdownRef}>
              <button
                type="button"
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="cursor-pointer inline-flex items-center gap-2 rounded-xl border border-slate-200/80 bg-slate-100/80 dark:border-slate-700/80 dark:bg-slate-800/80 px-2.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:border-[#03A9f4] hover:bg-white dark:hover:bg-slate-800 transition-all shadow-2xs"
                aria-expanded={isLangDropdownOpen}
                aria-haspopup="listbox"
                aria-label={t("nav.language", "Language")}
                title={t("nav.language", "Language")}
              >
                {isKhmer ? (
                  <>
                    <FlagCambodia />
                    <span className="font-medium text-slate-800 dark:text-slate-100">
                      ខ្មែរ
                    </span>
                  </>
                ) : (
                  <>
                    <FlagUK />
                    <span className="font-medium text-slate-800 dark:text-slate-100">
                      EN
                    </span>
                  </>
                )}
                <FaChevronDown
                  className={`text-[10px] text-slate-400 transition-transform duration-200 ${
                    isLangDropdownOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              {/* Language Dropdown Menu */}
              {isLangDropdownOpen && (
                <div
                  role="listbox"
                  className="absolute right-0 top-full mt-1.5 w-44 rounded-xl border border-slate-200/90 dark:border-slate-700 bg-white dark:bg-slate-900 p-1.5 shadow-xl shadow-slate-950/10 backdrop-blur-md z-50 animate-in fade-in zoom-in-95 duration-150"
                >
                  <button
                    type="button"
                    role="option"
                    aria-selected={language === "en"}
                    onClick={() => {
                      setLanguage("en");
                      setIsLangDropdownOpen(false);
                    }}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-xs font-medium transition-colors ${
                      language === "en"
                        ? "bg-blue-50 text-[#0b1a6e] font-semibold dark:bg-sky-950/70 dark:text-sky-300"
                        : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <FlagUK />
                      <span>English</span>
                    </span>
                    {language === "en" && (
                      <FaCheck className="text-xs text-[#03A9f4]" aria-hidden="true" />
                    )}
                  </button>

                  <button
                    type="button"
                    role="option"
                    aria-selected={language === "km"}
                    onClick={() => {
                      setLanguage("km");
                      setIsLangDropdownOpen(false);
                    }}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-xs font-medium transition-colors mt-0.5 ${
                      language === "km"
                        ? "bg-blue-50 text-[#0b1a6e] font-semibold dark:bg-sky-950/70 dark:text-sky-300"
                        : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <FlagCambodia />
                      <span>ខ្មែរ (Khmer)</span>
                    </span>
                    {language === "km" && (
                      <FaCheck className="text-xs text-[#03A9f4]" aria-hidden="true" />
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="cursor-pointer inline-flex items-center gap-2 rounded-xl border border-slate-200/80 bg-slate-100/80 dark:border-slate-700/80 dark:bg-slate-800/80 px-3 py-2 text-xs text-slate-600 dark:text-slate-300 hover:border-[#03A9f4] hover:bg-white dark:hover:bg-slate-800 transition-all shadow-2xs group"
              aria-label={t("nav.searchAria", "Search content")}
              title={t("nav.searchPlaceholder", "Search...")}
            >
              <FaMagnifyingGlass
                className="text-xs text-slate-400 group-hover:text-[#03A9f4] transition-colors"
                aria-hidden="true"
              />
              <span className="text-xs font-medium">
                {t("nav.searchPlaceholder", "Search...")}
              </span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              aria-label={
                isDarkMode
                  ? t("nav.lightMode", "Switch to light mode")
                  : t("nav.darkMode", "Switch to dark mode")
              }
              title={
                isDarkMode
                  ? t("nav.lightMode", "Switch to light mode")
                  : t("nav.darkMode", "Switch to dark mode")
              }
              className="cursor-pointer rounded-xl bg-gray-400/20 dark:bg-slate-800 px-3 py-2 text-blue-900 dark:text-amber-300 shadow-sm transition-all hover:bg-blue-800 hover:text-white dark:hover:bg-slate-700"
            >
              {isDarkMode ? (
                <FaSun
                  className="text-base text-amber-400 transition-transform duration-300 hover:rotate-90"
                  aria-hidden="true"
                />
              ) : (
                <FaMoon
                  className="text-base transition-transform duration-300 hover:-rotate-12"
                  aria-hidden="true"
                />
              )}
            </button>
          </div>

          {/* Mobile Right Actions: Quick Lang Toggle + Search + Dark Mode + Menu */}
          <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden">
            {/* Quick Language Toggle Pill on Mobile */}
            <button
              onClick={() => setLanguage(language === "en" ? "km" : "en")}
              aria-label="Toggle language between English and Khmer"
              title={isKhmer ? "Switch to English" : "ប្តូរទៅជាភាសាខ្មែរ"}
              className="cursor-pointer inline-flex items-center gap-1.5 rounded-xl border border-slate-200/80 bg-slate-100/90 dark:border-slate-700 dark:bg-slate-800 px-2 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 shadow-2xs transition active:scale-95"
            >
              {isKhmer ? (
                <>
                  <FlagCambodia className="h-3 w-4" />
                  <span className="text-[11px] font-bold">ខ្មែរ</span>
                </>
              ) : (
                <>
                  <FlagUK className="h-3 w-4" />
                  <span className="text-[11px] font-bold">EN</span>
                </>
              )}
            </button>

            {/* Mobile Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label={t("nav.searchAria", "Search site content")}
              title={t("nav.searchPlaceholder", "Search...")}
              className="cursor-pointer rounded-xl bg-gray-400/20 dark:bg-slate-800 p-2 text-blue-900 dark:text-sky-300 shadow-sm transition hover:bg-blue-800 hover:text-white dark:hover:bg-slate-700"
            >
              <FaMagnifyingGlass className="text-sm" aria-hidden="true" />
            </button>

            {/* Mobile Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              aria-label={
                isDarkMode
                  ? t("nav.lightMode", "Switch to light mode")
                  : t("nav.darkMode", "Switch to dark mode")
              }
              title={
                isDarkMode
                  ? t("nav.lightMode", "Switch to light mode")
                  : t("nav.darkMode", "Switch to dark mode")
              }
              className="cursor-pointer rounded-xl bg-gray-400/20 dark:bg-slate-800 p-2 text-blue-900 dark:text-amber-300 shadow-sm transition hover:bg-blue-800 hover:text-white dark:hover:bg-slate-700"
            >
              {isDarkMode ? (
                <FaSun className="text-sm text-amber-400" aria-hidden="true" />
              ) : (
                <FaMoon className="text-sm" aria-hidden="true" />
              )}
            </button>

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
              {/* Language Selection Buttons in Mobile Drawer */}
              <div className="flex items-center gap-2 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-xl mb-2">
                <button
                  type="button"
                  onClick={() => setLanguage("en")}
                  className={`flex-1 inline-flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-semibold transition-all ${
                    language === "en"
                      ? "bg-white dark:bg-slate-700 text-[#0b1a6e] dark:text-white shadow-xs"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  <FlagUK />
                  <span>English</span>
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage("km")}
                  className={`flex-1 inline-flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-semibold transition-all ${
                    language === "km"
                      ? "bg-white dark:bg-slate-700 text-[#0b1a6e] dark:text-white shadow-xs"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  <FlagCambodia />
                  <span>ខ្មែរ (Khmer)</span>
                </button>
              </div>

              {/* Mobile Drawer Search Bar */}
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsSearchOpen(true);
                }}
                className="flex w-full items-center gap-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3.5 py-2.5 text-xs font-medium text-slate-500 dark:text-slate-300 mb-2 transition hover:border-[#03A9f4]"
              >
                <FaMagnifyingGlass
                  className="text-[#03A9f4]"
                  aria-hidden="true"
                />
                <span>
                  {t(
                    "nav.searchDrawerPlaceholder",
                    "Search subjects, exams, fees, partners..."
                  )}
                </span>
              </button>

              {navItems.map((item) => {
                const isActive = checkIsActive(item);
                const displayName = t(`nav.${item.key}`, item.name);

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
                    <span>{displayName}</span>
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
