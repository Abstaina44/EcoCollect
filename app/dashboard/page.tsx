"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [request, setRequest] = useState<any>(null);

  useEffect(() => {
    const saved = localStorage.getItem("ecocollectRequest");
    if (saved) setRequest(JSON.parse(saved));
  }, []);

  const markCollected = () => {
    if (!request) return;
    const updated = { ...request, status: "Collected", paymentStatus: "Paid" };
    localStorage.setItem("ecocollectRequest", JSON.stringify(updated));
    setRequest(updated);
  };

  const acceptCollection = () => {
    if (!request) return;
    const updated = { ...request, status: "Accepted", collector: "EcoCollect Collector" };
    localStorage.setItem("ecocollectRequest", JSON.stringify(updated));
    setRequest(updated);
  };

  return (
    <main className="min-h-screen bg-[#e9fbea] text-[#10251b]">

{request && request.status === "Accepted" && (
        <button
          onClick={markCollected}
          className="mt-4 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
        >
          Mark as Collected
        </button>
      )}

      {request && request.status === "Finding Collector" && (
          <button
            onClick={acceptCollection}
            className="mt-6 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
          >
            Accept Collection
          </button>
        )}



      <nav className="flex items-center justify-between border-b border-green-200 bg-[#e9fbea] px-8 py-5">
        <a href="/" className="text-2xl font-bold text-green-700">
          EcoCollect
        </a>

        <div className="flex items-center gap-4">
          <span className="hidden text-sm text-gray-600 md:block">
            Welcome back 👋
          </span>

          <a
            href="/"
            className="rounded-xl border border-green-600 px-4 py-2 font-semibold text-green-700 hover:bg-green-100"
          >
            Home
          </a>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-6 py-10">

        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="font-semibold text-green-600">
              CUSTOMER DASHBOARD
            </p>

            <h1 className="mt-2 text-4xl font-extrabold">
              Welcome to EcoCollect
            </h1>

            <p className="mt-2 text-gray-600">
              Manage your waste collections and payments.
            </p>
          </div>

          <a
            href="/request"
            className="rounded-xl bg-green-600 px-6 py-3 text-center font-bold text-white shadow-md hover:bg-green-700"
          >
            + Request Waste Collection
          </a>
        </div>

        {/* Stats */}
        <div className="mt-10 grid gap-5 md:grid-cols-3">

          <div className="rounded-3xl bg-[#f4fff5] p-7 shadow-sm">
            <p className="text-sm font-medium text-gray-500">
              Active Collection
            </p>

            <p className="mt-3 text-3xl font-extrabold text-green-700">
              1
            </p>
          </div>

          <div className="rounded-3xl bg-[#f4fff5] p-7 shadow-sm">
            <p className="text-sm font-medium text-gray-500">
              Completed Pickups
            </p>

            <p className="mt-3 text-3xl font-extrabold">
              8
            </p>
          </div>

          <div className="rounded-3xl bg-[#f4fff5] p-7 shadow-sm">
            <p className="text-sm font-medium text-gray-500">
              Total Payments
            </p>

            <p className="mt-3 text-3xl font-extrabold text-green-700">
              GH₵420
            </p>
          </div>

        </div>

        {/* Active collection */}
        <div className="mt-8 rounded-3xl bg-[#f4fff5] p-8 shadow-sm">

          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">

            <div>
              <p className="text-sm font-semibold text-green-600">
                ACTIVE COLLECTION
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                {request?.wasteType || "No active request"}
              </h2>

              <p className="mt-2 text-gray-600">
                📍 {request?.location || "No pickup location"}
              </p>
            </div>

            <div className="rounded-full bg-yellow-100 px-5 py-2 text-sm font-bold text-yellow-700">
              {request?.status || "No Request"}
            </div>

          </div>

          <div className="mt-8 grid gap-6 border-t border-green-100 pt-6 md:grid-cols-3">

            <div>
              <p className="text-sm text-gray-500">Pickup Date</p>
              <p className="mt-1 font-bold">{request?.date || "Waiting for request"}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Estimated Cost</p>
              <p className="mt-1 font-bold text-green-700">
                GH₵{request?.price || 0}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Payment</p>
              <p className="mt-1 font-bold">{request?.paymentMethod || "Not selected"}</p><p className="mt-1 text-sm text-gray-500">{request?.paymentDetails || "No payment details"}</p>
            </div>

          </div>

        </div>

        {/* Recent requests */}
        <div className="mt-8 rounded-3xl bg-[#f4fff5] p-8 shadow-sm">

          <h2 className="text-2xl font-bold">
            Recent Requests
          </h2>

          <div className="mt-6 space-y-4">

            <div className="flex flex-col justify-between gap-3 rounded-2xl bg-green-50 p-5 md:flex-row md:items-center">
              <div>
                <p className="font-bold">Plastic Waste</p>
                <p className="text-sm text-gray-500">
                  Accra • Completed
                </p>
              </div>

              <p className="font-bold text-green-700">
                GH₵30
              </p>
            </div>

            <div className="flex flex-col justify-between gap-3 rounded-2xl bg-green-50 p-5 md:flex-row md:items-center">
              <div>
                <p className="font-bold">Household Waste</p>
                <p className="text-sm text-gray-500">
                  Accra • Completed
                </p>
              </div>

              <p className="font-bold text-green-700">
                GH₵50
              </p>
            </div>

            <div className="flex flex-col justify-between gap-3 rounded-2xl bg-green-50 p-5 md:flex-row md:items-center">
              <div>
                <p className="font-bold">Organic Waste</p>
                <p className="text-sm text-gray-500">
                  Accra • Completed
                </p>
              </div>

              <p className="font-bold text-green-700">
                GH₵40
              </p>
            </div>

          </div>

        </div>

        {/* Payments */}
        <div className="mt-8 rounded-3xl bg-green-600 p-8 text-white">

          <p className="text-sm font-semibold text-green-100">
            PAYMENT METHODS
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Pay your collector your way
          </h2>

          <p className="mt-3 max-w-2xl text-green-50">
            EcoCollect will support payments through Ghana Mobile Money
            and supported cryptocurrency wallets.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">

            <div className="rounded-xl bg-white/15 px-5 py-3 font-semibold">
              📱 MoMo
            </div>

            <div className="rounded-xl bg-white/15 px-5 py-3 font-semibold">
              ₿ Crypto Wallet
            </div>

          </div>

        </div>

      </section>

      <footer className="border-t border-green-200 px-8 py-8 text-center text-sm text-gray-500">
        © 2026 EcoCollect. Making waste collection smarter.
      </footer>

    </main>
  );
}
