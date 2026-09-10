import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "About",
  description: "About Tae Q. Lee and this website.",
};

export default function AboutPage() {
  return (
    <article>
      <PageIntro title="About me" />
      <div className="mt-10 space-y-6 text-[1.05rem] leading-8 text-[var(--muted)]">
        <p>
          I love exploring computer technologies themselves, especially the ones
          that deal with bits and the physical world.
        </p>
        <p>
          I’m interested in what happens below the abstractions we use every
          day: how information moves, how machines turn instructions into
          action, and how careful software can make those capabilities useful to
          people.
        </p>
        <p>
          I want to use these technologies to make the world better. This site
          is a place to think in public, share what I study, and leave a trail
          that may help someone else.
        </p>
      </div>
    </article>
  );
}
