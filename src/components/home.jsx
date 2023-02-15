import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import '../styles/home.css'
import HomeCarousel from './home-carousel'
import AllProjectsLayout from './all-projects-layout'

function Home() {
  
  
  return (
    <>
    HOMEPAGE
      <HomeCarousel/>
      <AllProjectsLayout/>
    </>
  )
}

export default Home
