import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import About from './components/about/About'
import TechnicalProgress from './components/skills/TechnicalProgress'
import Projects from './components/projects/Projects'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <TechnicalProgress/>
    <Projects/>
    <Footer/>
    </>
  )
}

export default App