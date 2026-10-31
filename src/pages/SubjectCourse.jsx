import React from "react";
import Header from "../components/navbar/Header";
import SubjectCoursesBanner from "../components/HeroSection/SubjectCoursesBanner";
import SubjectCourseCatalog from "../components/contents/SubjectCourseCatalog";
import AIChatbot from "../components/chatbot/AIChatbot";
import { useLanguage } from "../context/LanguageContext";

const SubjectCourse = () => {
  const { isKhmer } = useLanguage();

  return (
    <div>
      <Header />
      <main>
        <SubjectCoursesBanner />
        <h3
          data-aos="fade-up"
          className="pt-20 text-3xl font-bold text-center text-blue-950 dark:text-white mb-10"
        >
          {isKhmer ? (
            <>
              សេចក្តីលម្អិតមុខវិជ្ជា <span className="text-amber-500">កម្មវិធី ATQ</span>
            </>
          ) : (
            <>
              ATQ <span className="text-amber-500">Subject Course</span> Specification
            </>
          )}
        </h3>
        <SubjectCourseCatalog />
      </main>
      <AIChatbot />
    </div>
  );
};

export default SubjectCourse;
