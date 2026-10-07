import React, { useEffect, useRef } from "react";
import { FaCircleQuestion } from "react-icons/fa6";
import helpCenterImage from "../../assets/images/help.png";
import {
  FaArrowRight
  
} from "react-icons/fa6";
const HomeSection = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const section = canvas.parentElement;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let particles = [];
    let animationFrame;

    const draw = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      context.clearRect(0, 0, width, height);

      particles.forEach((particle, index) => {
        if (!reducedMotion) {
          particle.x += particle.velocityX;
          particle.y += particle.velocityY;
          if (particle.x < 0 || particle.x > width) particle.velocityX *= -1;
          if (particle.y < 0 || particle.y > height) particle.velocityY *= -1;
        }

        context.beginPath();
        context.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
        context.fillStyle = "rgba(3, 169, 244, 0.35)";
        context.fill();

        for (
          let nextIndex = index + 1;
          nextIndex < particles.length;
          nextIndex += 1
        ) {
          const nextParticle = particles[nextIndex];
          const distance = Math.hypot(
            particle.x - nextParticle.x,
            particle.y - nextParticle.y,
          );
          if (distance < 140) {
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(nextParticle.x, nextParticle.y);
            context.strokeStyle = `rgba(3, 169, 244, ${(1 - distance / 140) * 0.12})`;
            context.stroke();
          }
        }
      });
    };

    const animate = () => {
      draw();
      animationFrame = requestAnimationFrame(animate);
    };

    const resizeCanvas = () => {
      const bounds = section.getBoundingClientRect();
      const pixelRatio = window.devicePixelRatio || 1;
      canvas.width = bounds.width * pixelRatio;
      canvas.height = bounds.height * pixelRatio;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      particles = Array.from(
        {
          length: Math.min(
            90,
            Math.max(24, Math.floor((bounds.width * bounds.height) / 14000)),
          ),
        },
        () => ({
          x: Math.random() * bounds.width,
          y: Math.random() * bounds.height,
          velocityX: (Math.random() - 0.5) * 0.35,
          velocityY: (Math.random() - 0.5) * 0.35,
        }),
      );
      cancelAnimationFrame(animationFrame);
      if (!reducedMotion) animationFrame = requestAnimationFrame(animate);
      draw();
    };

    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(section);

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <section className="poppins relative mt-20 overflow-hidden bg-gradient-to-br from-sky-100 via-blue-200 to-cyan-200 dark:from-slate-950 dark:via-blue-950 dark:to-slate-900">
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        {/* Text */}
        <div className="text-center lg:text-left" data-aos="fade-up">
          <p className="text-base font-medium text-[#03A9f4] dark:text-blue-300" data-aos="fade-right" data-aos-delay="100">
            Welcome to
          </p>

          <h1 className="mt-3 text-3xl font-semibold leading-tight text-blue-950 sm:text-4xl lg:text-5xl dark:text-white" data-aos="fade-up" data-aos-delay="200">
            Accounting Technician Qualification help center
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-0 dark:text-gray-300" data-aos="fade-up" data-aos-delay="300">
            Questions about the ATQ Program or the exam? Find what you need
            here, or reach out and we&apos;ll help you directly.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="400">
            <a
              href="/atq-program"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#03A9f4] px-6 py-3 text-sm font-medium text-white shadow-md transition-colors hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800"
            >
              Browse ATQ Program <FaArrowRight aria-hidden="true" className="text-xs" />
            </a>
         
          </div>
        </div>

        {/* Image */}
        <div className="relative" data-aos="zoom-in" data-aos-delay="300">
          <div className="absolute inset-4 rounded-3xl" aria-hidden="true" />
          <img
            className="w-full h-auto"
            src={helpCenterImage}
            alt="Help center illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
