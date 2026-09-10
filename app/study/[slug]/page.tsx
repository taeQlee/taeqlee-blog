import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PostArticle } from "@/components/PostArticle";
import { getPost, getPostsByCategory } from "@/lib/posts";

type PostPageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getPostsByCategory("study").map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost("study", slug);
  return post ? { title: post.title, description: post.description } : {};
}

export default async function StudyPostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPost("study", slug);
  if (!post) notFound();

  const { default: Content } = await import(`@/content/study/${slug}.mdx`);
  return <PostArticle post={post}><Content /></PostArticle>;
}
