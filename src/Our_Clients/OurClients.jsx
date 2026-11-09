import React from "react";
import { assets } from "../assets/ImgLoop";

const OurClients = () => {
  const logos = Object.entries(assets).map(([name, src], index) => ({
    id: index + 1,
    name,
    src,
  }));

  return (
    <section className="w-full overflow-hidden bg-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-[#073568] md:text-3xl">
            Our Trusted Partners
          </h2>

          <p className="mt-2 text-sm text-gray-500 md:text-base">
            Companies and organizations that trust Heegan Technology.
          </p>
        </div>

        {/* LOGO GRID */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="group relative flex h-26 items-center justify-center rounded-lg border border-slate-200 bg-white px-3 transition-all duration-300 hover:z-10 hover:border-[#32B0DF] hover:shadow-lg"
            >
              <img
                src={logo.src}
                alt={logo.name}
                title={logo.name}
                loading="lazy"
                className="max-h-9 w-auto max-w-full object-contain transition-transform duration-300 ease-out group-hover:-translate-y-2 group-hover:scale-125"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;