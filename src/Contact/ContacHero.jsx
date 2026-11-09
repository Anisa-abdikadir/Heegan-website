import React from 'react'
import AllPagesHero from '../components/AllPagesHero'
import { assets } from '../assets/assets'
const ContacHero = () => {
  return (
    <div>
           <AllPagesHero
        // badge="Smart Technology for Every Industry"
        title="Let’s Build the Future Together."
        description="Have a challenge or idea? Reach out to our experts today — we’re here to answer, advise, and accelerate your next big move."
        primaryText="About Us"
        primaryLink="/about"
        secondaryText="Contact Us"
        secondaryLink="/contact"
        backgroundImage={assets.Hero}
      />
      
    </div>
  )
}

export default ContacHero
