import { Routes, Route } from 'react-router-dom'
import About from './components/about'
import Home from './components/home'
import NavMain from './components/navbar'
import Portfolio from './components/portfolio'
import Personal from './components/personal'
import MainFooter from './components/main-footer'
import './styles/app.css'
import ProjectLayout from './components/project-layout'

function App() {
  return (
    <div className='main-root'>
      <NavMain />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/personal' element={<Personal />} />
        {/* <Route path='*' element={<Error />} /> */}


        <Route path='/professional/:projectID' element={<ProjectLayout />} />
        <Route path='/personal/:projectID' element={<ProjectLayout />} />

      </Routes>
      <MainFooter />
    </div>
  )
}

export default App
