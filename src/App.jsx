import React from 'react'
import Navbar from './sections/Navbar/Navbar'
import Header from './sections/header/Header'
import Project from './sections/Project/Project'
import Skills from './sections/Skills/Skills'
import Contact from './sections/Contact/Contact'
import Footer from './sections/Footer/Footer'

const App = () => {
  return (
    <div>
      <div className="top-right-circle"></div>
      <div className="middle-circle"></div>
      <div className="bottom-left-circle"></div>
      <Navbar />
      <Header />
      <Project />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App