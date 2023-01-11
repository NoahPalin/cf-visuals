import { useState } from 'react'
import './styles/App.css'
import { Link, Routes, Route } from 'react-router-dom'
import About from './routes/about'
import Home from './routes/home'
import Professional from './routes/professional'
import Personal from './routes/personal'

function App() {
  return (
    <>
    <nav>
      <ul>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/professional'>Professional</Link>
        <Link to='/personal'>Personal</Link>
      </ul>
    </nav>
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
