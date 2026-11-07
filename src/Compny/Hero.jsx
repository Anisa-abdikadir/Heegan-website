
import React from "react";
import AllPagesHero from "../components/AllPagesHero";

const Hero = () => {
  return (
    <>
      <AllPagesHero
        badge="Who We Are"
        title={
          <>
            Driven by Innovation.
            <br />
            Built on Trust.
          </>
        }
        description="Learn more about who we are, our mission, and the vision that inspires us to create technology solutions that matter."
        primaryText="Our Mission"
        primaryLink="/about/mission"
        secondaryText="Contact Us"
        secondaryLink="/contact"
        backgroundImage="/images/hero-bg.png"
      />
    </>
  );
};

export default Hero;
