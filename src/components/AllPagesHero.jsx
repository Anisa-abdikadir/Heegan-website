import React from "react";
import { Link } from "react-router-dom";

const AllPagesHero = ({
  title,
  description,
  primaryText = "About US",
  primaryLink = "/about",
  secondaryText = "Contact US",
  secondaryLink = "/contact",
  backgroundImage,
  className = "",
}) => {
  return (
    <section
      className={`relative flex min-h-[550px] items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat px-5 pt-40 pb-32 ${className}`}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[#073568]/75" />

      {/* Hero Content */}
      <div className="relative z-10 flex w-full flex-col items-center text-center">

        {/* Title */}
        <h1 className="mx-auto max-w-5xl text-center text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          {title}
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-white/85 sm:text-lg">
          {description}
        </p>

        {/* Buttons */}
        <div className="mt-10  flex flex-wrap items-center justify-center gap-4">
          <Link
            to={primaryLink}
            className="rounded-2xl bg-[#35b9eb] px-10 py-4 font-semibold text-white transition hover:bg-[#209acb]"
          >
            {primaryText}
          </Link>

          <Link
            to={secondaryLink}
            className="rounded-2xl bg-white px-10 py-4 font-semibold text-[#0f2440] transition hover:bg-gray-100"
          >
            {secondaryText}
          </Link>
        </div>
      </div>

      {/* Curved Bottom Wave */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-20 w-full overflow-hidden leading-none">
        <svg
          className="block h-20 w-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            d="M0,65 C240,75 360,90 540,75 C720,60 850,45 1020,55 C1190,65 1320,75 1440,65 L1440,120 L0,120 Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default AllPagesHero;