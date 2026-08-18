export default function HowItWorks() {
  return (
    <main className="min-h-screen bg-[#e9fbea] px-8 py-20">
      <div className="mx-auto max-w-5xl">
        <a href="/" className="font-semibold text-green-700">← EcoCollect</a>
        <h1 className="mt-10 text-5xl font-extrabold">How EcoCollect Works</h1>
        <p className="mt-5 text-lg text-gray-600">Request, match, collect.</p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-[#f4fff5] p-8">
            <span className="text-4xl">1️⃣</span>
            <h2 className="mt-5 text-2xl font-bold">Request</h2>
            <p className="mt-3 text-gray-600">Tell us what waste needs to be collected.</p>
          </div>
          <div className="rounded-3xl bg-[#f4fff5] p-8">
            <span className="text-4xl">2️⃣</span>
            <h2 className="mt-5 text-2xl font-bold">Match</h2>
            <p className="mt-3 text-gray-600">We connect you with an available collector.</p>
          </div>
          <div className="rounded-3xl bg-[#f4fff5] p-8">
            <span className="text-4xl">3️⃣</span>
            <h2 className="mt-5 text-2xl font-bold">Collect</h2>
            <p className="mt-3 text-gray-600">Your waste is collected responsibly.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
