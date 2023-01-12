import { useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import '../styles/nav.css'

function Nav() {
  return (
    <>
    <img></img>
      <div className='nav'>
        <Link className='link' to='/'>Home</Link>
        <Link className='link' to='/about'>About</Link>
        <Link className='link' to='/professional'>Professional</Link>
        <Link className='link' to='/personal'>Personal</Link>
      </div>
    </>
  )
}

export default Nav
