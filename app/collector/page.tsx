export default function Collector() {
  return (
    <main className="min-h-screen bg-[#e9fbea] px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <a href="/" className="font-semibold text-green-700">← EcoCollect</a>
        <h1 className="mt-10 text-4xl font-extrabold">Become a Collector</h1>
        <p className="mt-3 text-gray-600">Join the EcoCollect collection network.</p>

        <div className="mt-8 rounded-3xl bg-[#f4fff5] p-8 shadow-lg">
          <input className="w-full rounded-xl border p-4" placeholder="Full name" />
          <input className="mt-4 w-full rounded-xl border p-4" placeholder="Phone number" type="tel" />
          <input className="mt-4 w-full rounded-xl border p-4" placeholder="Location" />
          <select className="mt-4 w-full rounded-xl border bg-white p-4">
            <option>Vehicle type</option>
            <option>Tricycle</option>
            <option>Pickup truck</option>
            <option>Truck</option>
            <option>Other</option>
          </select>
          <button className="mt-5 w-full rounded-xl bg-green-600 py-4 font-bold text-white">
            Register as Collector
          </button>
        </div>
      </div>
    </main>
  );
}
