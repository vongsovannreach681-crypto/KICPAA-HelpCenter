import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

const SITE_URL = "https://kicpaa-help-center.vercel.app";

const pageMetadata = {
  "/": {
    en: {
      title: "KICPAA ATQ Help Center | Accounting Technician Qualification",
      description:
        "Find information about the KICPAA Accounting Technician Qualification (ATQ) program, syllabus, exam schedules, registration, and fees in Cambodia.",
    },
    km: {
      title: "មជ្ឈមណ្ឌលជំនួយ KICPAA ATQ | គុណវុឌ្ឍិបច្ចេកទេសគណនេយ្យ",
      description:
        "ស្វែងយល់អំពីកម្មវិធី ATQ របស់ KICPAA មុខវិជ្ជាសិក្សា កាលវិភាគប្រឡង ការចុះឈ្មោះ និងតម្លៃសេវានៅកម្ពុជា។",
    },
  },
  "/atq-program": {
    en: {
      title: "ATQ Program & Qualification | KICPAA",
      description:
        "Learn about the KICPAA Accounting Technician Qualification, its levels, course structure, admission process, learning resources, and fees.",
    },
    km: {
      title: "កម្មវិធី និងគុណវុឌ្ឍិ ATQ | KICPAA",
      description:
        "ស្វែងយល់អំពីគុណវុឌ្ឍិបច្ចេកទេសគណនេយ្យ ATQ របស់ KICPAA កម្រិតសិក្សា រចនាសម្ព័ន្ធវគ្គសិក្សា ការចូលរៀន និងតម្លៃសេវា។",
    },
  },
  "/subject-course": {
    en: {
      title: "ATQ Syllabus & Subject Courses | KICPAA",
      description:
        "Explore the ATQ syllabus and course specifications for all eight subjects, from TQ1 to TQ8, in the KICPAA Accounting Technician Qualification.",
    },
    km: {
      title: "កម្មវិធីសិក្សា និងមុខវិជ្ជា ATQ | KICPAA",
      description:
        "ពិនិត្យមើលកម្មវិធីសិក្សា ATQ និងព័ត៌មានលម្អិតនៃមុខវិជ្ជាទាំង ៨ ចាប់ពី TQ1 ដល់ TQ8 ក្នុងគុណវុឌ្ឍិរបស់ KICPAA។",
    },
  },
  "/atq-examination": {
    en: {
      title: "ATQ Exam Schedule & Registration | KICPAA",
      description:
        "Check KICPAA ATQ examination information, monthly exam schedules, booking deadlines, exam requirements, and registration steps.",
    },
    km: {
      title: "កាលវិភាគ និងការចុះឈ្មោះប្រឡង ATQ | KICPAA",
      description:
        "ស្វែងរកព័ត៌មានប្រឡង ATQ របស់ KICPAA កាលវិភាគប្រឡងប្រចាំខែ ថ្ងៃផុតកំណត់ តម្រូវការប្រឡង និងជំហានចុះឈ្មោះ។",
    },
  },
};

function setMetaContent(selector, attribute, value) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }
  element.setAttribute(attribute, value);
}

export default function SeoMetadata() {
  const { pathname } = useLocation();
  const { language } = useLanguage();
  const normalizedPath =
    pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;

  useEffect(() => {
    const metadata = pageMetadata[normalizedPath];
    const page = metadata?.[language] || metadata?.en;
    const isIndexable = Boolean(page);

    document.documentElement.lang = language;
    document.title = page?.title || "Page not found | KICPAA ATQ Help Center";
    setMetaContent(
      'meta[name="description"]',
      "content",
      page?.description ||
        "The requested page could not be found on the KICPAA ATQ Help Center.",
    );
    setMetaContent(
      'meta[name="robots"]',
      "content",
      isIndexable ? "index, follow, max-image-preview:large" : "noindex, follow",
    );

    if (!isIndexable) {
      document.head.querySelector('link[rel="canonical"]')?.remove();
      return;
    }

    const canonicalUrl = `${SITE_URL}${normalizedPath}`;
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    setMetaContent('meta[property="og:title"]', "content", page.title);
    setMetaContent(
      'meta[property="og:locale"]',
      "content",
      language === "km" ? "km_KH" : "en_US",
    );
    setMetaContent(
      'meta[property="og:description"]',
      "content",
      page.description,
    );
    setMetaContent('meta[property="og:url"]', "content", canonicalUrl);
    setMetaContent('meta[name="twitter:title"]', "content", page.title);
    setMetaContent(
      'meta[name="twitter:description"]',
      "content",
      page.description,
    );
  }, [language, normalizedPath]);

  return null;
}
