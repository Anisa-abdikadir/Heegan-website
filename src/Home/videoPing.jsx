import React, { useState } from "react";
import heroVideo from "../assets/videos/hero.mp4";

import { FaPlay } from "react-icons/fa";
import { FiX } from "react-icons/fi";

const VideoPing = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      {/* Main Circle */}
     {/* Main Circle */}

{/* Main Circle */}
<div className="flex items-center justify-center bg-amber-900 ">
  <div className="relative flex h-50 w-50 items-center justify-center rounded-full bg-white/50 md:h-120 md:w-120">

    {/* Inner White Circle */}
    <div className="flex h-[75%] w-[75%] items-center justify-center rounded-full bg-white/5">

      {/* Play Button */}
      <button
        onClick={() => setShowVideo(true)}
        aria-label="Play video"
        className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#32B0DF] shadow-lg transition duration-300 hover:scale-110"
      >
        <span className="pointer-events-none absolute inset-0 animate-ping rounded-full bg-white/70"></span>

        <FaPlay className="relative z-10 ml-1 text-xl" />
      </button>

    </div>
  </div>
</div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4">

          <div className="relative w-full max-w-3xl">

            {/* Close Button */}
            <button
              onClick={() => setShowVideo(false)}
              aria-label="Close video"
              className="absolute -right-2 -top-12 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition hover:bg-sky-400"
            >
              <FiX size={22} />
            </button>

            {/* Video */}
            <video
              autoPlay
              controls
              playsInline
              className="w-full rounded-2xl"
            >
              <source src={heroVideo} type="video/mp4" />
              Your browser does not support video.
            </video>

          </div>
        </div>
      )}
    </>
  );
};

export default VideoPing;