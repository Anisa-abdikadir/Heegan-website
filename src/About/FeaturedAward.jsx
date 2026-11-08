
import { FaCheck } from "react-icons/fa6";
import { assets } from "../assets/assets";

const highlights = [
  "Innovation in technology solutions",
  "Excellence in software development",
  "Contribution to digital transformation",
  "Impact across businesses and industries",
];

export default function FeaturedAward() {
  return (
    <section className="bg-white px-5 py-14 sm:py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-14">
       {/* Left Side - Content */}
<div className="flex w-full items-center justify-center">
  <img
    src={assets.Award}
    alt="Best Technology Company Award"
    className="h-64 w-full max-w-md rounded-3xl bg-[#F8F8F8] object-contain sm:h-80 md:h-96 lg:h-[420px]"
  />
</div>

       {/* Right Side - Award Image */}
        <div>
          <span className="inline-flex items-center rounded-full border border-[#35b9eb] bg-[#CFEEFA] px-3 py-1 text-[10px] font-semibold text-[#0F284D]">
            Featured Award
          </span>

          <h2 className="mt-4 text-2xl font-bold text-[#0F284D] sm:text-3xl lg:text-4xl">
            Best Technology Company
          </h2>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-[#0F284D] px-3 py-1.5 text-[10px] font-semibold text-white">
              East African Somali Award
            </span>

            <span className="rounded-full bg-[#e4f6fd] px-3 py-1.5 text-[10px] font-semibold text-[#0F284D]">
              2025
            </span>
          </div>

          <p className="mt-5 text-sm leading-7 text-[#434153]">
            Heegan Technology was recognized as Best Technology Company at
            the East African Somali Award 2026 for innovation, excellence
            in software development, and contribution to digital
            transformation across East Africa.
          </p>

          <ul className="mt-6 space-y-4">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-sm text-[#434153]"
              >
                <div className="px-2 py-2 rounded-full bg-[#EAF8FD]">
                                    <FaCheck className="shrink-0 text-sm text-[#35b9eb]" />

                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>


      </div>
    </section>
  );
}
