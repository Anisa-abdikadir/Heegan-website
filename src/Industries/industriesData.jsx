
import { assets } from "../assets/assets";

import {
  FiActivity,
  FiBook,
  FiBriefcase,
  FiDollarSign,
  FiHeart,
  FiHome,
  FiNavigation,
  FiPackage,
  FiShoppingCart,
  FiSun,
  FiTool,
  FiTruck,
} from "react-icons/fi";

export const industries = [
  {
    id: "healthcare",
    name: "Healthcare & Hospitals",
    icon: FiActivity,
    path: "/industries/healthcare",
    title: "Healthcare & Hospitals",
    description:
      "Clinical software, patient management, and secure healthcare data solutions to improve outcomes and streamline operations.",
    image: assets.Healthcarre,
  },
  {
    id: "education",
    name: "Education",
    icon: FiBook,
    path: "/industries/education",
    title: "Education",
    description:
      "Learning management systems, campus digital infrastructure, and student data solutions that make teaching and learning more effective.",
    image: assets.gradu,
  },
  {
    id: "logistics",
    name: "Logistics & Transportation",
    icon: FiTruck,
    path: "/industries/logistics",
    title: "Logistics & Transportation",
    description:
      "Fleet tracking, route optimization, and supply chain systems that keep goods and people moving on time.",
    image: assets.logistics,
  },
  {
    id: "public-sector",
    name: "Public Sector",
    icon: FiBriefcase,
    path: "/industries/public-sector",
    title: "Public Sector",
    description:
      "Digital government services, citizen portals, and secure administration systems built for transparency and efficiency.",
    image: assets.public,
  },
  {
    id: "agriculture",
    name: "Agriculture & Agri-Tech",
    icon: FiSun,
    path: "/industries/agriculture",
    title: "Agriculture & Agri-Tech",
    description:
      "Smart farming tools, crop monitoring, and data-driven solutions that help farmers increase yield and reduce waste.",
    image: assets.agriculture,
  },
  {
    id: "retail",
    name: "Retail & E-commerce",
    icon: FiShoppingCart,
    path: "/industries/retail",
    title: "Retail & E-commerce",
    description:
      "Online stores, point-of-sale systems, and inventory platforms that help businesses sell smarter and grow faster.",
    image: assets.paymentprocessing,
  },
  {
    id: "real-estate",
    name: "Real Estate & Properties",
    icon: FiHome,
    path: "/industries/real-estate",
    title: "Real Estate & Properties",
    description:
      "Property management software, listing platforms, and tenant services that simplify buying, renting, and managing property.",
    image: assets.realEstate,
  },
  {
    id: "financial",
    name: "Financial & Banking",
    icon: FiDollarSign,
    path: "/industries/financial-banking",
    title: "Financial & Banking",
    description:
      "Core banking, mobile payments, and secure transaction systems that protect customers and support financial inclusion.",
    image: assets.payment,
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: FiPackage,
    path: "/industries/manufacturing",
    title: "Manufacturing",
    description:
      "Production monitoring, ERP systems, and automation solutions that improve quality and reduce downtime on the factory floor.",
    image: assets.Industry,
  },
  {
    id: "construction",
    name: "Construction & Engineering",
    icon: FiTool,
    path: "/industries/construction",
    title: "Construction & Engineering",
    description:
      "Project management tools, site monitoring, and engineering software that keep projects on schedule and within budget.",
    image: assets.contruction,
  },
  {
    id: "tourism",
    name: "Tourism",
    icon: FiNavigation,
    path: "/industries/tourism",
    title: "Tourism",
    description:
      "Booking platforms, visitor management, and digital guides that create smooth and memorable travel experiences.",
    image: assets.tourism,
  },
  {
    id: "ngos",
    name: "NGOs & Non-Profits",
    icon: FiHeart,
    path: "/industries/ngos",
    title: "NGOs & Non-Profits",
    description:
      "Donor management, program tracking, and impact reporting tools that help organizations serve communities better.",
    image: assets.Hero,
  },
];
