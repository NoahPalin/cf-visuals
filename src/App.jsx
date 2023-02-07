import { Routes, Route } from 'react-router-dom'
import About from './components/about'
import Home from './components/home'
import NavMain from './components/navbar'
import Professional from './components/professional'
import Personal from './components/personal'
import MainFooter from './components/main-footer'
import './styles/app.css'


function App() {
  return (
    <div className='main-root'>
      <NavMain />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/professional' element={<Professional />} />
        <Route path='/personal' element={<Personal />} />
      </Routes>
      <MainFooter />
    </div>
  )
}

export default App
