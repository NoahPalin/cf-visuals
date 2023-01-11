import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import scrubDaddy from './images/scrub-daddy.png'

function Home() {
  return (
    <>
      <div>
        Home
      </div>
      <img src={scrubDaddy} alt='Scrub daddy photo shoot.'/>
    </>
  )
}

export default Home
