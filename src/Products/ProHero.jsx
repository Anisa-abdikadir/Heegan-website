import React from 'react'
import AllPagesHero from "../components/AllPagesHero";
import { assets } from "../assets/assets";
const ProHero = () => {
  return (
    <div>
        



      <AllPagesHero
        title="Powerful Products for Modern Businesses"
  description="Whether in finance, healthcare, retail, or manufacturing, we provide customized ICT solutions that meet industry-specific needs."
  primaryText="About US"
        primaryLink="/about"
        secondaryText="Contact Us"
        secondaryLink="/contact"
        backgroundImage={assets.Hero}
      />
    </div>

      
    
  )
}

export default ProHero
