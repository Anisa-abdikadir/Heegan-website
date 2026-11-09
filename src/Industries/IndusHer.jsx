import React from 'react'
import AllPagesHero from '../components/AllPagesHero'
import { assets } from '../assets/assets'
const IndusHer = () => {
  return (
    <div>
          <AllPagesHero
        // badge="Smart Technology for Every Industry"
        title="Smart Platforms for Every Industry."
        description="Whether in finance, healthcare, retail, or manufacturing, we provide customized ICT solutions that meet industry-specific needs."
        primaryLink="/about"
        secondaryText="Contact Us"
        secondaryLink="/contact"
        backgroundImage={assets.Hero}
      />
      
    </div>
  )
}

export default IndusHer
