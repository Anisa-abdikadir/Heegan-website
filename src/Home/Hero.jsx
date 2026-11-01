
import React from "react";
import { assets } from "../assets/assets";
import { FaStar } from "react-icons/fa";
import VideoPing from "./videoPing";
import Buttons from "../components/Buttons";
import compnyNames from "./images"


const Hero = () => {
  return (
    <div>
    <section className="relative min-h-screen overflow-hidden pt-40 text-center text-white">

      {/* Background Image */}
      <img
        src={assets.main}
        alt="main"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#073568]/35"></div>

      <div className="flex gap-10  flex-col items-center justify-center px-4 py-1 md:flex-row md:py-10">
          {/* Hero Content */}
     <div className="relative flex flex-col md:w-1/2 items-start justify-center gap-5 px-2 text-left">

      <h1 className="flex items-center gap-2 text-sm font-medium text-[#35B9EB] md:text-xl">
        <FaStar />
        Smart Technology for Every Industry
      </h1>

      <h2 className="max-w-6xl text-xl leading-20 font-bold sm:text-5xl lg:text-6xl">
        Building Digital Solutions That Transform Businesses
      </h2>

      <p className="max-w-3xl text-sm leading-7 text-white/90 md:text-base">
        Heegan Technology empowers companies across Somalia and beyond
        with modern software, AI-driven automation, and industry-ready
        digital platforms. We deliver solutions that improve efficiency,
        enhance customer experience, and accelerate growth.
      </p>

  {/* Buttons */}
  <div className="mt-7 flex flex-wrap justify-start gap-4">

    
    <Buttons 
    size="md"
    variant="primary"
    // className="bg-[#32B0DF] text-white hover:border-2 hover:bg- hover:border-black "
    
    >

      Get Started
    </Buttons>

   

    <Buttons 
      size="lg"
      variant="dark"
    >
      Contact Us
    </Buttons>
  </div>

</div>
       <div className="flex w-full items-center justify-center md:w-1/2">
  <VideoPing />
</div>

      </div>

    
    </section>
    <compnyNames />
    </div>
  );
};

export default Hero;
