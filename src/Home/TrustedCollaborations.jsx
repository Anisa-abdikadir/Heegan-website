
import React from "react";
import SectionHeader from "../components/SectionHeader";
import { assets } from "../assets/assets";

const logos = [
  { id: 1, src: assets.raqay, alt: "Raqay" },
  { id: 2, src: assets.vilage, alt: "The Village" },
  { id: 3, src: assets.galmudug, alt: "Galmudug" },
  { id: 4, src: assets.dowlad, alt: "Dowlad" },
  { id: 5, src: assets.sibrar, alt: "Sibrara" },
  { id: 6, src: assets.mumtaz, alt: "Mumtaz" },
  { id: 7, src: assets.dreamland, alt: "Dreamland" },
  { id: 8, src: assets.sarman, alt: "Sarmaan" },
  { id: 9, src: assets.fulcrum, alt: "Fulcrum" },
  { id: 10, src: assets.wasarad, alt: "Wasarada" },
];

// Logo Card
function LogoCard({ src, alt }) {
  return (
    <div className="group flex h-20 items-center justify-center bg-white rounded-xl border border-gray-100 b p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#35b9eb] hover:shadow-xl">
      <img
        src={src}
        alt={alt}
        className="max-h-10 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
      />
    </div>
  );
}

// Organic Image Card
function ImageCard({ src, alt }) {
  return (
    <div className="relative mx-auto w-full max-w-[340px]">

      {/* Main Organic Image */}
      <div className="relative aspect-square w-full">

        <svg
          viewBox="0 0 320 320"
          className="h-full w-full drop-shadow-md "
        >
          <defs>
            <clipPath id="organicImageClip">
              <path d="M158 15 C112 13 76 43 55 80 C28 128 35 190 63 224 C92 259 143 278 190 263 C231 250 257 224 255 194 C253 168 230 151 210 136 C190 121 178 101 176 78 C174 49 179 22 158 15 Z" />
            </clipPath>
          </defs>

          <image
            href={src}
            x="0"
            y="0"
            width="320"
            height="320"
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#organicImageClip)"
          />
        </svg>

      </div>

    {/* Floating Organic Image */}
<div className="absolute right-[4%] top-[4%] z-10
  h-24 w-24 overflow-hidden
  rounded-[22%_100%_105%_105%/10%_90%_100%_90%]  rotate-90
  border-[3px] border-white
  bg-white shadow-lg
  transition-all duration-300
  hover:-translate-y-2 hover:shadow-xl
  sm:h-28 sm:w-28"
>
  <img
    src={src}
    alt={alt}
    className="h-full w-full object-cover"
  />
</div>

    </div>
  );
}

// Main Section
export default function TrustedCollaborations() {
  return (
    <section className="overflow-hidden bg-white px-5 py-16 sm:px-8 lg:py-24">
      

      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <SectionHeader
          badge="Trusted Collaborations"
          title={
            <>
              Partners Who Strengthen
              <br className="hidden sm:block" />
              Our Ecosystem
            </>
          }
        />

        {/* Main Content */}
        <div className="mt-12 grid items-center gap-10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.5fr)] lg:mt-16 lg:gap-14">

          {/* Left: Organic Image */}
          <div className="mx-auto flex w-full max-w-sm items-center justify-center">
            <ImageCard
              src={assets.shape_img}
              alt="Trusted collaboration partner"
            />
          </div>

          {/* Right: Partner Logos */}
          {/* Right: Partner Logos */}
<div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5">

  {logos.map((logo, index) => (
    <div
      key={logo.id}
      className={index === 1 ? "-translate-y-4" : ""}
    >
      <LogoCard
        src={logo.src}
        alt={logo.alt}
      />
    </div>
  ))}

</div>

        </div>
      </div>
    </section>
  );
}
