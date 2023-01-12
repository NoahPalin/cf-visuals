import { useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import '../styles/nav.css'
import cameraLogo from './images/camera.png'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavMain() {
  return (
    <>
      <div className='nav'>
        <img className='logo' src={cameraLogo} alt='CF-Visuals logo.'/>
        <div className='title'>CF Visuals</div>
        <div className='nav-links'>
          <Link className='link' to='/'>Home</Link>
          <Link className='link' to='/about'>About</Link>
          <Link className='link' to='/professional'>Professional</Link>
          <Link className='link' to='/personal'>Personal</Link>
        </div>
      </div>
    </>
  )
}

export default NavMain
