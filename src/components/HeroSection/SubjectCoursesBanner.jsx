import React, { useEffect, useRef } from "react";
import course from "../../assets/Course-01-01.png";
import { useLanguage } from "../../context/LanguageContext";

const SubjectCoursesBanner = () => {
  const { t } = useLanguage();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    const section = canvas?.parentElement;
    if (!canvas || !context || !section) return undefined;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let particles = [];
    let stars = [];
    let frame;

    const draw = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const time = performance.now() / 1000;
      context.clearRect(0, 0, width, height);

      stars.forEach((s) => {
        const twinkle = motion.matches
          ? 0.65
          : 0.5 + Math.sin(time * s.speed + s.phase) * 0.35;
        context.beginPath();
        context.arc(
          s.x,
          s.y,
          s.radius * (0.8 + twinkle * 0.35),
          0,
          Math.PI * 2,
        );
        context.fillStyle = `rgba(255,255,255,${s.opacity * twinkle})`;
        context.shadowBlur = s.radius > 1.4 ? 8 : 3;
        context.shadowColor = "rgba(191,219,254,0.9)";
        context.fill();
        context.shadowBlur = 0;
      });

      particles.forEach((p, i) => {
        if (!motion.matches) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;
        }
        context.beginPath();
        context.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(103,232,249,${p.opacity})`;
        context.fill();

        for (let j = i + 1; j < particles.length; j += 1) {
          const q = particles[j];
          const d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < 150) {
            context.beginPath();
            context.moveTo(p.x, p.y);
            context.lineTo(q.x, q.y);
            context.strokeStyle = `rgba(103,232,249,${(1 - d / 150) * 0.18})`;
            context.stroke();
          }
        }
      });
    };

    const animate = () => {
      draw();
      frame = requestAnimationFrame(animate);
    };

    const resize = () => {
      const rect = section.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const area = rect.width * rect.height;
      const count = Math.min(65, Math.max(22, Math.floor(area / 16000)));

      particles = Array.from({ length: count }, () => ({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.6 + 0.8,
        opacity: Math.random() * 0.45 + 0.25,
      }));

      const starCount = Math.min(80, Math.max(30, Math.floor(area / 12000)));
      stars = Array.from({ length: starCount }, () => ({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        radius: Math.random() * 1.6 + 0.6,
        opacity: Math.random() * 0.6 + 0.25,
        speed: Math.random() * 1.5 + 0.6,
        phase: Math.random() * Math.PI * 2,
      }));

      cancelAnimationFrame(frame);
      if (!motion.matches) frame = requestAnimationFrame(animate);
      draw();
    };

    const observer = new ResizeObserver(resize);
    observer.observe(section);

    const onMotionChange = () => {
      cancelAnimationFrame(frame);
      if (!motion.matches) frame = requestAnimationFrame(animate);
      draw();
    };
    motion.addEventListener("change", onMotionChange);
    resize();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      motion.removeEventListener("change", onMotionChange);
    };
  }, []);

  return (
    <section
      className="relative mt-20 overflow-hidden text-white"
      style={{
        background:
          "radial-gradient(ellipse at 80% 40%, #0b2f6b 0%, #061a40 55%, #04122d 100%)",
      }}
    >
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
      />

      {/* Soft glow behind the image */}
      <div
        className="pointer-events-none absolute right-[8%] top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-sky-500/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 md:min-h-[460px] md:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-20">
        {/* Copy */}
        <div data-aos="fade-right">
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-100/10 px-4 py-2 text-sm font-medium text-cyan-200">
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.9)]" />
            {t("syllabus.confidence", "Learn with confidence")}
          </p>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            {t("syllabus.titlePart1", "ATQ Subject Course")}
            <span className="mt-2 block bg-gradient-to-r from-cyan-200 to-sky-400 bg-clip-text text-transparent">
              {t("syllabus.titlePart2", "Specification")}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-blue-100/80 sm:text-lg">
            {t(
              "syllabus.subtitle",
              "Explore the subjects, topics, and learning outcomes that guide your journey through the Accounting Technician Qualification."
            )}
          </p>
        </div>

        {/* Image, framed by orbit rings */}
        <div
          data-aos="fade-left"
          data-aos-delay="150"
          className="group relative mx-auto flex w-full max-w-md items-center justify-center md:max-w-none"
        >
          <div
            className="pointer-events-none absolute aspect-square w-[92%] rounded-full border border-cyan-200/15 transition duration-700 group-hover:scale-105 group-hover:border-cyan-200/30 motion-reduce:transition-none"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute aspect-square w-[72%] rounded-full border border-cyan-200/10 transition duration-700 group-hover:scale-110 group-hover:border-cyan-200/20 motion-reduce:transition-none"
            aria-hidden="true"
          />
          <img
            src={course}
            alt=""
            className="relative w-full max-w-[300px] sm:max-w-[380px] object-contain drop-shadow-[0_24px_40px_rgba(3,169,244,0.35)] transition duration-700 ease-out group-hover:-translate-y-2 group-hover:scale-105 group-hover:drop-shadow-[0_32px_48px_rgba(3,169,244,0.55)] motion-reduce:transform-none motion-reduce:transition-none"
          />
        </div>
      </div>
    </section>
  );
};

export default SubjectCoursesBanner;
