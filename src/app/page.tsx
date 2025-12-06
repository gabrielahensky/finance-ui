export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#dfe8ff] via-[#eef3ff] to-white relative overflow-hidden">
      {/* background noise */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 pointer-events-none" />

      {/* NAVBAR */}
      <header className="w-full py-5 px-6 flex justify-between items-center relative z-10">
        <div className="text-2xl font-semibold tracking-tight text-neutral-900">
          Finance<span className="text-blue-600">UI</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="/login"
            className="px-5 py-2 rounded-xl bg-white/60 backdrop-blur-xl border border-white/40 text-neutral-800 hover:bg-white/80 transition"
          >
            Login
          </a>
          <a
            href="/register"
            className="px-5 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition shadow-lg"
          >
            Register
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="max-w-5xl mx-auto text-center pt-32 pb-24 relative z-10 px-6">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-neutral-900">
          Take Control of Your{" "}
          <span className="text-blue-600">Financial Life</span>
        </h1>

        <p className="mt-6 text-lg text-neutral-600 max-w-2xl mx-auto">
          Track your income, expenses, and budget with a clean and modern dashboard.
          Designed to help you make smarter financial decisions every day.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="/register"
            className="px-7 py-3 rounded-xl bg-blue-600 text-white text-lg font-medium hover:bg-blue-700 transition shadow-lg"
          >
            Get Started
          </a>
          <a
            href="/login"
            className="px-7 py-3 rounded-xl bg-white/60 backdrop-blur-xl border border-white/40 text-neutral-800 text-lg font-medium hover:bg-white/80 transition"
          >
            Login
          </a>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6 pb-32 relative z-10">
        <FeatureCard
          title="Track Income"
          desc="Monitor monthly earnings with a clean visual breakdown."
        />
        <FeatureCard
          title="Manage Expenses"
          desc="Categorize and understand where your money goes."
        />
        <FeatureCard
          title="Visual Analytics"
          desc="Get charts and insights for smarter decisions."
        />
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-neutral-500 text-sm relative z-10">
        © {new Date().getFullYear()} FinanceUI — All rights reserved.
      </footer>
    </main>
  );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-8 rounded-3xl bg-white/50 backdrop-blur-2xl border border-white/30 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition">
      <h3 className="text-xl font-semibold text-neutral-900 mb-3">{title}</h3>
      <p className="text-neutral-600">{desc}</p>
    </div>
  );
}
