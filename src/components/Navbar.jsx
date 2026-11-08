
import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

import Buttons from "./Buttons";

import {
  FiChevronDown,
  FiMenu,
  FiX,
} from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  // Navigation links
  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Industries", path: "/industries", dropdown: true },
    { name: "Services", path: "/services", dropdown: true },
    { name: "Our Clients", path: "/Our_Clients" },
    { name: "Resources", path: "/resources", dropdown: true },
  ];

  // Close mobile menu
  const handleClick = () => {
    setMenuOpen(false);
  };

  // Contact navigation
  const goToContact = () => {
    setMenuOpen(false);
    navigate("/contact");
  };

  // Active link style
  const linkStyle = ({ isActive }) =>
    `relative flex items-center justify-center gap-1 whitespace-nowrap text-sm font-medium transition-colors duration-300 ${
      isActive
        ? "text-sky-500"
        : "text-black hover:text-sky-500"
    }`;

  return (
    <div>
      {/* NAVBAR */}
      <nav className="fixed top-4 left-1/2 z-40 w-[98%] max-w-7xl -translate-x-1/2 rounded-full bg-white px-4 py-3 shadow-lg sm:px-6">

        <div className="flex items-center justify-between">

          {/* LOGO */}
          <NavLink
            to="/"
            onClick={handleClick}
            className="flex shrink-0 items-center"
          >
            <img
              src={assets.Logo}
              alt="Heegan Technology"
              className="h-10 w-36 object-contain object-left sm:h-12 sm:w-40"
            />
          </NavLink>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-4 xl:flex">

            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={linkStyle}
              >
                {link.name}

                {link.dropdown && (
                  <FiChevronDown size={13} />
                )}
              </NavLink>
            ))}

          </div>

          {/* CONTACT BUTTON - DESKTOP */}
          <div className="hidden xl:block">
            <Buttons
              size="sm"
              onClick={goToContact}
              className="rounded-full bg-[#32b0df] font-bold text-white"
            >
              Contact Us
            </Buttons>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="xl:hidden">
            <Buttons
              onClick={() => setMenuOpen(true)}
              icon={<FiMenu />}
              ariaLabel="Open menu"
              className="text-xl text-gray-500"
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

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 left-0 z-[60] flex h-screen w-72.5 max-w-[85%] flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out xl:hidden ${
          menuOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >

        {/* SIDEBAR HEADER */}
        <div className="absolute top-0 left-0 flex h-20 w-full items-center justify-between border-b border-slate-200 bg-[#1C2F5E] px-4">

          {/* WHITE LOGO */}
          <NavLink
            to="/"
            onClick={handleClick}
            className="flex h-full w-44 shrink-0 items-center"
          >
            <img
              src={assets.whiteLogo}
              alt="Heegan Technology"
              className="object-contain object-left"
            />
          </NavLink>

          {/* CLOSE BUTTON */}
          <Buttons
            variant="ghost"
            onClick={() => setMenuOpen(false)}
            icon={<FiX />}
            ariaLabel="Close menu"
            className="shrink-0 text-xl text-white"
          />

        </div>

        {/* SIDEBAR LINKS */}
        <div className="mt-20 flex flex-1 flex-col gap-1 overflow-y-auto bg-white px-5 pt-3">

          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={handleClick}
              className={({ isActive }) =>
                `relative flex items-center justify-between px-2 py-3 text-sm font-semibold transition-colors duration-300 ${
                  isActive
                    ? "text-sky-500"
                    : "text-slate-900"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{link.name}</span>

                  {link.dropdown && (
                    <FiChevronDown size={16} />
                  )}

                  {isActive && (
                    <span className="absolute bottom-0 left-2 h-0.5 w-7 bg-sky-500" />
                  )}
                </>
              )}
            </NavLink>
          ))}

          {/* MOBILE CONTACT BUTTON */}
          <div className="py-10">
            <Buttons
              onClick={goToContact}
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
