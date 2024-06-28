import React from 'react'
// import Preloader from '../components/Preloader'
import Header from '../components/Header'
import Resume from '../components/Resume'
import ResumeFooter from '../components/ResumeFooter'
export default function ResumePage() {
  return (
    <>
       {/* <Preloader/> */}
       <Header/>
    <Resume/>
    <ResumeFooter/>
    </>
  )
}
