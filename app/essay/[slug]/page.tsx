import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PostArticle } from "@/components/post-article";
import { getPost, getPostsByCategory } from "@/lib/posts";

type PostPageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getPostsByCategory("essay").map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost("essay", slug);
  return post ? { title: post.title, description: post.description } : {};
}

export default async function EssayPostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPost("essay", slug);
  if (!post) notFound();

  const { default: Content } = await import(`@/content/essay/${slug}.mdx`);
  return <PostArticle post={post}><Content /></PostArticle>;
}
