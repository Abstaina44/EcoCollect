import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* Navigation */}
      <nav className="flex items-center justify-between border-b px-8 py-5">
        <div className="text-2xl font-bold text-green-600">
          EcoCollect
        </div>

        <div className="hidden gap-8 md:flex">
          <Link href="/how-it-works" className="hover:text-green-600">
            How it works
          </Link>

          <Link href="/about" className="hover:text-green-600">
            About
          </Link>

          <Link href="/contact" className="hover:text-green-600">
            Contact
          </Link>
        </div>

        <div className="flex gap-3">
          <Link
            href="/login"
            className="rounded-lg border border-gray-300 px-4 py-2 font-medium hover:bg-gray-50"
          >
            Login
          </Link>

          <Link
            href="/get-started"
            className="rounded-lg bg-green-600 px-4 py-2 font-medium text-white hover:bg-green-700"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-8 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* Left side */}
          <div>
            <p className="mb-4 font-semibold text-green-600">
              SMART WASTE COLLECTION
            </p>

            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              Cleaner communities.
              <span className="block text-green-600">
                Smarter collection.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">EcoCollect connects households and businesses with reliable waste collectors to turn everyday rubbish, locally known as “bola,” into value. Request a pickup, get your waste collected responsibly, and earn payments through Mobile Money (MoMo) or supported cryptocurrencies. Together, we’re making waste collection cleaner, smarter, and more rewarding.</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/request"
                className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
              >
                Request Waste Collection
              </Link>

              <Link
                href="/collector"
                className="rounded-xl border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-50"
              >
                Become a Collector
              </Link>
            </div>
          </div>

          {/* Right side - Ghana Bola */}
          <div className="flex items-center justify-center">
            <img
              src="/bola.png"
              alt="Bola waste collection in Ghana"
              className="h-auto w-full max-w-[520px] object-contain"
            />
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 px-8 py-20">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">
              Everything you need for smarter waste collection
            </h2>

            <p className="mt-3 text-gray-600">
              Simple tools for households, businesses and waste collectors.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-5 text-4xl">🚛</div>

              <h3 className="text-xl font-bold">
                Request a Pickup
              </h3>

              <p className="mt-3 text-gray-600">
                Schedule waste collection whenever you need it.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-5 text-4xl">📍</div>

              <h3 className="text-xl font-bold">
                Find Nearby Collectors
              </h3>

              <p className="mt-3 text-gray-600">
                Connect with available waste collectors near your location.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-5 text-4xl">♻️</div>

              <h3 className="text-xl font-bold">
                Build a Cleaner Future
              </h3>

              <p className="mt-3 text-gray-600">
                Make responsible waste disposal easier for everyone.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-8 py-20">
        <div className="mx-auto max-w-5xl text-center">

          <h2 className="text-3xl font-bold">
            How EcoCollect works
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">

            <div>
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-600 font-bold text-white">
                1
              </div>

              <h3 className="mt-4 font-bold">
                Request
              </h3>

              <p className="mt-2 text-gray-600">
                Tell us what waste you need collected.
              </p>
            </div>

            <div>
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-600 font-bold text-white">
                2
              </div>

              <h3 className="mt-4 font-bold">
                Match
              </h3>

              <p className="mt-2 text-gray-600">
                We connect you with an available collector.
              </p>
            </div>

            <div>
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-600 font-bold text-white">
                3
              </div>

              <h3 className="mt-4 font-bold">
                Collect
              </h3>

              <p className="mt-2 text-gray-600">
                Your waste gets collected and responsibly handled.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-600 px-8 py-20 text-center text-white">

        <h2 className="text-4xl font-bold">
          Ready to make waste collection easier?
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-green-50">
          Join EcoCollect and become part of a cleaner, smarter community.
        </p>

        <Link
          href="/get-started"
          className="mt-8 inline-block rounded-xl bg-white px-7 py-3 font-semibold text-green-700 hover:bg-gray-100"
        >
          Get Started
        </Link>

      </section>

      {/* Footer */}
      <footer className="border-t px-8 py-8 text-center text-sm text-gray-500">
        © 2026 EcoCollect. Making waste collection smarter.
      </footer>

    </main>
  );
}
