"use client";

import { usePathname } from "next/navigation";

export function SiteFooter() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <footer className="flex items-center justify-center border-[var(--border)] py-6 text-sm text-[var(--muted)] sm:py-16">
      © {new Date().getFullYear()} Tae Q. Lee
    </footer>
  );
}
