import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

const navigation = [
  { href: "/tech", label: "Tech" },
  { href: "/essay", label: "Essay" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="flex items-center justify-between border-[var(--border)] py-5 sm:py-6">
      <Link
        href="/"
        className="text-xl font-bold tracking-[-0.03em] transition-opacity hover:opacity-60 sm:text-2xl"
      >
        taeQ.dev
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
