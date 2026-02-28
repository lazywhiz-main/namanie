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
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 py-6 md:px-[60px] bg-[rgba(250,250,248,0.92)] backdrop-blur-[16px]">
      <Link
        href="/"
        className="font-serif text-lg font-black tracking-[0.32em] text-[var(--namanie-ink)]"
      >
        なまにえ
      </Link>
      <div className="flex gap-6 md:gap-9">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-xs font-normal tracking-[2px] text-[var(--namanie-dim)] no-underline transition-colors duration-300 hover:text-[var(--namanie-ink)]"
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
