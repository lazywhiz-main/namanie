"use client";

import { useEffect, useRef } from "react";

export function RedDot() {
  const dotRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove);

    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.08;
      pos.current.y += (target.current.y - pos.current.y) * 0.08;
      if (dotRef.current) {
        dotRef.current.style.left = `${pos.current.x - 5}px`;
        dotRef.current.style.top = `${pos.current.y - 5}px`;
      }
      requestAnimationFrame(tick);
    };
    const id = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(id);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      data-red-dot
      className="pointer-events-none fixed z-[10000] h-[10px] w-[10px] rounded-full bg-[var(--namanie-red)] opacity-70 mix-blend-multiply transition-transform duration-200"
      style={{ left: -100, top: -100 }}
      aria-hidden
    />
  );
}
