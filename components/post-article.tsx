import Link from "next/link";
import type { ReactNode } from "react";
import type { Post } from "@/lib/posts";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "2-digit",
  year: "numeric",
  timeZone: "UTC",
});

export function PostArticle({
  post,
  children,
}: {
  post: Post;
  children: ReactNode;
}) {
  const categoryLabel = post.category === "tech" ? "Tech" : "Essay";

  return (
    <article className="mx-auto w-full max-w-[42rem]">
      <Link
        href={`/${post.category}`}
        className="font-mono text-xs text-[var(--muted)] hover:text-[var(--foreground)]"
      >
        ← {categoryLabel}
      </Link>
      <header className="mt-8 border-b border-[var(--border)] pb-8">
        <h1 className="text-3xl leading-tight font-semibold tracking-[-0.04em] sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
          {post.description}
        </p>
        <time
          dateTime={post.date}
          className="mt-4 block font-mono text-xs text-[var(--muted)]"
        >
          {dateFormatter.format(new Date(`${post.date}T00:00:00Z`))}
        </time>
      </header>
      <div className="post-content">{children}</div>
    </article>
  );
}
