import type { ReactNode } from "react";

type PageIntroProps = {
  eyebrow?: string;
  title?: string;
  children?: ReactNode;
};

export function PageIntro({ eyebrow, title, children }: PageIntroProps) {
  return (
    <header className="pt-5 flex flex-col items-center justify-center">
      {eyebrow ?
        <p className="mb-3 font-mono text-xs tracking-[0.08em] text-[var(--muted)]">
          {eyebrow}
        </p>
      : null}
      <h1 className="text-[1.75rem] leading-[1.25] font-semibold tracking-[-0.035em] text-balance sm:text-[2rem]">
        {title}
      </h1>
      {children ?
        <p className="mt-4 max-w-[38rem] text-[0.95rem] leading-7 text-[var(--muted)] sm:text-base">
          {children}
        </p>
      : null}
    </header>
  );
}
