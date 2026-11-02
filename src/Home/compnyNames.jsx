import React from "react";
import { assets } from "../assets/assets";

const CompnyNames = () => {
  // Soo qaado dhammaan company images-ka
  const images = Object.entries(assets).filter(
    ([name]) => name !== "main"
  );

  return (
    <section className="relative  w-full overflow-hidden bg-white/10 mx-auto max-w-6xl  ">

     

      {/* Infinite Logo Slider */}
      <div className="group flex w-full overflow-hidden">

        <div className="logo-track flex w-max items-center gap-12">

          {/* First Group */}
          {images.map(([name, src], index) => (
            <div
              key={`${name}-${index}`}
              className="flex h-20 w-36 shrink-0 items-center justify-center rounded-xl bg-white p-3"
            >
              <img
                src={src}
                alt={name}
                className="h-full w-full object-contain"
              />
            </div>
          ))}

          {/* Duplicate Group for Infinite Loop */}
          {images.map(([name, src], index) => (
            <div
              key={`duplicate-${name}-${index}`}
              aria-hidden="true"
              className="flex h-20 w-36 shrink-0 items-center justify-center rounded-xl bg-white p-3"
            >
              <img
                src={src}
                alt=""
                className="h-full w-full object-contain"
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default CompnyNames;