export default function Kontakt() {
  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-center text-4xl font-bold sm:text-5xl">
          Kontakt
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-zinc-400">
          Du hast Fragen oder möchtest einen Termin vereinbaren? Hier findest du
          unsere Kontaktdaten und Öffnungszeiten.
        </p>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <section className="lg:col-span-2">
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-4">
              <h2 className="mb-4 text-2xl font-semibold text-white">
                Unser Standort
              </h2>

              <div className="overflow-hidden rounded-2xl">
                <iframe
                  src="https://www.google.com/maps?q=Joker%20Barber%20Shop%20Rennbahnring%209%2006124%20Halle&output=embed"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="♛ 𝒥𝑜𝓀𝑒𝓇 ♛ 𝐵𝒶𝓇𝒷𝑒𝓇𝓈𝒽𝑜𝓅 Standort"
                />
              </div>
            </div>
          </section>

          <div className="space-y-8">
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
              <h2 className="text-2xl font-semibold">Kontaktdaten</h2>

              <p className="mt-4 text-zinc-400">
                Telefon: <span className="text-white">0345 47899228</span>
              </p>

              <p className="mt-2 text-zinc-400">
                Adresse:
                <span className="text-white">
                  {" "}Rennbahnring 9, 06124 Halle (Saale)
                </span>
              </p>

              <p className="mt-2 text-zinc-400">
                Standort:
                <span className="text-white"> Saale-Center - Floor G</span>
              </p>

              <a
                href="https://www.instagram.com/joker_m7_barbershop?igsh=MTF4eWRqdHgzbHFs&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex items-center gap-3 text-[#d6af5e] transition hover:text-[#f4ddb0]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d6af5e]/40 bg-[#d6af5e]/10">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                </span>
                <span className="font-semibold">@joker_m7_barbershop</span>
              </a>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
              <h2 className="text-2xl font-semibold">Öffnungszeiten</h2>

              <div className="mt-4 space-y-2 text-zinc-400">
                <p>
                  Montag - Freitag:{" "}
                  <span className="text-white">09:00 - 20:00</span>
                </p>
                <p>
                  Samstag: <span className="text-white">09:00 - 18:00</span>
                </p>
                <p>
                  Sonntag: <span className="text-white">Geschlossen</span>
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
              <h2 className="text-2xl font-semibold">Schnellzugriff</h2>

              <div className="mt-4 flex flex-wrap gap-4">
                <a
                  href="tel:034547899228"
                  className="rounded-2xl bg-white px-5 py-3 font-semibold text-black transition hover:scale-105"
                >
                  Jetzt anrufen
                </a>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Joker+Barber+Shop+Rennbahnring+9+06124+Halle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-white px-5 py-3 font-semibold text-white transition hover:bg-white hover:text-black"
                >
                  Route planen
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
