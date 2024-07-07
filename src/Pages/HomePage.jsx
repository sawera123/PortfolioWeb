import React from 'react'
import { Link } from 'react-router-dom'
import Preloader from '../components/Preloader'
import Home from "../components/Home"
import Header from '../components/Header'
import Intro from '../components/Intro'
import Footer from '../components/Footer'
// import NavBar from '../components/NavBar'
export default function HomePage() {
  return (
    <>
   
    <Preloader/>
    <Header/>
    <Home/>
    <Intro/>
    <Footer/>
    </>
  )
}
