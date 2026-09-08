# Content

MDX files in `tech/` and `essay/` are the blog's data source. The filename is
the URL slug, so `tech/browser-rendering.mdx` becomes
`/tech/browser-rendering`.

Every post must include this frontmatter:

```mdx
---
title: How a Browser Draws a Page
description: Following pixels from HTML to the screen.
date: 2026-09-08
thumbnailUrl: /images/browser-rendering.webp
---

Post content begins here.
```

The parent directory supplies the category. Adding, editing, or removing an MDX
file updates the post lists and statically generated routes on the next build.

`thumbnailUrl` is optional. Put local thumbnails in `public/images/` and write
their URL from the public root, such as `/images/browser-rendering.webp`.
