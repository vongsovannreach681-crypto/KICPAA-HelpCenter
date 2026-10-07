import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowUpRightFromSquare,
  FaCircleQuestion,
  FaEnvelope,
  FaPhone,
  FaTelegram,
} from "react-icons/fa6";
import darkLogo from "../../assets/logo/dark-logo.png";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-[#08143f] text-slate-300">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] lg:gap-12">
          <div>
            <Link to="/" aria-label="KICPAA ATQ home" className="inline-flex">
              <img
                src={darkLogo}
                alt="Kampuchea Institute of Certified Public Accountants and Auditors"
                className="h-auto w-64 max-w-full"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
              Your help center for the Accounting Technician Qualification
              program, courses, and examinations.
            </p>
           
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">
              Explore
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link className="transition-colors hover:text-sky-300" to="/">Home</Link></li>
              <li><Link className="transition-colors hover:text-sky-300" to="/atq-program">ATQ Program</Link></li>
              <li><Link className="transition-colors hover:text-sky-300" to="/subject-course">Subject Courses</Link></li>
              <li><Link className="transition-colors hover:text-sky-300" to="/#atq-exam">ATQ Exam</Link></li>
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">
              Student resources
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  className="inline-flex items-center gap-2 transition-colors hover:text-sky-300"
                  href="https://education.kicpaa.org/student/login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learning Hub <FaArrowUpRightFromSquare className="text-[10px]" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  className="inline-flex items-center gap-2 transition-colors hover:text-sky-300"
                  href="https://education.kicpaa.org/student/register"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Student registration <FaArrowUpRightFromSquare className="text-[10px]" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact ATQ team
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a className="inline-flex items-center gap-2 transition-colors hover:text-sky-300" href="mailto:Education@kicpaa.org">
                  <FaEnvelope className="shrink-0 text-sky-400" aria-hidden="true" />
                  Education@kicpaa.org
                </a>
              </li>
              <li>
                <a className="inline-flex items-center gap-2 transition-colors hover:text-sky-300" href="tel:+85517493140">
                  <FaPhone className="shrink-0 text-sky-400" aria-hidden="true" />
                  +855 17 493 140
                </a>
              </li>
              <li>
                <a
                  className="inline-flex items-center gap-2 transition-colors hover:text-sky-300"
                  href="https://t.me/+85517493140"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTelegram className="shrink-0 text-sky-400" aria-hidden="true" />
                   Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} KICPAA. All rights reserved.</p>
          <p>Accounting Technician Qualification (ATQ)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
