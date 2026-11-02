
import React from "react";

const SectionHeader = ({
  badge,
  title,
  description,
  className = "",
}) => {
  return (
    <div className="text-center">

      {/* Badge */}
      <span className="inline-flex items-center rounded-full border border-[#35b9eb] bg-[#35b9eb]/10 px-4 py-2 text-xs font-semibold text-[#0f2440]">
        {badge}
      </span>

      {/* Title */}
      <h2
        className={`mt-4 text-4xl font-semibold leading-tight text-[#0f2440] sm:text-4xl md:text-5xl ${className}`}
      >
        {title}
      </h2>

      {/* Description */}
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#434153] sm:text-sm">
        {description}
      </p>

    </div>
  );
};

export default SectionHeader;
