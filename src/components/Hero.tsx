"use client";

import { useEffect, useState } from "react";

const chars = ["な", "ま", "に", "え"];
const accentIndex = 1;
const offsetIndex = 3;

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="flex min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)] flex-col items-center justify-center relative px-4">
      <div className="text-center relative w-full max-w-[90vw]">
        <h1 className="font-serif text-[clamp(2.75rem,14vw,5.5rem)] md:text-[clamp(80px,16vw,220px)] font-black leading-none tracking-[0.08em] md:tracking-[20px] text-[var(--namanie-ink)]">
          {chars.map((char, i) => (
            <span
              key={i}
              className={`inline-block transition-all duration-[0.9s] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[50px]"
              } ${i === accentIndex ? "text-[var(--namanie-red)]" : ""} ${
                i === offsetIndex ? "translate-y-[-4px] md:translate-y-[-6px]" : ""
              }`}
              style={{ transitionDelay: `${i * 220}ms` }}
            >
              {char}
            </span>
          ))}
        </h1>
        <p
          className={`mt-6 md:mt-9 text-[11px] sm:text-[12px] md:text-[13px] tracking-[4px] md:tracking-[6px] text-[var(--namanie-dim)] transition-opacity duration-1000 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "1.2s" }}
        >
          Raw Offerings from KCA
        </p>
        {/* デスクトップのみ：赤の縦線（モバイルでは省略してすっきり） */}
        <div
          className={`hidden md:block absolute left-[calc(50%+80px)] bottom-[-160px] w-px h-[120px] bg-[var(--namanie-red)] origin-top transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mounted ? "scale-y-100" : "scale-y-0"
          }`}
          style={{ transitionDelay: "1.8s" }}
        />
      </div>
    </section>
  );
}
