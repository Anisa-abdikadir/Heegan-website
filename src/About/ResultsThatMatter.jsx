import { FaCheck } from "react-icons/fa6";
import maado from "../assets/maado.mp4";
import MediaPill from "./MediaPill";
import {assets} from '../assets/assets'

export default function ResultsThatMatter() {
  return (
    <section className="bg-white px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 md:grid-cols-2">

          {/* Left Side - Content */}
          <div>
            <span className="inline-flex items-center rounded-full border border-[#35b9eb] bg-[#35b9eb]/15 px-4 py-1 text-[11px] font-semibold text-[#0f2440]">
              Results That Matter
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-[#0f2440] sm:text-4xl">
              We deliver innovative solutions that drive meaningful outcomes.
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-[#434153]">
              Our work speaks for itself. We have helped businesses modernize
              operations, launch new digital products, and automate workflows
              with exceptional results.
            </p>

            <ul className="mt-5 space-y-2">
              {[
                "50+ successful product deployments",
                "20+ industries served",
                "2,000+ daily active system users",
              ].map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm text-[#434153]">
                  <FaCheck className="text-[10px] text-[#35b9eb]" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side - Image & Video */}
          <MediaPill
            image={assets.art}
            alt="Innovative solutions"
            videoUrl={maado}
          />

        </div>
      </div>
    </section>
  );
}