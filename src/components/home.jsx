import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import '../styles/home.css'
import HomeCarousel from './home-carousel'

import img2 from "./images/home-images/DSC_0106.jpg";
import img3 from "./images/home-images/DSC_0331.jpg";
import img4 from "./images/home-images/scrub-daddy.png";
import img5 from "./images/home-images/DSC_0164.jpg";

function Home() {
  
  
  return (
    <>
      <HomeCarousel/>
    </>
  )
}

export default Home
