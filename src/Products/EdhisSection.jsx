import { FaPlay, FaArrowRight } from "react-icons/fa6";
import { assets } from "../assets/assets";
import ProductInfo from "../components/ProductInfo";
import Buttons from "../components/Buttons";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";


const features = [
  "Project Management",
  "Budget and Expense Tracking",
  "Material Management",
  "Workforce Management",
  "Real-Time Project Progress",
];

const stats = [
  { number: "500+", label: "Projects" },
  { number: "94%", label: "Satisfaction" },
  { number: "96%", label: "Accurate" },
];

export default function EdhisSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">

      {/* Main Container */}
      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 md:grid-cols-[0.4fr_0.6fr] lg:gap-10">

        {/* LEFT CONTENT */}
        <section className="w-full px-2 py-5 sm:px-4 lg:px-0">
          <ProductInfo
            title="eDhis Construction Management System"
            description="eDhis is a complete construction management system designed to help construction companies manage projects, budgets, materials, workforce, expenses, and project progress from one centralized platform."
            features={features}
            themeColor="#F59A00"
            className="w-full max-w-145"
          />

          {/* Button */}
          <Link to="/products/edhis" className="mt-6 inline-block">
            <Buttons
              variant="OrangeBg"
              size="sm"
              className=""
              icon={<FiArrowUpRight />}
            >
              Learn More
            </Buttons>
          </Link>
        </section>

        {/* RIGHT IMAGE */}
        <div className="relative mx-auto h-full min-h-87.5 w-full max-w-162.5 pt-3 sm:min-h-107.5 lg:min-h-120">

          {/* Image */}
          <div className="relative overflow-hidden rounded-tl-[10px] rounded-tr-[18px] rounded-bl-[18px] rounded-br-[18px]">
            <img
              src={assets.people}
              alt="eDhis Construction Management System"
              className="h-70 w-full object-cover sm:h-87.5 lg:h-100 xl:h-107.5"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-black/10" />


               <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">

            {/* Pink Animation Ring */}
            <span className="absolute h-16 w-16 animate-ping rounded-full bg-[#F59A00]/40 sm:h-20 sm:w-20"></span>

            {/* Play Button */}
            <button
              aria-label="Play video"
              className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#f59a00]  transition hover:scale-110 sm:h-14 sm:w-14"
            >
              <FaPlay className="ml-1 text-sm" />
            </button>

            </div>
          
          </div>

          {/* eDhis Badge */}
          <div className="absolute top-1 left-0 h-15 w-25 rounded-br-2xl bg-white">
            <div className="absolute top-2 left-0 rounded-br-xl rounded-tl-md bg-[#f59a00] px-8 py-4 text-xs font-bold text-white">
              eDhis
            </div>
          </div>

          {/* Statistics */}
          <div className="relative z-10 ml-auto -mt-12 grid w-[75%] grid-cols-3 rounded-tl-2xl bg-white px-3 py-4 sm:w-[70%] sm:py-5">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <h3 className="text-lg font-bold leading-none text-[#f59a00] sm:text-xl">
                  {stat.number}
                </h3>
                <p className="mt-1 text-[9px] text-[#64748b] sm:text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}