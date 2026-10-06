import React from 'react'
import Header from './components/navbar/Header'
import HomeContent from './components/contents/HomeContent'
import HomeSection from './components/HeroSection/HomeSection'
const App = () => {
  return (
    <>
      <Header />
      <HomeSection/>
      <HomeContent/>
    </>
  )
}

export default App