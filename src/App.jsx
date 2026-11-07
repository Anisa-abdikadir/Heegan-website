import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import IndustriesSection from './pages/industries '
import Services from './pages/Services'
import ProjectsSection from './Succes/Success'
import TrustedCollaborations from './Trusted/TrustedCollaborations'
import PlatformDiagram from './pages/HeeganPlatform'
import Footer from './components/PlatformFooter'

const App = () => {
  return (
    <div>
      <div>
        <Navbar/>
        <Home/>
        <IndustriesSection />
        <Services/>
        <ProjectsSection/>
        <TrustedCollaborations/>
        <PlatformDiagram/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
