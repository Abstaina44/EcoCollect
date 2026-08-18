import Link from "next/link";
export default function WalletPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-green-600">
              ECOCOLLECT WALLET
            </p>

            <h1 className="mt-2 text-4xl font-bold text-gray-900">
              Your Crypto Wallet
            </h1>

            <p className="mt-2 text-gray-600">
              Manage your crypto payments and EcoCollect funds.
            </p>
          </div>

          <Link
            href="/"
            className="rounded-lg border bg-white px-4 py-2 font-medium"
          >
            Back
          </Link>
        </div>

        {/* Wallet Card */}
        <section className="mt-10 rounded-3xl bg-gray-950 p-8 text-white shadow-xl">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-400">
                TOTAL WALLET BALANCE
              </p>

              <h2 className="mt-3 text-4xl font-bold">
                $0.00
              </h2>

              <p className="mt-2 text-sm text-gray-400">
                No wallet connected
              </p>
            </div>

            <div className="rounded-full bg-green-500/20 px-4 py-2 text-sm text-green-400">
              Crypto
            </div>
          </div>

          <button className="mt-8 w-full rounded-xl bg-green-500 px-6 py-3 font-semibold text-white hover:bg-green-600">
            Connect Wallet
          </button>
        </section>

        {/* Wallet Actions */}
        <section className="mt-8 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="text-3xl">💸</div>

            <h3 className="mt-4 text-xl font-bold">
              Send
            </h3>

            <p className="mt-2 text-sm text-gray-600">
              Send crypto to another wallet.
            </p>

            <button className="mt-5 w-full rounded-lg border px-4 py-2 font-medium">
              Send Crypto
            </button>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="text-3xl">📥</div>

            <h3 className="mt-4 text-xl font-bold">
              Receive
            </h3>

            <p className="mt-2 text-sm text-gray-600">
              Receive crypto into your EcoCollect wallet.
            </p>

            <button className="mt-5 w-full rounded-lg border px-4 py-2 font-medium">
              Receive Crypto
            </button>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="text-3xl">🔄</div>

            <h3 className="mt-4 text-xl font-bold">
              Transactions
            </h3>

            <p className="mt-2 text-sm text-gray-600">
              View your blockchain transaction history.
            </p>

            <button className="mt-5 w-full rounded-lg border px-4 py-2 font-medium">
              View History
            </button>
          </div>
        </section>

        {/* Wallet Address */}
        <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">
            Wallet Address
          </h2>

          <div className="mt-4 rounded-xl bg-gray-100 p-4 font-mono text-sm text-gray-500">
            No wallet connected
          </div>
        </section>
      </div>
    </main>
  );
}