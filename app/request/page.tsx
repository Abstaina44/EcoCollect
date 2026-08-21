"use client";

import { useState } from "react";

export default function RequestPage() {
  const [submitted, setSubmitted] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const request = {
      wasteType: formData.get("wasteType"),
      location: formData.get("location"),
      quantity: formData.get("quantity"),
      date: formData.get("date"),
      notes: formData.get("notes"),
      paymentMethod: formData.get("paymentMethod"),
      paymentDetails: formData.get("paymentDetails"),
      status: "Finding Collector",
      paymentStatus: "Pending",
      price: 50,
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem("ecocollectRequest", JSON.stringify(request));
    setSubmitted(true);
  };

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
          <form onSubmit={handleSubmit}
            className="space-y-6 rounded-2xl border p-8 shadow-sm"
          >
            <div>
              <label className="mb-2 block font-semibold">
                Waste Type
              </label>

              <select
                name="wasteType"
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
                name="location"
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
                  name="quantity"
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
                  name="date"
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
                name="notes"
                rows={4}
                placeholder="Describe the waste or give the collector any useful information..."
                className="w-full rounded-xl border px-4 py-3 outline-none focus:border-green-600"
              />
            </div>

            <div className="mt-6">
              <label className="mb-2 block font-semibold">Payment Method</label>
              <select
                name="paymentMethod"
                required
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3"
                defaultValue=""
              >
                <option value="" disabled>Select payment method</option>
                <option value="MoMo">Mobile Money (MoMo)</option>
                <option value="Crypto">Cryptocurrency</option>
              </select>
            </div>



            {paymentMethod && (
              <div className="mt-6">
                <label className="mb-2 block font-semibold">
                  {paymentMethod === "MTN MoMo" || paymentMethod === "Telecel Cash" || paymentMethod === "AirtelTigo Money" ? "Mobile Money Number" : "Crypto Wallet Address"}
                </label>
                <input
                  type="text"
                  name="paymentDetails"
                  required
                  placeholder={paymentMethod === "MTN MoMo" || paymentMethod === "Telecel Cash" || paymentMethod === "AirtelTigo Money" ? "Enter your MoMo phone number" : "Enter your wallet address"}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3"
                />
              </div>
            )}

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
