
import React, { useState } from "react";

import {
  FiCode,
  FiGlobe,
  FiSmartphone,
  FiCreditCard,
  FiArrowUpRight,
  FiChevronLeft,
  FiChevronRight,
    FiLock,
  
  
} from "react-icons/fi";
import { RiRobot2Line } from "react-icons/ri";



import Title from "../Services/Title";

// Services Data - 6 Cards Only
const services = [
  {
    title: "Software Development",
    desc: "Empowering your business with innovative software solutions tailored to meet your unique needs.",
    icon: FiCode,
    image: "https://heegantechnology.com/assets/software-devolopment-BMTU-DnU.webp",
  },
  {
    title: "Responsive Web Design",
    desc: "Beautiful, responsive websites that engage your audience and drive results. Our web design team crafts digital experiences that stand out.",
    icon: FiGlobe,
    image: "https://heegantechnology.com/assets/web-design-image-BpEqh6IE.webp",
  },
  {
    title: "Mobile App Development",
    desc: "Reach your customers on any device with custom mobile apps. We build intuitive, high-performance apps for iOS and Android.",
    icon: FiSmartphone,
    image: "https://heegantechnology.com/assets/mobile-app-image-CUrveGei.webp",
  },
  {
    title: "E-commerce Development",
    desc: "Grow your business online with robust e-commerce platforms. We create secure, user-friendly stores that convert visitors into customers.",
    icon: FiCreditCard,
    image: "https://heegantechnology.com/assets/e-commerce-image-DgxvGOem.webp",
  },
  {
    title: "AI & Machine Learning",
    desc: "Unlock insights and automation with AI solutions. Our team helps you leverage machine learning for smarter business decisions.",
    icon: RiRobot2Line ,
    image: "https://heegantechnology.com/assets/ai_bot-AC3BtHSt.webp",
  },
  {
    title: "Cybersecurity Services",
    desc: "Protect your data and systems with advanced cybersecurity services. We safeguard your business from threats and vulnerabilities.",
    icon: FiLock ,
    image: "https://heegantechnology.com/assets/cybersecurity-image-CJ0LeFQq.webp",
  },
];

// Service Card Component
function ServiceCard({ title, desc, icon: Icon, image }) {
  return (
    <div className="group relative h-110 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl">

      {/* Background Image */}
      <div className="absolute inset-x-0 bottom-0 h-44 transition-all duration-500 ease-in-out group-hover:top-0 group-hover:h-auto">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      {/* Card Content */}
      <div className="relative z-10 flex h-full flex-col p-6 transition-colors duration-500">

        {/* Icon */}
        <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-gray-200 bg-white text-[#32B0DF] transition-all duration-500  ">
          <Icon size={22} />
        </div>

        {/* Title */}
        <h3 className="mt-5 text-lg font-semibold text-black transition-colors duration-500 group-hover:text-white">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm leading-relaxed text-gray-500 transition-colors duration-500 group-hover:text-white/90">
          {desc}
        </p>

        {/* See More */}
       <div className="items-center mt-auto justify-center">
         <a
          href="#"
          className=" flex items-center gap-1 text-sm font-medium text-white transition-colors duration-300 group-hover:text-white"
        >
          See more

          <FiArrowUpRight className="transition-transform " />
        </a>
       </div>

      </div>
    </div>
  );
}

// Main Component
export default function ServiceCards() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsPerPage = 4;

  // Show 4 cards at a time
  const visibleServices = services.slice(
    currentIndex,
    currentIndex + cardsPerPage
  );

  // Next: Move forward by one card
  const handleNext = () => {
    if (currentIndex < services.length - cardsPerPage) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  // Previous: Move backward by one card
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="bg-white px-6">

      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-10 text-center">
          <Title />
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {visibleServices.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
            />
          ))}

        </div>

        {/* Navigation Buttons */}
        <div className="mt-6 flex justify-end gap-3">

          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300
              ${
                currentIndex === 0
                  ? "cursor-not-allowed border-gray-300 text-gray-300"
                  : "cursor-pointer border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white"
              }`}
            aria-label="Previous services"
          >
            <FiChevronLeft />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={currentIndex >= services.length - cardsPerPage}
            className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300
              ${
                currentIndex >= services.length - cardsPerPage
                  ? "cursor-not-allowed border-gray-300 text-gray-300"
                  : "cursor-pointer border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white"
              }`}
            aria-label="Next services"
          >
            <FiChevronRight />
          </button>

        </div>

      </div>

    </section>
  );
}
