"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";

const artworks = [
  { src: "/image/Art/IMG_2219.jpeg", title: "Threshold", medium: "Pencil & Ink" },
  { src: "/image/Art/IMG_4166.jpg", title: "Ethereal Depths", medium: "Mixed Media" },
  { src: "/image/Art/982CA4B9-0C96-4506-8250-9CB2AA50FE56.jpeg", title: "Silent Reverie", medium: "Acrylic on Canvas" },
  { src: "/image/Art/D3CE6AA2-A007-4FFD-8E8A-BC987E7C85B3.JPEG", title: "Fractured Light", medium: "Digital Composition" },
  { src: "/image/Art/PXL_20250426_064014681.jpg", title: "Urban Whispers", medium: "Oil on Canvas" },
  { src: "/image/Art/IMG_5062.jpeg", title: "Chromatic Drift", medium: "Watercolor" },
  { src: "/image/Art/IMG_5713.jpeg", title: "Nocturne", medium: "Charcoal & Ink" },
  { src: "/image/Art/PXL_20250423_060738218.jpg", title: "Convergence", medium: "Mixed Media" },
  { src: "/image/Art/IMG_7879.jpg", title: "Solitude in Motion", medium: "Acrylic" },
  { src: "/image/Art/IMG_8626.jpeg", title: "Vestige", medium: "Oil Pastel" },
  { src: "/image/Art/PXL_20250426_005307355.jpg", title: "Meridian", medium: "Digital Art" },
  { src: "/image/Art/IMG_2049.jpeg", title: "Amber Echoes", medium: "Watercolor on Paper" },
  { src: "/image/Art/63D19AC4-480D-43EB-8A3F-9036D2982A15.JPG", title: "Distant Shores", medium: "Acrylic on Canvas" },
  { src: "/image/Art/PXL_20250614_211207811.jpg", title: "Prism", medium: "Mixed Media" },
  { src: "/image/Art/IMG_9663.jpeg", title: "Quiet Storm", medium: "Graphite" },
  { src: "/image/Art/IMG_9781.jpeg", title: "Woven Light", medium: "Pastel" },
  { src: "/image/Art/IMG-20140217-WA0001.jpg", title: "Genesis", medium: "Pen & Ink" },
  { src: "/image/Art/PXL_20250626_215642985.MP.jpg", title: "Afterglow", medium: "Oil on Canvas" },
  { src: "/image/Art/PXL_20250628_211357349.jpg", title: "Horizon Line", medium: "Mixed Media" },
];

function ArtGallery() {
  const galleryRef = useRef(null);

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
      { threshold: 0.15 }
    );

    const items = galleryRef.current?.querySelectorAll(".gallery-item");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const scrollToGallery = () => {
    document.getElementById("gallery-grid")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={galleryRef} className="grain-overlay">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[70vh] mb-16 lg:mb-24">
        {/* Spotlight glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-radial from-violet-600/10 via-pink-500/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>

        {/* Hero image */}
        <div className="gallery-item relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg border border-[#1b2c68a0] group">
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/10 to-violet-600/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"></div>
          <Image
            src={artworks[0].src}
            alt={artworks[0].title}
            width={1600}
            height={900}
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            priority
          />
        </div>

        {/* Title overlay */}
        <div className="mt-10 text-center">
          <h1 className="text-3xl lg:text-5xl font-light tracking-[0.3em] uppercase text-white mb-3">
            The Gallery
          </h1>
          <p className="text-gray-500 text-sm lg:text-base font-light tracking-widest">
            A curated collection of original works
          </p>
        </div>

        {/* Scroll hint */}
        <button
          onClick={scrollToGallery}
          className="mt-12 text-gray-600 hover:text-[#16f2b3] transition-colors duration-500 cursor-pointer"
          aria-label="Scroll to gallery"
        >
          <FaChevronDown
            size={20}
            className="animate-bounce"
            style={{ animation: "scrollBounce 2s ease-in-out infinite" }}
          />
        </button>
      </section>

      {/* Divider */}
      <div className="flex justify-center mb-16 lg:mb-24">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500/50 to-transparent w-full"></div>
        </div>
      </div>

      {/* Gallery Grid */}
      <section id="gallery-grid" className="pb-16 lg:pb-24">
        <div className="flex flex-col gap-12 lg:gap-16">
          {(() => {
            const remaining = artworks.slice(1);
            const rows = [];
            let i = 0;

            while (i < remaining.length) {
              if (i % 3 === 0 && i + 1 < remaining.length) {
                // Pair row
                rows.push({ type: "pair", items: [remaining[i], remaining[i + 1]] });
                i += 2;
              } else {
                // Full width
                rows.push({ type: "full", items: [remaining[i]] });
                i += 1;
              }
            }

            return rows.map((row, rowIndex) => {
              if (row.type === "full") {
                const artwork = row.items[0];
                return (
                  <div key={rowIndex} className="gallery-item max-w-4xl mx-auto w-full">
                    <ArtworkCard artwork={artwork} size="large" />
                  </div>
                );
              }

              return (
                <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                  {row.items.map((artwork, itemIndex) => (
                    <div key={itemIndex} className="gallery-item">
                      <ArtworkCard artwork={artwork} size="medium" />
                    </div>
                  ))}
                </div>
              );
            });
          })()}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="flex justify-center pb-16 lg:pb-24">
        <div className="text-center">
          <p className="text-gray-500 text-sm mb-6 tracking-wider uppercase">
            Interested in commissioning a piece?
          </p>
          <Link href="/#contact" className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
            <button className="px-8 py-4 bg-[#0d1224] rounded-full border-none text-center text-sm font-semibold uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out flex items-center gap-1 hover:gap-3 cursor-pointer">
              <span>Contact me</span>
              <RiContactsFill size={16} />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

function ArtworkCard({ artwork, size }) {
  return (
    <div className="group cursor-pointer">
      <div className={`relative overflow-hidden rounded-lg border border-[#1b2c68a0] bg-[#0a0d37] transition-all duration-500 hover:border-violet-500/30 hover:shadow-[0_0_40px_rgba(139,92,246,0.12)]`}>
        {/* Glow effect on hover */}
        <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/0 to-violet-600/0 group-hover:from-pink-500/10 group-hover:to-violet-600/10 rounded-lg blur transition-all duration-700 pointer-events-none"></div>

        <Image
          src={artwork.src}
          alt={artwork.title}
          width={size === "large" ? 1200 : 800}
          height={size === "large" ? 750 : 600}
          className="relative w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
      </div>

      {/* Caption */}
      <div className="mt-4 px-1">
        <h3 className="text-white text-base lg:text-lg font-medium transition-colors duration-500 group-hover:text-[#16f2b3]">
          {artwork.title}
        </h3>
        <p className="text-gray-600 text-xs lg:text-sm font-light tracking-wider mt-1 transition-colors duration-500 group-hover:text-gray-400">
          {artwork.medium}
        </p>
      </div>
    </div>
  );
}

export default ArtGallery;
