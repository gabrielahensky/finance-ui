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
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-purple-600/20 to-indigo-700/30 blur-3xl opacity-30" />

      {/* Floating light orbs */}
      <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-[120px] -top-20 -left-20" />
      <div className="absolute w-72 h-72 bg-purple-500/20 rounded-full blur-[140px] bottom-0 right-0" />

      {/* Glass Container */}
      <div className="relative w-full max-w-md px-8 py-10 rounded-3xl backdrop-blur-2xl bg-white/10 border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        <h1 className="text-white text-3xl font-semibold text-center mb-8">
          Welcome Back
        </h1>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 h-5 w-5" />
            <input
              type="email"
              name="email"
              className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-white/40"
              placeholder="Email"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 h-5 w-5" />
            <input
              type="password"
              name="password"
              className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-white/40"
              placeholder="Password"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-white/20 border border-white/30 text-white font-medium backdrop-blur-xl hover:bg-white/30 transition-all active:scale-[0.98]"
          >
            {loading ? "Signing in..." : "Login"}
          </button>
          <p className="text-center text-white/50 mt-4">
            Don’t have an account?{" "}
            <a href="/register" className="text-white/80 underline">
              Create one
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
