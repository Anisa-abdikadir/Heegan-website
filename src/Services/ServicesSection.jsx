import React from "react";
import SectionHeader from "../components/SectionHeader";

const services = [
  {
    title: "Software Development",
    desc: "Empowering your business with innovative software solutions tailored to meet your unique needs.",
    image: "https://heegantechnology.com/assets/software-devolopment-BMTU-DnU.webp",
  },
  {
    title: "Responsive Web Design",
    desc: "Beautiful, responsive websites that engage your audience and drive results. Our web design team crafts digital experiences that stand out.",
    image: "https://heegantechnology.com/assets/web-design-image-BpEqh6IE.webp",
  },
  {
    title: "Mobile App Development",
    desc: "Reach your customers on any device with custom mobile apps. We build intuitive, high-performance apps for iOS and Android.",
    image: "https://heegantechnology.com/assets/mobile-app-image-CUrveGei.webp",
  },
  {
    title: "E-commerce Development",
    desc: "Grow your business online with robust e-commerce platforms. We create secure, user-friendly stores that convert visitors into customers.",
    image: "https://heegantechnology.com/assets/e-commerce-image-DgxvGOem.webp",
  },
  {
    title: "AI & Machine Learning",
    desc: "Unlock insights and automation with AI solutions. Our team helps you leverage machine learning for smarter business decisions.",
    image: "https://heegantechnology.com/assets/ai_bot-AC3BtHSt.webp",
  },
  {
    title: "Cybersecurity Services",
    desc: "Protect your data and systems with advanced cybersecurity services. We safeguard your business from threats and vulnerabilities.",
    image: "https://heegantechnology.com/assets/cybersecurity-image-CJ0LeFQq.webp",
  },
];

function ServiceCard({ title, desc, image }) {
  return (
    <div className="flex flex-col rounded-2xl bg-[#EAF8FD] p-4 transition-shadow duration-300 hover:shadow-lg">
      <div className="h-44 w-full overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover "
        />
      </div>

      <h3 className="mt-5 text-lg font-bold text-[#0f1a2e]">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-slate-500">
        {desc}
      </p>
    </div>
  );
}

export default function ServiceCards() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">

        {/* HEADER */}
        <div className="mb-12 text-center">
          <SectionHeader
            badge="Services"
            title="Our Service Offerings"
            description="An exemplary digital solutions provider that uses cutting-edge technology to provide leading innovative digital products."
          />
        </div>

        {/* CARDS: 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

      </div>
    </section>
  );
}