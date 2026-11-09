import React from 'react'
import AllPagesHero from '../components/AllPagesHero'
import { assets } from '../assets/assets'

const CaseHero = () => {
  return (
    <div>
           <AllPagesHero
        title="Real Results. Proven Impact."
        description="See How Heegan Technology Transforms Organizations Through Innovation and Intelligent Systems."
        primaryText="About US"
        primaryLink="/about"
        secondaryText="Contact Us"
        secondaryLink="/contact"
        backgroundImage={assets.Hero}
      />
      
    </div>
  )
}

export default CaseHero
