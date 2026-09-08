import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { PostList } from "@/components/post-list";
import { getPostsByCategory } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Tech",
  description: "Technical notes about computers, networks, and software.",
};

export default function TechPage() {
  return (
    <>
      <PageIntro title="Tech">
        Tech about CS Fundamental and taking note for understanding
      </PageIntro>
      <section aria-label="Technical posts" className="mt-6 sm:mt-8">
        <PostList posts={getPostsByCategory("tech")} />
      </section>
    </>
  );
}
