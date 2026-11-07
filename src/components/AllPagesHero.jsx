
import React from "react";
import { Link } from "react-router-dom";

const AllPagesHero = ({
  badge,
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
    <section
      className={`relative flex min-h-137.5 items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat px-5 py-24 ${className}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[#073568]/75"></div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-5xl text-center">

        {/* Badge */}
        {badge && (
          <span className="mb-6 inline-flex rounded-full border border-[#35b9eb] bg-[#35b9eb]/10 px-5 py-2 text-sm font-semibold text-white">
            {badge}
          </span>
        )}

        {/* Title */}
        <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          {title}
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/85 sm:text-lg">
          {description}
        </p>

        {/* Buttons */}
        <div className="mt-9 flex flex-wrap justify-center gap-4">

          <Link
            to={primaryLink}
            className="rounded-2xl bg-[#35b9eb] px-8 py-4 font-semibold text-white transition hover:bg-[#209acb]"
          >
            {primaryText}
          </Link>

          <Link
            to={secondaryLink}
            className="rounded-2xl bg-white px-8 py-4 font-semibold text-[#0f2440] transition hover:bg-gray-100"
          >
            {secondaryText}
          </Link>

        </div>
      </div>
    </section>
  );
};

export default AllPagesHero;
