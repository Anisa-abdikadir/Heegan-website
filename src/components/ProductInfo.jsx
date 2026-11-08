import React from "react";
import { FaCheck, FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Buttons from "./Buttons";

const ProductInfo = ({
  title,
  description,
  features = [],
  buttonText = "Learn More",
  buttonLink = "#",
  themeColor = "",
  className = "",
}) => {
  return (
    <div className={`max-w-md ${className}`}>

      {/* Title */}
      <h2
        className="text-2xl font-bold"
        style={{ color: themeColor }}
      >
        {title}
      </h2>

      {/* Description */}
      <p className="mt-3 text-md leading-6 text-[#64748b]">
        {description}
      </p>

      {/* Features */}
      <ul className="mt-5 space-y-3">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center gap-2 text-sm "
          >
            <FaCheck
              className="shrink-0 text-sm"
              style={{ color: themeColor }}
            />
            {feature}
          </li>
        ))}
      </ul>

      {/* Button */}
      {/* <Link to={buttonLink} className="mt-6 inline-block">
        <Buttons
          variant="primary"
          size="sm"
          icon={<FaArrowRight className="text-xs" />}
        >
          {buttonText}
        </Buttons>
      </Link> */}

    </div>
  );
};

export default ProductInfo;