export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <div className="px-4 pt-5 pb-2 sm:px-6 md:px-[100px] md:pb-3 text-[10px] tracking-[4px] md:tracking-[5px] uppercase text-[var(--namanie-dim)]">
        Contact
      </div>
      <div className="px-4 pb-16 sm:px-6 md:px-[100px] md:pb-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
        <div>
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
            className="flex gap-4 items-center py-3 md:py-4 border-b border-[var(--namanie-border)] transition-pl duration-300 hover:pl-3 min-h-[48px]"
          >
            <span className="w-8 h-8 shrink-0 border border-[rgba(185,28,28,0.2)] flex items-center justify-center text-xs text-[var(--namanie-red)] transition-colors duration-300 group-hover:bg-[var(--namanie-red)] group-hover:text-white">
              ✉
            </span>
            <div>
              <div className="text-[10px] tracking-[2px] text-[var(--namanie-dim)] uppercase">
                Email
              </div>
              <div className="text-sm mt-0.5">hello@namanie.kca</div>
            </div>
          </a>
          <a
            href="https://x.com/namanie_kca"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-4 items-center py-3 md:py-4 border-b border-[var(--namanie-border)] transition-pl duration-300 hover:pl-3 min-h-[48px]"
          >
            <span className="w-8 h-8 border border-[rgba(185,28,28,0.2)] flex items-center justify-center text-xs text-[var(--namanie-red)]">
              𝕏
            </span>
            <div>
              <div className="text-[10px] tracking-[2px] text-[var(--namanie-dim)] uppercase">
                Social
              </div>
              <div className="text-sm mt-0.5">@namanie_kca</div>
            </div>
          </a>
        </div>
        <div className="mt-8 md:mt-0">
          <div className="text-[10px] tracking-[3px] uppercase text-[var(--namanie-red)] mb-5 md:mb-7">
            Message
          </div>
          <form
            action="#"
            method="post"
            className="[&_label]:block [&_label]:text-[10px] [&_label]:tracking-[2px] [&_label]:uppercase [&_label]:text-[var(--namanie-dim)] [&_label]:mb-1.5 [&_input]:w-full [&_input]:bg-transparent [&_input]:border-none [&_input]:border-b [&_input]:border-[var(--namanie-border)] [&_input]:py-2.5 [&_input]:font-sans [&_input]:text-sm [&_input]:text-[var(--namanie-ink)] [&_input]:outline-none [&_input]:transition-colors [&_input:focus]:border-[var(--namanie-red)] [&_textarea]:w-full [&_textarea]:min-h-20 [&_textarea]:resize-y [&_textarea]:bg-transparent [&_textarea]:border-none [&_textarea]:border-b [&_textarea]:border-[var(--namanie-border)] [&_textarea]:py-2.5 [&_textarea]:font-sans [&_textarea]:text-sm [&_textarea]:text-[var(--namanie-ink)] [&_textarea]:outline-none [&_textarea:focus]:border-[var(--namanie-red)]"
          >
            <div className="mb-6">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="お名前"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="メールアドレス"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="伝えたいこと"
              />
            </div>
            <button
              type="submit"
              className="bg-[var(--namanie-ink)] text-[var(--namanie-bg)] border-none font-sans text-xs tracking-[3px] py-3.5 px-10 cursor-pointer transition-colors duration-300 hover:bg-[var(--namanie-red)]"
            >
              送信する
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
