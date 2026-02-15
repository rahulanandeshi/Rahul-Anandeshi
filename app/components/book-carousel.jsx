"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const covers = [
  { src: "/image/books/wise_words_front.png", alt: "WISE WORDS - Front Cover" },
  { src: "/image/books/wise_words_back.png", alt: "WISE WORDS - Back Cover" },
];

function BookCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % covers.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-fit mx-auto">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
        <div className="relative overflow-hidden rounded-lg">
          {covers.map((cover, index) => (
            <Image
              key={cover.src}
              src={cover.src}
              alt={cover.alt}
              width={220}
              height={330}
              className={`rounded-lg shadow-2xl transition-all duration-500 ${
                index === activeIndex ? "block" : "hidden"
              }`}
            />
          ))}
        </div>
      </div>
      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {covers.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
              index === activeIndex
                ? "bg-[#16f2b3] w-4"
                : "bg-gray-600"
            }`}
            aria-label={`View cover ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default BookCarousel;
