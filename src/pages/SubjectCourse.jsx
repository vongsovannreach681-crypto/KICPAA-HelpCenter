import React from "react";
import Header from "../components/navbar/Header";
import SubjectCoursesBanner from "../components/HeroSection/SubjectCoursesBanner";
import SubjectCourseCatalog from "../components/contents/SubjectCourseCatalog";

const SubjectCourse = () => {
  return (
    <div>
      <Header />
      <main>
        <SubjectCoursesBanner />
        <h3 className=" pt-20 text-3xl font-bold text-center text-blue-950 mb-10">ATQ  <span className="text-amber-500">Subject Course</span> Specification</h3>
        <SubjectCourseCatalog />
      </main>
    </div>
  );
};

export default SubjectCourse;