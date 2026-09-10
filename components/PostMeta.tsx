type PostMetaProps = {
  date: string;
  readingTimeMinutes: number;
  className?: string;
};

export function PostMeta({
  date,
  readingTimeMinutes,
  className = "",
}: PostMetaProps) {
  return (
    <div
      className={`flex items-center gap-4 text-[var(--muted)] ${className}`}
    >
      <span className="flex items-center gap-1.5">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="size-[1.1em] shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M8 2v4M16 2v4M3 9h18" />
          <rect x="3" y="4" width="18" height="17" rx="2" />
        </svg>
        <time dateTime={date}>{date}</time>
      </span>

      <span
        className="flex items-center gap-1.5"
        aria-label={`Estimated reading time: ${readingTimeMinutes} minutes`}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="size-[1.1em] shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
        {readingTimeMinutes} min
      </span>
    </div>
  );
}
