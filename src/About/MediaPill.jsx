
import { useEffect, useState } from "react";
import { FaPlay, FaXmark } from "react-icons/fa6";

function VideoModal({ src, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close video"
          className="absolute -top-10 right-0 cursor-pointer text-white transition hover:text-[#35b9eb]"
        >
          <FaXmark className="text-2xl" />
        </button>

        <video
          src={src}
          controls
          autoPlay
          className="aspect-video w-full rounded-2xl bg-black"
        />
      </div>
    </div>
  );
}

export default function MediaPill({ image, alt, videoUrl }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="group relative mx-auto w-full max-w-112.5 overflow-hidden rounded-[9999px] shadow-xl">
        <img
          src={image}
          alt={alt}
          className="aspect-450/285 w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <button
          onClick={() => setOpen(true)}
          aria-label="Play video"
          className="absolute left-1/2 top-1/2 cursor-pointer flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#35b9eb] shadow-lg ring-8 ring-[#35b9eb]/25 transition-all duration-300 hover:scale-110 hover:bg-[#35b9eb] hover:text-white"
        >
          <FaPlay className="ml-1 text-lg" />
        </button>
      </div>

      {open && (
        <VideoModal
          src={videoUrl}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
