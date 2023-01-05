import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import About from './routes/about'
import Home from './routes/home'
import Professional from './routes/professional'
import Personal from './routes/personal'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/professional" element={<Professional />} />
        <Route path="/personal" element={<Personal />} />
      </Routes>
    </>
  )
}

export default App
