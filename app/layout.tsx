import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "♛ 𝒥𝑜𝓀𝑒𝓇 ♛ 𝐵𝒶𝓇𝒷𝑒𝓇𝓈𝒽𝑜𝓅 Halle - Herrenfriseur",
  description:
    "♛ 𝒥𝑜𝓀𝑒𝓇 ♛ 𝐵𝒶𝓇𝒷𝑒𝓇𝓈𝒽𝑜𝓅 in Halle (Saale). Professionelle Haarschnitte, Fades und Bartpflege zu fairen Preisen.",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-black antialiased`}
      >
        <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-black/90 backdrop-blur">
          <div className="mx-auto max-w-6xl px-6 py-4 text-white">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-xl font-bold tracking-wide">
                ♛ 𝒥𝑜𝓀𝑒𝓇 ♛
                <br />
                𝐵𝒶𝓇𝒷𝑒𝓇𝓈𝒽𝑜𝓅
              </Link>

              <div className="hidden gap-6 text-sm text-zinc-300 md:flex">
                <Link href="/" className="hover:text-white">
                  Startseite
                </Link>
                <Link href="/leistungen" className="hover:text-white">
                  Leistungen
                </Link>
                <Link href="/kontakt" className="hover:text-white">
                  Kontakt
                </Link>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3 text-sm md:hidden">
              <Link
                href="/"
                className="rounded-xl border border-zinc-700 px-4 py-3 text-center text-zinc-200"
              >
                Startseite
              </Link>
              <Link
                href="/leistungen"
                className="rounded-xl border border-zinc-700 px-4 py-3 text-center text-zinc-200"
              >
                Leistungen
              </Link>
              <Link
                href="/kontakt"
                className="rounded-xl border border-zinc-700 px-4 py-3 text-center text-zinc-200"
              >
                Kontakt
              </Link>
            </div>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
