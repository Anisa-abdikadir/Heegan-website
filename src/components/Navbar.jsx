
import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import Buttons from "./Buttons";

import {
  FiArrowUpRight,
  FiChevronDown,
  FiMenu,
  FiX,
} from "react-icons/fi";

import { industries } from "../Industries/industriesData";
import { services } from "../Services/servicesData";

const resourceItems = [
  { name: "Case Studies", path: "/resources/case-studies" },
  { name: "Blogs", path: "/resources/blogs" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpenMenu, setMobileOpenMenu] = useState(null);

  const [hoveredIndustryId, setHoveredIndustryId] = useState(
    industries[0].id
  );

  const navigate = useNavigate();

  const activeIndustry =
    industries.find((i) => i.id === hoveredIndustryId) ?? industries[0];

  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Industries", path: "/industries", dropdown: true },
    { name: "Services", path: "/services", dropdown: true },
    { name: "Our Clients", path: "/Our_Clients" },
    { name: "Resources", dropdown: true },
  ];

  const isIndustriesOpen = activeMenu === "Industries";
  const isServicesOpen = activeMenu === "Services";

  // CLOSE DROPDOWN USING ESCAPE
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setActiveMenu(null);
        setMenuOpen(false);
        setMobileOpenMenu(null);
      }
    };

    window.addEventListener("keydown", onKey);

    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // CLOSE MOBILE MENU
  const handleClick = () => {
    setMenuOpen(false);
    setActiveMenu(null);
    setMobileOpenMenu(null);
  };

  // CONTACT NAVIGATION
  const goToContact = () => {
    handleClick();
    navigate("/contact");
  };

  // INDUSTRY NAVIGATION
  const goToIndustry = (path) => {
    setActiveMenu(null);
    navigate(path);
  };

  // SERVICE NAVIGATION
  const goToService = (path) => {
    setActiveMenu(null);
    navigate(path);
  };

  // LINK STYLE
  const linkStyle = ({ isActive }) =>
    `relative flex items-center justify-center whitespace-nowrap text-sm transition-colors duration-300 cursor-pointer ${
      isActive ? "text-sky-500" : "text-black hover:text-sky-500"
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
            className="flex shrink-0 items-center cursor-pointer"
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
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => {
                  if (link.name === "Resources") {
                    setActiveMenu("Resources");
                  }
                }}
              >
                <div className="flex items-center gap-1">

                  {/* NORMAL NAV LINKS */}
                  {link.name !== "Resources" ? (
                    <NavLink
                      to={link.path}
                      className={linkStyle}
                    >
                      {link.name}
                    </NavLink>
                  ) : (
                    /* RESOURCES BUTTON */
                    <button
                      type="button"
                      onClick={() =>
                        setActiveMenu(
                          activeMenu === "Resources"
                            ? null
                            : "Resources"
                        )
                      }
                      aria-label="Open Resources menu"
                      aria-expanded={activeMenu === "Resources"}
                      className={`flex cursor-pointer items-center gap-1 whitespace-nowrap text-sm transition-colors duration-300 ${
                        activeMenu === "Resources"
                          ? "text-sky-500"
                          : "text-black hover:text-sky-500"
                      }`}
                    >
                      Resources

                      <FiChevronDown
                        size={15}
                        className={`transition-transform duration-300 ${
                          activeMenu === "Resources"
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </button>
                  )}

                  {/* INDUSTRIES & SERVICES ICONS */}
                  {link.dropdown && link.name !== "Resources" && (
                    <button
                      type="button"
                      onClick={() =>
                        setActiveMenu(
                          activeMenu === link.name ? null : link.name
                        )
                      }
                      aria-label={`Open ${link.name} dropdown`}
                      aria-expanded={activeMenu === link.name}
                      className={`flex cursor-pointer items-center justify-center transition-colors duration-300 ${
                        activeMenu === link.name
                          ? "text-sky-500"
                          : "text-black hover:text-sky-500"
                      }`}
                    >
                      <FiChevronDown
                        size={15}
                        className={`transition-transform duration-300 ${
                          activeMenu === link.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* RESOURCES DROPDOWN - DESKTOP */}
                {link.name === "Resources" &&
                  activeMenu === "Resources" && (
                    <div
                      onMouseEnter={() => setActiveMenu("Resources")}
                      className="absolute left-1/2 top-full z-50 mt-3 w-56 -translate-x-1/2 rounded-2xl bg-white p-2 shadow-xl"
                    >
                      {resourceItems.map((item) => (
                        <NavLink
                          key={item.path}
                          to={item.path}
                          onClick={() => setActiveMenu(null)}
                          className={({ isActive }) =>
                            `block cursor-pointer rounded-xl px-5 py-3 text-sm font-medium transition-colors duration-200 ${
                              isActive
                                ? "bg-sky-100 text-sky-500"
                                : "text-slate-700 hover:bg-slate-50 hover:text-sky-500"
                            }`
                          }
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
              </div>
            ))}
          </div>

          {/* DESKTOP CONTACT BUTTON */}
          <div className="hidden xl:block">
            <Buttons
              size="sm"
              onClick={goToContact}
              className="cursor-pointer rounded-full bg-[#32b0df] text-white"
            >
              Contact Us
            </Buttons>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="xl:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md text-xl text-black transition-colors duration-200 hover:bg-gray-100 active:bg-gray-200"
            >
              <FiMenu />
            </button>
          </div>
        </div>
      </nav>

      {/* INDUSTRIES MEGA MENU - DESKTOP */}
      <div
        onMouseLeave={() => setActiveMenu(null)}
        className={`fixed left-1/2 top-21 z-30 hidden w-[98%] max-w-7xl -translate-x-1/2 overflow-hidden rounded-3xl bg-white shadow-2xl transition-all duration-300 xl:block ${
          isIndustriesOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-3 opacity-0"
        }`}
      >
        <div className="grid grid-cols-[1.1fr_1fr]">

          {/* LEFT: INDUSTRY LIST */}
          <div className="bg-[#1f3461] p-8">
            <div className="grid grid-cols-2 gap-x-6">
              {[industries.slice(0, 6), industries.slice(6)].map(
                (col, colIdx) => (
                  <div key={colIdx} className="flex flex-col gap-4">
                    {col.map((item) => {
                      const Icon = item.icon;
                      const isActive = item.id === activeIndustry.id;

                      return (
                        <button
                          key={item.id}
                          type="button"
                          onMouseEnter={() =>
                            setHoveredIndustryId(item.id)
                          }
                          onFocus={() =>
                            setHoveredIndustryId(item.id)
                          }
                          onClick={() => goToIndustry(item.path)}
                          className={`group flex cursor-pointer items-center gap-4 rounded-xl p-2 text-left transition-colors duration-200 ${
                            isActive
                              ? "bg-sky-500/20"
                              : "hover:bg-white/10"
                          }`}
                        >
                          <span
                            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-colors duration-200 ${
                              isActive
                                ? "border-sky-400 bg-sky-400 text-white"
                                : "border-white/20 bg-transparent text-white group-hover:border-sky-400"
                            }`}
                          >
                            <Icon size={18} />
                          </span>

                          <span className="truncate text-sm font-bold text-white">
                            {item.name}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )
              )}
            </div>
          </div>

          {/* RIGHT: ACTIVE INDUSTRY INFO */}
          <div className="flex flex-col p-8">
            <h3 className="text-3xl font-normal tracking-tight text-[#0f1a2e]">
              {activeIndustry.title}
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              {activeIndustry.description}
            </p>

            <div className="mt-8 flex-1 overflow-hidden">
              {activeIndustry.image ? (
                <img
                  key={activeIndustry.id}
                  src={activeIndustry.image}
                  alt={activeIndustry.title}
                  className="h-full max-h-65 w-full rounded-2xl object-cover"
                />
              ) : (
                <div className="h-full min-h-65 w-full bg-linear-to-b from-sky-500 to-[#0b2a6f]" />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES MEGA MENU - DESKTOP */}
      <div
        onMouseLeave={() => setActiveMenu(null)}
        className={`fixed left-1/2 top-21 z-30 hidden w-[98%] max-w-7xl -translate-x-1/2 overflow-hidden rounded-3xl bg-white shadow-2xl transition-all duration-300 xl:block ${
          isServicesOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-3 opacity-0"
        }`}
      >
        <div className="grid grid-cols-[1fr_3fr]">

          {/* LEFT: IMAGE */}
          <div className="relative min-h-105 overflow-hidden">
            <img
              src={assets.services}
              alt="Our services"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          {/* RIGHT: SERVICE CARDS */}
          <div className="flex flex-col justify-between p-6">
            <div className="grid grid-cols-3 gap-4">
              {services.map((item) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => goToService(item.path)}
                    className="group relative flex cursor-pointer flex-col rounded-2xl border border-slate-200 p-5 text-left transition-colors duration-200 hover:border-sky-400"
                  >
                    <FiArrowUpRight
                      size={16}
                      className="absolute top-4 right-4 text-slate-300 transition-colors group-hover:text-sky-500"
                    />

                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-sky-500 transition-colors group-hover:border-sky-400">
                      <Icon size={18} />
                    </span>

                    <h4 className="mt-5 text-base font-bold text-[#0f1a2e]">
                      {item.name}
                    </h4>

                    <p className="mt-2 text-sm leading-relaxed text-slate-500">
                      {item.description}
                    </p>
                  </button>
                );
              })}
            </div>

            <div className="mt-4 flex justify-end">
              <NavLink
                to="/services"
                onClick={() => setActiveMenu(null)}
                className="flex cursor-pointer items-center gap-1 text-sm font-semibold text-[#1f3461] hover:text-sky-500"
              >
                View all services
                <FiArrowUpRight size={16} />
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* DARK OVERLAY - MOBILE */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-50 bg-black/50 transition-all duration-300 xl:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 left-0 z-60 flex h-screen w-72.5 max-w-[85%] flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out xl:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >

        {/* SIDEBAR HEADER */}
        <div className="absolute top-0 left-0 flex h-20 w-full items-center justify-between bg-[#1C2F5E]">
          <NavLink
            to="/"
            onClick={handleClick}
            className="flex h-full w-44 shrink-0 items-center cursor-pointer"
          >
            <img
              src={assets.whiteLogo}
              alt="Heegan Technology"
              className="object-contain object-left"
            />
          </NavLink>

          {/* CLOSE BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="mr-4 flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-md text-xl text-white transition-colors duration-200 hover:bg-white/15 active:bg-white/25"
          >
            <FiX />
          </button>
        </div>

        {/* SIDEBAR LINKS */}
        <div className="mt-20 flex flex-1 flex-col gap-1 overflow-y-auto bg-white px-5 pt-3">
          {links.map((link) => {
            const isResources = link.name === "Resources";
            const isOpen = mobileOpenMenu === link.name;

            return (
              <div key={link.name}>
                <div className="flex items-center justify-between">

                  {/* MOBILE NAV LINKS */}
                  {isResources ? (
                    <button
                      type="button"
                      onClick={() =>
                        setMobileOpenMenu(isOpen ? null : link.name)
                      }
                      aria-expanded={isOpen}
                      className={`relative flex flex-1 cursor-pointer items-center px-2 py-3 text-left text-sm font-semibold transition-colors duration-300 ${
                        isOpen
                          ? "text-sky-500"
                          : "text-slate-900 hover:text-sky-500"
                      }`}
                    >
                      Resources
                    </button>
                  ) : (
                    <NavLink
                      to={link.path}
                      onClick={handleClick}
                      className={({ isActive }) =>
                        `relative flex flex-1 cursor-pointer items-center px-2 py-3 text-sm font-semibold transition-colors duration-300 ${
                          isActive
                            ? "text-sky-500"
                            : "text-slate-900"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <span>{link.name}</span>

                          {isActive && (
                            <span className="absolute bottom-0 left-2 h-0.5 w-7 bg-sky-500" />
                          )}
                        </>
                      )}
                    </NavLink>
                  )}

                  {/* MOBILE DROPDOWN TOGGLE */}
                  {isResources && (
                    <button
                      type="button"
                      onClick={() =>
                        setMobileOpenMenu(isOpen ? null : link.name)
                      }
                      aria-label="Toggle Resources menu"
                      aria-expanded={isOpen}
                      className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md text-slate-900 transition-colors duration-200 hover:bg-gray-100 active:bg-gray-200"
                    >
                      <FiChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* MOBILE RESOURCES SUB-LINKS */}
                {isResources && isOpen && (
                  <div className="ml-2 flex flex-col gap-1 border-l border-slate-200 pl-4">
                    {resourceItems.map((item) => (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        onClick={handleClick}
                        className={({ isActive }) =>
                          `cursor-pointer py-2 text-sm font-medium transition-colors duration-300 ${
                            isActive
                              ? "text-sky-500"
                              : "text-slate-600 hover:text-sky-500"
                          }`
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* MOBILE CONTACT BUTTON */}
          <div className="py-10">
            <Buttons
              onClick={goToContact}
              variant="primary"
              className="w-full cursor-pointer rounded-xl px-4 py-3 text-sm font-bold"
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
