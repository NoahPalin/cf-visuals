import { useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import About from './components/about'
import Home from './components/home'
import Nav from './components/nav'
import Professional from './components/professional'
import Personal from './components/personal'

function App() {
  return (
    <>
    <Nav/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/professional' element={<Professional />} />
        <Route path='/personal' element={<Personal />} />
      </Routes>
    </>
  )
}

export default App
