import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import '../styles/home.css'

import img2 from "./images/home-images/DSC_0106.jpg";
import img3 from "./images/home-images/DSC_0331.jpg";
import img4 from "./images/home-images/scrub-daddy.png";
import img5 from "./images/home-images/DSC_0164.jpg";

function Home() {
  const [imageIndex, setIndex] = useState(0);
  const images = [img2, img3, img4, img5];

  useEffect(() => {
    var stage = document.getElementById("stage");

    var fadeComplete = function () { 
      stage.appendChild(arr[0]);
    };

    var arr = stage.getElementsByTagName("a");

    for (var i = 0; i < arr.length; i++) {
      arr[i].addEventListener("animationend", fadeComplete, false);
    }
  }, []);

  


  // setTimeout(() => {
  //   if (imageIndex >= images.length - 1) {
  //     setIndex(imageIndex - 2);
  //   } else {
  //     setIndex(imageIndex + 1);
  //   }
  // }, 5000);

  return (
    <>
      {/* <div className='home'>
        <img className='image' src={images[imageIndex]} alt='Images' />
      </div> */}
      <div id="stage">
        <a><img className='image' src={images[0]} /></a>
        <a><img className='image' src={images[1]} /></a>
        <a><img className='image' src={images[2]} /></a>
        <a><img className='image' src={images[3]} /></a>
      </div>
    </>
  )
}

export default Home
