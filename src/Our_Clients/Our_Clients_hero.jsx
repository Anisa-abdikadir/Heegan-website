import React from 'react'
import AllPagesHero from "../components/AllPagesHero";
import { assets } from "../assets/assets";
const Our_Clients_hero = () => {
  return (
    <div>
         <AllPagesHero
        // badge="Smart Technology for Every Industry"
        title="Driven by Innovation. Built on Trust."
        description="Learn more about who we are, our mission, and the vision that inspires us to create technology solutions that matter."
        primaryText="About Us"
        primaryLink="/about"
        secondaryText="Contact Us"
        secondaryLink="/contact"
        backgroundImage={assets.Hero}
      />
      
    </div>
  )
}

export default Our_Clients_hero
