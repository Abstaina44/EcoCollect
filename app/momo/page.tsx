import Link from "next/link";

export default function MomoPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-green-600">
              ECOCOLLECT MONEY
            </p>

            <h1 className="mt-2 text-4xl font-bold text-gray-900">
              Cedis & MoMo
            </h1>

            <p className="mt-2 text-gray-600">
              Manage your Ghana Cedis balance and mobile money payments.
            </p>
          </div>

          <Link
            href="/"
            className="rounded-lg border bg-white px-4 py-2 font-medium hover:bg-gray-50"
          >
            Back
          </Link>
        </div>

        {/* Balance */}
        <section className="mt-10 rounded-3xl bg-green-600 p-8 text-white shadow-xl">
          <p className="text-sm text-green-100">
            GHANA CEDIS BALANCE
          </p>

          <h2 className="mt-3 text-5xl font-bold">
            GH₵ 0.00
          </h2>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <button className="rounded-xl bg-white px-6 py-3 font-semibold text-green-700 hover:bg-green-50">
              + Add Money
            </button>

            <button className="rounded-xl border border-white/40 px-6 py-3 font-semibold text-white hover:bg-green-700">
              Withdraw
            </button>
          </div>
        </section>

        {/* MoMo */}
        <section className="mt-8 rounded-2xl bg-white p-8 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-100 text-2xl">
              📱
            </div>

            <div>
              <h2 className="text-2xl font-bold">
                Mobile Money
              </h2>

              <p className="text-gray-600">
                Connect your MoMo number to EcoCollect.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <label
              htmlFor="momo-number"
              className="text-sm font-medium"
            >
              MoMo Phone Number
            </label>

            <input
              id="momo-number"
              type="tel"
              placeholder="024 XXX XXXX"
              className="mt-2 w-full rounded-xl border px-4 py-3 outline-none focus:border-green-500"
            />
          </div>

          <button className="mt-5 w-full rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700">
            Connect MoMo
          </button>
        </section>

        {/* Payment Methods */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold">
            Payment Methods
          </h2>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold">
                    Mobile Money
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Pay using your MoMo account
                  </p>
                </div>

                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">
                  Not connected
                </span>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold">
                    Crypto Wallet
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Pay using crypto
                  </p>
                </div>

                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">
                  Not connected
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Transactions */}
        <section className="mt-8 rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="text-xl font-bold">
            Recent Transactions
          </h2>

          <div className="mt-8 text-center text-gray-500">
            No transactions yet.
          </div>
        </section>
      </div>
    </main>
  );
}