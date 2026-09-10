import type { Metadata } from "next";
import { Fira_Code, Inter } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "taeQlee",
    template: "%s — taeQlee",
  },
  description:
    "Essays and study notes about computers, software, and the physical world.",
};

const themeScript = `
  try {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", savedTheme === "dark" || (!savedTheme && prefersDark));
  } catch (_) {}
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${firaCode.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <div className="site-shell">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <footer className="flex items-center justify-center border-[var(--border)] py-16 text-sm text-[var(--muted)]">
            © {new Date().getFullYear()} Tae Q. Lee
          </footer>
        </div>
      </body>
    </html>
  );
}
