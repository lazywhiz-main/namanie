export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <div className="px-4 pt-5 pb-2 sm:px-6 md:px-[100px] md:pb-3 text-[10px] tracking-[4px] md:tracking-[5px] uppercase text-[var(--namanie-dim)]">
        Contact
      </div>
      <div className="px-4 pb-16 sm:px-6 md:px-[100px] md:pb-24">
        <h2 className="font-serif text-2xl sm:text-3xl font-black leading-[1.5] md:leading-[1.6] mb-4 md:mb-5">
          声を
          <br />
          聞かせてください
        </h2>
        <p className="text-[13px] md:text-sm leading-[1.9] md:leading-[2] text-[var(--namanie-dim)] mb-6 md:mb-9">
          寄稿、取材、あるいはただの感想でも。
          <br />
          煮え切らない言葉で構いません。
        </p>
        <a
          href="mailto:hello@namanie.kca"
          className="flex gap-4 items-center py-3 md:py-4 border-b border-[var(--namanie-border)] transition-pl duration-300 hover:pl-3 min-h-[48px] max-w-fit"
        >
          <span className="w-8 h-8 shrink-0 border border-[rgba(185,28,28,0.2)] flex items-center justify-center text-xs text-[var(--namanie-red)] transition-colors duration-300 group-hover:bg-[var(--namanie-red)] group-hover:text-white">
            ✉
          </span>
          <div>
            <div className="text-[10px] tracking-[2px] text-[var(--namanie-dim)] uppercase">
              お問い合わせ
            </div>
            <div className="text-sm mt-0.5">hello@namanie.kca</div>
          </div>
        </a>
      </div>
    </div>
  );
}
