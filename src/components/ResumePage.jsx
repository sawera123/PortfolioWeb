import React from 'react'
import Preloader from './Preloader'
import Header from './Header'
import Resume from './Resume'
import ResumeFooter from './ResumeFooter'
export default function ResumePage() {
  return (
    <>
       <Preloader/>
       <Header/>
    <Resume/>
    <ResumeFooter/>
    </>
  )
}
