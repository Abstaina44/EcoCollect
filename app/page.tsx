import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

const wasteTypes = [
  {
    name: "Plastic & Bottles",
    icon: "🧴",
    price: "GH₵0.50/kg",
  },
  {
    name: "Scrap Metal",
    icon: "🔩",
    price: "GH₵2.00/kg",
  },
  {
    name: "Paper & Cardboard",
    icon: "📦",
    price: "GH₵1.00/kg",
  },
  {
    name: "Glass",
    icon: "🍾",
    price: "GH₵0.80/kg",
  },
  {
    name: "Organic Waste",
    icon: "🍃",
    price: "GH₵0.70/kg",
  },
  {
    name: "E-Waste",
    icon: "🔌",
    price: "GH₵3.00/kg",
  },
  {
    name: "General Waste",
    icon: "🗑️",
    price: "GH₵0.50/kg",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8fbf8] text-gray-900">
      {/* Navigation */}
      <header className="border-b border-gray-100 bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600 text-xl text-white">
              ♻
            </div>

            <div>
              <div className="text-lg font-bold">EcoCollect</div>
              <div className="text-xs text-gray-500">GHANA</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <Link href="/" className="text-green-700">
              Home
            </Link>

            <Link
              href="/request"
              className="text-gray-600 transition hover:text-green-700"
            >
              Request Pickup
            </Link>

            <Link
              href="/collector"
              className="text-gray-600 transition hover:text-green-700"
            >
              Find Jobs
            </Link>

            <Link
              href="/dashboard"
              className="text-gray-600 transition hover:text-green-700"
            >
              My Pickups
            </Link>

            <Link
              href="/wallet"
              className="text-gray-600 transition hover:text-green-700"
            >
              Wallet
            </Link>
          </nav>

          <div className="flex items-center gap-3">
          <ThemeToggle />
            <Link
              href="/login"
              className="hidden text-sm font-medium text-gray-600 hover:text-gray-900 sm:block"
            >
              Sign in
            </Link>

            <Link
              href="/get-started"
              className="rounded-xl bg-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-12 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-100 bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Waste-to-wealth marketplace
            </div>

            <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Turn your waste
              <span className="block text-green-600">into income.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              EcoCollect connects homes and businesses across Ghana with
              collectors who pick up waste on demand — making disposal easier,
              faster, and more rewarding.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/request"
                className="rounded-xl bg-green-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-green-600/20 transition hover:bg-green-700"
              >
                Request a pickup →
              </Link>

              <Link
                href="/collector"
                className="rounded-xl border border-gray-200 bg-white px-6 py-3.5 font-semibold text-gray-800 transition hover:border-green-200 hover:bg-green-50"
              >
                Find collector jobs
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-500">
              <span>✓ Verified collectors</span>
              <span>✓ Same-day pickup</span>
              <span>✓ Instant payouts</span>
            </div>
          </div>

          {/* Live Activity */}
          <div className="relative">
            <div className="rounded-3xl border border-green-100 bg-white p-6 shadow-xl shadow-green-900/5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                    Live activity
                  </p>

                  <h2 className="mt-1 text-lg font-bold">Today</h2>
                </div>

                <div className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                  ● Live
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-green-50 p-5">
                  <p className="text-sm text-gray-500">Pickups posted</p>
                  <p className="mt-2 text-3xl font-bold text-green-700">5</p>
                </div>

                <div className="rounded-2xl bg-green-50 p-5">
                  <p className="text-sm text-gray-500">Waste collected</p>
                  <p className="mt-2 text-3xl font-bold text-green-700">
                    90kg
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between rounded-xl border border-gray-100 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50">
                      🔩
                    </div>

                    <div>
                      <p className="text-sm font-semibold">Scrap Metal</p>
                      <p className="text-xs text-gray-500">18kg</p>
                    </div>
                  </div>

                  <p className="font-semibold text-green-700">GH₵36.00</p>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-gray-100 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50">
                      🔌
                    </div>

                    <div>
                      <p className="text-sm font-semibold">E-Waste</p>
                      <p className="text-xs text-gray-500">6kg</p>
                    </div>
                  </div>

                  <p className="font-semibold text-green-700">GH₵20.00</p>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-gray-100 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50">
                      🧴
                    </div>

                    <div>
                      <p className="text-sm font-semibold">Plastic</p>
                      <p className="text-xs text-gray-500">30kg</p>
                    </div>
                  </div>

                  <p className="font-semibold text-green-700">GH₵15.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we collect */}
      <section className="border-y border-gray-100 bg-white px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold text-green-600">
                WHAT WE COLLECT
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight">
                Transparent pricing per kilogram
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-gray-500">
              Prices are estimates and may vary based on location, quantity,
              and current collection conditions.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
            {wasteTypes.map((waste) => (
              <div
                key={waste.name}
                className="rounded-2xl border border-gray-100 bg-[#fbfdfb] p-4 transition hover:-translate-y-1 hover:border-green-200 hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-xl">
                  {waste.icon}
                </div>

                <h3 className="mt-4 text-sm font-semibold">{waste.name}</h3>

                <p className="mt-1 text-xs text-green-600">{waste.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-green-600">
              HOW IT WORKS
            </p>

            <h2 className="mt-2 text-4xl font-bold tracking-tight">
              Waste collection without the hassle.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                number: "1",
                title: "Post your waste",
                text: "Tell us what you have, how much it weighs, and where to collect it.",
              },
              {
                number: "2",
                title: "Get matched",
                text: "A verified collector nearby accepts your pickup and heads your way.",
              },
              {
                number: "3",
                title: "Get paid",
                text: "Waste is collected and the transaction is completed securely.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-3xl border border-gray-100 bg-white p-7 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-600 font-bold text-white">
                  {step.number}
                </div>

                <h3 className="mt-6 text-xl font-bold">{step.title}</h3>

                <p className="mt-3 leading-7 text-gray-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-green-700 px-8 py-14 text-white sm:px-12">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-green-200">
                JOIN ECOCOLLECT
              </p>

              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
                Ready to make waste collection easier?
              </h2>

              <p className="mt-4 leading-7 text-green-50">
                Whether you need waste collected or want to earn by collecting
                it, EcoCollect connects you to the marketplace.
              </p>
            </div>

            <Link
              href="/get-started"
              className="shrink-0 rounded-xl bg-white px-7 py-3.5 font-semibold text-green-700 transition hover:bg-green-50"
            >
              Get started →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-gray-500 sm:flex-row">
          <p>© 2026 EcoCollect Ghana. All rights reserved.</p>

          <div className="flex gap-5">
            <Link href="/about" className="hover:text-green-600">
              About
            </Link>

            <Link href="/how-it-works" className="hover:text-green-600">
              How it works
            </Link>

            <Link href="/contact" className="hover:text-green-600">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}