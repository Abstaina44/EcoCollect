export default function GetStarted() {
  return (
    <main className="min-h-screen bg-[#e9fbea] px-8 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <a href="/" className="font-semibold text-green-700">← EcoCollect</a>
        <h1 className="mt-10 text-5xl font-extrabold">Get Started</h1>
        <p className="mt-5 text-lg text-gray-600">Choose how you want to use EcoCollect.</p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <a href="/request" className="rounded-3xl bg-green-600 p-10 text-left text-white shadow-lg">
            <div className="text-4xl">🏠</div>
            <h2 className="mt-5 text-2xl font-bold">I need waste collection</h2>
            <p className="mt-3 text-green-50">Request a collector for your home or business.</p>
          </a>

          <a href="/collector" className="rounded-3xl bg-[#f4fff5] p-10 text-left shadow-lg">
            <div className="text-4xl">🚛</div>
            <h2 className="mt-5 text-2xl font-bold">I am a collector</h2>
            <p className="mt-3 text-gray-600">Join EcoCollect and receive collection requests.</p>
          </a>
        </div>
      </div>
    </main>
  );
}
