import {
  FiCode,
  FiSmartphone,
  FiLayout,
  FiShoppingBag,
  FiCpu,
  FiShield,
} from "react-icons/fi";

export const services = [
  {
    id: "software",
    name: "Software Development",
    icon: FiCode,
    path: "/services/software-development",
    title: "Software Development",
    description:
      "Custom software solutions tailored to your business needs, from web and mobile applications to enterprise systems.",
  },
  {
    id: "mobile",
    name: "Mobile App Development",
    icon: FiSmartphone,
    path: "/services/mobile-app-development",
    title: "Mobile App Development",
    description:
      "Creating intuitive and engaging mobile applications for iOS and Android platforms to enhance user experience and drive business growth.",
  },
  {
    id: "web-design",
    name: "Responsive Web Design",
    icon: FiLayout,
    path: "/services/responsive-web-design",
    title: "Responsive Web Design",
    description:
      "Designing and developing responsive websites that provide an optimal viewing experience across all devices, ensuring accessibility and usability.",
  },
  {
    id: "ecommerce",
    name: "E-commerce Development",
    icon: FiShoppingBag,
    path: "/services/ecommerce-development",
    title: "E-commerce Development",
    description:
      "Building robust and scalable e-commerce platforms that deliver seamless shopping experiences, from product browsing to secure checkout.",
  },
  {
    id: "ai",
    name: "AI & Machine Learning",
    icon: FiCpu,
    path: "/services/ai-machine-learning",
    title: "AI & Machine Learning",
    description:
      "Implementing AI and machine learning solutions to automate processes, gain insights from data, and enhance decision-making capabilities.",
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity Services",
    icon: FiShield,
    path: "/services/cybersecurity",
    title: "Cybersecurity Services",
    description:
      "Providing comprehensive cybersecurity solutions to protect your digital assets, including risk assessments, threat detection, and incident response.",
  },
];