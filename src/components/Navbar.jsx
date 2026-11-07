
import React, { useState } from "react";
import { assets } from "../assets/assets";

import Buttons from "./Buttons";

import {
  FiChevronDown,
  FiMenu,
  FiX,
  FiArrowUpRight,
} from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

 const links = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about-us" },
  { name: "Products", href: "#products" },
  { name: "Industries", href: "#industries", dropdown: true },
  { name: "Services", href: "#services", dropdown: true },
  { name: "Customers", href: "#customers" },
  { name: "Resources", href: "#resources", dropdown: true },
];

  const handleClick = (name) => {
    setActiveLink(name);
    setMenuOpen(false);
  };

  return (
    <div>
      {/* NAVBAR */}
      <nav className="fixed top-4 left-1/2 z-40 w-[98%] max-w-7xl  -translate-x-1/2 rounded-full bg-white px-4 py-3 shadow-lg sm:px-6">

        <div className="flex items-center justify-between">

          {/* LOGO */}
          <a
            href="#home"
            onClick={() => handleClick("Home")}
            className="flex shrink-0 items-center"
          >
            <img
              src={assets.Logo}
              alt="Heegan Technology"
              className="h-10 w-36 object-contain object-left sm:h-12 sm:w-40"
            />
          </a>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-4 xl:flex">

            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleClick(link.name)}
                className="flex items-center gap-1 justify-center whitespace-nowrap text-md  text-black transition-colors duration-300 hover:text-sky-500"
              >
                {link.name}

                {link.dropdown && (
                  <FiChevronDown size={13} />
                )}
              </a>
            ))}

          </div>

          {/* CONTACT BUTTON */}
         
     {/* CONTACT BUTTON - DESKTOP ONLY */}
      <div className="hidden xl:block">
        <Buttons
        size="sm"
          href="#contact"

          className="rounded-full bg-[#32b0df]  text-white font-bold"
        >
          Contact Us
        </Buttons>
      </div>

         <div>
           {/* MOBILE & TABLET MENU */}
          <Buttons
            onClick={() => setMenuOpen(true)}
            icon={<FiMenu />}
            ariaLabel="Open menu"
            className="  hover:bg--400  text-gray-500 text-xl xl:hidden"
          />
         </div>

        </div>
      </nav>

      {/* DARK OVERLAY */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-50 bg-black/50 transition-all duration-300 xl:hidden ${
          menuOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      />

      {/* LEFT SIDEBAR */}
      <div
        className={`fixed top-0 left-0 z-60 flex h-screen w-72.5 max-w-[85%] flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out xl:hidden ${
          menuOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >

        {/* SIDEBAR HEADER */}
{/* SIDEBAR HEADER */}
<div className="absolute top-0 left-0 flex h-20 w-full items-center justify-between border-b border-slate-200 bg-[#1C2F5E] px-4">

  {/* WHITE LOGO */}
  <a
    href="#home"
    onClick={() => handleClick("Home")}
    className="flex h-full w-44 shrink-0 items-center"
  >
    <img
      src={assets.whiteLogo}
      alt="Heegan Technology"
      className="  object-contain relative  object-left"
    />
  </a>

  {/* CLOSE BUTTON */}

     <Buttons
            variant="ghost"
            onClick={() => setMenuOpen(false)}
            icon={<FiX />}
            ariaLabel="Close menu"
            className=" shrink-0 hover:bg-amber-800 text-white text-xl"
          />

</div>

        {/* SIDEBAR LINKS */}
       {/* SIDEBAR LINKS */}
{/* SIDEBAR LINKS */}
<div className="flex flex-1 flex-col gap-1 mt-20 bg-white overflow-y-auto px-5 pt-3">
  {links.map((link) => {
    const active = activeLink === link.name;

    return (
      <a
        key={link.name}
        href={link.href}
        onClick={() => handleClick(link.name)}
        className={`relative flex items-center justify-between px-2 py-3 text-sm font-semibold transition-colors duration-300 ${
          active ? "text-sky-500" : "text-slate-900"
        }`}
      >
        <span>{link.name}</span>

        {link.dropdown && (
          <FiChevronDown size={16} />
        )}

        {active && (
          <span className="absolute bottom-0 left-2 h-0.5 w-7 bg-sky-500" />
        )}
      </a>
    );
  })}

   <div className=" py-10">
                 <Buttons
              href="#contact"
              onClick={() => setMenuOpen(false)}
              variant="primary"
              className="w-full rounded-xl px-4 py-3 text-sm font-bold"
            >
              Contact Us
            </Buttons>

    </div>
</div>
       

      </div>
    </div>
  );
};

export default Navbar;
