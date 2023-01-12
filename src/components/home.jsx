import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import '../styles/home.css'

import img1 from "./images/home-images/DSC_0031.jpg";
import img2 from "./images/home-images/DSC_0106.jpg";
import img3 from "./images/home-images/DSC_0331.jpg";
import img4 from "./images/home-images/scrub-daddy.png";

function Home() {
  return (
    <>
      <div className='home'>
        <div className='all-images'>
          <img className='image' src={img1} alt='Images' />
        </div>
      </div>
    </>
  )
}

export default Home
