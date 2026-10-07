import React, { useEffect, useRef } from "react";
import book from "../../assets/images/TQbook.png";
import {
  FaArrowRight,
  FaCalendarDays,
  FaGraduationCap,
  FaLocationDot,
  FaFileLines,
  FaLaptopCode,
  FaChartPie,
  FaScaleUnbalanced,
  FaBookOpen,
} from "react-icons/fa6";

const ExamBanner = ({
  welcomeBadge = "Welcome to",
  titlePart1 = "Accounting",
  titlePart2 = "Technician",
  titlePart3 = "Qualification",
  titlePart4 = "Exam",
  description = "Kampuchea Institute of Certified Public Accountants and Auditors (KICPAA) is pleased to announce to all students, members, staffs and civil servants that the ATQ Examination will be conducted starting from February 2023 for principal level TQ1 to TQ4 at KICPAA office.",
  ctaLabel = "Exam Schedule",
  ctaHref = "#important-dates",
  secondaryCtaLabel = "Exam Guidelines",
  secondaryCtaHref = "/atq-program#admission",
  imageSrc = book,
  imageAlt = "KICPAA ATQ Examination Announcement",
  bookImages = {},
  onDatesClick,
}) => {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!section || !canvas || !context) return undefined;

    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let reducedMotion = reducedMotionQuery.matches;
    let particles = [];
    let animationFrame = 0;
    let width = 0;
    let height = 0;

    const draw = () => {
      context.clearRect(0, 0, width, height);

      particles.forEach((particle, index) => {
        if (!reducedMotion) {
          particle.x += particle.velocityX;
          particle.y += particle.velocityY;

          if (particle.x < 0 || particle.x > width) {
            particle.velocityX *= -1;
          }
          if (particle.y < 0 || particle.y > height) {
            particle.velocityY *= -1;
          }
        }

        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = "rgba(14, 165, 233, 0.42)";
        context.fill();

        for (let nextIndex = index + 1; nextIndex < particles.length; nextIndex += 1) {
          const nextParticle = particles[nextIndex];
          const distance = Math.hypot(
            particle.x - nextParticle.x,
            particle.y - nextParticle.y,
          );

          if (distance < 125) {
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(nextParticle.x, nextParticle.y);
            context.strokeStyle = `rgba(14, 165, 233, ${(1 - distance / 125) * 0.11})`;
            context.lineWidth = 1;
            context.stroke();
          }
        }
      });
    };

    const animate = () => {
      draw();
      animationFrame = window.requestAnimationFrame(animate);
    };

    const resizeCanvas = () => {
      const bounds = section.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      particles = Array.from(
        {
          length: Math.min(
            60,
            Math.max(20, Math.floor((width * height) / 18000)),
          ),
        },
        () => ({
          x: Math.random() * width,
          y: Math.random() * height,
          velocityX: (Math.random() - 0.5) * 0.3,
          velocityY: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 1.3 + 0.8,
        }),
      );

      window.cancelAnimationFrame(animationFrame);
      if (reducedMotion) {
        draw();
      } else {
        animationFrame = window.requestAnimationFrame(animate);
      }
    };

    const handleMotionPreferenceChange = (event) => {
      reducedMotion = event.matches;
      window.cancelAnimationFrame(animationFrame);
      if (reducedMotion) {
        draw();
      } else {
        animationFrame = window.requestAnimationFrame(animate);
      }
    };

    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(section);
    reducedMotionQuery.addEventListener("change", handleMotionPreferenceChange);
    resizeCanvas();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      reducedMotionQuery.removeEventListener(
        "change",
        handleMotionPreferenceChange,
      );
    };
  }, []);

  const handleCtaClick = (e) => {
    if (onDatesClick) {
      e.preventDefault();
      onDatesClick(e);
      return;
    }

    if (ctaHref.startsWith("#")) {
      const targetId = ctaHref.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative mt-20 overflow-hidden bg-gradient-to-br from-slate-50 via-sky-50 to-white transition-colors dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
    >
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 h-full w-full opacity-70 dark:opacity-45"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-sky-100/70 blur-3xl dark:bg-sky-900/20"
        aria-hidden="true"
      />

      {/* Main Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18 lg:min-h-[480px] lg:px-12 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* ========================================================= */}
          {/* LEFT COLUMN: Content & Typography                         */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 xl:col-span-7" data-aos="fade-right">
            {/* Kicker / Welcome Badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50/80 px-3.5 py-1 text-xs font-semibold text-[#18307d] backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/80 dark:text-sky-300 sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-[#f5a524]" />
              <span>{welcomeBadge}</span>
              <span className="text-slate-300 dark:text-slate-600">•</span>
              <span className="font-normal text-slate-600 dark:text-slate-400">
                Official Announcement
              </span>
            </div>

            {/* Headline with 2-Tone Colors (Navy & Yellow/Amber like the reference UI) */}
            <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight text-[#18307d] dark:text-white sm:text-5xl lg:text-[3.5rem]">
              <span>{titlePart1}</span>{" "}
              <span className="text-cyan-400">{titlePart2}</span> <br />
              <span className="text-cyan-400">{titlePart3}</span>{" "}
              <span>{titlePart4}</span>
            </h1>

            {/* Announcement Paragraph */}
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
              {description}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={ctaHref}
                onClick={handleCtaClick}
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#03A9f4] px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-sky-500/25 transition-all duration-300 hover:bg-[#18307d] hover:shadow-indigo-900/30 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#03A9f4]"
              >
                <FaCalendarDays
                  className="text-base transition-transform group-hover:scale-110"
                  aria-hidden="true"
                />
                <span>{ctaLabel}</span>
                <FaArrowRight
                  className="text-xs transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>

              {secondaryCtaLabel && (
                <a
                  href={secondaryCtaHref}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/90 px-5 py-3.5 text-base font-medium text-slate-700 shadow-sm transition-all duration-300 hover:bg-slate-100 hover:text-[#18307d] hover:-translate-y-0.5 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  <FaFileLines
                    className="text-sky-500 text-sm"
                    aria-hidden="true"
                  />
                  <span>{secondaryCtaLabel}</span>
                </a>
              )}
            </div>

            {/* Quick Info Badges */}
            <div className="mt-10 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            
             
               
            </div>
          </div>

          <div
            className="lg:col-span-6 xl:col-span-5"
            data-aos="fade-left"
            data-aos-delay="150"
          >
            {imageSrc ? (
              /* Single Custom Banner Image (User can activate anytime) */
              <div className="relative mx-auto flex max-w-md items-center justify-center">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="max-h-[480px] w-auto max-w-full rounded-2xl object-contain  transition-transform duration-500 hover:scale-105"
                />
              </div>
            ) : (

              <div className="relative mx-auto h-[360px] w-full max-w-[490px] sm:h-[390px] lg:h-[420px]">
                  <div
                  className="group absolute bottom-4 left-0 z-20 w-[150px] sm:w-[170px] lg:w-[185px] transition-all duration-300 hover:z-30 hover:-translate-y-2"
                  style={{ transform: "rotate(-2deg)" }}
                >
                  {bookImages?.book1 ? (
                    <img
                      src={bookImages.book1}
                      alt="TQ1 Book"
                      className="h-[210px] sm:h-[235px] lg:h-[255px] w-full rounded-xl object-cover shadow-2xl shadow-slate-900/30"
                    />
                  ) : (
                    <div className="relative overflow-hidden rounded-xl border border-teal-600/30 bg-gradient-to-br from-[#4ea598] via-[#3d8c80] to-[#2d7367] p-3 sm:p-4 text-white shadow-2xl shadow-slate-900/30">
                      {/* Spine highlight */}
                      <div className="pointer-events-none absolute inset-y-0 left-0 w-2.5 bg-black/15 shadow-inner" />

                      {/* Book Cover Content */}
                      <div className="ml-1 flex flex-col justify-between h-[210px] sm:h-[235px] lg:h-[255px]">
                        <div>
                          <div className="flex items-center justify-between">
                            <span className="rounded bg-white/20 px-1.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-teal-100">
                              TQ1
                            </span>
                            <FaBookOpen className="text-xs text-teal-200" />
                          </div>
                          <h2 className="mt-3 text-sm sm:text-base font-bold leading-tight text-white drop-shadow-xs">
                            Bookkeeping, Accounting & Controls
                          </h2>
                          <p className="mt-1 text-[11px] text-teal-100/90 leading-snug">
                            Record keeping, journals & trial balance.
                          </p>
                        </div>

                        <div className="border-t border-teal-400/30 pt-2 text-[10px] font-semibold text-teal-100">
                          KICPAA • Principles Level
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* --------------------------------------------------- */}
                {/* Book 2 (Center Top - White book with icon)          */}
                {/* --------------------------------------------------- */}
                <div className="group absolute left-[135px] top-1 sm:left-[160px] sm:top-2 lg:left-[175px] z-10 w-[115px] sm:w-[130px] lg:w-[140px] transition-all duration-300 hover:z-30 hover:-translate-y-2">
                  {bookImages?.book2 ? (
                    <img
                      src={bookImages.book2}
                      alt="TQ2 Book"
                      className="h-[145px] sm:h-[160px] lg:h-[175px] w-full rounded-lg object-cover shadow-xl shadow-slate-900/10"
                    />
                  ) : (
                    <div className="relative overflow-hidden rounded-lg border border-slate-200/90 bg-white p-3 text-slate-800 shadow-xl shadow-slate-900/10 dark:border-slate-700 dark:bg-slate-900 dark:text-white">
                      {/* Spine highlight */}
                      <div className="pointer-events-none absolute inset-y-0 left-0 w-2 bg-slate-200/50 dark:bg-slate-800" />

                      <div className="ml-0.5 flex flex-col justify-between h-[145px] sm:h-[160px] lg:h-[175px]">
                        <div>
                          <div className="flex items-center justify-between">
                            <span className="rounded bg-sky-100 dark:bg-sky-950 px-1.5 py-0.5 font-mono text-[9px] font-bold text-sky-700 dark:text-sky-300">
                              TQ2
                            </span>
                            <FaLaptopCode className="text-xs text-sky-500" />
                          </div>
                          <h2 className="mt-2 text-xs sm:text-[13px] font-bold leading-tight text-slate-900 dark:text-white">
                            IT Skills & Software
                          </h2>
                          <p className="mt-1 text-[10px] text-slate-500 dark:text-slate-400 line-clamp-2">
                            QuickBooks, Excel & Office.
                          </p>
                        </div>

                        <div className="text-[9px] font-medium text-slate-400 dark:text-slate-500">
                          Principles Level
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="group absolute bottom-1 left-[135px] sm:bottom-2 sm:left-[160px] lg:left-[175px] z-10 w-[115px] sm:w-[130px] lg:w-[140px] transition-all duration-300 hover:z-30 hover:-translate-y-2">
                  {bookImages?.book3 ? (
                    <img
                      src={bookImages.book3}
                      alt="TQ3 Book"
                      className="h-[145px] sm:h-[160px] lg:h-[175px] w-full rounded-lg object-cover shadow-xl shadow-slate-900/10"
                    />
                  ) : (
                    <div className="relative overflow-hidden rounded-lg border border-slate-200/90 bg-white p-3 text-slate-800 shadow-xl shadow-slate-900/10 dark:border-slate-700 dark:bg-slate-900 dark:text-white">
                      {/* Spine highlight */}
                      <div className="pointer-events-none absolute inset-y-0 left-0 w-2 bg-slate-200/50 dark:bg-slate-800" />

                      <div className="ml-0.5 flex flex-col justify-between h-[145px] sm:h-[160px] lg:h-[175px]">
                        <div>
                          <div className="flex items-center justify-between">
                            <span className="rounded bg-amber-100 dark:bg-amber-950 px-1.5 py-0.5 font-mono text-[9px] font-bold text-amber-700 dark:text-amber-300">
                              TQ3
                            </span>
                            <FaChartPie className="text-xs text-amber-500" />
                          </div>
                          <h2 className="mt-2 text-xs sm:text-[13px] font-bold leading-tight text-slate-900 dark:text-white">
                            Introduction to Costing
                          </h2>
                          <p className="mt-1 text-[10px] text-slate-500 dark:text-slate-400 line-clamp-2">
                            Budgeting & variance analysis.
                          </p>
                        </div>

                        <div className="text-[9px] font-medium text-amber-600 dark:text-amber-400">
                          Principles Level
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div
                  className="group absolute right-2 top-8 sm:right-4 sm:top-10 lg:right-6 z-20 w-[125px] sm:w-[140px] lg:w-[155px] transition-all duration-300 hover:z-30 hover:-translate-y-2"
                  style={{ transform: "rotate(1.5deg)" }}
                >
                  {bookImages?.book4 ? (
                    <img
                      src={bookImages.book4}
                      alt="TQ4 Book"
                      className="h-[165px] sm:h-[185px] lg:h-[200px] w-full rounded-xl object-cover shadow-2xl shadow-black/40"
                    />
                  ) : (
                    <div className="relative overflow-hidden rounded-xl border border-sky-400/40 bg-gradient-to-b from-[#193cb8] via-[#0284c7] to-[#38bdf8] p-3 sm:p-4 text-white shadow-2xl shadow-black/40">
                      {/* Spine highlight */}
                      <div className="pointer-events-none absolute inset-y-0 left-0 w-2.5 bg-black/20 shadow-inner" />

                      <div className="ml-0.5 flex flex-col justify-between h-[165px] sm:h-[185px] lg:h-[200px]">
                        <div>
                          <div className="flex items-center justify-between">
                            <span className="rounded bg-white/20 px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-sky-100">
                              TQ4
                            </span>
                            <FaScaleUnbalanced className="text-xs text-sky-200" />
                          </div>
                          <h2 className="mt-2 text-xs sm:text-sm font-bold leading-tight text-white drop-shadow-xs">
                            Business Law
                          </h2>
                          <p className="mt-1 text-[10px] text-sky-100/90 leading-snug">
                            Cambodian legal & commercial framework.
                          </p>
                        </div>

                        <div className="border-t border-sky-300/30 pt-2 text-[9px] font-medium text-sky-100">
                          Principles Level
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamBanner;
