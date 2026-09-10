import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const navigation = [
  { href: "/tech", label: "Tech" },
  { href: "/essay", label: "Essay" },
  { href: "/study", label: "Study" },
  { href: "/project", label: "Project" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="flex items-center justify-between border-[var(--border)] py-5 sm:py-6">
      <Link
        href="/"
        aria-label="Home"
        className="grid size-8 place-items-center rounded-full text-[var(--foreground)] transition-colors hover:bg-[var(--surface)]"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="size-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m3.5 10.5 8.5-7 8.5 7" />
          <path d="M5.5 9v11h13V9M9.5 20v-6h5v6" />
        </svg>
      </Link>
      <div className="flex items-center gap-4 sm:gap-6">
        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-4 text-sm font-medium text-[var(--foreground)] sm:gap-6">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-[var(--foreground)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
