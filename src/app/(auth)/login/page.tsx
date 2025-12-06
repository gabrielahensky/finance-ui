"use client";

import { useState } from "react";
import { Mail, KeyRound } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const email = form.get("email") as string;
    const password = form.get("password") as string;

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) return alert(error.message);
    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-6 relative bg-gradient-to-br from-[#dfe8ff] via-[#eef3ff] to-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-25 pointer-events-none" />

      <div className="relative w-full max-w-md px-8 py-10 bg-white/60 backdrop-blur-2xl border border-white/40 rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
        <h1 className="text-3xl font-semibold text-center text-neutral-900">
          Welcome Back
        </h1>
        <p className="text-neutral-600 text-center mt-2">
          Login to continue managing your finances
        </p>

        <form onSubmit={handleLogin} className="mt-10 space-y-6">
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 h-5 w-5" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full bg-white/40 border border-white/50 text-neutral-800 placeholder-neutral-500 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <div className="relative">
            <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 h-5 w-5" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="w-full bg-white/40 border border-white/50 text-neutral-800 placeholder-neutral-500 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* Forgot password link */}
          <div className="text-right -mt-2">
            <a
              href="/forgot-password"
              className="text-blue-600 text-sm hover:underline font-medium"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition active:scale-[0.98]"
          >
            {loading ? "Signing in…" : "Login"}
          </button>

          <p className="text-center text-neutral-600 mt-3">
            Don’t have an account?{" "}
            <a href="/register" className="text-blue-600 font-medium hover:underline">
              Create one
            </a>
          </p>
        </form>
      </div>
    </main>
  );
}
