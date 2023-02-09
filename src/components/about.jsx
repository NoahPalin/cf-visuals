import '../styles/about.css'
import caira from "./images/caira.jpg";
import img2 from "./images/photoshoots/linh-photoshoot/DSC_0106.jpg";



function About() {
  return (
    <>
      <div className='about-container'>
        Hello
        <img className='caira-photo' scr={caira} alt='Caira' />
      </div>
    </>
  )
}

export default About
