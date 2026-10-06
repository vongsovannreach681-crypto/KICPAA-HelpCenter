import React from 'react'
import Header from '../components/navbar/Header'
import CoursesBanner from '../components/HeroSection/CoursesBanner'
import ATQprogram from '../components/contents/ATQprogram'
import AIChatbot from '../components/chatbot/AIChatbot'

const ATQProgram = () => {
  return (
    <>
      <Header />
      <CoursesBanner />
      <ATQprogram />
      <AIChatbot/>
    </>
  )
}

export default ATQProgram