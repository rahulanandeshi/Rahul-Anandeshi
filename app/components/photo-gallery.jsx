"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { RiContactsFill } from "react-icons/ri";

const photos = [
  { src: "/image/Photography/natalie-chaney-KQVX1_pYpsA-unsplash.jpg", title: "Still Life", category: "Nature" },
  { src: "/image/Photography/nathan-dumlao-BOhDR9n4u2s-unsplash.jpg", title: "Golden Hour", category: "Portrait" },
  { src: "/image/Photography/krists-luhaers-YhC216tAYAg-unsplash.jpg", title: "Velocity", category: "Automotive" },
  { src: "/image/Photography/michael-soledad-jiOByhCw2jE-unsplash.jpg", title: "Into the Wild", category: "Landscape" },
  { src: "/image/Photography/elvis-bekmanis-RXFwMWhcOi0-unsplash.jpg", title: "Street Symphony", category: "Street" },
  { src: "/image/Photography/ddyy-toto-6OVhAvHd0TY-unsplash.jpg", title: "Dusk", category: "Landscape" },
  { src: "/image/Photography/arto-suraj-CrcZxFv5P-I-unsplash.jpg", title: "Solitary", category: "Architecture" },
  { src: "/image/Photography/gabriel-barranco-5llFzeJ0JcM-unsplash.jpg", title: "Ember", category: "Portrait" },
  { src: "/image/Photography/jamie-street-qWYvQMIJyfE-unsplash.jpg", title: "Companion", category: "Wildlife" },
  { src: "/image/Photography/ljubomir-zarkovic-o5uLvpGOouM-unsplash.jpg", title: "Minimalism", category: "Abstract" },
];

const categories = ["All", ...new Set(photos.map((p) => p.category))];

function PhotoGallery() {
  const galleryRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredPhotos =
    activeFilter === "All"
      ? photos
      : photos.filter((p) => p.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = galleryRef.current?.querySelectorAll(".gallery-item");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [filteredPhotos]);

  // Close lightbox on Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight" && lightboxIndex !== null)
        setLightboxIndex((prev) => (prev + 1) % filteredPhotos.length);
      if (e.key === "ArrowLeft" && lightboxIndex !== null)
        setLightboxIndex((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, filteredPhotos.length]);

  return (
    <div ref={galleryRef}>
      {/* Hero — full bleed featured photo */}
      <section className="relative -mx-6 sm:-mx-12 mb-16 lg:mb-24">
        <div className="relative h-[60vh] lg:h-[75vh] overflow-hidden">
          <Image
            src={photos[0].src}
            alt={photos[0].title}
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1224] via-[#0d1224]/40 to-transparent"></div>

          {/* Hero text */}
          <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 lg:p-20">
            <div className="mx-auto lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
              <p className="text-[#16f2b3] text-xs lg:text-sm font-medium uppercase tracking-[0.4em] mb-3">
                Photography by
              </p>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-2">
                Rahul Anandeshi
              </h1>
              <p className="text-gray-400 text-sm lg:text-lg font-light max-w-xl">
                Capturing moments, light, and emotion through the lens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category filters */}
      <div className="flex flex-wrap items-center gap-2 mb-12 lg:mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              activeFilter === cat
                ? "bg-gradient-to-r from-pink-500 to-violet-600 text-white"
                : "text-gray-500 border border-[#1b2c68a0] hover:text-white hover:border-gray-500"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Photo grid — masonry-style with CSS columns */}
      <section className="mb-16 lg:mb-24">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 lg:gap-6 space-y-4 lg:space-y-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.src}
              className="gallery-item break-inside-avoid"
              onClick={() => setLightboxIndex(index)}
            >
              <div className="group cursor-pointer relative overflow-hidden rounded-lg">
                <Image
                  src={photo.src}
                  alt={photo.title}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end">
                  <div className="p-4 w-full">
                    <p className="text-white text-sm font-medium">{photo.title}</p>
                    <p className="text-[#16f2b3] text-xs tracking-wider">{photo.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="flex justify-center pb-16 lg:pb-24">
        <div className="text-center">
          <p className="text-gray-500 text-sm mb-6 tracking-wider uppercase">
            Interested in working together?
          </p>
          <Link href="/#contact" className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
            <button className="px-8 py-4 bg-[#0d1224] rounded-full border-none text-center text-sm font-semibold uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out flex items-center gap-1 hover:gap-3 cursor-pointer">
              <span>Contact me</span>
              <RiContactsFill size={16} />
            </button>
          </Link>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close button */}
          <button
            className="absolute top-6 right-6 text-gray-400 hover:text-white text-3xl transition-colors duration-300 cursor-pointer"
            onClick={() => setLightboxIndex(null)}
          >
            &times;
          </button>

          {/* Nav arrows */}
          <button
            className="absolute left-4 lg:left-8 text-gray-400 hover:text-white text-4xl transition-colors duration-300 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length);
            }}
          >
            &#8249;
          </button>
          <button
            className="absolute right-4 lg:right-8 text-gray-400 hover:text-white text-4xl transition-colors duration-300 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev + 1) % filteredPhotos.length);
            }}
          >
            &#8250;
          </button>

          {/* Image */}
          <div className="max-w-5xl max-h-[85vh] relative" onClick={(e) => e.stopPropagation()}>
            <Image
              src={filteredPhotos[lightboxIndex].src}
              alt={filteredPhotos[lightboxIndex].title}
              width={1600}
              height={1200}
              className="max-h-[85vh] w-auto h-auto object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
              <p className="text-white text-base font-medium">{filteredPhotos[lightboxIndex].title}</p>
              <p className="text-[#16f2b3] text-xs tracking-wider">{filteredPhotos[lightboxIndex].category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PhotoGallery;
