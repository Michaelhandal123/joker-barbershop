export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-zinc-400">
          Premium Barber Experience
        </p>

        <h1 className="mt-4 max-w-5xl text-5xl font-bold leading-tight sm:text-7xl">
          Joker Barbershop
        </h1>

        <p className="mt-6 max-w-3xl text-lg text-zinc-300 sm:text-2xl">
          Präzise Haarschnitte, saubere Fades und professionelle Bartpflege in
          moderner und freundlicher Atmosphäre.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="/kontakt"
            className="rounded-xl bg-white px-6 py-3 font-semibold text-black"
          >
            Kontakt
          </a>

          <a
            href="/leistungen"
            className="rounded-xl border border-white px-6 py-3"
          >
            Unsere Services
          </a>
        </div>
      </section>

      <section className="border-t border-zinc-800 bg-zinc-950 px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold">Unsere Highlights</h2>

          <p className="mt-4 text-zinc-400">
            Professioneller Service, faire Preise und eine moderne Atmosphäre.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 p-6">
              <h3 className="text-xl font-semibold">Präzise Schnitte</h3>
              <p className="mt-3 text-zinc-400">
                Saubere Haarschnitte und moderne Fades.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 p-6">
              <h3 className="text-xl font-semibold">Faire Preise</h3>
              <p className="mt-3 text-zinc-400">
                Starke Qualität zu fairen Preisen.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 p-6">
              <h3 className="text-xl font-semibold">Top Atmosphäre</h3>
              <p className="mt-3 text-zinc-400">
                Freundliches Team und angenehme Umgebung.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold">Was unsere Kunden sagen</h2>

          <p className="mt-4 text-zinc-400">
            Echte Bewertungen von zufriedenen Kunden.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 p-6 text-left">
              <p className="text-zinc-300">
                "Sehr professionell, freundlich und präzise. Der Haarschnitt war
                perfekt."
              </p>
              <p className="mt-4 text-sm text-zinc-500">Google Bewertung</p>
            </div>

            <div className="rounded-2xl border border-zinc-800 p-6 text-left">
              <p className="text-zinc-300">
                "Saubere Arbeit, faire Preise und eine richtig angenehme
                Atmosphäre."
              </p>
              <p className="mt-4 text-sm text-zinc-500">Google Bewertung</p>
            </div>

            <div className="rounded-2xl border border-zinc-800 p-6 text-left">
              <p className="text-zinc-300">
                "Top Barbershop. Ich komme definitiv wieder."
              </p>
              <p className="mt-4 text-sm text-zinc-500">Google Bewertung</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 text-black">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Bereit für deinen nächsten Besuch?
          </h2>

          <p className="mt-4 text-lg text-zinc-700">
            Komm spontan vorbei oder kontaktiere Joker Barbershop direkt.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/kontakt"
              className="rounded-2xl bg-black px-6 py-3 font-semibold text-white transition hover:scale-105"
            >
              Kontakt
            </a>

            <a
              href="tel:034547899228"
              className="rounded-2xl border border-black px-6 py-3 font-semibold text-black transition hover:bg-black hover:text-white"
            >
              Jetzt anrufen
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-800 bg-black px-6 py-10 text-zinc-400">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          <div>
            <p className="text-lg font-semibold text-white">Joker Barbershop</p>
            <p className="mt-3 text-sm">
              Rennbahnring 9
              <br />
              06124 Halle (Saale)
            </p>
            <p className="mt-3 text-sm">Telefon: 0345 47899228</p>
          </div>

          <div>
            <p className="font-semibold text-white">Öffnungszeiten</p>
            <p className="mt-3 text-sm">Mo - Fr: 09:00 - 20:00</p>
            <p className="text-sm">Sa: 09:00 - 18:00</p>
            <p className="text-sm">So: Geschlossen</p>
          </div>

          <div>
            <p className="font-semibold text-white">Links</p>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <a href="/leistungen" className="hover:text-white">
                Leistungen
              </a>
              <a href="/kontakt" className="hover:text-white">
                Kontakt
              </a>
              <a href="/impressum" className="hover:text-white">
                Impressum
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-zinc-500">
          © 2026 Joker Barbershop
        </div>
      </footer>
    </main>
  );
}
