import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative isolate px-6 py-12 text-center lg:py-18 lg:text-left">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_28%_36%,rgba(214,175,94,0.18),transparent_24%),radial-gradient(circle_at_74%_30%,rgba(214,175,94,0.1),transparent_28%),linear-gradient(135deg,#030303_0%,#090806_46%,#151008_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.72),rgba(0,0,0,0.42),rgba(0,0,0,0.82))]" />

        <div className="hero-shell mx-auto grid w-full max-w-6xl items-center gap-x-14 gap-y-8">
          <div className="hero-brand animate-luxury-rise">
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-[#d6af5e] lg:ml-1">
              Premium Barber Experience
            </p>

            <div className="mt-6 flex justify-center lg:justify-start">
              <div
                className="luxury-logo"
                aria-label="♛ 𝒥𝑜𝓀𝑒𝓇 ♛ 𝐵𝒶𝓇𝒷𝑒𝓇𝓈𝒽𝑜𝓅"
              >
                <h1>
                  ♛ 𝒥𝑜𝓀𝑒𝓇 ♛
                  <br />
                  𝐵𝒶𝓇𝒷𝑒𝓇𝓈𝒽𝑜𝓅
                </h1>
              </div>
            </div>
          </div>

          <div className="hero-image animate-luxury-reveal">
            <div className="luxury-hero-image mx-auto flex w-full max-w-[320px] items-center justify-center lg:max-w-[460px]">
              <div className="luxury-hero-image__frame">
                <Image
                  src="/images/joker-hero.jpg"
                  alt="♛ 𝒥𝑜𝓀𝑒𝓇 ♛ 𝐵𝒶𝓇𝒷𝑒𝓇𝓈𝒽𝑜𝓅 Logo"
                  width={665}
                  height={828}
                  priority
                  sizes="(max-width: 768px) 320px, 460px"
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          </div>

          <div className="hero-copy animate-luxury-rise">
            <p className="mx-auto max-w-xl text-base leading-8 text-zinc-300 sm:text-xl lg:mx-0">
              Präzise Haarschnitte, saubere Fades und professionelle Bartpflege
              in moderner und freundlicher Atmosphäre.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start">
              <a
                href="/kontakt"
                className="rounded-full bg-[#d6af5e] px-7 py-3 text-sm font-bold uppercase tracking-[0.2em] text-black shadow-[0_0_28px_rgba(214,175,94,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f0d28a]"
              >
                Kontakt
              </a>

              <a
                href="tel:034547899228"
                className="rounded-full border border-[#d6af5e]/70 px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#f4ddb0] transition duration-300 hover:-translate-y-0.5 hover:border-[#f0d28a] hover:bg-[#d6af5e]/10"
              >
                Anrufen
              </a>
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
            Komm spontan vorbei oder kontaktiere ♛ 𝒥𝑜𝓀𝑒𝓇 ♛
            𝐵𝒶𝓇𝒷𝑒𝓇𝓈𝒽𝑜𝓅 direkt.
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

      <section className="premium-experience-section relative isolate overflow-hidden border-t border-[#d6af5e]/15 bg-black px-6 py-20 text-white sm:py-24">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(214,175,94,0.16),transparent_28%),radial-gradient(circle_at_82%_74%,rgba(214,175,94,0.1),transparent_30%),linear-gradient(145deg,#030303_0%,#090806_48%,#120d07_100%)]" />
        <div className="absolute inset-x-6 top-0 -z-10 mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-[#d6af5e]/60 to-transparent" />

        <div className="mx-auto max-w-6xl">
          <div className="premium-section-header mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-[#d6af5e]">
              Luxury Craft Since 1998
            </p>
            <h2 className="mt-5 font-serif text-4xl font-bold leading-tight text-[#f4ddb0] sm:text-5xl">
              Joker Barbershop – Premium Barber Experience auf höchstem Niveau
            </h2>
            <div className="mx-auto mt-6 h-px w-40 bg-gradient-to-r from-transparent via-[#d6af5e] to-transparent" />
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
              Im Joker Barbershop wird jeder Besuch zu einer gepflegten und
              professionellen Barber-Experience.
            </p>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg">
              Seit 1998 stehen wir für präzise Schnitte, höchste Sauberkeit und
              echte Handwerkskunst — und das ohne Terminvereinbarung. Komm
              einfach vorbei und wir kümmern uns um den Rest.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <article className="premium-feature-card rounded-3xl border border-[#d6af5e]/20 bg-black/55 p-7 shadow-[0_24px_80px_rgba(0,0,0,0.42)] sm:p-9">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="premium-icon flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#d6af5e]/45 bg-[#d6af5e]/10 text-2xl">
                  ⭐
                </div>
                <h3 className="font-serif text-3xl font-semibold text-[#f4ddb0]">
                  Warum entscheiden sich Kunden für uns?
                </h3>
              </div>

              <ul className="mt-8 grid gap-4 text-left text-zinc-300">
                <li className="premium-list-item">
                  Erfahrung seit 1998 in modernen Haarschnitten und präzisen
                  Fades
                </li>
                <li className="premium-list-item">
                  Außergewöhnliche Sauberkeit bei Werkzeugen, Arbeitsplätzen
                  und im gesamten Salon
                </li>
                <li className="premium-list-item">
                  Höchste Präzision in jedem Detail
                </li>
                <li className="premium-list-item">
                  Professionelle Produkte für Haar- und Bartpflege
                </li>
                <li className="premium-list-item">
                  Angenehme Atmosphäre und respektvoller Service auf
                  Premium-Niveau
                </li>
              </ul>
            </article>

            <div className="grid gap-6">
              <article className="premium-feature-card rounded-3xl border border-[#d6af5e]/20 bg-[#080806]/85 p-7 shadow-[0_24px_80px_rgba(0,0,0,0.34)] sm:p-8">
                <div className="flex items-center gap-4">
                  <div className="premium-icon flex h-13 w-13 shrink-0 items-center justify-center rounded-full border border-[#d6af5e]/45 bg-[#d6af5e]/10 text-2xl">
                    💈
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-[#f4ddb0]">
                    Professionelle Haar- & Bartpflege
                  </h3>
                </div>
                <p className="mt-6 leading-8 text-zinc-300">
                  Wir arbeiten mit desinfizierten Werkzeugen und modernen
                  Techniken, um dir einen sauberen, gepflegten und perfekt
                  abgestimmten Look zu garantieren — egal ob Haarschnitt oder
                  Bartstyling.
                </p>
              </article>

              <article className="premium-feature-card rounded-3xl border border-[#d6af5e]/20 bg-[#080806]/85 p-7 shadow-[0_24px_80px_rgba(0,0,0,0.34)] sm:p-8">
                <div className="flex items-center gap-4">
                  <div className="premium-icon flex h-13 w-13 shrink-0 items-center justify-center rounded-full border border-[#d6af5e]/45 bg-[#d6af5e]/10 text-2xl">
                    📍
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-[#f4ddb0]">
                    Bereit für ein neues Barber-Erlebnis?
                  </h3>
                </div>
                <p className="mt-6 leading-8 text-zinc-300">
                  Besuche den Joker Barbershop und genieße Qualität, Sauberkeit
                  und echte Expertise — und das alles ohne Termin.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#d6af5e]/15 bg-black px-6 py-10 text-zinc-400">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          <div>
            <p className="text-lg font-semibold text-[#f4ddb0]">
              ♛ 𝒥𝑜𝓀𝑒𝓇 ♛
              <br />
              𝐵𝒶𝓇𝒷𝑒𝓇𝓈𝒽𝑜𝓅
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
          © 2026 ♛ 𝒥𝑜𝓀𝑒𝓇 ♛ 𝐵𝒶𝓇𝒷𝑒𝓇𝓈𝒽𝑜𝓅
        </div>
      </footer>
    </main>
  );
}
