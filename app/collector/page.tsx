"use client";

import { useEffect, useState } from "react";

export default function CollectorDashboard() {
  const [request, setRequest] = useState<any>(null);

  useEffect(() => {
    const saved = localStorage.getItem("ecocollectRequest");
    if (saved) setRequest(JSON.parse(saved));
  const refreshRequest = () => { const saved = localStorage.getItem("ecocollectRequest"); if (saved) setRequest(JSON.parse(saved)); }; window.addEventListener("storage", refreshRequest); window.addEventListener("focus", refreshRequest); return () => { window.removeEventListener("storage", refreshRequest); window.removeEventListener("focus", refreshRequest); };
  }, []);

  const updateStatus = (status: string) => {
    if (!request) return;

    const updated = {
      ...request,
      status,
      collector: "EcoCollect Collector",
    };

    localStorage.setItem("ecocollectRequest", JSON.stringify(updated));
    setRequest(updated);
  };

  return (
    <main className="min-h-screen bg-[#e9fbea] text-[#10251b]">

      <nav className="flex items-center justify-between border-b border-green-200 px-8 py-5">
        <a href="/" className="text-2xl font-bold text-green-700">
          EcoCollect
        </a>

        <a
          href="/dashboard"
          className="rounded-xl border border-green-600 px-4 py-2 font-semibold text-green-700 hover:bg-green-100"
        >
          Customer Dashboard
        </a>
      </nav>

      <section className="mx-auto max-w-6xl px-6 py-10">

        <p className="font-semibold text-green-600">
          COLLECTOR DASHBOARD
        </p>

        <h1 className="mt-2 text-4xl font-extrabold">
          Available Waste Requests
        </h1>

        <p className="mt-2 text-gray-600">
          Find nearby collection jobs and earn money by keeping communities clean.
        </p>

        {!request ? (
          <div className="mt-10 rounded-3xl bg-[#f4fff5] p-10 text-center shadow-sm">
            <div className="text-5xl">♻️</div>
            <h2 className="mt-4 text-2xl font-bold">
              No waste requests yet
            </h2>
            <p className="mt-2 text-gray-600">
              New customer collection requests will appear here.
            </p>
          </div>
        ) : (
          <div className="mt-10 rounded-3xl bg-[#f4fff5] p-8 shadow-sm">

            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">

              <div>
                <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-bold text-yellow-700">
                  {request.status || "Finding Collector"}
                </span>

                <h2 className="mt-5 text-3xl font-bold">
                  {request.wasteType || "Household Waste / Bola"}
                </h2>

                <p className="mt-3 text-gray-600">
                  📍 {request.location || "Location not provided"}
                </p>

                <p className="mt-2 text-gray-600">
                  📅 {request.date || "Date not provided"}
                </p>

                <p className="mt-2 text-gray-600">
                  📦 Quantity: {request.quantity || "Not specified"}
                </p>
              </div>

              <div className="rounded-2xl bg-green-100 p-6 text-center">
                <p className="text-sm font-medium text-gray-600">
                  Your Earnings
                </p>

                <p className="mt-2 text-3xl font-extrabold text-green-700">
                  GH₵{request.price || 50}
                </p>
              </div>

            </div>

            <div className="mt-8 grid gap-5 border-t border-green-100 pt-8 md:grid-cols-2">

              <div className="rounded-2xl bg-green-50 p-5">
                <p className="text-sm text-gray-500">
                  Customer Payment Method
                </p>

                <p className="mt-2 font-bold">
                  {request.paymentMethod || "Not selected"}
                </p>
              </div>

              <div className="rounded-2xl bg-green-50 p-5">
                <p className="text-sm text-gray-500">
                  Payment Status
                </p>

                <p className="mt-2 font-bold text-yellow-700">
                  {request.paymentStatus || "Pending"}
                </p>
              </div>

            </div>

            {request.notes && (
              <div className="mt-5 rounded-2xl bg-gray-50 p-5">
                <p className="text-sm text-gray-500">
                  Customer Notes
                </p>

                <p className="mt-2">
                  {request.notes}
                </p>
              </div>
            )}

            <div className="mt-8 flex flex-wrap gap-4">

              {request.status === "Finding Collector" && (
                <button
                  onClick={() => updateStatus("Accepted")}
                  className="rounded-xl bg-green-600 px-7 py-3 font-bold text-white hover:bg-green-700"
                >
                  Accept Collection
                </button>
              )}

              {request.status === "Accepted" && (
                <button
                  onClick={() => updateStatus("Collected")}
                  className="rounded-xl bg-green-600 px-7 py-3 font-bold text-white hover:bg-green-700"
                >
                  Mark as Collected
                </button>
              )}

              {request.status === "Collected" && (
                <div className="rounded-xl bg-green-100 px-7 py-3 font-bold text-green-700">
                  ✓ Collection Completed
                </div>
              )}

            </div>

          </div>
        )}

      </section>

      <footer className="border-t border-green-200 px-8 py-8 text-center text-sm text-gray-500">
        © 2026 EcoCollect. Making waste collection smarter.
      </footer>

    </main>
  );
}
