import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Buttons = ({
  children,
  onClick,
  type = "button",
  variant = "",
  size = "md",
  icon,
  className = "",
  iconsClassName = "",
  disabled = false,
}) => {
  // Button Colors
  const styles = {
    primary:
      "hover:border-2 hover:border-white  hover:text-white bg-[#32B0DF] hover:border-[#32B0DF]",

    dark:
      "border-2 border-white  hover:text-white hover:bg-[#32B0DF] hover:border-[#32B0DF]",

    outline:
      "border-2 border-[#32B0DF] text-[#32B0DF] hover:bg-[#32B0DF] hover:text-white",

    light:
      "bg-white text-[#073568] hover:bg-gray-100 shadow-md",
  };

  // Button Sizes
  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-8 py-3 text-sm",
    lg: "px-18 py-3 text-base",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center gap-2
        rounded-full font-semibold
        transition-all duration-300 ease-in-out
        active:scale-95
        disabled:cursor-not-allowed disabled:opacity-50
        ${styles[variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      {children}

      {icon && (
        <span className={`transition-transform duration-300 group-hover:translate-x-1 ${iconsClassName}`}>
          {icon}
        </span>
      )}
    </button>
  );
};

export default Buttons;
