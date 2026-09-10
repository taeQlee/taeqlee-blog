import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { PostList } from "@/components/PostList";
import { getPostsByCategory } from "@/lib/posts";

export const metadata: Metadata = { title: "Essay", description: "Personal essays about learning, technology, and making things." };

export default function EssayPage() {
  return (
    <>
      <PageIntro title="Essay">Thoughts on learning, technology, and the kind of work worth doing.</PageIntro>
      <section aria-label="Essays" className="mt-6 sm:mt-8"><PostList posts={getPostsByCategory("essay")} /></section>
    </>
  );
}
