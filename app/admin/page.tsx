"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Booking = {
  id: number;
  customer_name: string;
  phone: string;
  service: string;
  booking_date: string;
  booking_time: string;
  notes: string | null;
  created_at: string;
};

export default function AdminPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(false);
  const [authorized, setAuthorized] = useState(false);
  const [password, setPassword] = useState("");

  const adminPassword = "joker123";

  const loadBookings = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("bookings")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.log("Fehler beim Laden der Buchungen:", error);
    } else if (data) {
      setBookings(data as Booking[]);
    }

    setLoading(false);
  };

  const deleteBooking = async (id: number) => {
    const confirmed = window.confirm("Diesen Termin wirklich löschen?");
    if (!confirmed) return;

    const { error } = await supabase.from("bookings").delete().eq("id", id);

    if (error) {
      alert("Fehler beim Löschen");
      console.log(error);
      return;
    }

    setBookings((prev) => prev.filter((booking) => booking.id !== id));
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password === adminPassword) {
      setAuthorized(true);
      localStorage.setItem("admin-auth", "true");
      return;
    }

    alert("Falsches Passwort");
  };

  const handleLogout = () => {
    localStorage.removeItem("admin-auth");
    setAuthorized(false);
    setPassword("");
  };

  useEffect(() => {
    if (localStorage.getItem("admin-auth") === "true") {
      setTimeout (() => {
          setAuthorized(true);
      }, 0);
    }
  }, []);

  useEffect(() => {
    if (!authorized) return;

    const run = async () => {
      await loadBookings();
    };

    void run();
  }, [authorized]);

  if (!authorized) {
    return (
      <main className="min-h-screen bg-black px-6 py-20 text-white">
        <div className="mx-auto max-w-md rounded-2xl border border-zinc-800 bg-zinc-950 p-8">
          <h1 className="mb-4 text-3xl font-bold">Admin Login</h1>
          <p className="mb-6 text-zinc-400">
            Bitte Passwort eingeben, um die Buchungen zu sehen.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="Passwort"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3 text-white outline-none"
            />

            <button
              type="submit"
              className="w-full rounded-xl bg-white px-4 py-3 font-semibold text-black"
            >
              Einloggen
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <h1 className="mb-2 text-4xl font-bold">Admin Dashboard</h1>
            <p className="text-zinc-400">
              Alle eingegangenen Termine im Überblick.
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="rounded-xl border border-zinc-700 px-4 py-2 text-sm text-zinc-300 hover:text-white"
          >
            Logout
          </button>
        </div>

        {loading && (
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 text-zinc-400">
            Buchungen werden geladen...
          </div>
        )}

        {!loading && bookings.length === 0 && (
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 text-zinc-400">
            Noch keine Buchungen vorhanden.
          </div>
        )}

        {!loading && bookings.length > 0 && (
          <div className="overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-950">
            <table className="min-w-full text-left text-sm">
              <thead className="border-b border-zinc-800 bg-zinc-900 text-zinc-300">
                <tr>
                  <th className="px-4 py-4">Name</th>
                  <th className="px-4 py-4">Telefon</th>
                  <th className="px-4 py-4">Leistung</th>
                  <th className="px-4 py-4">Datum</th>
                  <th className="px-4 py-4">Uhrzeit</th>
                  <th className="px-4 py-4">Nachricht</th>
                  <th className="px-4 py-4">Aktion</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr
                    key={booking.id}
                    className="border-b border-zinc-800 align-top"
                  >
                    <td className="px-4 py-4">{booking.customer_name}</td>
                    <td className="px-4 py-4">{booking.phone}</td>
                    <td className="px-4 py-4">{booking.service}</td>
                    <td className="px-4 py-4">{booking.booking_date}</td>
                    <td className="px-4 py-4">{booking.booking_time}</td>
                    <td className="px-4 py-4">{booking.notes || "-"}</td>
                    <td className="px-4 py-4">
                      <button
                        onClick={() => deleteBooking(booking.id)}
                        className="rounded-lg border border-red-700 px-3 py-2 text-red-300 hover:bg-red-900/30"
                      >
                        Löschen
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}