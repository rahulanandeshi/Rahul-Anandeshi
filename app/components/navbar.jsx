"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_TABS = [
  { label: "SOFTWARE ENGINEER", href: "/" },
  { label: "PUBLICATIONS", href: "/publications" },
  { label: "ART", href: "/art" },
  { label: "PHOTOGRAPHY", href: "/photography" },
];

function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="relative">
      {/* Top gradient line */}
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>

      <div className="bg-[#0d1224]/80 backdrop-blur-xl border-b border-[#1b2c68a0]">
        <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="text-[#16f2b3] text-2xl font-bold tracking-tight shrink-0">
            RAHUL ANANDESHI
          </Link>

          {/* Desktop Tabs */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_TABS.map((tab) => {
              const active = isActive(tab.href);
              return active ? (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className="bg-gradient-to-r from-pink-500 to-violet-600 p-[1px] rounded-full transition-all duration-300"
                >
                  <span className="block px-5 py-2 bg-[#0d1224] rounded-full text-sm font-semibold uppercase tracking-wider text-white whitespace-nowrap">
                    {tab.label}
                  </span>
                </Link>
              ) : (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className="px-5 py-2 rounded-full text-sm font-medium uppercase tracking-wider text-gray-400 transition-all duration-300 hover:text-white hover:bg-white/5 whitespace-nowrap"
                >
                  {tab.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <span className={`absolute h-0.5 w-5 bg-current transform transition-all duration-300 ${mobileMenuOpen ? "rotate-45" : "-translate-y-1.5"}`} />
            <span className={`absolute h-0.5 w-5 bg-current transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute h-0.5 w-5 bg-current transform transition-all duration-300 ${mobileMenuOpen ? "-rotate-45" : "translate-y-1.5"}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#0d1224]/95 backdrop-blur-xl border-b border-[#1b2c68a0] ${mobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0 border-b-0"}`}>
        <div className="mx-auto px-6 sm:px-12 py-4 flex flex-col gap-2">
          {NAV_TABS.map((tab) => {
            const active = isActive(tab.href);
            return (
              <Link
                key={tab.href}
                href={tab.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
                  active
                    ? "bg-gradient-to-r from-pink-500/10 to-violet-600/10 text-white border border-pink-500/30"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
