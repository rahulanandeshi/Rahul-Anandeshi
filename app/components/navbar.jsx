"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsCode } from "react-icons/bs";
import { FaBookOpen, FaCamera, FaPaintBrush } from "react-icons/fa";

const NAV_TABS = [
  { label: "SOFTWARE ENGINEER", shortLabel: "Engineer", href: "/", icon: BsCode },
  { label: "PUBLICATIONS", shortLabel: "Publications", href: "/publications", icon: FaBookOpen },
  { label: "ART", shortLabel: "Art", href: "/art", icon: FaPaintBrush },
  { label: "PHOTOGRAPHY", shortLabel: "Photos", href: "/photography", icon: FaCamera },
];

function Navbar() {
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
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
          </div>
        </div>
      </nav>

      {/* Mobile bottom tab bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-[9999]">
        <div className="flex flex-row">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
          <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
        </div>
        <div className="bg-[#0d1224]/95 backdrop-blur-xl border-t border-[#1b2c68a0]">
          <div className="flex items-stretch justify-around px-2 py-2">
            {NAV_TABS.map((tab) => {
              const active = isActive(tab.href);
              const Icon = tab.icon;
              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all duration-300 min-w-0 flex-1 ${
                    active
                      ? "text-[#16f2b3]"
                      : "text-gray-500"
                  }`}
                >
                  <div className={`relative ${active ? "" : ""}`}>
                    {active && (
                      <div className="absolute -inset-2 bg-gradient-to-r from-pink-500/15 to-violet-600/15 rounded-full blur-md"></div>
                    )}
                    <Icon size={20} className="relative" />
                  </div>
                  <span className={`text-[10px] tracking-wider uppercase ${active ? "font-semibold" : "font-medium"}`}>
                    {tab.shortLabel}
                  </span>
                </Link>
              );
            })}
          </div>
          {/* Safe area padding for notched phones */}
          <div className="h-[env(safe-area-inset-bottom)]"></div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
