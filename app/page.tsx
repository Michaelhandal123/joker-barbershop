import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative isolate flex min-h-[86vh] items-center px-6 py-16 text-center lg:text-left">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(214,175,94,0.18),transparent_34%),linear-gradient(135deg,#050505_0%,#0b0a08_48%,#14100a_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.92),rgba(0,0,0,0.58),rgba(0,0,0,0.92))]" />

        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div className="animate-luxury-rise">
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#d6af5e]">
              Premium Barber Experience
            </p>

            <div className="mt-6 flex justify-center lg:justify-start">
              <div className="luxury-logo">
                <span className="luxury-logo__ornament" aria-hidden="true">
                  ✦
                </span>
                <h1>Joker Barbershop</h1>
                <span className="luxury-logo__ornament" aria-hidden="true">
                  ✦
                </span>
              </div>
            </div>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-zinc-300 sm:text-xl lg:mx-0">
              Präzise Haarschnitte, saubere Fades und professionelle Bartpflege
              in moderner und freundlicher Atmosphäre.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
              <a
                href="/kontakt"
                className="rounded-full bg-[#d6af5e] px-7 py-3 text-sm font-bold uppercase tracking-[0.2em] text-black shadow-[0_0_28px_rgba(214,175,94,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f0d28a]"
              >
                Kontakt
              </a>

              <a
                href="/leistungen"
                className="rounded-full border border-[#d6af5e]/70 px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#f4ddb0] transition duration-300 hover:-translate-y-0.5 hover:border-[#f0d28a] hover:bg-[#d6af5e]/10"
              >
                Unsere Services
              </a>
            </div>
          </div>

          <div className="animate-luxury-reveal">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[430px] overflow-hidden rounded-[2rem] border border-[#d6af5e]/45 bg-[#100d08] p-3 shadow-[0_30px_100px_rgba(0,0,0,0.65)]">
              <div className="absolute inset-0 rounded-[2rem] bg-[linear-gradient(135deg,rgba(214,175,94,0.36),transparent_34%,rgba(214,175,94,0.18))]" />
              <div className="relative h-full overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/images/joker-hero.jpg"
                  alt="Joker Barbershop Logo"
                  fill
                  priority
                  sizes="(max-width: 768px) 86vw, (max-width: 1200px) 40vw, 430px"
                  className="object-cover object-center contrast-110"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.26))]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d6af5e]/15 bg-[#080806] px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#d6af5e]">
            Signature Service
          </p>
          <h2 className="mt-3 text-3xl font-bold">Unsere Highlights</h2>

          <p className="mt-4 text-zinc-400">
            Professioneller Service, faire Preise und eine moderne Atmosphäre.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-[#d6af5e]/20 bg-black/45 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:border-[#d6af5e]/45">
              <h3 className="text-xl font-semibold text-[#f4ddb0]">
                Präzise Schnitte
              </h3>
              <p className="mt-3 text-zinc-400">
                Saubere Haarschnitte und moderne Fades.
              </p>
            </div>

            <div className="rounded-2xl border border-[#d6af5e]/20 bg-black/45 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:border-[#d6af5e]/45">
              <h3 className="text-xl font-semibold text-[#f4ddb0]">
                Faire Preise
              </h3>
              <p className="mt-3 text-zinc-400">
                Starke Qualität zu fairen Preisen.
              </p>
            </div>

            <div className="rounded-2xl border border-[#d6af5e]/20 bg-black/45 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:border-[#d6af5e]/45">
              <h3 className="text-xl font-semibold text-[#f4ddb0]">
                Top Atmosphäre
              </h3>
              <p className="mt-3 text-zinc-400">
                Freundliches Team und angenehme Umgebung.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#d6af5e]">
            Reputation
          </p>
          <h2 className="mt-3 text-3xl font-bold">Was unsere Kunden sagen</h2>

          <p className="mt-4 text-zinc-400">
            Echte Bewertungen von zufriedenen Kunden.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-[#d6af5e]/20 bg-[#080806] p-6 text-left">
              <p className="text-zinc-300">
                "Sehr professionell, freundlich und präzise. Der Haarschnitt war
                perfekt."
              </p>
              <p className="mt-4 text-sm text-[#d6af5e]">Google Bewertung</p>
            </div>

            <div className="rounded-2xl border border-[#d6af5e]/20 bg-[#080806] p-6 text-left">
              <p className="text-zinc-300">
                "Saubere Arbeit, faire Preise und eine richtig angenehme
                Atmosphäre."
              </p>
              <p className="mt-4 text-sm text-[#d6af5e]">Google Bewertung</p>
            </div>

            <div className="rounded-2xl border border-[#d6af5e]/20 bg-[#080806] p-6 text-left">
              <p className="text-zinc-300">
                "Top Barbershop. Ich komme definitiv wieder."
              </p>
              <p className="mt-4 text-sm text-[#d6af5e]">Google Bewertung</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d6af5e]/20 bg-[#d6af5e] px-6 py-16 text-black">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Bereit für deinen nächsten Besuch?
          </h2>

          <p className="mt-4 text-lg text-black/75">
            Komm spontan vorbei oder kontaktiere Joker Barbershop direkt.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/kontakt"
              className="rounded-full bg-black px-7 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-zinc-900"
            >
              Kontakt
            </a>

            <a
              href="tel:034547899228"
              className="rounded-full border border-black px-7 py-3 text-sm font-bold uppercase tracking-[0.18em] text-black transition duration-300 hover:-translate-y-0.5 hover:bg-black hover:text-white"
            >
              Jetzt anrufen
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#d6af5e]/15 bg-black px-6 py-10 text-zinc-400">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          <div>
            <p className="text-lg font-semibold text-[#f4ddb0]">
              Joker Barbershop
            </p>
            <p className="mt-3 text-sm">
              Rennbahnring 9
              <br />
              06124 Halle (Saale)
            </p>
            <p className="mt-3 text-sm">Telefon: 0345 47899228</p>
          </div>

          <div>
            <p className="font-semibold text-[#f4ddb0]">Öffnungszeiten</p>
            <p className="mt-3 text-sm">Mo - Fr: 09:00 - 20:00</p>
            <p className="text-sm">Sa: 09:00 - 18:00</p>
            <p className="text-sm">So: Geschlossen</p>
          </div>

          <div>
            <p className="font-semibold text-[#f4ddb0]">Links</p>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <a href="/leistungen" className="hover:text-[#d6af5e]">
                Leistungen
              </a>
              <a href="/kontakt" className="hover:text-[#d6af5e]">
                Kontakt
              </a>
              <a href="/impressum" className="hover:text-[#d6af5e]">
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
