import React, { useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function RootLayout() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      delay: 50,
    });
  }, []);

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    } else {
      const targetId = location.hash.replace("#", "");
      setTimeout(() => {
        const elem = document.getElementById(targetId);
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 150);
    }
    // Refresh AOS whenever route changes
    const timer = setTimeout(() => {
      AOS.refresh();
    }, 120);

    return () => clearTimeout(timer);
  }, [location.pathname, location.hash]);

  return <Outlet />;
}
