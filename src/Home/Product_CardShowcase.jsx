
import React from "react";
import { FaHardHat, FaUtensils } from "react-icons/fa";

import businessIcon from "../assets/business.png";
import healthIcon from "../assets/health.png";
import propertyIcon from "../assets/property.png";
import shidaalIcon from "../assets/shidaal.png";
import SectionHeader from "../components/SectionHeader";

const PRODUCTS = [
  {
    title: "eDhis Construction ERP",
    shapeTitle: "eDhis",
    icon: FaHardHat,
    color: "#F59E0B",
    description:
      "eDhis is a complete construction management system designed to help construction companies manage projects, budgets, materials, workforce, expenses, and project progress from one centralized platform.",
    url: "#",
  },
  {
    title: "Beec ERP",
    shapeTitle: "Beec ERP",
    src: businessIcon,
    color: "#3CB8EA",
    description:
      "Beec is an enterprise platform with a full suite of essential modules including Point of Sale, Sales, Inventory, and Accounting—built to unify and manage your entire business seamlessly.",
    url: "https://beec.so/",
  },
  {
    title: "True Property",
    shapeTitle: "True Property",
    src: propertyIcon,
    color: "#29783B",
    description:
      "True Property helps real estate owners and agents manage units, tenants, payments, leases, and reports—all in one centralized and easy-to-use system.",
    url: "https://trueproperty.tech/",
  },
  {
    title: "Dhadhan Restaurant ERP",
    shapeTitle: "Dhadhan",
    icon: FaUtensils,
    color: "#F97316",
    description:
      "Dhadhan is a complete restaurant management platform built to simplify operations with Point of Sale, inventory management, kitchen operations, customer management, accounting, and reporting.",
    url: "#",
  },
  {
    title: "eCaafi",
    shapeTitle: "eCaafi",
    src: healthIcon,
    color: "#95CE85",
    description:
      "eCaafi streamlines operations for hospitals and clinics with modules for patient management, appointments, billing, pharmacy, laboratory, and digital records.",
    url: "#",
  },
  {
    title: "eShidaal",
    shapeTitle: "eShidaal",
    src: shidaalIcon,
    color: "#ED2024",
    description:
      "eShidaal enables petrol stations to track fuel levels, manage pumps, monitor sales, handle employees, and access real-time analytics with precision.",
    url: "#",
  },
];

function ShapeBadge({ src, icon: Icon, title, bgColor, svgClass }) {
  return (
    <div className="relative flex h-34 w-36  flex-col items-center justify-center">
      <svg
        viewBox="0 0 300 260"
        className="absolute inset-0 h-full w-full  drop-shadow-xl"
        preserveAspectRatio="none"
      >
        <path
          d="M 75 20 Q 150 35 225 20 Q 245 25 255 45 L 290 200 Q 300 230 260 240 Q 150 255 40 240 Q 0 230 10 200 L 45 45 Q 55 25 75 20 Z"
          fill={bgColor}
        />
      </svg>

      <div className="relative z-10 flex flex-col  items-center justify-center">
        {Icon ? (
          <div
            className={`${svgClass} mb-3 flex items-center justify-center`}
            role="img"
            aria-label={title}
          >
            <Icon className="text-[38px] text-white" />
          </div>
        ) : (
          <svg
            viewBox="0 0 100 100"
            className={`${svgClass} mb-3`}
            preserveAspectRatio="xMidYMid meet"
            role="img"
            aria-label={title}
          >
            <image
              href={src}
              width="70"
              height="70"
              x="15"
              y="30"
              preserveAspectRatio="xMidYMid meet"
            />
          </svg>
        )}

        <h1 className="mb-2 px-2 text-center font-sans text-sm font-medium tracking-wide text-white">
          {title}
        </h1>
      </div>
    </div>
  );
}

function ProductCard({ title, description, url, children }) {
  const external = url !== "#";

  return (

    <article className="flex h-full flex-col rounded-[28px] border  border-gray-200 bg-white p-6 transition-colors duration-300 hover:border-gray-300 sm:p-8">
      <div className="flex min-h-47.5 items-center justify-center py-8">
        {children}
      </div>

      <div className="mt-7 flex flex-1 flex-col text-left">
        <h3 className="text-[20px] font-semibold leading-[1.35] text-[#0f2440]">
          {title}
        </h3>

        <p className="mt-3 max-w-[95%] text-[16px] font-normal leading-7 text-[#434153]">
          {description}
        </p>
      </div>

      <div className="group mt-6 flex items-center gap-1.5 text-left text-sm font-medium text-[#0f2440]">
        <a
          href={url}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="relative inline-block text-[#0f2440] after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#0f2440] after:transition-all after:duration-300 after:content-[''] hover:after:w-full"
        >
          Learn More
        </a>

        <span className="translate-x-0 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            >
              <path d="M5 12h14" />
              <path d="m14 7 5 5-5 5" />
            </g>
          </svg>
        </span>
      </div>
    </article>
  );
}

export default function CardShowcase() {
  return (
    <section
      className="py-2 bg-white px-4"
      style={{ fontFamily: "Sora, sans-serif" }}
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap"
        precedence="default"
      />

      <div className="container mx-auto">
      <div className="py-20 px-4">
      <SectionHeader
        badge="Our Products"
        title="Smart Platforms for Every Industry"
        description="Heegan Technology provides advanced, industry-specific platforms designed to improve efficiency, automate workflows, and drive business success."
      />
    </div>

        <div className="mt-2 grid grid-cols-1  gap-6 max-w-7xl mx-auto sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p) => (
            <ProductCard
              key={p.title}
              title={p.title}
              description={p.description}
              url={p.url}
            >
              {p.icon ? (
                <ShapeBadge
                  icon={p.icon}
                  title={p.shapeTitle}
                  bgColor={p.color}
                  svgClass="h-14 w-14"
                />
              ) : (
                <ShapeBadge
                  src={p.src}
                  title={p.shapeTitle}
                  bgColor={p.color}
                  svgClass="h-16 w-16"
                />
              )}
            </ProductCard>
          ))}
        </div>
      </div>
    </section>
  );
}
