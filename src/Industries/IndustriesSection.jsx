
import React from "react";
import {
  HiOutlineBuildingLibrary,
  HiOutlineHeart,
  HiOutlineHomeModern,
  HiOutlineAcademicCap,
  HiOutlineShoppingBag,
  HiOutlineBuildingOffice2,
  HiOutlineSun,
  HiOutlineGlobeAlt,
  HiCheck,
  HiArrowRight,
} from "react-icons/hi2";
import SectionHeader from "../components/SectionHeader";

const industries = [
  {
    icon: HiOutlineBuildingLibrary,
    title: "Financial & Banking",
    description: "Secure fintech solutions for banks and financial institutions",
    challenges: [
      "Legacy system integration",
      "Scalability",
      "Security compliance",
    ],
    solutions: [
      "Cloud migration",
      "Process automation",
      "Advanced analytics",
    ],
    result: "100% efficiency increase for Fortune 500 company",
  },
  {
    icon: HiOutlineHeart,
    title: "Healthcare & Hospitals",
    description: "Modernizing Health Services for Impactful Care Delivery",
    challenges: [
      "Data silos",
      "Change management",
      "Complex workflows",
    ],
    solutions: [
      "Unified platforms",
      "Workflow automation",
      "Custom integrations",
    ],
    result: "Reduced operational costs by 40%",
  },
  {
    icon: HiOutlineHomeModern,
    title: "Real Estate & Properties",
    description: "Innovative real estate solutions for hospitals and clinics",
    challenges: [
      "Patient data privacy",
      "Interoperability",
      "Regulatory compliance",
    ],
    solutions: [
      "HIPAA-compliant systems",
      "EHR integration",
      "Telemedicine solutions",
    ],
    result: "Improved patient outcomes by 20%",
  },
  {
    icon: HiOutlineAcademicCap,
    title: "Education",
    description: "Omnichannel solutions for retailers and e-commerce",
    challenges: [
      "Inventory management",
      "Customer engagement",
      "Supply chain visibility",
    ],
    solutions: [
      "POS integration",
      "Personalized marketing",
      "Real-time analytics",
    ],
    result: "Sales growth of 25% in one year",
  },
  {
    icon: HiOutlineShoppingBag,
    title: "Retail & E-commerce",
    description: "EdTech platforms for schools and universities",
    challenges: [
      "Remote learning",
      "Student engagement",
      "Resource allocation",
    ],
    solutions: [
      "Learning management systems",
      "Interactive content",
      "Analytics dashboards",
    ],
    result: "Doubled student retention rates",
  },
  {
    icon: HiOutlineBuildingOffice2,
    title: "Construction & Engineering",
    description: "Smart logistics and supply chain management",
    challenges: [
      "Route optimization",
      "Fleet management",
      "Real-time tracking",
    ],
    solutions: [
      "IoT tracking",
      "Automated scheduling",
      "Predictive analytics",
    ],
    result: "Delivery times reduced by 40%",
  },
  {
    icon: HiOutlineSun,
    title: "Agriculture & AgriTech",
    description: "Smart agriculture and supply chain management",
    challenges: [
      "Route optimization",
      "Fleet management",
      "Real-time tracking",
    ],
    solutions: [
      "IoT tracking",
      "Automated scheduling",
      "Predictive analytics",
    ],
    result: "Productivity increased by 30%",
  },
  {
    icon: HiOutlineGlobeAlt,
    title: "Tourism",
    description: "Smart logistics and supply chain management",
    challenges: [
      "Route optimization",
      "Fleet management",
      "Real-time tracking",
    ],
    solutions: [
      "IoT tracking",
      "Automated scheduling",
      "Predictive analytics",
    ],
    result: "Delivery times reduced by 50%",
  },
];

function IndustryCard({ industry }) {
  const Icon = industry.icon;

  return (
    <div className="flex flex-col rounded-xl bg-[#E9F8FD] p-4 transition-transform duration-200 hover:-translate-y-1">
      {/* Icon */}
      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-md bg-[#35B9E8]">
        <Icon className="text-lg text-white" strokeWidth={1.7} />
      </div>

      {/* Title */}
      <h3 className="text-base font-semibold leading-tight text-[#102B4E]">
        {industry.title}
      </h3>

      {/* Description */}
      <p className="mt-1 text-xs leading-relaxed text-slate-500">
        {industry.description}
      </p>

      {/* Challenges */}
      <div className="mt-4">
        <h4 className="mb-2 text-xs font-semibold text-[#102B4E]">
          Key Challenges:
        </h4>

        <ul className="space-y-1.5">
          {industry.challenges.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-xs text-slate-500"
            >
              <HiCheck className="mt-0.5 shrink-0 text-sm text-[#35B9E8]" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Solutions */}
      <div className="mt-4">
        <h4 className="mb-2 text-xs font-semibold text-[#102B4E]">
          Our Solutions:
        </h4>

        <ul className="space-y-1.5">
          {industry.solutions.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-xs text-slate-500"
            >
              <HiCheck className="mt-0.5 shrink-0 text-sm text-[#35B9E8]" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Case Study */}
      <div className="mt-4 bg-white px-3 py-2">
        <h4 className="text-[10px] font-semibold text-[#102B4E]">
          Case Study Result:
        </h4>
        <p className="mt-1 text-[10px] leading-relaxed text-[#35B9E8]">
          {industry.result}
        </p>
      </div>

      {/* Button */}
      <button className="mt-3 cursor-pointer flex w-full items-center justify-center gap-1 rounded-md bg-[#35B9E8] py-2 text-xs font-semibold text-white transition-colors hover:bg-[#159DCE]">
        Learn More
        <HiArrowRight className="text-sm" />
      </button>
    </div>
  );
}

export default function IndustriesSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">

        {/* Section Header */}
        <div className="px-4 mb-14">
        <SectionHeader
          badge="Industries"
          title={
            <>
              Solving IT Challenges in Every Industry <br className="hidden md:block" />
              
            </>
          }
          description="From empowering startups to optimizing established businesses, Heegan Technology delivers tailored digital solutions that drive efficiency, innovation, and growth."
        />
      </div>

        {/* Industry Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <IndustryCard key={industry.title} industry={industry} />
          ))}
        </div>

      </div>
    </section>
  );
}
