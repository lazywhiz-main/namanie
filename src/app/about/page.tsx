import { writers } from "@/data/writers";
import { RevealSection } from "@/components/RevealSection";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="px-4 py-12 sm:px-6 md:px-[100px] md:py-20 md:pb-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 min-h-0 md:min-h-[50vh] items-center mb-12 md:mb-20">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-[40px] font-black leading-[1.6] md:leading-[1.7]">
              <span className="text-[var(--namanie-red)]">生</span>
              のまま
              <br />
              差し出す
            </h2>
            <p className="font-serif text-[13px] sm:text-sm leading-[2.2] md:leading-[2.4] text-[rgba(17,17,17,0.6)] mt-4 mb-3 md:mb-4">
              「なまにえ」は、KCA（Art × Business School）の仲間たちが運営するWebメディアです。
            </p>
            <p className="font-serif text-[13px] sm:text-sm leading-[2.2] md:leading-[2.4] text-[rgba(17,17,17,0.6)] mb-4">
              生贄のように自分を差し出す覚悟と、生煮えのように完成を待たない正直さ。ふたつの意味を重ねた名前です。
            </p>
          </div>
          <div className="flex items-center justify-center relative min-h-[140px] sm:min-h-[200px] md:min-h-0">
            <div className="font-serif text-[120px] sm:text-[180px] md:text-[240px] font-black text-[rgba(17,17,17,0.03)] leading-none select-none">
              贄
            </div>
            <div className="absolute bottom-[15%] right-[25%] md:bottom-[20%] md:right-[30%] w-10 h-10 md:w-12 md:h-12 border-2 border-[var(--namanie-red)] flex items-center justify-center font-serif text-sm md:text-base text-[var(--namanie-red)] -rotate-[8deg] opacity-60">
              贄
            </div>
          </div>
        </div>

        <RevealSection className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12">
          <div className="opacity-0 translate-y-5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] [.in-view_&]:opacity-100 [.in-view_&]:translate-y-0">
            <div className="text-[10px] tracking-[4px] text-[var(--namanie-red)] mb-4">
              01
            </div>
            <h3 className="font-serif text-xl font-bold mb-3">生であること</h3>
            <p className="text-[13px] leading-[2] text-[var(--namanie-dim)]">
              加工しない。磨かない。内側から出てきたものを、そのまま差し出す。
            </p>
            <div className="w-6 h-px bg-[var(--namanie-red)] mt-5 opacity-30" />
          </div>
          <div className="opacity-0 translate-y-5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] [.in-view_&]:opacity-100 [.in-view_&]:translate-y-0" style={{ transitionDelay: "100ms" }}>
            <div className="text-[10px] tracking-[4px] text-[var(--namanie-red)] mb-4">
              02
            </div>
            <h3 className="font-serif text-xl font-bold mb-3">捧げること</h3>
            <p className="text-[13px] leading-[2] text-[var(--namanie-dim)]">
              書くことは自分の一部を差し出すこと。その痛みに嘘はない。
            </p>
            <div className="w-6 h-px bg-[var(--namanie-red)] mt-5 opacity-30" />
          </div>
          <div className="opacity-0 translate-y-5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] [.in-view_&]:opacity-100 [.in-view_&]:translate-y-0" style={{ transitionDelay: "200ms" }}>
            <div className="text-[10px] tracking-[4px] text-[var(--namanie-red)] mb-4">
              03
            </div>
            <h3 className="font-serif text-xl font-bold mb-3">未完であること</h3>
            <p className="text-[13px] leading-[2] text-[var(--namanie-dim)]">
              煮え切らないまま世に出す。完成は読者との間に生まれる。
            </p>
            <div className="w-6 h-px bg-[var(--namanie-red)] mt-5 opacity-30" />
          </div>
        </RevealSection>

        {/* Contributors（Writers） */}
        <section id="contributors" className="mt-16 md:mt-24">
          <div className="text-[10px] tracking-[4px] md:tracking-[5px] uppercase text-[var(--namanie-dim)] mb-6 md:mb-8">
            Contributors
          </div>
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
        </section>
      </div>
    </div>
  );
}
