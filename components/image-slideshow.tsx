"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDE_INTERVAL_MS = 15000;

type Slide = {
  src: string;
  alt: string;
};

type ImageSlideshowProps = {
  slides: Slide[];
};

export function ImageSlideshow({ slides }: ImageSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const totalSlides = slides.length;

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const liveLabel = useMemo(
    () => `${activeIndex + 1} of ${totalSlides}`,
    [activeIndex, totalSlides]
  );

  useEffect(() => {
    if (totalSlides <= 1) {
      return;
    }

    const interval = setInterval(goNext, SLIDE_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="w-full aspect-video rounded-lg bg-black/90 relative overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={`${slide.src}-${index}`}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={index !== activeIndex}
        >
          <img src={slide.src} alt={slide.alt} className="h-full w-full object-cover" />
        </div>
      ))}

      {totalSlides > 1 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-white"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      {totalSlides > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-white/70">
          {liveLabel}
        </div>
      )}
    </div>
  );
}
