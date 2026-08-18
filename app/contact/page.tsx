export default function Contact() {
  return (
    <main className="min-h-screen bg-[#e9fbea] px-8 py-20">
      <div className="mx-auto max-w-3xl">
        <a href="/" className="font-semibold text-green-700">← EcoCollect</a>
        <h1 className="mt-10 text-5xl font-extrabold">Contact EcoCollect</h1>

        <div className="mt-10 rounded-3xl bg-[#f4fff5] p-8">
          <input className="w-full rounded-xl border p-4" placeholder="Your name" />
          <input className="mt-4 w-full rounded-xl border p-4" placeholder="Email address" type="email" />
          <textarea className="mt-4 min-h-40 w-full rounded-xl border p-4" placeholder="Your message" />
          <button className="mt-5 rounded-xl bg-green-600 px-7 py-3 font-bold text-white">
            Send Message
          </button>
        </div>
      </div>
    </main>
  );
}
