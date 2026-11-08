import React from 'react'
import Hero from '../About/Hero'
import StatsBar from '../About/StatsBar'
import  OurValues from '../About/OurValues'
import FeaturedAward from '../About/FeaturedAward'
import ResultsThatMatter from '../About/ResultsThatMatter'
import FeaturedSolution from '../About/FeaturedSolution'
import HeeganPlatform from '../components/HeeganPlatform'

const About = () => {
  return (
    <div>
      <Hero/>
      <StatsBar/>
      <OurValues/>
      <FeaturedAward/>
      <ResultsThatMatter/>
      <FeaturedSolution/>
      <HeeganPlatform/>

    </div>
  )
}

export default About
