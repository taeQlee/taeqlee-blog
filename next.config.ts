import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: ["remark-frontmatter", "remark-math"],
    rehypePlugins: [
      "rehype-katex",
      [
        "rehype-pretty-code",
        {
          theme: "github-dark",
          keepBackground: true,
        },
      ],
    ],
  },
});

export default withMDX(nextConfig);
