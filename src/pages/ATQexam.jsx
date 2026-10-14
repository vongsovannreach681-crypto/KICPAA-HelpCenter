import React from 'react';
import Header from '../components/navbar/Header';
import ExamBanner from '../components/HeroSection/ExamBanner';
import AIChatbot from '../components/chatbot/AIChatbot';
import ExamSdech from '../components/contents/ExamSdech';

const ATQexam = () => {
  return (
    <div>
      <Header />
      <main>
        <ExamBanner />
        <div data-aos="fade-up" data-aos-delay="100">
          <ExamSdech />
        </div>
      </main>
      <AIChatbot />
    </div>
  );
};

export default ATQexam;