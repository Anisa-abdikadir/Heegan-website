
import React from "react";
import { Link } from "react-router-dom";

const AllPagesHero = ({
  title,
  description,
  primaryText = "About Us",
  primaryLink = "/about",
  secondaryText = "Contact Us",
  secondaryLink = "/contact",
  backgroundImage,
  className = "",
}) => {
  return (
    <section className={`relative flex min-h-137.5 items-center  justify-center overflow-hidden bg-cover bg-center bg-no-repeat px-5 py-20 pb-20 ${className}`}      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[#073568]/75"></div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-3xl text-center">

        <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          {title}
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/85 sm:text-lg">
          {description}
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link
            to={primaryLink}
            className="rounded-2xl bg-[#35b9eb] px-13 py-4 font-semibold text-white transition hover:bg-[#209acb]"
          >
            {primaryText}
          </Link>

          <Link
            to={secondaryLink}
            className="rounded-2xl bg-white px-13 py-4 font-semibold text-[#0f2440] transition hover:bg-gray-100"
          >
            {secondaryText}
          </Link>
        </div>
      </div>

      {/* Curved Bottom */}
  {/* Curved Bottom Wave */}
<div className="pointer-events-none absolute bottom-0 left-0 z-20 w-full overflow-hidden leading-0">
  <svg
    className="block h-20 w-full"
    viewBox="0 0 1440 120"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#ffffff"
      d="
        M0,65
        C240,75 360,90 540,75
        C720,60 850,45 1020,55
        C1190,65 1320,75 1440,65
        L1440,120
        L0,120
        Z
      "
    />
  </svg>
</div>
    </section>
  );
};

export default AllPagesHero;
