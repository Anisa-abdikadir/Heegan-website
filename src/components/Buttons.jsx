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
    "bg-[#32B0DF] border-2 border-[#32B0DF] text-white hover:bg-transparent hover:border-white hover:text-white",

  dark:
    "border-2 border-white text-white hover:bg-[#32B0DF] hover:border-[#32B0DF]",

  outline:
    "border-2 border-[#32B0DF] text-[#32B0DF] hover:bg-[#32B0DF] hover:text-white",

  light:
    "bg-white text-[#073568] hover:bg-gray-100 shadow-md",

  };

  // Button Sizes
  const sizes = {
    sm: "px-8 py-3 ",
    md: "px-12 py-3 ",
    lg: "px-24 py-3 ",
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
