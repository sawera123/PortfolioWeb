import React from 'react'
import Preloader from './Preloader'
import Header from './Header'
import Request from "./Request"
import Footer from './Footer'

export default function RequestPage() {
  return (
    <>
       <Preloader/>
       <Header/>
       <Request/>
      <Footer/>
    </>
  )
}
