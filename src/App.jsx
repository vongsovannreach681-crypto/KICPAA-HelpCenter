import React from 'react'
import Header from './components/navbar/Header'
import HomeContent from './components/contents/HomeContent'
import HomeSection from './components/HeroSection/HomeSection'
import AIChatbot from './components/chatbot/AIChatbot'
const App = () => {
  return (
    <>
      <Header />
      <HomeSection/>
      <HomeContent/>
      <AIChatbot/>
    </>
  )
}

export default App