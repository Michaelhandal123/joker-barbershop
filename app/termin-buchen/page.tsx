"use client";
import{ useState } from "react";
import { supabase } from "@/lib/supabase";

export default function TerminBuchen() {
  const [success, setSuccess] = useState(false);
  const handleBooking = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const service = (form.elements.namedItem("service") as HTMLSelectElement).value;
    const date = (form.elements.namedItem("date") as HTMLInputElement).value;
    const time = (form.elements.namedItem("time") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const { error } = await supabase.from("bookings").insert([
      {
        customer_name: name,
        phone,
        service,
        booking_date: date,
        booking_time: time,
        notes: message,
      },
    ]);

    if (error) {
      alert("Fehler beim Speichern des Termins");
      console.log(error);
    } else {
      setSuccess(true);
      form.reset();
    }
  };

  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-4 text-center text-4xl font-bold">
          Termin buchen
        </h1>

        <p className="mb-12 text-center text-zinc-400">
          Buche jetzt deinen Termin bei Joker Barbershop.
        </p>
{success && (
  <div className="mb-6 rounded-xl border border-green-700 bg-green-900 p-4 text-green-200">
    ✅ Termin erfolgreich reserviert! Wir freuen uns auf deinen Besuch.
  </div>
)}
        <form
          onSubmit={handleBooking}
          className="space-y-6 rounded-2xl border border-zinc-800 bg-zinc-950 p-8"
        >
          <div>
            <label className="mb-2 block text-sm font-medium">Leistung</label>
            <select
              name="service"
              className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3 text-white outline-none"
            >
              <option>Haarschnitt - 15€</option>
              <option>Waschen / Schneiden / Föhnen - 17€</option>
              <option>Bart - 10€</option>
              <option>Heißwachs - 5€</option>
              <option>Augenbrauen zupfen (Faden) - 5€</option>
              <option>Kinder bis 8 Jahre - 12€</option>
              <option>Haare und Bart - 25€</option>
              <option>Komplett - 32€</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Name</label>
            <input
              name="name"
              type="text"
              placeholder="Dein Name"
              className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3 text-white outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Telefonnummer</label>
            <input
              name="phone"
              type="tel"
              placeholder="0176 12345678"
              className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3 text-white outline-none"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium">Datum</label>
              <input
                name="date"
                type="date"
                className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3 text-white outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Uhrzeit</label>
              <input
                name="time"
                type="time"
                className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3 text-white outline-none"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Nachricht (optional)
            </label>
            <textarea
              name="message"
              placeholder="Besondere Wünsche oder Hinweise"
              rows={4}
              className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3 text-white outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-white px-6 py-4 font-semibold text-black transition hover:scale-[1.01]"
          >
            Termin reservieren
          </button>
        </form>
      </div>
    </main>
  );
}
