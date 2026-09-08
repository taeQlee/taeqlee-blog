import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/posts";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "2-digit",
  year: "numeric",
  timeZone: "UTC",
});

export function PostList({ posts }: { posts: Post[] }) {
  if (posts.length === 0) {
    return <p className="text-[var(--muted)]">Writing in progress.</p>;
  }

  return (
    <ol className="grid grid-cols-1 gap-x-28 gap-y-12 md:grid-cols-2 md:gap-y-14 px-2 pb-10">
      {posts.map((post) => (
        <li key={`${post.category}-${post.slug}`}>
          <Link
            href={`/${post.category}/${post.slug}`}
            className="group flex h-full flex-col"
          >
            <article className="flex h-full flex-col">
              {post.thumbnailUrl ?
                <div className="relative mb-5 aspect-video overflow-hidden rounded-sm bg-[var(--surface)]">
                  <Image
                    src={post.thumbnailUrl}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 352px, calc(100vw - 2rem)"
                    className="object-cover transition-opacity group-hover:opacity-85"
                  />
                </div>
              : null}
              <h3 className="line-clamp-1 text-xl leading-8 font-semibold tracking-[-0.05em] underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-[var(--muted)] md:min-h-16 md:text-2xl md:line-clamp-2">
                {post.title}
              </h3>
              <p className="mt-3 line-clamp-4 leading-relaxed text-[var(--muted)] md:text-lg">
                {post.description}
              </p>
              <time
                dateTime={post.date}
                className="mt-3 block text-base tracking-[-0.04em] text-[var(--muted)] italic"
              >
                {dateFormatter.format(new Date(`${post.date}T00:00:00Z`))}
              </time>
            </article>
          </Link>
        </li>
      ))}
    </ol>
  );
}
