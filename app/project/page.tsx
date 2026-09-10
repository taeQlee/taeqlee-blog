import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { PostList } from "@/components/PostList";
import { getPostsByCategory } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Project",
  description: "Projects, experiments, and notes from building things.",
};

export default function ProjectPage() {
  return (
    <>
      <PageIntro title="Project">
        Things I have built, what I learned, and the decisions behind them.
      </PageIntro>
      <section aria-label="Project posts" className="mt-6 sm:mt-8">
        <PostList posts={getPostsByCategory("project")} />
      </section>
    </>
  );
}
