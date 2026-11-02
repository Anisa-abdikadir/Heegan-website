import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import IndustriesSection from './pages/industries '
import Services from './pages/Services'

const App = () => {
  return (
    <div>
      <div>
        <Navbar/>
        <Home/>
        <Products/>
        <IndustriesSection />
        <Services/>
      </div>
    </div>
  )
}

export default App
