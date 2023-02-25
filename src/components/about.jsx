import '../styles/about.css'
import caira from "./images/caira.jpg";

function About() {
  return (
    <>
    <div className='content-holder'>
      <img className='caira-photo' src={caira} alt='Caira' />
      <div className='text-box'>
        <h1>Caira Catney-Forbes</h1>
        <p>Hi, I'm Caira. I'm a photographer and web developer based in the UK. I'm currently studying for a BSc in Computer Science at the University of Bristol. I'm passionate about photography and web development, and I'm always looking for new opportunities to learn and grow.</p>
      </div>
    </div>
    </>
  )
}

export default About
