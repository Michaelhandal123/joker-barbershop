export default function Kontakt() {
  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">

        <h1 className="text-center text-4xl font-bold sm:text-5xl">
          Kontakt
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-zinc-400">
          Du hast Fragen oder möchtest einen Termin vereinbaren?
          Hier findest du unsere Kontaktdaten und Öffnungszeiten.
        </p>

        <div className="mt-14 grid gap-10 md:grid-cols-2">

          {/* LEFT SIDE */}
          <div className="space-y-8">
<section className="mt-16">
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
                <span className="text-white">
                  {" "}Saale-Center – Floor G
                </span>
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
              <h2 className="text-2xl font-semibold">Öffnungszeiten</h2>

              <div className="mt-4 space-y-2 text-zinc-400">
                <p>Montag – Freitag: <span className="text-white">09:00 – 20:00</span></p>
                <p>Samstag: <span className="text-white">09:00 – 18:00</span></p>
                <p>Sonntag: <span className="text-white">Geschlossen</span></p>
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

          {/* RIGHT SIDE FORM */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">

            <h2 className="text-2xl font-semibold">Nachricht senden</h2>

            <form className="mt-6 space-y-5">

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Dein Name"
                  className="w-full rounded-2xl border border-zinc-700 bg-black px-4 py-3 text-white outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  E-Mail
                </label>

                <input
                  type="email"
                  placeholder="deine@email.de"
                  className="w-full rounded-2xl border border-zinc-700 bg-black px-4 py-3 text-white outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Telefonnummer
                </label>

                <input
                  type="tel"
                  placeholder="+49..."
                  className="w-full rounded-2xl border border-zinc-700 bg-black px-4 py-3 text-white outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Nachricht
                </label>

                <textarea
                  rows={5}
                  placeholder="Schreibe uns deine Nachricht..."
                  className="w-full rounded-2xl border border-zinc-700 bg-black px-4 py-3 text-white outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-white px-6 py-3 font-semibold text-black transition hover:scale-[1.01]"
              >
                Nachricht senden
              </button>

            </form>

          </div>

        </div>

      </div>
    </main>
  );
}
