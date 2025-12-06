"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function ForgotPasswordPage() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleReset = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const email = form.get("email") as string;

    const supabase = createClient();
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${location.origin}/reset-password`,
    });

    setLoading(false);

    if (error) return alert(error.message);
    setSent(true);
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-6 relative bg-gradient-to-br from-[#dfe8ff] via-[#eef3ff] to-white overflow-hidden">
      {/* Background Noise */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-25 pointer-events-none" />

      {/* Glass Card */}
      <div className="relative w-full max-w-md px-8 py-10 bg-white/60 backdrop-blur-2xl border border-white/40 rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
        <h1 className="text-3xl font-semibold text-center text-neutral-900">
          Reset Password
        </h1>

        <p className="text-neutral-600 text-center mt-2">
          Enter your email and we’ll send you a reset link
        </p>

        {sent ? (
          <div className="mt-10 bg-green-100 text-green-700 p-4 rounded-xl text-center font-medium">
            Reset link sent! Check your inbox.
          </div>
        ) : (
          <form onSubmit={handleReset} className="mt-10 space-y-6">
            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 h-5 w-5" />
              <input
                type="email"
                name="email"
                className="w-full bg-white/40 border border-white/50 text-neutral-800 placeholder-neutral-500 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Email"
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition active:scale-[0.98]"
            >
              {loading ? "Sending…" : "Send Reset Link"}
            </button>

            <p className="text-center text-neutral-600 mt-3">
              Remember your password?{" "}
              <a href="/login" className="text-blue-600 font-medium hover:underline">
                Back to login
              </a>
            </p>
          </form>
        )}
      </div>
    </main>
  );
}
