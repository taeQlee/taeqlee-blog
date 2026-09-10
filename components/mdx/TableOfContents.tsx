type TocItem = {
  text: string;
  id: string;
};

type TableOfContentsProps = {
  items: TocItem[];
};

export default function TableOfContents({ items }: TableOfContentsProps) {
  return (
    <div className="pt-4 border-border">
      <p className="!mt-0 !mb-1 text-sm font-semibold text-[var(--muted)]">
        목차
      </p>

      <ol className="!my-0 text-base marker:text-[var(--muted)]">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="block rounded-md px-2 py-1 text-[var(--muted)] !no-underline transition-colors hover:bg-[var(--surface)]"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}
