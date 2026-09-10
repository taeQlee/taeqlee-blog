import type { Metadata } from "next";
import { Fira_Code, Inter } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "katex/dist/katex.min.css";
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
    document.documentElement.classList.toggle("dark", savedTheme !== "light");
  } catch (_) {}
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${firaCode.variable} dark antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <div className="site-shell">
          <SiteHeader />
          <main className="min-h-0 flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
