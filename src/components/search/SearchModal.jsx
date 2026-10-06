import React, { useState, useEffect, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaMagnifyingGlass,
  FaXmark,
  FaArrowRight,
  FaBook,
  FaFileInvoiceDollar,
  FaBuilding,
  FaCircleQuestion,
  FaGraduationCap,
  FaCalendarDays,
  FaCompass,
} from "react-icons/fa6";
import { searchableItems } from "../../data/searchData";

const categories = [
  "All",
  "Pages",
  "Subjects",
  "Exam & FAQs",
  "Fees & Admission",
  "Internships",
];

const categoryIcons = {
  Pages: FaCompass,
  Curriculum: FaGraduationCap,
  "Study Resources": FaBook,
  "Fees & Admission": FaFileInvoiceDollar,
  Internships: FaBuilding,
  "Subjects (Principles)": FaBook,
  "Subjects (Technician)": FaGraduationCap,
  "Exam & FAQs": FaCircleQuestion,
  "Internship Providers": FaBuilding,
  "Contact & Visit": FaCalendarDays,
};

const SearchModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  // Focus input when opened & lock background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const timer = setTimeout(() => inputRef.current?.focus(), 50);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "";
      };
    }
    document.body.style.overflow = "";
  }, [isOpen]);

  const handleClose = () => {
    setQuery("");
    setActiveCategory("All");
    setSelectedIndex(0);
    onClose();
  };

  const handleQueryChange = (val) => {
    setQuery(val);
    setSelectedIndex(0);
  };

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setSelectedIndex(0);
  };

  // Filter and score search results
  const filteredResults = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    const words = trimmed ? trimmed.split(/\s+/) : [];

    return searchableItems
      .filter((item) => {
        // Category filter
        if (activeCategory !== "All") {
          if (activeCategory === "Subjects") {
            if (!item.category.includes("Subjects")) return false;
          } else if (activeCategory === "Internships") {
            if (!item.category.includes("Internship")) return false;
          } else if (!item.category.toLowerCase().includes(activeCategory.toLowerCase())) {
            return false;
          }
        }

        // Search words filter
        if (words.length === 0) return true;

        const searchableContent = [
          item.title,
          item.description,
          item.badge,
          item.category,
          ...(item.keywords || []),
        ]
          .join(" ")
          .toLowerCase();

        return words.every((word) => searchableContent.includes(word));
      })
      .map((item) => {
        // Calculate relevance score
        let score = 0;
        if (trimmed) {
          const titleLower = item.title.toLowerCase();
          if (titleLower === trimmed) score += 100;
          else if (titleLower.startsWith(trimmed)) score += 50;
          else if (titleLower.includes(trimmed)) score += 30;

          if (item.keywords?.some((k) => k.toLowerCase().includes(trimmed))) score += 20;
          if (item.description.toLowerCase().includes(trimmed)) score += 10;
        }
        return { ...item, score };
      })
      .sort((a, b) => b.score - a.score);
  }, [query, activeCategory]);

  // Navigate to target
  const handleSelect = (item) => {
    handleClose();
    if (!item?.path) return;

    const [targetPath, targetHash] = item.path.split("#");
    const currentPath = window.location.pathname;

    if (targetPath && targetPath !== currentPath && targetPath !== "") {
      navigate(item.path);
    } else if (targetHash) {
      const elem = document.getElementById(targetHash);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth", block: "start" });
        elem.classList.add("ring-4", "ring-[#03A9f4]/40", "transition-all");
        setTimeout(() => {
          elem.classList.remove("ring-4", "ring-[#03A9f4]/40");
        }, 2200);
      } else {
        navigate(`${currentPath}#${targetHash}`);
      }
    } else if (targetPath) {
      navigate(targetPath);
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev < filteredResults.length - 1 ? prev + 1 : prev
      );
      scrollSelectedIntoView(selectedIndex + 1);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
      scrollSelectedIntoView(selectedIndex - 1);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredResults[selectedIndex]) {
        handleSelect(filteredResults[selectedIndex]);
      }
    }
  };

  const scrollSelectedIntoView = (index) => {
    if (!listRef.current) return;
    const items = listRef.current.children;
    if (items[index]) {
      items[index].scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  };

  // Helper to highlight matching text
  const highlightMatch = (text, highlight) => {
    if (!highlight.trim()) return text;
    const parts = text.split(new RegExp(`(${highlight.trim()})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === highlight.trim().toLowerCase() ? (
        <mark
          key={i}
          className="rounded-xs bg-amber-200/90 text-slate-900 px-0.5 font-semibold dark:bg-amber-400 dark:text-slate-950"
        >
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search ATQ Content"
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto px-3 py-[6vh] font-['Poppins',sans-serif] sm:px-6 sm:py-[9vh]"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/65 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div
        onKeyDown={handleKeyDown}
        className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_24px_80px_-24px_rgba(15,23,42,0.45)] transition-all dark:border-slate-700 dark:bg-slate-900 sm:rounded-3xl"
      >
        <div className="border-b border-slate-200 bg-white px-4 py-4 dark:border-slate-800 dark:bg-slate-900 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex min-w-0 flex-1 items-center overflow-hidden rounded-full border border-slate-300 bg-white shadow-inner transition focus-within:border-[#03A9f4] focus-within:ring-2 focus-within:ring-[#03A9f4]/20 dark:border-slate-700 dark:bg-slate-800 dark:focus-within:border-[#03A9f4]">
              <FaMagnifyingGlass className="ml-4 shrink-0 text-sm text-slate-400" aria-hidden="true" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => handleQueryChange(e.target.value)}
                placeholder="Search subjects, exams, fees, partners..."
                aria-label="Search ATQ content"
                className="h-11 min-w-0 flex-1 bg-transparent px-3 text-sm text-slate-800 placeholder-slate-400 outline-none dark:text-slate-100 dark:placeholder-slate-500 sm:text-base"
              />
              {query && (
                <button
                  onClick={() => handleQueryChange("")}
                  aria-label="Clear search"
                  className="mr-1 rounded-full p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-700 dark:hover:text-slate-200"
                >
                  <FaXmark className="text-sm" aria-hidden="true" />
                </button>
              )}
              <button
                onClick={() => inputRef.current?.focus()}
                aria-label="Focus search"
                className="flex h-11 w-14 shrink-0 items-center justify-center border-l border-slate-200 bg-slate-50 text-[#0b1a6e] transition hover:bg-sky-50 hover:text-[#03A9f4] dark:border-slate-700 dark:bg-slate-700 dark:text-sky-300 dark:hover:bg-slate-600"
              >
                <FaMagnifyingGlass aria-hidden="true" />
              </button>
            </div>
            <button
              onClick={handleClose}
              aria-label="Close search"
              className="shrink-0 rounded-full p-2.5 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              <FaXmark className="text-base" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Filter Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto border-b border-slate-200 bg-white px-4 py-3 no-scrollbar dark:border-slate-800 dark:bg-slate-900 sm:px-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`cursor-pointer shrink-0 rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                activeCategory === cat
                  ? "bg-[#0b1a6e] text-white shadow-sm dark:bg-[#03A9f4] dark:text-slate-950"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results / Empty View */}
        <div className="flex-1 overflow-y-auto bg-white px-4 py-4 dark:bg-slate-900 sm:px-8 sm:py-5">
          {query.trim() && (filteredResults.length === 0 ? (
            <div className="rounded-xl border border-dashed border-slate-300 bg-white px-4 py-12 text-center dark:border-slate-700 dark:bg-slate-900/80">
              <span className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-500">
                <FaMagnifyingGlass aria-hidden="true" />
              </span>
              <p className="text-base font-semibold text-slate-700 dark:text-slate-300">
                No matching results found for "{query}"
              </p>
              <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
                Try searching for subjects like "TQ1", "Costing", "Exam", or "Fees".
              </p>
            </div>
          ) : (
            <div>
              <div className="px-1 pb-2 pt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                Found {filteredResults.length} {filteredResults.length === 1 ? "result" : "results"}
              </div>

              <div ref={listRef} className="divide-y divide-slate-100 dark:divide-slate-800">
              {filteredResults.map((item, index) => {
                const isSelected = selectedIndex === index;
                const IconComponent = categoryIcons[item.category] || FaCompass;

                return (
                  <div
                    key={item.id}
                    onClick={() => handleSelect(item)}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`group flex cursor-pointer items-start justify-between gap-3 rounded-xl border border-transparent px-3 py-3.5 transition-colors ${
                      isSelected
                        ? "border-sky-100 bg-sky-50/80 dark:border-slate-700 dark:bg-slate-800/80"
                        : "hover:bg-slate-50 dark:hover:bg-slate-800/50"
                    }`}
                  >
                    <div className="flex items-start gap-3 min-w-0">
                      <span
                        className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm transition-colors ${
                          isSelected
                            ? "bg-[#0b1a6e] text-white dark:bg-[#03A9f4] dark:text-slate-950"
                            : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 group-hover:bg-[#0b1a6e] group-hover:text-white"
                        }`}
                      >
                        <IconComponent aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                            {highlightMatch(item.title, query)}
                          </h4>
                          {item.badge && (
                            <span className="rounded-md bg-blue-100/70 px-1.5 py-0.5 text-[10px] font-semibold text-[#0b1a6e] dark:bg-sky-950/70 dark:text-sky-300">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <p className="mt-1 line-clamp-2 text-xs text-slate-600 dark:text-slate-400">
                          {highlightMatch(item.description, query)}
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0 self-center hidden sm:flex items-center text-slate-400 group-hover:text-[#03A9f4]">
                      <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </div>
                  </div>
                );
              })}
              </div>
            </div>
          ))}
        </div>

        {/* Modal Footer Keyboard Legend */}
        <div className="hidden sm:flex items-center justify-between border-t border-slate-200 bg-slate-50 px-5 py-3 text-[11px] text-slate-500 dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[10px] text-slate-600 dark:bg-slate-800 dark:text-slate-400">↑</kbd>
              <kbd className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[10px] text-slate-600 dark:bg-slate-800 dark:text-slate-400">↓</kbd>
              Navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[10px] text-slate-600 dark:bg-slate-800 dark:text-slate-400">↵</kbd>
              Select
            </span>
            <span className="flex items-center gap-1">
              <kbd className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[10px] text-slate-600 dark:bg-slate-800 dark:text-slate-400">ESC</kbd>
              Close
            </span>
          </div>
          <span>KICPAA ATQ Search</span>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
