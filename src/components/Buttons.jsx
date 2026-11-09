import React from "react";

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
  buttonColor,
}) => {
  const styles = {
      primary:
    "bg-[#32B0DF] border-2 border-[#32B0DF] text-white hover:bg-transparent hover:border-white hover:text-white",

  dark:
    "border-2 border-white text-white hover:bg-[#32B0DF] hover:border-[#32B0DF]",

  OrangeBg:
    " bg-[#f59e0b] text-white hover:bg-[#32B0DF] hover:text-white",

  blueBg:
    "bg-[#32B0DF] text-white hover:bg-[#229ED1] ",

  green:
    "bg-[#0AA51A] hover:bg-[#08c91b] text-white",

   dhadhan:
      "bg-[#F97316] hover:bg-[#ff6600] text-white" ,

  eCaafi:
      "bg-[#95CE85] hover:bg-[#6dce50] text-white",

  red:
    "bg-[#ED2024] hover:bg-[#ea6062] text-white"
  };

  const sizes = {
    sm: "px-8 py-3",
    md: "px-12 py-3",
    lg: "px-24 py-3",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={
        variant === "primary"
          ? {
              backgroundColor: buttonColor || "#32B0DF",
              borderColor: buttonColor || "#32B0DF",
            }
          : {}
      }
      className={`
        inline-flex items-center cursor-pointer justify-center gap-2
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
        <span className={iconsClassName}>
          {icon}
        </span>
      )}
    </button>
  );
};

export default Buttons;