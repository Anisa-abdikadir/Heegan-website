
import React from 'react';

import {
  FaUniversity,
  FaHospital,
  FaBuilding,
  FaGraduationCap,
  FaShoppingCart,
  FaHardHat,
  FaLeaf,
  FaPlane,
  FaArrowLeft
} from 'react-icons/fa';

import { FaArrowRightLong } from "react-icons/fa6";
import SectionHeader from '../components/SectionHeader';

// React Icons
const Icons = {
  Bank: FaUniversity,
  Medical: FaHospital,
  Building: FaBuilding,
  Education: FaGraduationCap,
  Cart: FaShoppingCart,
  HardHat: FaHardHat,
  Leaf: FaLeaf,
  Plane: FaPlane,
  ArrowLeft: FaArrowLeft
};

// Industries Data
const industries = [
  {
    id: 1,
    title: "Financial & Banking",
    description: "Delivering secure, scalable fintech solutions to improve transactions, compliance, and customer trust.",
    isDark: true,
    icon: "Bank",
    imageSrc: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Healthcare & Hospitals",
    description: "Streamlining patient care, data management, and telemedicine with secure, innovative IT solutions.",
    isDark: false,
    icon: "Medical",
    imageSrc: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Real Estate & Properties",
    description: "Enhancing property management, virtual tours, and customer engagement with digital platforms.",
    isDark: true,
    icon: "Building",
    imageSrc: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Education",
    description: "Driving smart learning with e-learning systems, virtual classrooms, and advanced educational technologies.",
    isDark: false,
    icon: "Education",
    imageSrc: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Retail & E-commerce",
    description: "Empowering sales growth with custom online stores, secure payments, and customer experience tools.",
    isDark: true,
    icon: "Cart",
    imageSrc: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Construction & Engineering",
    description: "Supporting project management, collaboration, and automation for faster, safer builds.",
    isDark: false,
    icon: "HardHat",
    imageSrc: "https://images.unsplash.com/photo-1541888086925-ebbcbfddb465?q=80&w=2071&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Agriculture & Agri-Tech",
    description: "Innovating farming with smart sensors, IoT, and digital tools for sustainable growth.",
    isDark: true,
    icon: "Leaf",
    imageSrc: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "Tourism",
    description: "Enriching travel experiences with booking platforms, mobile apps, and AI-driven personalization.",
    isDark: false,
    icon: "Plane",
    imageSrc: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop",
  },
];

// Main Component
export default function IndustriesSection() {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto font-sans">

      {/* Header Section */}
      <div className="px-4 mb-14">
        <SectionHeader
          badge="Industries We Help"
          title={
            <>
              The right solution for <br className="hidden md:block" />
              companies - any size, any <br className="hidden md:block" />
              industry.
            </>
          }
          description="We work with organizations across multiple industries, delivering tailored solutions that match their workflows, compliance needs, and operational goals."
        />
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {industries.map((industry) => {
          const IconComponent = Icons[industry.icon];

          return (
            <div
              key={industry.id}
              className={`
                group relative flex flex-col justify-between p-7 rounded-2xl
                h-full min-h-65 overflow-hidden transition-all duration-300
                hover:-translate-y-1 hover:shadow-xl cursor-pointer
                ${industry.isDark ? 'bg-[#183b7c] text-white' : 'bg-[#DCE6F9] text-black'}
              `}
            >

              {/* Background Image */}
              <img
                src={industry.imageSrc}
                alt={industry.title}
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-[#A2B5CA]/50 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Card Content */}
              <div className="relative z-10 mb-8">

                {/* Title */}
                <h3
                  className={`text-[1.1rem] font-bold mb-3 tracking-wide transition-colors duration-300 ${
                    industry.isDark ? 'text-white' : 'text-black'
                  }`}
                >
                  {industry.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-[0.85rem] leading-relaxed transition-colors duration-300 ${
                    industry.isDark ? 'text-blue-100/90' : 'text-black'
                  }`}
                >
                  {industry.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="relative z-10 flex items-center justify-between mt-auto">

                {/* Learn More */}
                <div
                  className={`group/learn inline-flex items-center gap-2 text-[0.9rem] font-semibold cursor-pointer ${
                    industry.isDark ? "text-white" : "text-black"
                  }`}
                >
                  <span className="relative pb-0.5">
                    Learn More

                    {/* Underline */}
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-current scale-x-0 origin-left transition-transform duration-300 group-hover/learn:scale-x-100" />
                  </span>

                  {/* Arrow */}
                  <FaArrowRightLong
                    className="w-4 h-4 opacity-0 translate-x-2 group-hover/learn:opacity-100 group-hover/learn:translate-x-0 transition-all duration-300"
                  />
                </div>

                {/* Circular Icon Wrapper */}
                <div
                  className={`
                    flex items-center justify-center w-10 h-10 rounded-full
                    transition-colors duration-300
                    ${
                      industry.isDark
                        ? 'bg-white text-[#2B4EAB]'
                        : 'bg-[#101e48] text-white'
                    }
                  `}
                >
                  <IconComponent className="w-5 h-5" />
                </div>

              </div>
            </div>
          );
        })}

      </div>

      {/* Footer Link */}
      <div className="mt-12 text-right">
        <a
          href="#"
          className="text-slate-600 font-medium hover:underline hover:text-black transition-colors inline-flex items-center gap-1 text-sm group"
        >
          Discover More Industries

          <FaArrowLeft className="w-2 h-4 rotate-180 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
        </a>
      </div>

    </section>
  );
}
