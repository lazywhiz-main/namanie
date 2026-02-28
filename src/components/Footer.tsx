import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-[var(--namanie-border)] px-6 py-9 md:px-[100px] text-[11px] text-[var(--namanie-dim)]">
      <Link
        href="/"
        className="font-serif text-sm font-black tracking-[6px] text-[var(--namanie-ink)]"
      >
        なまにえ
      </Link>
      <div>© 2025 なまにえ — KCA</div>
      <div>Pattern N3: Minimal Unease</div>
    </footer>
  );
}
