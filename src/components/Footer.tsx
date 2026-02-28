import Link from "next/link";

export function Footer() {
  return (
    <footer
  className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--namanie-border)] px-4 py-6 sm:px-6 md:px-[100px] md:py-9 text-[10px] sm:text-[11px] text-[var(--namanie-dim)]"
  style={{ paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))" }}
>
      <Link
        href="/"
        className="font-serif text-sm font-black tracking-[6px] text-[var(--namanie-ink)]"
      >
        なまにえ
      </Link>
      <div>© 2025 なまにえ — KCA</div>
    </footer>
  );
}
