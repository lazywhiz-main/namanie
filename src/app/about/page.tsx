import { RevealSection } from "@/components/RevealSection";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="px-6 py-20 md:px-[100px] md:pb-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 min-h-[50vh] items-center mb-16 md:mb-20">
          <div>
            <h2 className="font-serif text-3xl md:text-[40px] font-black leading-[1.7]">
              <span className="text-[var(--namanie-red)]">生</span>
              のまま
              <br />
              差し出す
            </h2>
            <p className="font-serif text-sm leading-[2.4] text-[rgba(17,17,17,0.6)] mt-4 mb-4">
              「なまにえ」は、KCA（Art × Business School）の仲間たちが運営するWebメディアです。
            </p>
            <p className="font-serif text-sm leading-[2.4] text-[rgba(17,17,17,0.6)] mb-4">
              生贄のように自分を差し出す覚悟と、生煮えのように完成を待たない正直さ。ふたつの意味を重ねた名前です。
            </p>
          </div>
          <div className="flex items-center justify-center relative">
            <div className="font-serif text-[180px] md:text-[240px] font-black text-[rgba(17,17,17,0.03)] leading-none select-none">
              贄
            </div>
            <div className="absolute bottom-[20%] right-[30%] w-12 h-12 border-2 border-[var(--namanie-red)] flex items-center justify-center font-serif text-base text-[var(--namanie-red)] -rotate-[8deg] opacity-60">
              贄
            </div>
          </div>
        </div>

        <RevealSection className="grid grid-cols-1 md:grid-cols-3 gap-12">
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
      </div>
    </div>
  );
}
