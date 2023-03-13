import '../styles/about.css'
import caira from "./images/caira.jpg";
import cairaAward from "./images/caira-award.jpg";

function About() {
  return (
    <>
    <div className='content-holder'>
      <img className='caira-photo' src={caira} alt='Caira' />
      <div className='text-box'>
        <h1>Caira Catney-Forbes</h1>
        <p>Hi, I'm Caira. I'm a passionate photographer currently employed at MEC in Burlington Ontario. I've graduated Sheridan College where I studies Visual Merchandising Arts. </p>
        <img className='award-photo' src={cairaAward} alt='Caira' />
      </div>
    </div>
    </>
  )
}

export default About
