export default function Login() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#e9fbea] px-6">
      <div className="w-full max-w-md rounded-3xl bg-[#f4fff5] p-8 shadow-lg">
        <a href="/" className="font-semibold text-green-700">← EcoCollect</a>
        <h1 className="mt-8 text-4xl font-extrabold">Welcome back</h1>
        <input className="mt-8 w-full rounded-xl border p-4" placeholder="Email" type="email" />
        <input className="mt-4 w-full rounded-xl border p-4" placeholder="Password" type="password" />
        <button className="mt-5 w-full rounded-xl bg-green-600 py-4 font-bold text-white">
          Login
        </button>
      </div>
    </main>
  );
}
