import Link from "next/link"
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
  title: "Joker Barbershop Halle – Herrenfriseur",
  description:
    "Joker Barbershop in Halle (Saale). Professionelle Haarschnitte, Fades und Bartpflege zu fairen Preisen.",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-black/90 backdrop-blur">
          <div className="mx-auto max-w-6xl px-6 py-4 text-white">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-xl font-bold tracking-wide">
                Joker Barbershop
              </Link>

              <div className="hidden gap-6 text-sm text-zinc-300 md:flex">
                <Link href="/" className="hover:text-white">
                  Startseite
                </Link>
                <Link href="/leistungen" className="hover:text-white">
                  Leistungen
                </Link>
                <Link href="/termin-buchen" className="hover:text-white">
                  Termin buchen
                </Link>
                <Link href="/kontakt" className="hover:text-white">
                  Kontakt
                </Link>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 text-sm md:hidden">
              <Link href="/"
                className="rounded-xl border border-zinc-700 px-4 py-3 text-center text-zinc-200"
              >
                Startseite
              </Link>
              <Link href="/leistungen"
                className="rounded-xl border border-zinc-700 px-4 py-3 text-center text-zinc-200"
              >
                Leistungen
              </Link>
              <Link href="/termin-buchen"
                className="rounded-xl border border-zinc-700 px-4 py-3 text-center text-zinc-200"
              >
                Termin buchen
              </Link>
              <Link href="/kontakt"
                className="rounded-xl border border-zinc-700 px-4 py-3 text-center text-zinc-200"
              >
                Kontakt
              </Link>
            </div>
          </div>
        </nav>

        {children}

        <div className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 gap-4">
          <Link href="tel:034547899228"
            className="rounded-full bg-zinc-800 px-5 py-3 text-white shadow-lg"
          >
            📞 Anrufen
          </Link>

            <Link href="/termin-buchen"
            className="rounded-full bg-white px-5 py-3 font-semibold text-black shadow-lg"
          >
            📅 Termin
          </Link>
        </div>
      </body>
    </html>
  );
}