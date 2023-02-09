import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/nav.css'
import cameraLogo from './images/camera-2.png'
import logo from './images/cf-logo.png'
import NavDropdown from './nav-dropdown';

function NavMain() {

  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  console.log(dimensions);
  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);


  return (
    <>
      <div className='nav'>
        <img className='logo' src={cameraLogo} alt='CF-Visuals logo.' />
        <div className='title'>CF Visuals</div>
        <div className='nav-links'>
          {dimensions.width < 400 ? <NavDropdown /> :
            <>
              <Link className='link' to='/'>Home</Link>
              <Link className='link' to='/about'>About</Link>
              <Link className='link' to='/professional'>Professional</Link>
              <Link className='link' to='/personal'>Personal</Link>
            </>
          }
        </div>
      </div>
    </>
  )
}

export default NavMain
