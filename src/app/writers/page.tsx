import { writers } from "@/data/writers";
import { RevealSection } from "@/components/RevealSection";

export default function WritersPage() {
  return (
    <div className="min-h-screen">
      <div className="px-6 pt-5 pb-3 md:px-[100px] text-[10px] tracking-[5px] uppercase text-[var(--namanie-dim)]">
        Contributors
      </div>
      <div className="px-6 pb-24 md:px-[100px]">
        <RevealSection>
          {writers.map((w, i) => (
            <div
              key={w.id}
              className="grid grid-cols-[64px_1fr] gap-8 py-10 border-b border-[var(--namanie-border)] opacity-0 -translate-x-4 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] [.in-view_&]:opacity-100 [.in-view_&]:translate-x-0"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-16 h-16 bg-[var(--namanie-bg)] border border-[var(--namanie-border)] flex items-center justify-center font-serif text-xl font-black text-[var(--namanie-red)]">
                {w.initial}
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold mb-1">{w.name}</h3>
                <div className="text-[11px] tracking-[2px] text-[var(--namanie-red)] mb-3">
                  {w.role}
                </div>
                <p className="text-[13px] leading-[2] text-[var(--namanie-dim)] max-w-[560px]">
                  {w.bio}
                </p>
              </div>
            </div>
          ))}
        </RevealSection>
      </div>
    </div>
  );
}
