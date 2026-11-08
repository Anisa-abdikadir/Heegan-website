
import { FaCheck } from "react-icons/fa6";
import MediaPill from "./MediaPill";
import { assets } from "../assets/assets";
import sarmaan from '../assets/sarman.mp4';


export default function FeaturedSolution() {
  return (
    <section className="bg-white px-5 py-20">
      <div className="mx-auto max-w-6xl">

        <div className="grid items-center gap-10 md:grid-cols-2">

          {/* Left Side - Content */}
          <div className="md:order-2">
            <span className="inline-flex items-center rounded-full border border-[#35b9eb] bg-[#35b9eb]/15 px-4 py-1 text-[11px] font-semibold text-[#0f2440]">
              Featured Solution
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-[#0f2440] sm:text-4xl">
              The All-in-One Platform to Run Your Entire Business
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-[#434153]">
              Beec Business gives companies complete control over sales,
              inventory, accounting, and operations through a unified system
              designed for reliability, speed, and growth.
            </p>

            <ul className="mt-5 space-y-2">
              {[
                "Real-time inventory tracking",
                "Multi-branch POS system",
                "Smart dashboards & reports",
              ].map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm text-[#434153]">
                  <FaCheck className="text-[10px] text-[#35b9eb]" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side - Image & Video */}
          <div className="md:order-1">
            <MediaPill
              image={assets.phone}
              alt="All-in-one platform"
              videoUrl={sarmaan}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
