import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { PostList } from "@/components/PostList";
import { getPostsByCategory } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Study",
  description: "Study notes and records from learning new subjects.",
};

export default function StudyPage() {
  return (
    <>
      <PageIntro title="Study">
        Notes and references collected while learning new subjects.
      </PageIntro>
      <section aria-label="Study posts" className="mt-6 sm:mt-8">
        <PostList posts={getPostsByCategory("study")} />
      </section>
    </>
  );
}
