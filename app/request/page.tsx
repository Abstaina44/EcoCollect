"use client";

import { useState } from "react";

export default function RequestPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <nav className="flex items-center justify-between border-b px-8 py-5">
        <a href="/" className="text-2xl font-bold text-green-600">
          EcoCollect
        </a>

        <a
          href="/"
          className="rounded-lg border px-4 py-2 font-medium hover:bg-gray-50"
        >
          Back Home
        </a>
      </nav>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="mb-10 text-center">
          <p className="font-semibold text-green-600">
            ECOCOLLECT
          </p>

          <h1 className="mt-2 text-4xl font-bold md:text-5xl">
            Request Waste Collection
          </h1>

          <p className="mt-4 text-gray-600">
            Tell us what you need collected and we will connect you
            with a nearby waste collector.
          </p>
        </div>

        {submitted ? (
          <div className="rounded-2xl border bg-green-50 p-10 text-center">
            <div className="text-5xl">♻️</div>

            <h2 className="mt-4 text-2xl font-bold text-green-700">
              Request Submitted!
            </h2>

            <p className="mt-3 text-gray-600">
              Your waste collection request has been received.
              We will connect you with an available collector.
            </p>

            <a
              href="/"
              className="mt-6 inline-block rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
            >
              Back Home
            </a>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-6 rounded-2xl border p-8 shadow-sm"
          >
            <div>
              <label className="mb-2 block font-semibold">
                Waste Type
              </label>

              <select
                required
                className="w-full rounded-xl border px-4 py-3 outline-none focus:border-green-600"
              >
                <option value="">Select waste type</option>
                <option>Household Waste / Bola</option>
                <option>Plastic Waste</option>
                <option>Organic Waste</option>
                <option>E-Waste</option>
                <option>Construction Waste</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                Pickup Location
              </label>

              <input
                required
                type="text"
                placeholder="Enter your location"
                className="w-full rounded-xl border px-4 py-3 outline-none focus:border-green-600"
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block font-semibold">
                  Waste Quantity
                </label>

                <select
                  required
                  className="w-full rounded-xl border px-4 py-3 outline-none focus:border-green-600"
                >
                  <option value="">Select size</option>
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                  <option>Very Large</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block font-semibold">
                  Pickup Date
                </label>

                <input
                  required
                  type="date"
                  className="w-full rounded-xl border px-4 py-3 outline-none focus:border-green-600"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                Additional Notes
              </label>

              <textarea
                rows={4}
                placeholder="Describe the waste or give the collector any useful information..."
                className="w-full rounded-xl border px-4 py-3 outline-none focus:border-green-600"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-green-600 px-6 py-4 font-semibold text-white hover:bg-green-700"
            >
              Request Waste Collection
            </button>
          </form>
        )}
      </section>
    </main>
  );
}
