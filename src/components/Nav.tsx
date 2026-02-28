"use client";

import Link from "next/link";

const links = [
  { href: "/", label: "Top" },
  { href: "/articles", label: "Articles" },
  { href: "/about", label: "About" },
  { href: "/writers", label: "Writers" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] flex flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6 sm:py-5 md:px-[60px] md:py-6 bg-[rgba(250,250,248,0.92)] backdrop-blur-[16px]"
      style={{ paddingTop: "max(0.25rem, env(safe-area-inset-top))" }}
    >
      <Link
        href="/"
        className="font-serif text-base font-black tracking-[0.2em] sm:text-lg sm:tracking-[0.28em] md:tracking-[0.32em] text-[var(--namanie-ink)] shrink-0"
      >
        なまにえ
      </Link>
      <div className="flex flex-wrap justify-end gap-4 sm:gap-6 md:gap-9">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-[11px] font-normal tracking-[1.5px] sm:text-xs sm:tracking-[2px] text-[var(--namanie-dim)] no-underline transition-colors duration-300 hover:text-[var(--namanie-ink)] py-1 min-h-[44px] min-w-[44px] flex items-center justify-end sm:min-h-0 sm:min-w-0 sm:py-0"
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
