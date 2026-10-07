import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/navbar/Header';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 dark:bg-slate-950 dark:text-white">
      <Header />

      <main className="pt-28 pb-16">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.15),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.16),_transparent_30%)]" aria-hidden="true" />

          <div className="container relative">
            <div className="grid items-center gap-10 overflow-hidden rounded-[32px] border border-sky-100 bg-white/80 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur-sm dark:border-sky-900/40 dark:bg-slate-900/80 sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:p-12">
              <div>
                <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-sky-700 dark:border-sky-800 dark:bg-sky-950/30 dark:text-sky-300">
                  404 Error
                </span>

                <h1 className="mt-6 text-4xl font-black leading-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
                  Oops!<br />
                  This page
                  <span className="block text-sky-600 dark:text-sky-400">does not exist.</span>
                </h1>

                <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  The page you are looking for might have moved, been removed, or the link may be incorrect. Let&apos;s get you back to the ATQ program resources.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    to="/"
                    className="inline-flex items-center justify-center rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-600"
                  >
                    Back to Home
                  </Link>

                  <Link
                    to="/atq-program"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-sky-600 dark:hover:text-sky-300"
                  >
                    Explore Courses
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <Link to="/subject-course" className="rounded-full bg-slate-100 px-3 py-1.5 transition hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700">
                    Subject Courses
                  </Link>
                  <Link to="/atq-examination" className="rounded-full bg-slate-100 px-3 py-1.5 transition hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700">
                    ATQ Exam
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-sky-200/60 via-cyan-100/50 to-blue-200/60 blur-2xl dark:from-sky-500/10 dark:via-cyan-500/10 dark:to-blue-600/10" aria-hidden="true" />

                <div className="relative rounded-[28px] border-2 border-dashed border-sky-300/80 bg-gradient-to-br from-sky-50 via-white to-cyan-50 p-4 shadow-inner dark:border-sky-700 dark:from-slate-900 dark:via-slate-900 dark:to-sky-950/40">
                  <div className="rounded-[22px] bg-white/80 p-4 shadow-sm ring-1 ring-slate-200/80 dark:bg-slate-900/80 dark:ring-slate-700">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-rose-400" aria-hidden="true" />
                        <span className="h-3 w-3 rounded-full bg-amber-400" aria-hidden="true" />
                        <span className="h-3 w-3 rounded-full bg-emerald-400" aria-hidden="true" />
                      </div>
                      <span className="rounded-full bg-sky-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-600 dark:bg-sky-900/40 dark:text-sky-300">
                        Banner
                      </span>
                    </div>

                    <div className="mt-5 flex min-h-[260px] items-center justify-center rounded-[20px] border border-sky-200 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.18),_rgba(255,255,255,0.75)_45%,_rgba(12,74,110,0.08)_100%)] text-center dark:border-sky-800 dark:bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.18),_rgba(15,23,42,0.66)_48%,_rgba(8,47,73,0.45)_100%)]">
                      <div>
                        <div className="text-6xl font-black text-sky-600 dark:text-sky-400">404</div>
                        <div className="mt-3 text-xs font-semibold uppercase tracking-[0.38em] text-slate-500 dark:text-slate-300">
                          Image area
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 text-center text-sm text-slate-500 dark:text-slate-300">
                      Banner image placeholder — replace with your final design later.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default NotFoundPage;
