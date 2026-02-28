import { writers } from "@/data/writers";
import { RevealSection } from "@/components/RevealSection";

export default function WritersPage() {
  return (
    <div className="min-h-screen">
      <div className="px-4 pt-5 pb-2 sm:px-6 md:px-[100px] md:pb-3 text-[10px] tracking-[4px] md:tracking-[5px] uppercase text-[var(--namanie-dim)]">
        Contributors
      </div>
      <div className="px-4 pb-16 sm:px-6 md:px-[100px] md:pb-24">
        <RevealSection>
          {writers.map((w, i) => (
            <div
              key={w.id}
              className="grid grid-cols-[56px_1fr] md:grid-cols-[64px_1fr] gap-5 md:gap-8 py-8 md:py-10 border-b border-[var(--namanie-border)] opacity-0 -translate-x-4 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] [.in-view_&]:opacity-100 [.in-view_&]:translate-x-0"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-[var(--namanie-bg)] border border-[var(--namanie-border)] flex items-center justify-center font-serif text-lg md:text-xl font-black text-[var(--namanie-red)] shrink-0">
                {w.initial}
              </div>
              <div className="min-w-0">
                <h3 className="font-serif text-lg md:text-xl font-bold mb-0.5 md:mb-1">{w.name}</h3>
                <div className="text-[10px] md:text-[11px] tracking-[2px] text-[var(--namanie-red)] mb-2 md:mb-3">
                  {w.role}
                </div>
                <p className="text-[12px] md:text-[13px] leading-[1.9] md:leading-[2] text-[var(--namanie-dim)] max-w-[560px]">
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
