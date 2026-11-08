import React from 'react'
import Hero from '../Home/Hero'
import Product_CardShowcase from '../Home/Product_CardShowcase'
import IndustriesSection from '../Home/IndustriesSection'
import ServiceCards from '../Home/Services'
import Success from '../Home/Success'
import TrustedCollaborations from '../Home/TrustedCollaborations'
import HeeganPlatform from '../components/HeeganPlatform'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Product_CardShowcase/>
        <IndustriesSection/>
        <ServiceCards/>
        <Success/>
        <TrustedCollaborations/>
        <HeeganPlatform/>

        
      
    </div>
  )
}

export default Home
