import { useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'

function Nav() {
  return (
      <div>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/professional'>Professional</Link>
        <Link to='/personal'>Personal</Link>
      </div>
  )
}

export default Nav
