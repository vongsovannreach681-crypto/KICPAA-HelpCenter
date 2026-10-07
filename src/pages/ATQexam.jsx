import React from 'react';
import Header from '../components/navbar/Header';
import ExamBanner from '../components/HeroSection/ExamBanner';
import AIChatbot from '../components/chatbot/AIChatbot';

const ATQexam = () => {
  return (
    <div>
      <Header />
      <main>
        <ExamBanner />
      </main>
      <AIChatbot />
    </div>
  );
};

export default ATQexam;