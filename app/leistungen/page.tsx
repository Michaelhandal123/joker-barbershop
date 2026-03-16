export default function Leistungen() {
  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-4 text-center text-4xl font-bold">
          Unsere Preisliste
        </h1>

        <p className="mb-12 text-center text-zinc-400">
          Qualität, Präzision und faire Preise.
        </p>

        <div className="grid gap-6 md:grid-cols-2">

          <div className="rounded-xl border border-zinc-800 p-6">
            <h2 className="text-2xl font-semibold">Haarschnitt</h2>
            <p className="mt-3 text-zinc-400">Moderner Herrenhaarschnitt.</p>
            <p className="mt-4 text-xl font-bold">15€</p>
          </div>

          <div className="rounded-xl border border-zinc-800 p-6">
            <h2 className="text-2xl font-semibold">Waschen / Schneiden / Föhnen</h2>
            <p className="mt-3 text-zinc-400">Kompletter Styling-Service.</p>
            <p className="mt-4 text-xl font-bold">17€</p>
          </div>

          <div className="rounded-xl border border-zinc-800 p-6">
            <h2 className="text-2xl font-semibold">Bart</h2>
            <p className="mt-3 text-zinc-400">Bart trimmen und formen.</p>
            <p className="mt-4 text-xl font-bold">10€</p>
          </div>

          <div className="rounded-xl border border-zinc-800 p-6">
            <h2 className="text-2xl font-semibold">Heißwachs</h2>
            <p className="mt-3 text-zinc-400">Saubere Entfernung von Haaren.</p>
            <p className="mt-4 text-xl font-bold">5€</p>
          </div>

          <div className="rounded-xl border border-zinc-800 p-6">
            <h2 className="text-2xl font-semibold">Augenbrauen zupfen (Faden)</h2>
            <p className="mt-3 text-zinc-400">Präzise Augenbrauenformung.</p>
            <p className="mt-4 text-xl font-bold">5€</p>
          </div>

          <div className="rounded-xl border border-zinc-800 p-6">
            <h2 className="text-2xl font-semibold">Kinder bis 8 Jahre</h2>
            <p className="mt-3 text-zinc-400">Haarschnitt für Kinder.</p>
            <p className="mt-4 text-xl font-bold">12€</p>
          </div>

          <div className="rounded-xl border border-zinc-800 p-6">
            <h2 className="text-2xl font-semibold">Haare und Bart</h2>
            <p className="mt-3 text-zinc-400">Haarschnitt und Bartpflege.</p>
            <p className="mt-4 text-xl font-bold">25€</p>
          </div>

          <div className="rounded-xl border border-zinc-800 p-6">
            <h2 className="text-2xl font-semibold">Komplett</h2>
            <p className="mt-3 text-zinc-400">Rundum-Service.</p>
            <p className="mt-4 text-xl font-bold">32€</p>
          </div>

        </div>
      </div>
    </main>
  );
}