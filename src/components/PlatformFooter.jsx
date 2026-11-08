// Footer.jsx
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

const companyLinks = ["About Us", "Products", "Services", "Industries", "Our Clients", "Case Studies"];

const solutionLinks = ["Basic ERP", "True Property", "eCaafi", "eClinic", "eBar", "eShidaal"];

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

function LinkColumn({ title, links }) {
  return (
    <div>
      <h4 className="text-xs font-bold uppercase tracking-wider text-[#0f2440]">{title}</h4>
      <ul className="mt-4 space-y-2">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="text-xs text-[#434153] transition-colors duration-200 hover:text-[#35b9eb]">
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
    <footer className="font-sm text-[#434153]">
      {/* Qaybta sare: wave cad iyo gradient buluug ah */}
      <div className="relative bg-linear-to-b from-[#58C2EE] via-[#62C4EF]  overflow-hidden to-white sm:px-10 sm:pt-68 pt-24">
        <svg
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
          className="absolute left-0 top-0 h-30 w-full sm:h-98 md:h-39"
        >
 <path
      d="M0 0 H1440 V38 C1120 85 900 145 720 145 C500 145 260 85 0 38 Z"
      fill="white"
    />        </svg>

        {/* CTA */}
        <div className="relative -mt-20  text-center">
          <h2 className="text-3xl font-bold text-[#0f2440] sm:text-4xl">Get Started Today!</h2>

          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#0f2440]/80">
            Let's discuss how our industry-specific solutions can address your unique challenges.
          </p>

          <button className="mt-8 rounded-full bg-[#0a1f5c] px-8 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#35b9eb] hover:shadow-lg">
            Contact Us
          </button>
        </div>
      </div>

      {/* Qaybta dhexe: tiirarka macluumaadka */}
      <div className="bg-white px-6 pb-10 pt-6 sm:px-12 lg:px-16">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {columns.map((col) => (
            <LinkColumn key={col.title} title={col.title} links={col.links} />
          ))}

          {/* Contact info */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0f2440]">Contact Info</h4>

            <div className="mt-4 space-y-4 text-xs text-[#434153]">
              <div>
                <p className="font-semibold text-[#0f2440]">Phone</p>
                <p className="mt-1">(+252) 615-336-781</p>
                <p>(+252) 615-336-741</p>
              </div>

              <div>
                <p className="font-semibold text-[#0f2440]">Email</p>
                <a
                  href="mailto:info@heeganrtechnology.com"
                  className="mt-1 block break-all transition-colors hover:text-[#35b9eb]"
                >
                  info@heeganrtechnology.com
                </a>
              </div>

              <div>
                <p className="font-semibold text-[#0f2440]">Office</p>
                <p className="mt-1">Mogadishu, Somalia</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Language */}
      <div className="border-b border-gray-200 max-w-6xl mx-auto bg-white px-6 py-2 sm:px-12 lg:px-1">
        <button className="flex items-center gap-2 text-xs text-[#434153] transition-colors hover:text-[#35b9eb]">
          <FaGlobe className="text-sm" />
          US (English)
        </button>
      </div>

      {/* Logo + Subscribe + Follow */}
      <div className="bg-white px-6 py-10 sm:px-12 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-start">
          {/* Logo + trademark */}
          <div>
            <img src={assets.Logo} alt="Heegan Technology" className="h-12 w-auto object-contain" />
            <p className="mt-4 max-w-lg text-[10px]  text-[#434153]">
              The trademarks HEEGAN TECHNOLOGY COMPANY® are registered in Somalia. <br /> Patent & Trademark Office to
              Heegan Technology, Inc.
            </p>
          </div>

          {/* Subscribe + Follow */}
          <div className="md:justify-self-end md:w-full md:max-w-sm">
            <h4 className="text-xs font-bold text-[#0f2440]">Subscribe for smart insights</h4>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-3 flex items-center overflow-hidden rounded-full border border-gray-300 bg-white py-1 pl-4 pr-1 focus-within:border-[#35b9eb]"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent text-xs text-[#0f2440] outline-none placeholder:text-gray-400"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#35b9eb] text-white transition-colors hover:bg-[#0a1f5c]"
              >
                <FaPaperPlane className="text-xs" />
              </button>
            </form>

            <h4 className="mt-6 text-xs font-bold text-[#0f2440]">Follow Us</h4>
            <div className="mt-3 flex gap-3">
              {socials.map(({ name, icon: Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-[#35B9EB] text-[#35B9EB] transition-all duration-300 hover:border-[#35b9eb] hover:bg-[#35b9eb] hover:text-white"
                >
                  <Icon className="text-xs" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright + legal links */}
      <div className="bg-white px-6 sm:px-12 lg:px-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-b border-gray-200 py-4 text-[11px] sm:flex-row">
          <p>© {new Date().getFullYear()} Heegan Technology. All rights reserved.</p>
          <ul className="flex flex-wrap items-center gap-2">
            {legalLinks.map((link, i) => (
              <li key={link} className="flex items-center gap-2">
                {i > 0 && <span className="text-gray-300">·</span>}
                <a href="#" className="transition-colors hover:text-[#35b9eb]">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-white px-6 pb-8 sm:px-12 lg:px-16">
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