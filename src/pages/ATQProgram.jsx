import React from 'react'
import Header from '../components/navbar/Header'
import CoursesBanner from '../components/HeroSection/CoursesBanner'
import ATQprogram from '../components/contents/ATQprogram'
import MethodStudy from '../components/contents/MethodStudy'

const ATQProgram = () => {
  return (
    <>
        <Header/>
        <CoursesBanner/>
        
        <ATQprogram/>
        
    </>
  )
}

export default ATQProgram