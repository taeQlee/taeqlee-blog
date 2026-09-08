"use client";

export function ThemeToggle() {
  function toggleTheme() {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }

  return (
    <button type="button" onClick={toggleTheme} aria-label="Toggle light and dark mode" className="grid size-8 cursor-pointer place-items-center rounded-full text-[var(--muted)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--foreground)]">
      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4.5 dark:hidden" fill="none" stroke="currentColor" strokeWidth="1.7">
        <circle cx="12" cy="12" r="3.25" />
        <path d="M12 2.25v2M12 19.75v2M2.25 12h2M19.75 12h2M5.1 5.1l1.4 1.4M17.5 17.5l1.4 1.4M18.9 5.1l-1.4 1.4M6.5 17.5l-1.4 1.4" />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 24 24" className="hidden size-4.5 dark:block" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M20.2 15.1A8.25 8.25 0 0 1 8.9 3.8a8.25 8.25 0 1 0 11.3 11.3Z" />
      </svg>
    </button>
  );
}
