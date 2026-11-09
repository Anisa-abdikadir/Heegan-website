import React from 'react'
import AllPagesHero from '../components/AllPagesHero'
import { assets } from '../assets/assets'
const BlogHero = () => {
  return (
    <div>

          <AllPagesHero
        title="Insights That Power Innovation."
  description=" Stay informed with expert insights to help your business stay ahead in a fast-changing digital world."
  primaryText="About US"
        primaryLink="/about"
        secondaryText="Contact Us"
        secondaryLink="/contact"
        backgroundImage={assets.Hero}
      />
      
    </div>
  )
}

export default BlogHero
