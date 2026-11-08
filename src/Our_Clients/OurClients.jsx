import React from "react";
import { assets } from "../assets/ImgLoop";

const OurClients = () => {

  const images = Object.entries(assets).map(([name, src], index) => ({
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

        {/* Company Images */}
        <div className="grid grid-cols-2 items-center gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">

          {images.map((image) => (
            <div
              key={image.id}
              className="flex h-28 items-center justify-center rounded-xl hover:border-2 hover:border-[#32B0DF] "
            >
              <img
                src={image.src}
                alt={image.name}
                title={image.name}
                className="h-full w-full object-contain"
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default OurClients;