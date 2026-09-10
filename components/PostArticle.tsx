import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Post, PostCategory } from "@/lib/posts";
import { PostMeta } from "@/components/PostMeta";

const categoryLabels: Record<PostCategory, string> = {
  essay: "Essay",
  study: "Study",
  project: "Project",
};

export function PostArticle({
  post,
  children,
}: {
  post: Post;
  children: ReactNode;
}) {
  const categoryLabel = categoryLabels[post.category];

  return (
    <article className="mx-auto w-full max-w-[42rem]">
      <Link
        href={`/${post.category}`}
        className="font-mono text-xs text-[var(--muted)] hover:text-[var(--foreground)]"
      >
        ← {categoryLabel}
      </Link>
      <header className="mt-8 border-[var(--border)] pb-8">
        <h1 className="text-3xl leading-tight font-semibold tracking-[-0.04em] sm:text-4xl">
          {post.title}
        </h1>

        <PostMeta
          date={post.date}
          readingTimeMinutes={post.readingTimeMinutes}
          className="mt-4 font-mono text-xs"
        />
        {post.thumbnailUrl ?
          <div className="relative mx-auto mt-8 aspect-video w-[90%] overflow-hidden rounded-lg bg-[var(--surface)]">
            <Image
              src={post.thumbnailUrl}
              alt={`${post.title} thumbnail`}
              fill
              sizes="(max-width: 672px) 100vw, 672px"
              className="object-contain object-center"
            />
          </div>
        : null}
      </header>
      <div className="post-content">{children}</div>
    </article>
  );
}
