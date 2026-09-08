import "server-only";

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export const postCategories = ["tech", "essay"] as const;
export type PostCategory = (typeof postCategories)[number];

export type Post = {
  title: string;
  description: string;
  date: string;
  category: PostCategory;
  slug: string;
  thumbnailUrl?: string;
};

const contentDirectory = path.join(process.cwd(), "content");

function isCategory(value: string): value is PostCategory {
  return postCategories.includes(value as PostCategory);
}

function readPost(category: PostCategory, filename: string): Post {
  const slug = filename.replace(/\.mdx$/, "");
  const filePath = path.join(contentDirectory, category, filename);
  const { data } = matter(fs.readFileSync(filePath, "utf8"));

  if (
    typeof data.title !== "string" ||
    typeof data.description !== "string" ||
    !(data.date instanceof Date || typeof data.date === "string")
  ) {
    throw new Error(
      `${path.relative(process.cwd(), filePath)} must define title, description, and date in its frontmatter.`,
    );
  }

  const date =
    data.date instanceof Date
      ? data.date.toISOString().slice(0, 10)
      : data.date;

  if (Number.isNaN(Date.parse(`${date}T00:00:00Z`))) {
    throw new Error(`${path.relative(process.cwd(), filePath)} has an invalid date.`);
  }

  if (data.thumbnailUrl !== undefined && typeof data.thumbnailUrl !== "string") {
    throw new Error(
      `${path.relative(process.cwd(), filePath)} has an invalid thumbnailUrl.`,
    );
  }

  return {
    title: data.title,
    description: data.description,
    date,
    category,
    slug,
    thumbnailUrl: data.thumbnailUrl,
  };
}

export function getAllPosts(): Post[] {
  return postCategories
    .flatMap((category) => {
      const directory = path.join(contentDirectory, category);
      if (!fs.existsSync(directory)) return [];

      return fs
        .readdirSync(directory)
        .filter((filename) => filename.endsWith(".mdx"))
        .map((filename) => readPost(category, filename));
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPostsByCategory(category: PostCategory): Post[] {
  return getAllPosts().filter((post) => post.category === category);
}

export function getPost(category: string, slug: string): Post | undefined {
  if (!isCategory(category) || slug.includes("/") || slug.includes("..")) {
    return undefined;
  }

  const filename = `${slug}.mdx`;
  const filePath = path.join(contentDirectory, category, filename);
  return fs.existsSync(filePath) ? readPost(category, filename) : undefined;
}
