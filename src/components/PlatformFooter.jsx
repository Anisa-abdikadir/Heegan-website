import {
  FaGlobe,
  FaPaperPlane,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

import { assets } from "../assets/assets";

const companyLinks = [
  "About Us",
  "Products",
  "Services",
  "Industries",
  "Our Clients",
  "Case Studies",
];

const solutionLinks = [
  "Basic ERP",
  "True Property",
  "eCaafi",
  "eClinic",
  "eBar",
  "eShidaal",
];

const serviceLinks = [
  "Software Development",
  "Mobile App Development",
  "Responsive Web Design",
  "E-commerce Development",
  "Cybersecurity Services",
  "AI & Machine Learning",
];

const industryLinks = [
  "Financial & Banking",
  "Healthcare & Hospitals",
  "Real Estate & Properties",
  "Education",
  "Retail & E-commerce",
  "Construction & Engineering",
];

const columns = [
  { title: "Company", links: companyLinks },
  { title: "Solutions", links: solutionLinks },
  { title: "Services", links: serviceLinks },
  { title: "Industries", links: industryLinks },
];

const socials = [
  { name: "Facebook", icon: FaFacebookF, href: "#" },
  { name: "Instagram", icon: FaInstagram, href: "#" },
  { name: "TikTok", icon: FaTiktok, href: "#" },
  { name: "LinkedIn", icon: FaLinkedinIn, href: "#" },
  { name: "X", icon: FaXTwitter, href: "#" },
];

const legalLinks = ["Disclaimer", "Privacy", "Terms & Conditions"];

// Reusable Link Column
function LinkColumn({ title, links }) {
  return (
    <div className="min-w-0">
      <h4 className="text-sm font-bold    text-[#0f2440]">
        {title}
      </h4>

      <ul className="mt-4 space-y-1">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-xs leading-2 text-[#434153] transition-colors duration-200 hover:underline"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="w-full text-[#434153]">

      {/* CTA SECTION */}
      <div className="relative isolate overflow-hidden bg-linear-to-b from-[#58C2EE] via-[#62C4EF] to-white px-4 pb-12 pt-36 sm:px-8 sm:pb-14 sm:pt-40 lg:px-12 lg:pt-44">

        {/* WAVE SVG */}
        <svg
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
          className="absolute left-0 top-0 -z-0 h-28 w-full sm:h-32 md:h-36"
        >
          <path
            d="M0 0 H1440 V38 C1120 85 900 145 720 145 C500 145 260 85 0 38 Z"
            fill="white"
          />
        </svg>

        {/* CTA CONTENT */}
        <div className="relative z-10 mx-auto mt-2 w-full max-w-2xl px-2 text-center sm:mt-4">

          <h2 className="text-2xl font-bold leading-tight text-[#0f2440] sm:text-3xl md:text-4xl">
            Get Started Today!
          </h2>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#0f2440]/80 sm:mt-4 sm:text-base sm:leading-7">
            Let's discuss how our industry-specific solutions can address your unique challenges.
          </p>

          <button
            className="mt-6 inline-flex cursor-pointer items-center justify-center rounded-full bg-[#0a1f5c] px-7 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#35b9eb] hover:shadow-lg sm:mt-8 sm:px-8 sm:py-3.5"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* FOOTER LINKS + CONTACT */}
      <div className="bg-white px-5 pb-10 pt-8 sm:px-8 sm:pt-10 lg:px-12">

        <div className="mx-auto grid  max-w-6xl grid-cols-2  gap sm:grid-cols-3 sm:gap-x-8 lg:grid-cols-5 lg:gap-2">

          {columns.map((col) => (
            <LinkColumn
              key={col.title}
              title={col.title}
              links={col.links}
            />
          ))}

          {/* CONTACT INFO */}
          <div className="min-w-0">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0f2440]">
              Contact Info
            </h4>

            <div className="mt-4 space-y-4  text-xs leading-5 text-[#434153]">

              <div>
                <p className="font-semibold cursor-pointer text-[#0f2440]">Phone</p>
                <p className="mt-1">(+252) 615-336-781</p>
                <p>(+252) 615-336-741</p>
              </div>

              <div >
                <p className="font-semibold text-[#0f2440]">Email</p>
                <a
                  href="mailto:info@heeganrtechnology.com"
                  className="mt-1 block break-all cursor-pointer transition-colors hover:text-[#35b9eb]"
                >
                  info@heeganrtechnology.com
                </a>
              </div>

              <div>
                <p className="font-semibold text-[#0f2440]">Office</p>
                <p className="mt-1 cursor-pointer">C5,Jowhara  Apartments, Mogadishu, Somalia</p>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* LANGUAGE */}
      <div className="mx-auto max-w-6xl border-b border-gray-200 bg-white px-5 py-3 sm:px-8 lg:px-0">

        <button className="flex cursor-pointer  items-center gap-2 text-xs text-[#434153] transition-colors hover:underline">
          <FaGlobe className="text-sm" />
          US (English)
        </button>

      </div>

      {/* LOGO + SUBSCRIBE + SOCIALS */}
      <div className="bg-white px-5 py-9 sm:px-8 sm:py-10 lg:px-12">

        <div className="mx-auto grid max-w-6xl  gap-3 md:grid-cols-2 md: md:gap-1">

          {/* LOGO */}
          <div className="min-w-0">

            <img
              src={assets.Logo}
              alt="Heegan Technology"
              className="h-10 w-auto max-w-full object-contain sm:h-12"
            />

            <p className="mt-4 max-w-lg text-[12px] leading-5 text-[#434153]">
              The trademarks HEEGAN TECHNOLOGY COMPANY® are registered in Somalia.
              <br className="hidden sm:block" />
              Patent & Trademark Office to Heegan Technology, Inc.
            </p>

          </div>

          {/* SUBSCRIBE + FOLLOW */}
          <div className="w-full min-w-0   lg:max-w-md md:max-w-sm">

            <h4 className="text-md font-bold text-[#0f2440]">
              Subscribe for smart insights
            </h4>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-3 flex w-full items-center overflow-hidden rounded-full border border-gray-300 bg-white py-1 pl-4 pr-1 transition-colors focus-within:border-[#35b9eb]"
            >

              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 bg-transparent py-1 text-xs text-[#0f2440] outline-none placeholder:text-gray-400"
              />

             <button
              type="submit"
              aria-label="Subscribe"
              className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full border border-transparent bg-[#35b9eb] text-white transition-all duration-300 hover:border-[#35b9eb] hover:bg-transparent hover:text-[#35b9eb]"
            >
              <FaPaperPlane className="text-xs" />
            </button>

            </form>

            {/* SOCIAL ICONS */}
            <h4 className="mt-6 text-sm font-bold text-[#0f2440]">
              Follow Us
            </h4>

            <div className="mt-3 flex flex-wrap gap-3">

              {socials.map(({ name, icon: Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#35b9eb] text-[#35b9eb] transition-all duration-300 hover:border-[#35b9eb] hover:bg-[#35b9eb] hover:text-white"
                >
                  <Icon className="text-xs" />
                </a>
              ))}

            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT + LEGAL LINKS */}
      <div className=" px-5 sm:px-8 lg:px-12">

        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 border-y border-gray-200 py-4 text-center text-[11px] sm:flex-row sm:text-left sm:text-xs">

          <p>
            © {new Date().getFullYear()} Heegan Technology. All rights reserved.
          </p>

          <ul className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2">

            {legalLinks.map((link, i) => (
              <li key={link} className="flex items-center gap-2">

                {i > 0 && (
                  <span className="text-gray-300">·</span>
                )}

                <a
                  href="#"
                  className="transition-colors hover:text-[#35b9eb]"
                >
                  {link}
                </a>

              </li>
            ))}

          </ul>
        </div>
      </div>

      {/* DISCLAIMER */}
      <div className="bg-white px-5 pb-8 pt-8 sm:px-8 sm:pb-10 lg:px-12">

        <p className="mx-auto max-w-5xl text-center text-[10px] leading-5 text-[#434153]">
          *Heegan Technology® is a registered mark of HEEGAN TECHNOLOGY COMPANY® and its affiliates. All rights reserved.
          We may use third-party services or platforms as part of our products. All logos and trademarks are property of
          their respective owners. Information on this site is for general use and subject to change. Heegan Technology
          makes no guarantees and disclaims all implied warranties, including fitness for a particular purpose.
        </p>

      </div>

    </footer>
  );
}
